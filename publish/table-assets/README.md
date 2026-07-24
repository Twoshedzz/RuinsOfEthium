# Table assets (DM printables & sync)

**Canonical homes (no duplicate binaries):**

| Asset | Canonical | Site URL |
|-------|-----------|----------|
| Dungeon / world maps | [`../source/world/maps/`](../source/world/maps/) | Selected → **`/dm/maps/`** |
| Combat trackers, DM packs, language sheet | [`pdfs/`](pdfs/) | → **`/dm/pdfs/`** |

Legacy `/table/maps/` and `/table/pdfs/` redirect to `/dm/…`.

## How sync works

`npm run publish` / `npm run build` runs `scripts/sync-publish.mjs`:

1. **PDFs** — under `pdfs/` → `public/dm/pdfs/`
2. **Maps** — filenames in [`table-maps.manifest`](table-maps.manifest) from `world/maps/` → `public/dm/maps/`

Do **not** keep a second copy of map PNGs/JPGs here. Add filenames to `table-maps.manifest` to expose them.

## Related

| Need | Where |
|------|--------|
| DM hub | **`/dm/`** |
| Live session plans | [`../table/`](../table/) → `/dm/plans/` |
| Draft session plans | [`../source/session-plans/`](../source/session-plans/) |
