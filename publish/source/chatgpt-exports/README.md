# ChatGPT exports

Paste ChatGPT material here. **Fragmented pastes go in [`fragments/`](fragments/)** — that is the main dump folder.

## Folders

| Folder | Use when |
|--------|----------|
| **[`fragments/`](fragments/)** | Cut-and-paste chats, partial copies, messy bits — **start here** |
| This folder (root) | Longer, more complete exports when you have them |

## Quick start (fragmented chats)

```bash
cp publish/source/chatgpt-exports/fragments/_paste-template.md \
   publish/source/chatgpt-exports/fragments/my-bits.md
```

Open `my-bits.md`, add one line about what it's for, paste from ChatGPT, save. Repeat for each chunk.

## Suggested filenames (complete exports)

```
campaign-overview.md
session-03-prep.md
session-03-debrief.md
fallcrest-lore.md
ethium-plot.md
```

## How to export from ChatGPT

ChatGPT often won't give you one clean export. That's normal.

1. Open the chat
2. Scroll to the useful part
3. Select and copy what you can (even a single Q&A)
4. Paste into `fragments/` with a short label
5. Repeat — many small files beat one perfect file

## Linking to sessions

If a fragment belongs to a specific game, say so in the file header or mention it in `sessions/session-XX/dm-notes.md`.

Raw paste is fine. Don't clean up unless you want to.

## Ask Cursor to sort it out

- *"Merge everything in `chatgpt-exports/fragments/` into the campaign bible."*
- *"List what we know about Ethium from all ChatGPT fragments."*
- *"Write chapter 3 using fragments + session-03 notes."*
