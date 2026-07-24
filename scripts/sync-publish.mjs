#!/usr/bin/env node
import { cp, mkdir, readFile, readdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publishDir = path.join(root, 'publish');
const chapterSources = path.join(publishDir, 'chapters');
const tableSources = path.join(publishDir, 'table');
const tableAssetSources = path.join(publishDir, 'table-assets');
const worldMapSources = path.join(publishDir, 'source', 'world', 'maps');
const moduleSources = path.join(publishDir, 'source', 'world', 'modules');
const placeSources = path.join(publishDir, 'source', 'world', 'notes');
const characterSources = path.join(publishDir, 'source', 'characters');
const sessionSources = path.join(publishDir, 'source', 'sessions');
const cyoaSources = path.join(publishDir, 'source', 'cyoa');
const tableMapsManifest = path.join(tableAssetSources, 'table-maps.manifest');
const illustrationSources = path.join(publishDir, 'illustrations');
const chapterTargets = path.join(root, 'src/content/chapters');
const tableTargets = path.join(root, 'src/content/tableNotes');
const libraryModuleTargets = path.join(root, 'src/content/libraryModules');
const libraryPlaceTargets = path.join(root, 'src/content/libraryPlaces');
const libraryCharacterTargets = path.join(root, 'src/content/libraryCharacters');
const librarySessionTargets = path.join(root, 'src/content/librarySessions');
const cyoaTargets = path.join(root, 'src/content/cyoaPages');
/** DM assets on the site live under /dm/ (maps + pdfs). */
const dmAssetTargets = path.join(root, 'public/dm');
const illustrationTargets = path.join(root, 'public/illustrations');

const imageExtensions = new Set(['.png', '.jpg', '.jpeg', '.svg', '.webp', '.gif']);
const tableAssetExtensions = new Set([...imageExtensions, '.pdf']);
const imageExtRe = /\.(?:png|jpe?g|gif|webp|svg)$/i;
const pdfExtRe = /\.pdf$/i;

/** Play-order hints when source files lack `order`. */
const MODULE_ORDER = {
  'road-to-fallcrest': 0,
  'blue-moon-fallcrest': 1,
  'journey-to-ethium': 2,
  'old-manor': 3,
  'ethium-pool': 4,
  'kruthik-lair': 5,
  'duergar-outpost': 6,
};

const CHARACTER_ORDER = {
  pcs: 1,
  'party-backgrounds': 2,
  mara: 10,
  tobbs: 11,
  nimozaran: 12,
  murgaddin: 13,
  'garnel-stoneblender': 14,
  'mala-stoneblender': 15,
  'maelis-varn': 16,
};

const CYOA_ORDER = {
  readme: 1,
  format: 2,
  flow: 3,
  'book-01-the-road-to-ethium': 4,
  encounters: 5,
};

async function ensureDir(dir) {
  await mkdir(dir, { recursive: true });
}

function titleFromBody(body) {
  const match = body.match(/^#\s+(.+)$/m);
  if (!match) return 'Untitled';
  return match[1].replace(/^Module —\s*/i, '').trim();
}

function summaryFromBody(body) {
  const withoutHeading = body.replace(/^#\s+.+$/m, '').trim();
  const paragraph = withoutHeading.split(/\n\n+/)[0] ?? '';
  const plain = paragraph
    .replace(/\*\*/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
  if (!plain) return undefined;
  return plain.length > 160 ? `${plain.slice(0, 157)}…` : plain;
}

function parseSimpleYaml(yaml) {
  const data = {};
  for (const line of yaml.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const colon = trimmed.indexOf(':');
    if (colon === -1) continue;
    const key = trimmed.slice(0, colon).trim();
    let value = trimmed.slice(colon + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (value === 'true') data[key] = true;
    else if (value === 'false') data[key] = false;
    else if (/^-?\d+(\.\d+)?$/.test(value)) data[key] = Number(value);
    else data[key] = value;
  }
  return data;
}

function splitFrontmatter(raw) {
  if (!raw.startsWith('---')) {
    return { data: {}, body: raw };
  }

  const end = raw.indexOf('\n---', 3);
  if (end === -1) {
    // Broken opener (e.g. `---` without closing fence) — treat as body.
    return { data: {}, body: raw.replace(/^---\r?\n?/, '') };
  }

  const yaml = raw.slice(4, end);
  const body = raw.slice(end + 4).replace(/^\r?\n/, '');
  // Reject non-YAML “frontmatter” that is just prose after ---
  if (!/^[a-zA-Z_][\w-]*\s*:/m.test(yaml)) {
    return { data: {}, body: raw.replace(/^---\r?\n?/, '').replace(/^\r?\n?---\r?\n?/, '') };
  }

  return { data: parseSimpleYaml(yaml), body };
}

function formatFrontmatter(data) {
  const lines = ['---'];
  for (const [key, value] of Object.entries(data)) {
    if (value === undefined) continue;
    if (typeof value === 'string') {
      const escaped = value.includes('"') || value.includes(':') || value.includes('\n');
      lines.push(escaped ? `${key}: ${JSON.stringify(value)}` : `${key}: "${value}"`);
    } else {
      lines.push(`${key}: ${value}`);
    }
  }
  lines.push('---', '');
  return lines.join('\n');
}

function mergeFrontmatter(existing, defaults) {
  const merged = { ...defaults };
  for (const [key, value] of Object.entries(existing)) {
    if (value !== undefined && value !== null && value !== '') {
      merged[key] = value;
    }
  }
  return merged;
}

function fileBasename(href) {
  const bare = href.split('#')[0].split('?')[0].replace(/\/+$/, '');
  return path.posix.basename(bare) || bare;
}

function looksLikePathLabel(text) {
  return /[/\\]|\.\.|publish\/|source\/|table-assets\/|^\/(?:table|library|dm)\//.test(text);
}

function cleanLinkLabel(labelBracket, href) {
  const isImage = labelBracket.startsWith('!');
  const inner = labelBracket.replace(/^!?\[/, '').replace(/\]$/, '');
  const file = fileBasename(href);
  if (!inner || looksLikePathLabel(inner) || inner === href) {
    return isImage ? `![${file}]` : `[${file}]`;
  }
  return labelBracket;
}

/** Map a path-ish string (repo path or /dm/ URL) to a site href when possible. */
function resolvePathishToSiteHref(pathish) {
  const raw = pathish.trim().replace(/^<|>$/g, '');
  if (!raw) return null;

  const assetHref = rewriteAssetHref(raw);
  if (assetHref) return assetHref;

  if (raw.startsWith('/dm/')) {
    return raw.split(/[\s|]/)[0];
  }

  const moduleMatch = raw.match(/(?:^|\/)(?:publish\/source\/)?world\/modules\/([^/]+)\.md$/i);
  if (moduleMatch) return `/dm/modules/${moduleMatch[1]}/`;

  const placeMatch = raw.match(/(?:^|\/)(?:publish\/source\/)?world\/notes\/([^/]+)\.md$/i);
  if (placeMatch) return `/dm/world/places/${placeMatch[1]}/`;

  const charMatch = raw.match(/(?:^|\/)(?:publish\/source\/)?characters\/([^/]+)\.md$/i);
  if (charMatch) return `/dm/world/characters/${charMatch[1]}/`;

  const planMatch = raw.match(/(?:^|\/)(?:publish\/)?table\/([^/]+)\.md$/i);
  if (planMatch && planMatch[1].toLowerCase() !== 'readme') {
    return `/dm/plans/${planMatch[1]}/`;
  }

  const sessionMatch = raw.match(/(?:^|\/)(?:publish\/source\/)?sessions\/(session-\d+)\//i);
  if (sessionMatch) return `/dm/notes/${sessionMatch[1]}/`;

  return null;
}

/**
 * Turn bare `/dm/…` paths and path-like `backticks` into `[basename](href)`
 * (or basename-only code for unlinkable repo paths / map URL columns).
 * Skips existing md links. Image paths stay code/basename so they do not
 * become a second thumb beside an already-rewritten Canonical column.
 */
function rewriteBarePathRefs(body) {
  const protectedLinks = [];
  let next = body.replace(/!?\[([^\]]*)\]\(([^)]+)\)/g, (match) => {
    const i = protectedLinks.length;
    protectedLinks.push(match);
    return `\0LINK${i}\0`;
  });

  next = next.replace(/`([^`]+)`/g, (match, inner) => {
    if (!looksLikePathLabel(inner)) return match;
    const href = resolvePathishToSiteHref(inner);
    if (href) {
      // Map paths: basename only (Canonical column already has the thumb/link)
      if (imageExtRe.test(href.split('?')[0]) || /\/dm\/maps\//i.test(href)) {
        return `\`${fileBasename(href)}\``;
      }
      return `[${fileBasename(href)}](${href})`;
    }
    return `\`${fileBasename(inner)}\``;
  });

  // Bare /dm/… tokens (tables often omit backticks)
  next = next.replace(
    /(^|[^\](\w])(\/dm\/(?:maps|pdfs|modules|plans|notes|world)\/[^\s|`"'<>\]]+)/gm,
    (match, prefix, hrefRaw) => {
      const href = hrefRaw.replace(/[.,;:!?]+$/, '');
      const trailing = hrefRaw.slice(href.length);
      if (imageExtRe.test(href.split('?')[0]) || /\/dm\/maps\//i.test(href)) {
        return `${prefix}\`${fileBasename(href)}\`${trailing}`;
      }
      return `${prefix}[${fileBasename(href)}](${href})${trailing}`;
    },
  );

  // Bare publish/… or table-assets/… path tokens
  next = next.replace(
    /(^|[^\](`\w/])((?:publish\/|table-assets\/)[^\s|`"'<>\]]+)/gm,
    (match, prefix, pathish) => {
      const cleaned = pathish.replace(/[.,;:!?]+$/, '');
      const trailing = pathish.slice(cleaned.length);
      const href = resolvePathishToSiteHref(cleaned);
      if (href) {
        if (imageExtRe.test(href.split('?')[0])) {
          return `${prefix}\`${fileBasename(href)}\`${trailing}`;
        }
        return `${prefix}[${fileBasename(href)}](${href})${trailing}`;
      }
      return `${prefix}\`${fileBasename(cleaned)}\`${trailing}`;
    },
  );

  return next.replace(/\0LINK(\d+)\0/g, (_, i) => protectedLinks[Number(i)]);
}

function resolveLibraryMdHref(fromDir, href) {
  const bare = href.split('#')[0].split('?')[0];
  if (!bare.endsWith('.md')) return null;

  const resolved = path.posix.normalize(path.posix.join(fromDir, bare));

  if (resolved.startsWith('world/modules/')) {
    const slug = path.posix.basename(resolved, '.md');
    if (slug.toLowerCase() === 'readme') return null;
    return `/dm/modules/${slug}/`;
  }
  if (resolved.startsWith('world/notes/')) {
    const slug = path.posix.basename(resolved, '.md');
    if (slug.toLowerCase() === 'readme') return null;
    return `/dm/world/places/${slug}/`;
  }
  if (resolved.startsWith('characters/')) {
    const slug = path.posix.basename(resolved, '.md');
    if (slug.toLowerCase() === 'readme') return null;
    return `/dm/world/characters/${slug}/`;
  }
  if (resolved.startsWith('sessions/')) {
    const parts = resolved.split('/');
    if (parts[1]?.startsWith('session-')) {
      return `/dm/notes/${parts[1]}/`;
    }
  }
  // Live session plans in publish/table/
  if (resolved === 'table' || resolved.startsWith('table/')) {
    const slug = path.posix.basename(resolved, '.md');
    if (slug && slug !== 'table' && slug.toLowerCase() !== 'readme') {
      return `/dm/plans/${slug}/`;
    }
  }
  // Relative jumps like ../../../table/05-….md from sessions/modules
  const tableTail = resolved.match(/(?:^|\/)table\/([^/]+)\.md$/i);
  if (tableTail) {
    return `/dm/plans/${tableTail[1]}/`;
  }

  if (resolved.startsWith('cyoa/') || fromDir === 'cyoa' || fromDir.startsWith('cyoa/')) {
    const slug = path.posix.basename(resolved, '.md').toLowerCase();
    if (slug === 'readme') return '/cyoa/';
    return `/cyoa/${slug}/`;
  }

  return null;
}

function rewriteAssetHref(href) {
  const bare = href.split('#')[0].split('?')[0];
  const hash = href.includes('#') ? `#${href.split('#').slice(1).join('#')}` : '';

  const pdfMatch = bare.match(/(?:table-assets\/pdfs\/|\/(?:table|dm)\/pdfs\/)([^/]+)$/i);
  if (pdfMatch || (pdfExtRe.test(bare) && /(?:^|\/)pdfs\//i.test(bare))) {
    const name = pdfMatch ? pdfMatch[1] : path.posix.basename(bare);
    return `/dm/pdfs/${name}${hash}`;
  }

  // Relative world maps → /dm/maps/
  const mapMatch = bare.match(/(?:^|\/)(?:maps|table\/maps|dm\/maps)\/([^/]+\.(?:png|jpe?g|gif|webp|svg))$/i);
  if (mapMatch) {
    return `/dm/maps/${mapMatch[1]}${hash}`;
  }

  const illusMatch = bare.match(/(?:^|\/)illustrations\/(.+)$/i);
  if (illusMatch) {
    return `/illustrations/${illusMatch[1]}${hash}`;
  }

  return null;
}

function rewriteSitePathAliases(body) {
  return body
    .replace(/\/table\/pdfs\//g, '/dm/pdfs/')
    .replace(/\/table\/maps\//g, '/dm/maps/')
    // Live plan URLs: /table/05-foo/ → /dm/plans/05-foo/ (not maps|pdfs)
    .replace(/\/table\/(?!(?:maps|pdfs)\/)([^/\s)`"']+)/g, '/dm/plans/$1')
    .replace(/\/library\/modules\//g, '/dm/modules/')
    .replace(/\/library\/places\//g, '/dm/world/places/')
    .replace(/\/library\/characters\//g, '/dm/world/characters/')
    .replace(/\/library\/sessions\//g, '/dm/notes/')
    .replace(/\/library\//g, '/dm/')
    // Drop redundant “→ /dm/…” annotations after rewrite
    .replace(/→\s*`?\/dm\/(?:pdfs|maps|plans)\/[^`\s]+`?/g, '');
}

function rewriteLibraryLinks(body, fromDir) {
  let next = rewriteSitePathAliases(body);
  // Bare /dm/ and path-like backticks → real links first, then label/image cleanup
  next = rewriteBarePathRefs(next);

  next = next.replace(/(!?\[[^\]]*\])\(([^)]+)\)/g, (match, label, href) => {
    if (!href || href.startsWith('#') || href.startsWith('mailto:')) {
      return match;
    }

    if (href.startsWith('http')) {
      return match;
    }

    const hash = href.includes('#') ? `#${href.split('#').slice(1).join('#')}` : '';

    if (href.startsWith('/')) {
      // Already-site path: still clean labels for /dm/ content
      if (imageExtRe.test(href.split('?')[0]) || pdfExtRe.test(href.split('?')[0])) {
        const file = fileBasename(href);
        if (imageExtRe.test(href) && !label.startsWith('!')) {
          return `![${file}](${href})`;
        }
        return `${cleanLinkLabel(label, href)}(${href})`;
      }
      return `${cleanLinkLabel(label, href)}(${href})`;
    }

    const assetHref = rewriteAssetHref(href);
    if (assetHref) {
      const file = fileBasename(assetHref);
      if (imageExtRe.test(assetHref) && !label.startsWith('!')) {
        return `![${file}](${assetHref})`;
      }
      return `${cleanLinkLabel(label, assetHref)}(${assetHref})`;
    }

    const libraryHref = resolveLibraryMdHref(fromDir, href);
    if (libraryHref) {
      const nice = cleanLinkLabel(label, libraryHref);
      return `${nice}(${libraryHref}${hash})`;
    }

    // Unresolved relative .md — still hide ugly paths in the label
    if (href.endsWith('.md') || looksLikePathLabel(label.replace(/^!?\[/, '').replace(/\]$/, ''))) {
      return `${cleanLinkLabel(label, href)}(${href})`;
    }

    return match;
  });

  return next;
}

async function writeLibraryMarkdown(targetPath, raw, defaults, fromDir) {
  const { data, body } = splitFrontmatter(raw);
  const title = data.title || titleFromBody(body) || defaults.title || 'Untitled';
  const summary = data.summary || summaryFromBody(body);
  const frontmatter = mergeFrontmatter(data, {
    ...defaults,
    title,
    summary,
    published: true,
  });

  const rewritten = rewriteLibraryLinks(body, fromDir);
  await ensureDir(path.dirname(targetPath));
  await writeFile(targetPath, `${formatFrontmatter(frontmatter)}${rewritten}`);
}

async function syncMarkdownCollection(sourceDir, targetDir, label) {
  await ensureDir(sourceDir);
  await ensureDir(targetDir);

  const entries = await readdir(sourceDir, { withFileTypes: true });
  let copied = 0;

  for (const entry of entries) {
    if (!entry.isFile() || !entry.name.endsWith('.md') || entry.name.startsWith('_')) {
      continue;
    }
    if (entry.name.toLowerCase() === 'readme.md') {
      continue;
    }

    const from = path.join(sourceDir, entry.name);
    const to = path.join(targetDir, entry.name);
    await cp(from, to);
    console.log(`${label.padEnd(8)} ${entry.name}`);
    copied += 1;
  }

  return copied;
}

async function syncLibraryFlatCollection(sourceDir, targetDir, label, fromDir, orderMap = {}) {
  await ensureDir(sourceDir);
  await ensureDir(targetDir);

  const entries = await readdir(sourceDir, { withFileTypes: true });
  let copied = 0;

  for (const entry of entries) {
    if (!entry.isFile() || !entry.name.endsWith('.md') || entry.name.startsWith('_')) {
      continue;
    }
    if (entry.name.toLowerCase() === 'readme.md') {
      continue;
    }

    const slug = entry.name.replace(/\.md$/i, '');
    const from = path.join(sourceDir, entry.name);
    const to = path.join(targetDir, entry.name);
    const raw = await readFile(from, 'utf8');
    await writeLibraryMarkdown(
      to,
      raw,
      {
        title: titleFromBody(raw),
        order: orderMap[slug],
      },
      fromDir,
    );
    console.log(`${label.padEnd(8)} ${entry.name}`);
    copied += 1;
  }

  return copied;
}

async function syncLibrarySessions() {
  await ensureDir(sessionSources);
  await ensureDir(librarySessionTargets);

  const entries = await readdir(sessionSources, { withFileTypes: true });
  let copied = 0;

  for (const entry of entries) {
    if (!entry.isDirectory() || !entry.name.startsWith('session-') || entry.name.startsWith('_')) {
      continue;
    }

    const whatHappened = path.join(sessionSources, entry.name, 'what-happened.md');
    try {
      await stat(whatHappened);
    } catch {
      continue;
    }

    const sessionMatch = entry.name.match(/^session-(\d+)$/i);
    const sessionNum = sessionMatch ? Number(sessionMatch[1]) : undefined;
    const raw = await readFile(whatHappened, 'utf8');
    const to = path.join(librarySessionTargets, `${entry.name}.md`);
    await writeLibraryMarkdown(
      to,
      raw,
      {
        title: titleFromBody(raw) || `Session ${sessionNum ?? entry.name}`,
        session: sessionNum,
        order: sessionNum,
      },
      `sessions/${entry.name}`,
    );
    console.log(`session  ${entry.name}/what-happened.md`);
    copied += 1;
  }

  return copied;
}

async function syncChapters() {
  return syncMarkdownCollection(chapterSources, chapterTargets, 'chapter');
}

async function syncTableNotes() {
  await ensureDir(tableSources);
  await ensureDir(tableTargets);

  const entries = await readdir(tableSources, { withFileTypes: true });
  let copied = 0;

  for (const entry of entries) {
    if (!entry.isFile() || !entry.name.endsWith('.md') || entry.name.startsWith('_')) {
      continue;
    }
    if (entry.name.toLowerCase() === 'readme.md') {
      continue;
    }

    const from = path.join(tableSources, entry.name);
    const to = path.join(tableTargets, entry.name);
    const raw = await readFile(from, 'utf8');
    const { data, body } = splitFrontmatter(raw);
    const rewritten = rewriteLibraryLinks(body, 'table');
    await ensureDir(path.dirname(to));
    await writeFile(to, `${formatFrontmatter(mergeFrontmatter(data, { published: true }))}${rewritten}`);
    console.log(`${'plan'.padEnd(8)} ${entry.name}`);
    copied += 1;
  }

  return copied;
}

async function syncLibraryModules() {
  return syncLibraryFlatCollection(
    moduleSources,
    libraryModuleTargets,
    'module',
    'world/modules',
    MODULE_ORDER,
  );
}

async function syncLibraryPlaces() {
  return syncLibraryFlatCollection(placeSources, libraryPlaceTargets, 'place', 'world/notes');
}

async function syncLibraryCharacters() {
  return syncLibraryFlatCollection(
    characterSources,
    libraryCharacterTargets,
    'char',
    'characters',
    CHARACTER_ORDER,
  );
}

async function syncCyoaPages() {
  await ensureDir(cyoaSources);
  await ensureDir(cyoaTargets);

  const entries = await readdir(cyoaSources, { withFileTypes: true });
  let copied = 0;

  for (const entry of entries) {
    if (!entry.isFile() || !entry.name.endsWith('.md') || entry.name.startsWith('_')) {
      continue;
    }

    const slug = entry.name.replace(/\.md$/i, '').toLowerCase();
    // Hub page is custom — still sync README as overview entry
    const from = path.join(cyoaSources, entry.name);
    const to = path.join(cyoaTargets, `${slug}.md`);
    const raw = await readFile(from, 'utf8');
    await writeLibraryMarkdown(
      to,
      raw,
      {
        title: titleFromBody(raw),
        order: CYOA_ORDER[slug],
      },
      'cyoa',
    );
    console.log(`${'cyoa'.padEnd(8)} ${entry.name}`);
    copied += 1;
  }

  return copied;
}

async function syncAssetTree(sourceDir, targetDir, allowedExtensions, label, relativePath = '') {
  await ensureDir(sourceDir);
  await ensureDir(targetDir);

  const entries = await readdir(sourceDir, { withFileTypes: true });
  let copied = 0;

  for (const entry of entries) {
    if (entry.name.startsWith('.')) {
      continue;
    }

    const from = path.join(sourceDir, entry.name);
    const rel = relativePath ? path.join(relativePath, entry.name) : entry.name;
    const to = path.join(targetDir, rel);

    if (entry.isDirectory()) {
      // Maps are synced from world/maps via table-maps.manifest — skip any leftover maps/ tree.
      if (!relativePath && entry.name === 'maps') {
        continue;
      }
      copied += await syncAssetTree(from, targetDir, allowedExtensions, label, rel);
      continue;
    }

    if (!entry.isFile()) {
      continue;
    }

    const ext = path.extname(entry.name).toLowerCase();
    if (!allowedExtensions.has(ext)) {
      continue;
    }

    await mkdir(path.dirname(to), { recursive: true });
    await cp(from, to);
    console.log(`${label.padEnd(8)} ${rel}`);
    copied += 1;
  }

  return copied;
}

async function syncIllustrations() {
  return syncAssetTree(illustrationSources, illustrationTargets, imageExtensions, 'image');
}

/** PDFs and other printable assets under table-assets/ (not maps/). */
async function syncTableAssetFiles() {
  return syncAssetTree(tableAssetSources, dmAssetTargets, tableAssetExtensions, 'dm-asset');
}

/**
 * Selective DM maps: one canonical copy in world/maps/, listed in
 * publish/table-assets/table-maps.manifest → public/dm/maps/.
 */
async function syncTableMapsFromWorld() {
  await ensureDir(tableAssetSources);
  const targetDir = path.join(dmAssetTargets, 'maps');
  await ensureDir(targetDir);

  let names = [];
  try {
    const raw = await readFile(tableMapsManifest, 'utf8');
    names = raw
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith('#'));
  } catch {
    console.warn('Missing table-maps.manifest — no world maps synced to /dm/maps/.');
    return 0;
  }

  let copied = 0;
  for (const name of names) {
    const from = path.join(worldMapSources, name);
    const to = path.join(targetDir, name);
    try {
      await stat(from);
    } catch {
      console.warn(`dm-map   MISSING world/maps/${name}`);
      continue;
    }
    await cp(from, to);
    console.log(`dm-map   ${name}`);
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
  const tableCount = await syncTableNotes();
  const moduleCount = await syncLibraryModules();
  const placeCount = await syncLibraryPlaces();
  const characterCount = await syncLibraryCharacters();
  const sessionCount = await syncLibrarySessions();
  const cyoaCount = await syncCyoaPages();
  const imageCount = await syncIllustrations();
  const tableAssetCount = await syncTableAssetFiles();
  const tableMapCount = await syncTableMapsFromWorld();

  console.log(
    `\nDone. ${chapterCount} chapter(s), ${tableCount} session plan(s), ${moduleCount} module(s), ${placeCount} place(s), ${characterCount} character(s), ${sessionCount} session note(s), ${cyoaCount} CYOA page(s), ${imageCount} illustration(s), ${tableAssetCount} DM asset(s), ${tableMapCount} DM map(s) from world.`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
