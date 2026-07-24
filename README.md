# The Ruins of Ethium

A static novel site built with [Astro](https://astro.build), styled after classic Fighting Fantasy books — parchment pages, serif type, and black-and-white illustration plates. Hosted on [Netlify](https://www.netlify.com).

**What this is:** the published story of a family D&D campaign — for the boys, parents, and friends to read after each session — plus a hidden DM hub and a CYOA reworking of the same material.

**How it fits your tools:** use **ChatGPT** to plan sessions and make handouts; use **this repo** (with Cursor) to keep world/modules/plans/notes in one place and turn what happened at the table into consistent novel chapters.

| Doc | Purpose |
|-----|---------|
| [`docs/PROJECT-BRIEF.md`](docs/PROJECT-BRIEF.md) | Why the project exists, how it evolved, next steps |
| [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) | Stack, content model, sync, and design decisions |
| [`publish/source/WORKFLOW.md`](publish/source/WORKFLOW.md) | Before / during / after loop at the table |

Each chapter is a markdown file. Push to GitHub and Netlify rebuilds automatically.

## Three product faces

| Face | Edit home | Site | Notes |
|------|-----------|------|-------|
| **Story** | `publish/chapters/` · `publish/illustrations/` | `/chapters/` | Novel — in the main nav |
| **DM hub** | world · characters · table · sessions | **`/dm/`** | Hidden; `noindex`. Also `/dungeonmaster/` → `/dm/` |
| **CYOA** | `publish/source/cyoa/` | **`/cyoa/`** | Hidden; `noindex` |

### DM hub desks

| Desk | Meaning | Source → URL |
|------|---------|--------------|
| **World** | Places, factions, NPCs | `publish/source/world/notes/` · `characters/` → `/dm/world/` |
| **Modules** | Replayable adventure blocks (no party play log) | `publish/source/world/modules/` → `/dm/modules/` |
| **Session plans** | Prep for an upcoming session | `session-plans/` · live `publish/table/` → `/dm/plans/` (Cmd+P to print) |
| **Session notes** | What happened → novel | `publish/source/sessions/` → `/dm/notes/` |

DM maps/PDFs: `/dm/maps/`, `/dm/pdfs/`. Terminology and loop: [`publish/source/WORKFLOW.md`](publish/source/WORKFLOW.md).

## Local development

Requires **Node.js 22.12+** (see `.nvmrc`).

```bash
nvm use    # if you use nvm
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321). Sync runs automatically before `dev` and `build`.

## Content model & sync

Edit under **`publish/`** only. Run `npm run publish` (`scripts/sync-publish.mjs`) to copy into the site (also runs before `dev` / `build`).

```
publish/chapters/              # Story → /chapters/
publish/illustrations/         # Story art → /illustrations/
publish/source/world/          # Modules, place notes, canonical maps
publish/source/characters/     # PCs & NPCs → /dm/world/characters/
publish/source/sessions/       # Session notes → /dm/notes/
publish/source/session-plans/  # Draft prep (promote live sheets to table/)
publish/table/                 # Live session plans → /dm/plans/
publish/table-assets/          # PDFs + map manifest → /dm/pdfs|maps/
publish/source/cyoa/           # CYOA → /cyoa/
publish/source/chatgpt-exports/# Raw ChatGPT dumps (not synced to the site)
publish/source/chapter-drafts/ # Beat sheets before prose
```

**Terms:** Modules = replayable · Session plans = prep · Session notes = what happened → novel.

Canonical assets: maps in `publish/source/world/maps/` (list in `table-assets/table-maps.manifest` for `/dm/maps/`); PDFs in `publish/table-assets/pdfs/`. Legacy `/table/` and `/library/` redirect into `/dm/…`.

See [`publish/README.md`](publish/README.md).

## Adding a chapter after a session

1. Fill `publish/source/sessions/session-XX/what-happened.md`, then draft with Cursor + `publish/source/style-guide.md` (see [`publish/source/README.md`](publish/source/README.md)).

2. Copy the template:
   ```bash
   cp publish/chapters/_template.md publish/chapters/06-your-chapter-slug.md
   ```
   Use a numeric prefix for sorting (`01-`, `02-`, …). The filename becomes the URL slug.

3. Edit the frontmatter:

   ```yaml
   ---
   title: "The Road to Fallcrest"
   chapter: 1
   summary: "One sentence describing what happens in this chapter."
   coverIllustration: "/illustrations/ch01-cover.png"
   published: true
   ---
   ```

   | Field | Required | Notes |
   |-------|----------|-------|
   | `title` | Yes | Chapter title shown on the page |
   | `chapter` | Yes | Number for ordering (`0` = Prologue) |
   | `summary` | No | Short blurb for listings |
   | `coverIllustration` | No | Hero image path under `public/` |
   | `published` | Yes | Set `false` to hide a draft |

4. Write prose below the frontmatter (clear, vivid, ~12+). Add art under `publish/illustrations/` and reference `/illustrations/…` — chapter images are styled as engraved black-and-white plates.

5. `npm run publish` (or `npm run dev` / push — sync runs automatically). Commit and push; Netlify rebuilds.

## Listen aloud (OpenAI voice)

Chapters can include a **Listen to this chapter** player powered by [OpenAI Text-to-Speech](https://platform.openai.com/docs/guides/text-to-speech). Audio is generated on your machine and committed to the repo — visitors play static MP3 files, so no API key is needed on Netlify.

1. Copy `.env.example` to `.env` and add your `OPENAI_API_KEY`.
2. Preview chunking (no API calls): `npm run audio:dry-run`
3. Generate narration: `npm run audio` (all chapters) or `npm run audio -- --slug 00-prologue`
4. Commit the new files under `public/audio/` and push.

Defaults: `gpt-4o-mini-tts` with voice `fable`, styled as a warm British fantasy storyteller. Override with `TTS_MODEL`, `TTS_VOICE`, or `TTS_INSTRUCTIONS` in `.env`.

Re-running `npm run audio` skips chapters whose prose has not changed. Use `npm run audio -- --force` to regenerate anyway.

Rough cost: about **$1–2 one-off** for all current chapters, then pennies per new chapter.

## Deploy to Netlify

1. Push this repository to GitHub.
2. In Netlify: **Add new site → Import an existing project**.
3. Netlify detects Astro automatically. Confirm:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy. Each push to your main branch updates the live site at [ruinsofethium.netlify.app](https://ruinsofethium.netlify.app).

These settings are also defined in [`netlify.toml`](netlify.toml). The canonical site URL is set in [`astro.config.mjs`](astro.config.mjs).

## Commands

| Command | Action |
|---------|--------|
| `npm run publish` | Sync `publish/` into `src/content` and `public` |
| `npm run audio` | Generate chapter narration MP3s via OpenAI TTS |
| `npm run audio:dry-run` | Preview TTS chunking without calling the API |
| `npm run dev` | Sync + start local dev server |
| `npm run build` | Sync + build static site to `dist/` |
| `npm run preview` | Preview the production build locally |

## Draft chapters

Set `published: false` in frontmatter to keep a chapter out of the site while you edit. The `_template.md` file is always excluded from the build.
