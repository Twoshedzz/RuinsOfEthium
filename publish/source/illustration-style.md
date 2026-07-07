# Illustration style — Fighting Fantasy (1980s–90s)

**Canonical visual reference** for chapter plates, portraits, monsters, and item cards.

When asking Cursor to generate or brief art:

> *"Follow `publish/source/illustration-style.md` and the prompt in `reference/fighting-fantasy/image-recipe.md`."*

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

The site adds a light **frame and contrast** on chapter pages — art should read well as pure linework before that.

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
| **Maps** | `illustrations/maps/` or `world/maps/` | **Hand-drawn canon** preferred |

---

## Reference images

Drop Fighting Fantasy scans or favourites into **`publish/source/inbox/`** — ask Cursor to file them in **`reference/fighting-fantasy/`**.

---

## Generating new art

**Cursor:** subject + scene block + image recipe.

**ChatGPT:** same prompt; export PNG → `publish/illustrations/` → `npm run publish`.

---

## Embedding in chapters

```markdown
![Thorn faces the goblin chief](/illustrations/monsters/goblin-chief.png)

*The goblin chief raised his rusty blade.*
```

Optional cover plate in frontmatter: `coverIllustration: "/illustrations/ch03-cover.png"`
