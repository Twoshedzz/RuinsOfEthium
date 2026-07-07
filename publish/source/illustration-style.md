# Illustration style — Fighting Fantasy (1980s–90s)

**Canonical visual reference** for chapter plates, portraits, monsters, and item cards.

When asking Cursor to generate or brief art:

> *"Follow `publish/source/illustration-style.md`, the prompt in `reference/fighting-fantasy/image-recipe.md`, and attach character refs from `reference/character-illustration-refs.md`."*

Prose voice remains in [`style-guide.md`](style-guide.md).

---

## Image recipe (canonical prompt)

Full text: [`reference/fighting-fantasy/image-recipe.md`](reference/fighting-fantasy/image-recipe.md)

**Core line** — use this for every generation:

> Highly detailed black ink illustration. Traditional dip-pen fantasy artwork on white paper. Fine cross-hatching and stippling with varied line weight throughout. Classic early-1980s British fantasy gamebook interior illustration. Full-page composition with a single dominant hero occupying around seventy percent of the page. Every texture rendered with intricate pen work. Crisp black linework only. No colour. No greyscale. No digital painting. No soft shading. No engraving effect. White paper background. Slightly loose hand-drawn linework, visible pen strokes with natural variation.

Then add a **scene block** (location, subject, action). See the recipe file for the Ethium plateau / Dave example and a blank template.

### Hand-drawn authenticity

Original Fighting Fantasy interiors were inked by hand — imperfect perspective, uneven line weight, loose hatching, sketch lines, deliberate white space. **Embrace that noise**; avoid sterile digital perfection.

---

## Target look

Classic **Fighting Fantasy gamebook** interiors — *The Warlock of Firetop Mountain*, *City of Thieves*, *Deathtrap Dungeon*.

| Do | Avoid |
|----|--------|
| **Black ink on white** | Colour, greyscale washes, soft airbrush |
| **Cross-hatching & stippling** | Digital painting, photorealism |
| **Dip-pen / hand-inked feel** | Engraving effect, vector-clean lines |
| **One dominant figure (~70% of page)** | Crowded ensemble casts |
| **Medieval / early D&D** gear | Modern costumes, anime |

The site adds a light **frame** on chapter plates and **contrast** in CSS — art should read well as pure linework before that. **Never** display a white box: processed PNGs are transparent so the parchment background shows through (same treatment as the cover and maps).

---

## Site display — transparent parchment

1. **Generate** black ink on white paper (see image recipe).
2. **Process** before publish — strips the paper, keeps the linework:

```bash
python3 scripts/process-cover-art.py path/to/your-art.png
```

3. **File** under `publish/illustrations/` → `npm run publish`.

Cover art and maps are **borderless** on the site. Chapter illustrations keep a thin ink frame; the fill inside is always the site parchment, not white.

See [`reference/fighting-fantasy/image-recipe.md`](reference/fighting-fantasy/image-recipe.md) for the full site-display table.

---

## Artists & era

**Russ Nicholson**, **John Blanche**, **Alan Craddock** — gamebook interior ink, not cover paintings.

---

## What each image type needs

| Type | Folder | Notes |
|------|--------|-------|
| **Chapter scenes** | `illustrations/` or `illustrations/scenes/` | One strong moment; caption below in italics |
| **Portraits** | `illustrations/portraits/` | Bust or three-quarter; plain or simple background |
| **Monsters** | `illustrations/monsters/` | Single creature, clear pose |
| **Items / loot** | `illustrations/items/` | Object on simple ground or cut-out card layout |
| **Maps** | `illustrations/maps/` or `world/maps/` | **Hand-drawn canon** preferred; process with `process-cover-art.py` like cover art |

---

## Reference images

Drop Fighting Fantasy scans or favourites into **`publish/source/inbox/`** — ask Cursor to file them in **`reference/fighting-fantasy/`**.

---

## Character source images (required)

Any plate with party members or recurring NPCs **must** use the canonical portrait and scene references in [`reference/character-illustration-refs.md`](reference/character-illustration-refs.md).

Attach those files as `reference_image_paths` when generating. Match face, build, and gear from the refs; render as black ink on white.

---

## Generating new art

**Cursor:** character refs + scene block + image recipe.

**ChatGPT:** same prompt and attach the same reference images; export PNG → run `process-cover-art.py` on the file → `publish/illustrations/` → `npm run publish`.

---

## Embedding in chapters

```markdown
![Thorn faces the goblin chief](/illustrations/monsters/goblin-chief.png)

*The goblin chief raised his rusty blade.*
```

Optional cover plate in frontmatter: `coverIllustration: "/illustrations/ch03-cover.png"`
