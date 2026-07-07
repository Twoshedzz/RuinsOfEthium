# Source material for authoring

Everything the Cursor agent needs to write and refine chapters — **facts and notes, not finished prose**.

**You run the game with ChatGPT; you publish the story here.** See [`WORKFLOW.md`](WORKFLOW.md).

The live site reads from [`../chapters/`](../chapters/). This folder is your research library.

## Where to put things

| Folder | What goes here |
|--------|----------------|
| [`inbox/`](inbox/) | **Unsorted dump** — mixed images, session plans, notes (filter later). **Local only** — gitignored |
| [`characters/`](characters/) | PC list, NPCs, traits, voice notes |
| [`world/`](world/) | Setting notes, locations, factions, lore |
| [`world/maps/`](world/maps/) | Map images (PNG, JPG, SVG, PDF) |
| [`session-plans/`](session-plans/) | Prep written before you play |
| [`sessions/`](sessions/) | What happened **after** each game (one folder per session) |
| [`chatgpt-exports/`](chatgpt-exports/) | ChatGPT chats — **use [`fragments/`](chatgpt-exports/fragments/) for messy pastes** (fragments gitignored) |
| [`manuscripts/`](manuscripts/) | Draft chapter prose that needs refinement (**local only** — gitignored) |

## Reference docs (read every time)

| File | Purpose |
|------|---------|
| [`00-campaign-bible.md`](00-campaign-bible.md) | Canon, cast, timeline, open plot threads |
| [`style-guide.md`](style-guide.md) | How chapters should read |
| [`illustration-style.md`](illustration-style.md) | Fighting Fantasy B&W art direction |

Update the campaign bible when something important changes in play.

## After each session

1. Drop any unsorted files in [`inbox/`](inbox/) if you're not sure where they go yet
2. Create `sessions/session-XX/` (copy from [`sessions/_template/`](sessions/_template/))
3. Fill in `what-happened.md` and `dm-notes.md` while it's fresh
4. Paste any ChatGPT bits into [`chatgpt-exports/fragments/`](chatgpt-exports/fragments/)
5. Ask Cursor to sort `inbox/` or write the next chapter
6. Review the draft in `manuscripts/` or move to `chapters/` when ready

## Working with Cursor

One session per writing request works best. Example prompts:

- *"Refine `manuscripts/chapter-01-rewrite-draft.md` to match `style-guide.md` and published chapter 1."*
- *"Write chapter 3 from `sessions/session-03/` using the campaign bible for continuity."*
- *"Here's my PC list — merge it into `characters/pcs.md`."*

Raw notes are fine. Bullet points beat polished prose in source files.
