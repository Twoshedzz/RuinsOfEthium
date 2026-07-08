#!/usr/bin/env node
import { createHash } from 'node:crypto';
import { mkdir, readFile, readdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chunkText } from './lib/chunk-text.mjs';
import { markdownToNarration } from './lib/narration-text.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const chapterSources = path.join(root, 'publish/chapters');
const audioRoot = path.join(root, 'public/audio/chapters');
const manifestPath = path.join(root, 'public/audio/manifest.json');

const MODEL_LIMITS = {
  'tts-1': 4096,
  'tts-1-hd': 4096,
  'gpt-4o-mini-tts': 3000,
};

const DEFAULT_MODEL = 'gpt-4o-mini-tts';
const DEFAULT_VOICE = 'onyx';
const DEFAULT_INSTRUCTIONS =
  'Speak as an older British man with a deep, resonant voice — wise, measured, and slightly gravelly, ' +
  'like a veteran storyteller recounting an epic fantasy tale. Warm authority, unhurried pacing, ' +
  'gentle gravity at dramatic moments.';

async function loadEnvFile() {
  try {
    const envPath = path.join(root, '.env');
    const content = await readFile(envPath, 'utf8');

    for (const line of content.split('\n')) {
      const match = line.match(/^\s*([^#=]+)=(.*)$/);
      if (!match) continue;

      const key = match[1].trim();
      const value = match[2].trim().replace(/^['"]|['"]$/g, '');
      if (!process.env[key]) {
        process.env[key] = value;
      }
    }
  } catch {
    // Optional .env file.
  }
}

function parseArgs(argv) {
  const options = {
    slug: undefined,
    force: false,
    dryRun: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === '--force') {
      options.force = true;
    } else if (arg === '--dry-run') {
      options.dryRun = true;
    } else if (arg === '--slug') {
      options.slug = argv[index + 1];
      index += 1;
    }
  }

  return options;
}

async function readManifest() {
  try {
    const raw = await readFile(manifestPath, 'utf8');
    return JSON.parse(raw);
  } catch {
    return {
      version: 1,
      model: process.env.TTS_MODEL || DEFAULT_MODEL,
      voice: process.env.TTS_VOICE || DEFAULT_VOICE,
      chapters: {},
    };
  }
}

async function writeManifest(manifest) {
  await mkdir(path.dirname(manifestPath), { recursive: true });
  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
}

function hashText(text) {
  return createHash('sha256').update(text).digest('hex').slice(0, 16);
}

async function listChapterFiles(slugFilter) {
  const entries = await readdir(chapterSources, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (!entry.isFile() || !entry.name.endsWith('.md') || entry.name.startsWith('_')) {
      continue;
    }

    const slug = entry.name.replace(/\.md$/, '');
    if (slugFilter && slug !== slugFilter) {
      continue;
    }

    files.push({
      slug,
      filePath: path.join(chapterSources, entry.name),
    });
  }

  return files.sort((a, b) => a.slug.localeCompare(b.slug));
}

async function synthesizeChunk({ apiKey, model, voice, instructions, text }) {
  const body = {
    model,
    voice,
    input: text,
    response_format: 'mp3',
  };

  if (model === 'gpt-4o-mini-tts' && instructions) {
    body.instructions = instructions;
  }

  const response = await fetch('https://api.openai.com/v1/audio/speech', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`OpenAI TTS failed (${response.status}): ${detail}`);
  }

  return Buffer.from(await response.arrayBuffer());
}

async function generateChapterAudio({
  apiKey,
  model,
  voice,
  instructions,
  slug,
  filePath,
  manifest,
  force,
  dryRun,
}) {
  const markdown = await readFile(filePath, 'utf8');
  const narration = markdownToNarration(markdown);
  const contentHash = hashText(narration);
  const existing = manifest.chapters[slug];

  if (!force && existing?.contentHash === contentHash) {
    console.log(`skip     ${slug} (unchanged)`);
    return false;
  }

  const maxChars = MODEL_LIMITS[model] ?? 4000;
  const chunks = chunkText(narration, maxChars);
  const chapterDir = path.join(audioRoot, slug);
  const publicParts = [];

  console.log(`chapter  ${slug} — ${chunks.length} part(s), ${narration.length} chars`);

  if (dryRun) {
    for (const [index, chunk] of chunks.entries()) {
      console.log(`  part ${String(index).padStart(2, '0')}: ${chunk.length} chars`);
      console.log(`    ${chunk.slice(0, 120).replace(/\s+/g, ' ')}…`);
    }
    return true;
  }

  await mkdir(chapterDir, { recursive: true });

  for (const [index, chunk] of chunks.entries()) {
    const partName = `part-${String(index).padStart(2, '0')}.mp3`;
    const partPath = path.join(chapterDir, partName);
    console.log(`  synth   ${partName} (${chunk.length} chars)`);

    const audio = await synthesizeChunk({
      apiKey,
      model,
      voice,
      instructions,
      text: chunk,
    });

    await writeFile(partPath, audio);
    publicParts.push(`/audio/chapters/${slug}/${partName}`);
  }

  manifest.chapters[slug] = {
    parts: publicParts,
    contentHash,
    generatedAt: new Date().toISOString(),
  };

  return true;
}

async function main() {
  await loadEnvFile();

  const options = parseArgs(process.argv.slice(2));
  const apiKey = process.env.OPENAI_API_KEY;
  const model = process.env.TTS_MODEL || DEFAULT_MODEL;
  const voice = process.env.TTS_VOICE || DEFAULT_VOICE;
  const instructions = process.env.TTS_INSTRUCTIONS || DEFAULT_INSTRUCTIONS;

  if (!options.dryRun && !apiKey) {
    console.error('Missing OPENAI_API_KEY. Add it to .env or your environment.');
    console.error('Run with --dry-run to preview chunking without calling the API.');
    process.exit(1);
  }

  try {
    await stat(chapterSources);
  } catch {
    console.error('Missing publish/chapters/ folder.');
    process.exit(1);
  }

  const manifest = await readManifest();
  manifest.model = model;
  manifest.voice = voice;

  const chapters = await listChapterFiles(options.slug);
  if (chapters.length === 0) {
    console.error(options.slug ? `No chapter found for slug: ${options.slug}` : 'No chapters found.');
    process.exit(1);
  }

  console.log(`OpenAI TTS — model: ${model}, voice: ${voice}\n`);

  let updated = 0;

  for (const chapter of chapters) {
    const changed = await generateChapterAudio({
      apiKey,
      model,
      voice,
      instructions,
      slug: chapter.slug,
      filePath: chapter.filePath,
      manifest,
      force: options.force,
      dryRun: options.dryRun,
    });

    if (changed) {
      updated += 1;
    }
  }

  if (!options.dryRun) {
    await writeManifest(manifest);
    console.log(`\nDone. Updated ${updated} chapter(s). Manifest: public/audio/manifest.json`);
  } else {
    console.log(`\nDry run complete for ${chapters.length} chapter(s).`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
