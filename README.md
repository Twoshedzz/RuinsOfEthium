# The Ruins of Ethium

A static novel site built with [Astro](https://astro.build), styled after classic Fighting Fantasy books — parchment pages, serif type, and black-and-white illustration plates.

**What this is:** the published story of a family D&D campaign — for the boys, parents, and friends to read after each session.

**How it fits your tools:** use **ChatGPT** to plan sessions and make handouts; use **this repo** (with Cursor) to turn what actually happened at the table into consistent novel chapters on Netlify.

See **[`publish/source/WORKFLOW.md`](publish/source/WORKFLOW.md)** for the full before / during / after loop.

Each chapter is a markdown file. Push to GitHub and [Netlify](https://www.netlify.com) rebuilds the site automatically.

## Local development

Requires **Node.js 22.12+** (see `.nvmrc`).

```bash
nvm use    # if you use nvm
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Adding a chapter after a session

**Drop content in [`publish/`](publish/)** — that is the folder to edit. Subfolders:

- `publish/chapters/` — chapter markdown
- `publish/illustrations/` — artwork (PNG, JPG, SVG) — supports subfolders (`portraits/`, `maps/`, `items/`, etc.)

Run `npm run publish` to copy files into the site (this also runs automatically before `npm run dev` and `npm run build`).

1. Copy the template:
   ```bash
   cp publish/chapters/_template.md publish/chapters/02-your-chapter-slug.md
   ```
   Use a numeric prefix for sorting (`01-`, `02-`, …). The filename becomes the URL slug.

2. Edit the frontmatter at the top of the file:

   ```yaml
   ---
   title: "The Road to Fallcrest"
   chapter: 1
   session: 1
   summary: "One sentence describing what happens in this chapter."
   coverIllustration: "/illustrations/ch01-cover.png"
   published: true
   ---
   ```

   | Field | Required | Notes |
   |-------|----------|-------|
   | `title` | Yes | Chapter title shown on the page |
   | `chapter` | Yes | Number for ordering (`0` = Prologue) |
   | `session` | No | D&D session number, shown in the table of contents |
   | `summary` | No | Short blurb for listings |
   | `coverIllustration` | No | Hero image path under `public/` |
   | `published` | Yes | Set `false` to hide a draft |

3. Write the chapter prose in markdown below the frontmatter. Aim for clear, vivid prose suitable for readers aged twelve and up.

4. Add illustrations to `publish/illustrations/` (PNG, JPG, or SVG). Reference them in markdown:

   ```markdown
   ![A goblin in the shadows](/illustrations/ch01-goblin.png)

   *The goblin watched from the rocks.*
   ```

   Images are styled automatically as engraved black-and-white plates.

5. Run `npm run publish` (or `npm run dev` / push to GitHub — sync runs automatically).

6. Commit and push. Netlify rebuilds with the new chapter.

## Project structure

```
publish/source/           # Session notes, maps, PCs, drafts, ChatGPT exports
publish/chapters/         # Finished chapter markdown (goes on the site)
publish/illustrations/    # Artwork (PNG, JPG, SVG)
public/illustrations/     # Synced artwork (auto-updated)
src/content/chapters/     # Synced chapters (auto-updated)
src/content/config.ts     # Frontmatter schema
src/pages/                # Site routes
src/styles/global.css     # Fighting Fantasy theme
```

## Writing chapters with Cursor

Source material lives in [`publish/source/`](publish/source/) — session notes, maps, PC list, style guide, and manuscript drafts. After each game, fill in `publish/source/sessions/session-XX/` and ask Cursor to draft the next chapter using `publish/source/style-guide.md`.

See [`publish/source/README.md`](publish/source/README.md) for the full workflow.

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
| `npm run publish` | Copy `publish/` content into the site |
| `npm run dev` | Sync + start local dev server |
| `npm run build` | Sync + build static site to `dist/` |
| `npm run preview` | Preview the production build locally |

## Draft chapters

Set `published: false` in frontmatter to keep a chapter out of the site while you edit. The `_template.md` file is always excluded from the build.
