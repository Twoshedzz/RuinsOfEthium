# Publish folder

**ChatGPT** → prep & handouts at the table. **This folder** → the story on the website.

Full workflow: [`source/WORKFLOW.md`](source/WORKFLOW.md)

## Two areas

| Folder | Purpose |
|--------|---------|
| [`source/`](source/) | **Research** — session notes, maps, PCs, drafts, ChatGPT exports, **unsorted inbox** |
| [`chapters/`](chapters/) | **Published prose** — finished chapters that go on the site |
| [`illustrations/`](illustrations/) | Artwork for chapters |

The site only syncs from `chapters/` and `illustrations/`. Everything in `source/` is for you and the Cursor agent.

## Quick workflow

### After a D&D session

1. Drop unsorted files in [`source/inbox/`](source/inbox/) if needed
2. Copy [`source/sessions/_template/`](source/sessions/_template/) → `source/sessions/session-03/`
2. Fill in `what-happened.md` while it's fresh
3. Paste any ChatGPT bits into [`source/chatgpt-exports/fragments/`](source/chatgpt-exports/fragments/) — partial copies are fine
4. Ask Cursor to write the chapter using `source/style-guide.md`
5. Put the finished chapter in `chapters/` with frontmatter
6. Run `npm run publish` and push

### Refining an existing draft

Put rough chapters in [`source/manuscripts/`](source/manuscripts/) and ask Cursor to refine them against the style guide.

## Site sync

```bash
npm run publish   # copies chapters/ + illustrations/ into the Astro site
npm run dev       # sync + local preview
```

See [`source/README.md`](source/README.md) for the full authoring guide.
