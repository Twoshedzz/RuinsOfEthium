#!/usr/bin/env node
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourcePath = path.join(root, 'publish/source/manuscripts/chronicles-of-ethium-full.md');
const source = readFileSync(sourcePath, 'utf8');

function formatBody(text) {
  return text
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .join('\n\n');
}

function extract(startMarker, endMarker) {
  const start = source.indexOf(startMarker);
  if (start === -1) throw new Error(`Missing: ${startMarker}`);
  const bodyStart = start + startMarker.length;
  const end = endMarker ? source.indexOf(endMarker, bodyStart) : source.length;
  if (endMarker && end === -1) throw new Error(`Missing end: ${endMarker}`);
  let raw = source.slice(bodyStart, end).trim();
  raw = raw.replace(/^# .+\n(?:# .+\n)?/m, '').trim();
  return formatBody(raw);
}

const introStart = source.indexOf('# About This Book');
const prologueStart = source.indexOf('# Prologue');
const intro = source.slice(introStart, prologueStart).trim();

const prologue = extract('# Prologue', '# Chapter One');
const ch1 = extract('# Chapter One', '# Chapter Two');
const ch2 = extract('# Chapter Two', null);

const files = [
  {
    name: '00-prologue.md',
    fm: {
      title: 'Prologue',
      chapter: 0,
      session: 0,
      summary:
        'Four young adventurers choose the dangerous North Road — and none of them has yet heard the name Ethium.',
      published: true,
    },
    body: prologue,
  },
  {
    name: '01-the-road-to-fallcrest.md',
    fm: {
      title: 'The Road to Fallcrest',
      chapter: 1,
      session: 1,
      summary:
        'Goblins ambush the companions on the North Road. They rescue Mara, defeat a goblin boss, and set out for Fallcrest with a mysterious map.',
      published: true,
    },
    body: ch1,
  },
  {
    name: '02-the-blue-moon-alehouse.md',
    fm: {
      title: 'The Blue Moon Alehouse',
      chapter: 2,
      session: 2,
      summary:
        'Fallcrest welcomes the heroes — until the Hammers crash the Blue Moon Alehouse and Tobbs reveals the secret of Ethium.',
      published: true,
    },
    body: ch2,
  },
];

const chaptersDir = path.join(root, 'publish/chapters');
mkdirSync(chaptersDir, { recursive: true });

for (const file of files) {
  const frontmatter = Object.entries(file.fm)
    .map(([key, value]) => `${key}: ${typeof value === 'string' ? JSON.stringify(value) : value}`)
    .join('\n');
  const content = `---\n${frontmatter}\n---\n\n${file.body}\n`;
  writeFileSync(path.join(chaptersDir, file.name), content);
}

writeFileSync(path.join(root, 'publish/intro.md'), `${intro}\n`);
console.log('Created:', files.map((file) => file.name).join(', '));
