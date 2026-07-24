# Project brief — The Ruins of Ethium

How this repo came to be, what it is for, and what comes next. For technical choices see [`ARCHITECTURE.md`](ARCHITECTURE.md). Day-to-day loop: [`publish/source/WORKFLOW.md`](../publish/source/WORKFLOW.md).

---

## Problem

A family D&D campaign needs a **readable novel** the boys, parents, and friends can enjoy after each session — Fighting Fantasy tone, consistent voice, illustrated chapters on a simple website.

**ChatGPT** is strong at session prep, combat trackers, and handouts. It is weak at holding a long, consistent novel voice and at keeping world facts in one place. Without a repo, prep dumps, maps, and “what happened” notes scatter across chats and downloads.

This project is the **single home** for:

- published story chapters
- world lore and replayable modules
- session plans (prep) and session notes (what happened)
- table printables (maps, PDFs, item cards)
- a branching CYOA reworking of the same material

Edit under `publish/`; Netlify serves the static site.

---

## How it evolved

1. **Novel site first** — Astro static site, parchment Fighting Fantasy look, chapters from table play.
2. **Source / inbox** — Campaign notes, ChatGPT exports, and maps landed in `publish/source/` so Cursor could draft chapters from real events.
3. **Plans vs notes** — Prep (`session-plans/`, live `table/`) was separated from after-play **session notes** (`sessions/`) so modules stay free of “party did…”.
4. **World modules** — Replayable adventure blocks under `world/modules/` for re-running at the table and possible later publish as a module pack.
5. **DM hub** — Hidden **`/dm/`** (World, Modules, Session plans, Session notes) plus maps/PDFs — not in the novel nav.
6. **CYOA** — Branching single-player rework at hidden **`/cyoa/`**, separate from the linear novel.
7. **Print & handouts** — Session-plan print CSS (HP tick boxes), combat trackers, language sheet, item cards, selective map sync via manifest.

---

## Three aspects

### 1. Narrative story

Published chapters in `publish/chapters/` → **`/chapters/`**. Prologue through Chapter 5 are on the site; Chapter 6 exists as a beat-sheet draft. Style guide and campaign bible live under `publish/source/`. Optional OpenAI TTS audio ships as static MP3s.

### 2. DM support

Bookmark **`/dm/`** (also `/dungeonmaster/` → `/dm/`). Four desks:

| Desk | Meaning |
|------|---------|
| **World** | Places, factions, NPCs |
| **Modules** | Replayable blocks — no party play log |
| **Session plans** | Tonight’s prep — cold opens, stats, choices |
| **Session notes** | What happened → feed the novel |

Assets: `/dm/maps/`, `/dm/pdfs/`. Colour maps in the DM UI; B&W plates stay on the novel.

### 3. CYOA

Single-player branching rework in `publish/source/cyoa/` → **`/cyoa/`**. Book 1 covers prologue through the pool camp (Thorn’s POV). Hidden and `noindex`, like the DM hub.

---

## Content homes (edit here)

| Home | Role |
|------|------|
| `publish/chapters/` · `publish/illustrations/` | Story |
| `publish/source/world/` | Modules, place notes, canonical maps |
| `publish/source/characters/` | PCs & NPCs |
| `publish/source/sessions/` | Session notes (what happened) |
| `publish/source/session-plans/` · `publish/table/` | Draft prep · live run sheets |
| `publish/source/chapter-drafts/` | Beat sheets before prose |
| `publish/source/chatgpt-exports/` | Raw ChatGPT dumps (not canon) |
| `publish/source/cyoa/` | CYOA source |
| `publish/table-assets/` | PDFs + `table-maps.manifest` |

Sync: `npm run publish` → `scripts/sync-publish.mjs`.

---

## Next steps

Honest backlog from the current repo:

- **Write Chapter 6** from `chapter-drafts/06-east-of-the-pool.md` and session notes; close the lag between play and published prose (bible timeline still lags published Ch. 3–5).
- **After-play notes** — keep `sessions/session-04/` current; add/finish notes for session 05+ as play continues (`table/05-after-grey-burrower.md` is the live plan).
- **Enrich modules** — flesh out `world/modules/` (kruthik, troglodyte, duergar, etc.) without pasting party play-by-play.
- **Keep the campaign bible current** after each session.
- **Optional later:** package modules for others; expand CYOA beyond Book 1 (east dig, castle hill, dragon, Maelis, Mala’s book, cloaked watcher).
- **Handouts** — more item cards / print packs as sessions need them.

---

## Related

- [`ARCHITECTURE.md`](ARCHITECTURE.md) — decisions and consequences
- [`../README.md`](../README.md) — local dev, deploy, add a chapter
- [`../publish/source/WORKFLOW.md`](../publish/source/WORKFLOW.md) — before / during / after loop
