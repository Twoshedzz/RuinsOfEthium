# Publish folder

Drop session content here, then sync it into the site.

## Folders

| Folder | Put here |
|--------|----------|
| [`chapters/`](chapters/) | Chapter markdown files (`.md`) |
| [`illustrations/`](illustrations/) | Images referenced in chapters (`.png`, `.jpg`, `.svg`) |

Copy [`chapters/_template.md`](chapters/_template.md) when starting a new chapter. Use a numeric prefix in the filename, e.g. `02-the-goblin-cave.md`.

## Workflow

1. Write your chapter in `chapters/`
2. Add any artwork to `illustrations/`
3. Reference images in markdown as `/illustrations/your-file.png`
4. Set `published: true` in the chapter frontmatter when ready
5. Sync into the site:

   ```bash
   npm run publish
   ```

6. Preview with `npm run dev`, then commit and push — Netlify runs the same sync before each build

Files here are the source you edit. The sync step copies them into `src/content/chapters/` and `public/illustrations/` for Astro.
