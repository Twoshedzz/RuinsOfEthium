#!/usr/bin/env node
import { cp, mkdir, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publishDir = path.join(root, 'publish');
const chapterSources = path.join(publishDir, 'chapters');
const illustrationSources = path.join(publishDir, 'illustrations');
const chapterTargets = path.join(root, 'src/content/chapters');
const illustrationTargets = path.join(root, 'public/illustrations');

const imageExtensions = new Set(['.png', '.jpg', '.jpeg', '.svg', '.webp', '.gif']);

async function ensureDir(dir) {
  await mkdir(dir, { recursive: true });
}

async function syncChapters() {
  await ensureDir(chapterSources);
  await ensureDir(chapterTargets);

  const entries = await readdir(chapterSources, { withFileTypes: true });
  let copied = 0;

  for (const entry of entries) {
    if (!entry.isFile() || !entry.name.endsWith('.md') || entry.name.startsWith('_')) {
      continue;
    }

    const from = path.join(chapterSources, entry.name);
    const to = path.join(chapterTargets, entry.name);
    await cp(from, to);
    console.log(`chapter  ${entry.name}`);
    copied += 1;
  }

  return copied;
}

async function syncIllustrations() {
  await ensureDir(illustrationSources);
  await ensureDir(illustrationTargets);

  const entries = await readdir(illustrationSources, { withFileTypes: true });
  let copied = 0;

  for (const entry of entries) {
    if (!entry.isFile() || entry.name.startsWith('.')) {
      continue;
    }

    const ext = path.extname(entry.name).toLowerCase();
    if (!imageExtensions.has(ext)) {
      continue;
    }

    const from = path.join(illustrationSources, entry.name);
    const to = path.join(illustrationTargets, entry.name);
    await cp(from, to);
    console.log(`image    ${entry.name}`);
    copied += 1;
  }

  return copied;
}

async function main() {
  try {
    await stat(publishDir);
  } catch {
    console.error('Missing publish/ folder.');
    process.exit(1);
  }

  console.log('Syncing publish/ → site…\n');

  const chapterCount = await syncChapters();
  const imageCount = await syncIllustrations();

  console.log(`\nDone. ${chapterCount} chapter(s), ${imageCount} illustration(s).`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
