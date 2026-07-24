# Architecture decisions — The Ruins of Ethium

Product context: [`PROJECT-BRIEF.md`](PROJECT-BRIEF.md). Operational loop: [`publish/source/WORKFLOW.md`](../publish/source/WORKFLOW.md).

Format: **Decision → Why → Consequences**.

---

## Stack: Astro + markdown collections + Netlify

**Decision.** Static Astro site (`output: 'static'`). Content is markdown in Astro content collections. Deploy on Netlify (`npm run build` → `dist/`). Node **22.12+** (`.nvmrc` / `engines`).

**Why.** No server or CMS to maintain. Markdown is easy to edit in Cursor/git. Netlify rebuilds on push. Fits a family novel + DM reference that is mostly read-only on the web.

**Consequences.** All “apps” (novel, DM hub, CYOA) are static pages. Search/auth/multi-user editing are out of scope. Frontmatter schemas live in `src/content/config.ts`.

---

## Edit surface: `publish/` → sync into `src/content` / `public`

**Decision.** Humans edit **`publish/`**. `npm run publish` runs `scripts/sync-publish.mjs`, which copies/rewrites into:

| Source | Target |
|--------|--------|
| `publish/chapters/` | `src/content/chapters/` |
| `publish/table/` | `src/content/tableNotes/` |
| `publish/source/world/modules/` | `src/content/libraryModules/` |
| `publish/source/world/notes/` | `src/content/libraryPlaces/` |
| `publish/source/characters/` | `src/content/libraryCharacters/` |
| `publish/source/sessions/*/what-happened.md` | `src/content/librarySessions/` |
| `publish/source/cyoa/` | `src/content/cyoaPages/` |
| `publish/illustrations/` | `public/illustrations/` |
| `publish/table-assets/` (PDFs etc.) | `public/dm/` |
| `world/maps/` via `table-maps.manifest` | `public/dm/maps/` |

Sync also rewrites relative `.md` links and legacy `/table/` · `/library/` paths to `/dm/…` (and CYOA paths). It runs automatically before `dev` and `build`.

**Why.** One clear folder to drop content; site internals stay generated. Link rewriting keeps source files readable in the repo and correct on the site.

**Consequences.** Do not treat `src/content/library*` or `public/dm/` as the edit home — they are overwritten. Draft session plans under `session-plans/` are **not** synced until promoted to `publish/table/`.

---

## Content separation: Story · Modules · Plans · Notes · Raw

**Decision.** Keep these concerns in different folders and site desks:

| Term | Folder(s) | Site | Purpose |
|------|-----------|------|---------|
| **Story** | `publish/chapters/` | `/chapters/` | Published novel |
| **Modules** | `world/modules/` | `/dm/modules/` | Replayable blocks |
| **Session plans** | `session-plans/` · `table/` | `/dm/plans/` | Prep for upcoming play |
| **Session notes** | `sessions/` | `/dm/notes/` | What happened → novel |
| **World** | `world/notes/` · `characters/` | `/dm/world/` | Setting reference |
| **Raw ChatGPT** | `chatgpt-exports/` | *(not synced)* | Overlapping dumps |
| **CYOA** | `cyoa/` | `/cyoa/` | Branching game |

**Why.** ChatGPT prep and table improvisation blur “canon,” “tonight’s sheet,” and “what we actually did.” Mixing them polluted modules and made chapter drafting harder.

**Consequences.** Never paste party play-by-play into modules. Promote facts from raw exports into world/character files; leave dumps alone. Live printable plans live in `table/`; longer drafts can stay in `session-plans/`.

### Why modules are replayable and separate from session notes

Modules describe rooms, foes, and choices **without** a specific party’s chronology so you can run them again or publish them later. Session notes capture *this* table’s outcomes and feed novel chapters. Plans sit between: pull from a module, run tonight, then write notes — not back into the module.

---

## Hidden hubs: `/dm/` and `/cyoa/`

**Decision.** DM and CYOA are real routes but **absent from novel navigation**. Shells set `noindex,nofollow`. Aliases: `/dungeonmaster` → `/dm`; Astro + Netlify redirects from legacy `/table/` and `/library/`.

**Why.** The public face is the story. DM tools and CYOA are for the family/DM via bookmark, not SEO or the chapter list.

**Consequences.** Share `/dm/` and `/cyoa/` deliberately. Novel chrome stays parchment/story-focused; DM desk uses its own layout (`DmShell`).

---

## Canonical asset homes

**Decision.**

- **Maps:** one binary home in `publish/source/world/maps/`. Expose to the site by listing filenames in `publish/table-assets/table-maps.manifest` → `/dm/maps/`.
- **Printable PDFs:** `publish/table-assets/pdfs/` → `/dm/pdfs/`.
- **Story art:** `publish/illustrations/` → `/illustrations/`.

**Why.** Avoid duplicate PNGs under `table-assets/maps/` and `public/`. Manifest keeps DM map set intentional (not every archive sketch).

**Consequences.** Adding a map for the table = file in `world/maps/` + line in the manifest + `npm run publish`. Legacy `/table/maps|pdfs/` URLs 301 to `/dm/…`.

---

## Illustration styling: B&W chapters, colour DM

**Decision.** CSS grayscale/contrast plates apply to **chapter / novel** images only (`.chapter-body`, `.illustration-plate`). DM thumbs and lightboxes keep **full colour**.

**Why.** Fighting Fantasy novel look vs usable colour battle maps and handouts for the DM.

**Consequences.** The same file can look engraved in a chapter and colour under `/dm/` — styling is scoped, not baked into the asset.

---

## Print CSS for session plans

**Decision.** `src/styles/dm-plan-print.css` loads for plan pages (`DmShell` `variant="plan"`). Print layout includes masthead and **HP tick boxes** (empty squares per HP, tracker-style).

**Why.** Run sheets should Cmd+P cleanly at the table without a separate PDF for every plan.

**Consequences.** Print styles do not affect novel chapters or other DM sections. Combat-tracker PDFs remain for dense encounters.

---

## Legacy redirects

**Decision.** Netlify `public/_redirects` and `astro.config.mjs` `redirects` map old `/table/…` and `/library/…` URLs into `/dm/…` (plans, modules, world, notes, maps, pdfs).

**Why.** Early structure used “table” and “library”; bookmarks and markdown links still exist.

**Consequences.** New links should use `/dm/` and `/cyoa/`. Sync rewrites many in-content paths on publish.

---

## Related

- [`PROJECT-BRIEF.md`](PROJECT-BRIEF.md)
- [`../README.md`](../README.md)
- [`../scripts/sync-publish.mjs`](../scripts/sync-publish.mjs)
- [`../publish/table-assets/README.md`](../publish/table-assets/README.md)
