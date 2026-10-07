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
- a branching CYOA reworking of the same material *(parked)*

Edit under `publish/`; Netlify serves the static site.

---

## How it evolved

1. **Novel site first** — Astro static site, parchment Fighting Fantasy look, chapters from table play.
2. **Source / inbox** — Campaign notes, ChatGPT exports, and maps landed in `publish/source/` so Cursor could draft chapters from real events.
3. **Plans vs notes** — Prep (`session-plans/`, live `table/`) was separated from after-play **session notes** (`sessions/`) so modules stay free of “party did…”.
4. **World modules** — Replayable adventure blocks under `world/modules/` for re-running at the table and possible later publish as a module pack.
5. **DM hub** — Hidden **`/dm/`** (World, Modules, Session plans, Session notes) plus maps/PDFs — not in the novel nav.
6. **CYOA** — Branching single-player rework, briefly rebranded Solo Play inside the DM hub. **Parked October 2026**: source kept in `publish/source/cyoa/`, no routes built.
7. **Print & handouts** — Session-plan print CSS (HP tick boxes), combat trackers, language sheet, item cards, selective map sync via manifest.

---

## Three aspects

### 1. Narrative story

Published chapters in `publish/chapters/` → **`/chapters/`**. Prologue through Chapter 7 are written and live. Style guide and campaign bible live under `publish/source/`. Read-aloud narration is **parked** — see the README.

### 2. DM support

Bookmark **`/dm/`** (also `/dungeonmaster/` → `/dm/`). Four desks:

| Desk | Meaning |
|------|---------|
| **World** | Places, factions, NPCs |
| **Modules** | Replayable blocks — no party play log |
| **Session plans** | Tonight’s prep — cold opens, stats, choices |
| **Session notes** | What happened → feed the novel |

Assets: `/dm/maps/`, `/dm/pdfs/`. Colour maps in the DM UI; B&W plates stay on the novel.

### 3. CYOA *(parked)*

Single-player branching rework in `publish/source/cyoa/`. Book 1 covers prologue through the pool camp (Thorn's POV). **Shelved in October 2026** to keep the focus on the novel and the table. The markdown is untouched and still syncs; only the pages and the nav entry were removed, so it can be switched back on in one commit.

---

## Content homes (edit here)

| Home | Role |
|------|------|
| `publish/chapters/` · `publish/illustrations/` | Story |
| `publish/source/world/` | Modules, place notes, canonical maps |
| `publish/source/characters/` | PCs & NPCs |
| `publish/source/sessions/` | Session notes (what happened) |
| `publish/source/session-plans/` · `publish/table/` | Draft prep · live run sheets |
| `publish/source/chatgpt-exports/` | Raw ChatGPT dumps (not canon) |
| `publish/source/cyoa/` | CYOA source *(parked)* |
| `publish/table-assets/` | PDFs + `table-maps.manifest` |

Sync: `npm run publish` → `scripts/sync-publish.mjs`.

---

## Roadmap

*Reviewed 7 October 2026. Play paused over the summer — last session notes and chapters date from late July.*

### Now — restarting the campaign

- **Session plans for the restart.** The kids' campaign starts again shortly. The next plan picks up from `publish/table/05-after-grey-burrower.md`, which was written but never played. Drafting prep sheets is the active area of support: cold open, encounter stats, choices, printable HP tick-boxes via Cmd+P on `/dm/plans/`.
- **Backfill the session notes.** `publish/source/sessions/` stops at `session-04`, but Chapters 6 and 7 were written from play that was never written up. Reconstruct notes for those sessions from the chapters and memory before the trail goes cold — they are the record the novel is drafted from, and the gap will only widen once new play starts.
- **Refresh the campaign bible** (`publish/source/00-campaign-bible.md`) so the restart begins from an accurate world state.

### Next — keep the players out of the DM pages

The DM gate currently hides content with JavaScript only. Every `/dm/` page is still served in full to anyone with the URL, and the passkey is readable in the public JavaScript. Good enough against passing curiosity, useless against a player who looks.

- **Add a server-side check.** A Netlify Edge Function putting a real password on `/dm/*` is the proportionate fix: free on the current plan, works with JavaScript disabled, one shared password to hand out. Roughly half a day including a deploy to verify.
- Once that exists, the client-side gate can be deleted rather than maintained alongside it.

### Later — content depth

- **Enrich modules** in `world/modules/` (kruthik, troglodyte, duergar) without pasting party play-by-play.
- **Handouts** — more item cards and print packs as sessions need them.
- **Package modules for others** once there is enough of them to be worth someone's time.

### Parked

| Area | State | To revive |
|------|-------|-----------|
| **Read-aloud audio** | Off; MP3s deleted Oct 2026, prose had moved on | `npm run audio`, then flip the flag — README has the steps |
| **CYOA / Solo Play** | Routes removed Oct 2026; source intact | Restore the pages and the DM nav entry |
| **Monetisation** | Not pursued | Revisit only at critical mass of DM content; likely a "buy me a coffee" link or one-off micro-payment, not a subscription |

---

## Related

- [`ARCHITECTURE.md`](ARCHITECTURE.md) — decisions and consequences
- [`../README.md`](../README.md) — local dev, deploy, add a chapter
- [`../publish/source/WORKFLOW.md`](../publish/source/WORKFLOW.md) — before / during / after loop
