# Project brief — The Ruins of Ethium

> **Out of date in one important way.** The DM material left this repo in October 2026
> and now lives in the private **EthiumSource** repo, along with both tables' session
> plans and play records. Everything below about `/dm/`, the DM hub, modules, world
> notes, maps and CYOA describes where those things *used* to be. The novel, its
> chapters, its plates and the public `/maps/` page are still here and still accurate.


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

*Reviewed 8 October 2026. Only outstanding work is listed here — what has already been
built is in [`HISTORY.md`](HISTORY.md).*

### Now — restarting the kids' campaign

- **Session plans for the restart.** The next plan picks up from
  `plotlines/kids/plans/05-after-grey-burrower.md` in Ethium Source, which was written
  but never played. Drafting prep sheets is the active area of support: cold open,
  encounter stats, choices, printable HP tick-boxes via Cmd+P.
- **Backfill the session notes.** `plotlines/kids/sessions/` stops at session 04, but
  Chapters 6 and 7 were written from play that was never written up. Reconstruct them
  from the chapters and memory before the trail goes cold — they are the record the
  novel is drafted from, and the gap widens once new play starts. One dead link on the
  Ethium Source site points at exactly this gap.
- **Refresh the campaign bible** so the restart begins from an accurate world state.

### Now — Tuesday Night Arguing

- **Draft Arc 1.** Chapter 9 on that site is a Claude-written design sample and must be
  replaced with the real thing.
- **Finish the editor.** The co-author can write blocks; two things remain — see
  *The editor* below.
- **Pages 88–100 of the notebook** need re-transcribing. The October photographs do not
  cover them, and they hold the end of book one: the homecoming, Elturel falling and
  the Olana duel.
- **Settle credit and consent** with the co-author before anything is published. His
  notebook is the source for the whole book, and the second thread puts him on the page
  as himself. Far easier to agree now than once there is something with value attached.

### Next — the editor

- **Insert a block mid-chapter.** Decap's list widget can only add at the end, so
  interrupting an existing block means splitting it by hand. Design and cost are in the
  session plan; the short version is a *Split here* toolbar button plus a `preSave`
  transform.
- **A one-page guide** for someone who has never seen a CMS, and a test invite to a
  throwaway address to walk the whole path before the real one goes out.

### Later — content depth

- **Enrich modules** in `world/modules/` (kruthik, troglodyte, duergar) without pasting
  party play-by-play.
- **Handouts** — more item cards and print packs as sessions need them.
- **Package modules for others** once there are enough to be worth someone's time.
- **About page to markdown.** The Dramatis Personae is hand-written inside
  `src/pages/about.astro`, so keeping it current means editing an `.astro` file. Behind
  a one-file collection it becomes markdown — and Tuesday Night Arguing's About page
  becomes something that can be filled in without Claude.

### Known limits, accepted deliberately

- **The private fragments are still in public git history.** Deleting them removed them
  from the working tree, not from older commits. The only complete fixes are making the
  repo private or rewriting history and force-pushing.
- **The two novel apps will drift.** A fix to the chapter reader has to be applied
  twice. The shared surface is small — six components, two layouts, ~710 lines of CSS —
  and a note in each README is the chosen mitigation, not a shared package.
- **~52MB of shared art exists in two repos.** Ethium Source is the direction of truth;
  each novel keeps its own copies with a provenance note. No sync tooling was built,
  because it would be tooling nobody could debug.

### Parked

| Area | State | To revive |
|------|-------|-----------|
| **Read-aloud audio** | Off; MP3s deleted Oct 2026, prose had moved on | `npm run audio`, then flip the flag — README has the steps |
| **CYOA / Solo Play** | Routes removed Oct 2026; source intact in Ethium Source | Restore the pages and the nav entry |
| **Monetisation** | Not pursued | Revisit only at critical mass of DM content; likely a "buy me a coffee" link or one-off micro-payment, not a subscription |

---

## Related

- [`HISTORY.md`](HISTORY.md) — what was built, in what order, and why
- [`ARCHITECTURE.md`](ARCHITECTURE.md) — decisions and consequences
- [`../README.md`](../README.md) — local dev, deploy, add a chapter
- [`../publish/source/WORKFLOW.md`](../publish/source/WORKFLOW.md) — before / during / after loop
