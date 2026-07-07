# Image recipe

**Canonical prompt** for Fighting Fantasy–style plates. Filed from `inbox/image recipe.md`.

When generating: use the **full prompt** below, or swap the scene block for another subject.

---

## Full prompt (copy-paste)

Highly detailed black ink illustration. Traditional dip-pen fantasy artwork on white paper. Fine cross-hatching and stippling with varied line weight throughout. Classic early-1980s British fantasy gamebook interior illustration. Full-page composition with a single dominant hero occupying around seventy percent of the page. Every texture rendered with intricate pen work. Ancient windswept atmosphere.

The scene is set on the Ethium Plateau: a broad, cracked stone landscape stretching to the horizon, scattered with shattered temples, broken arches, weathered monoliths, collapsed towers and remnants of a civilisation thousands of years old. The land is mostly flat with gentle rises and mesas rather than dramatic cliffs. Sparse scrub grows between broken flagstones. In the far distance a tiny dragon circles high in the sky, barely visible.

The dragonborn wizard stands confidently in the foreground holding a twisted wooden staff with a crystal set in living branches and an ancient spellbook. His ornate robes are covered with embroidered geometric patterns. His scales, clothing and equipment are rendered with meticulous pen-and-ink detail. The background remains richly illustrated but clearly secondary to the figure.

Crisp black linework only. No colour. No greyscale. No digital painting. No soft shading. No engraving effect. White paper background.

---

## Of note — hand-drawn authenticity

The original Fighting Fantasy books were drawn by hand, so they contain:

- Slightly imperfect perspective
- Uneven line weights
- Loose cross-hatching
- Occasional sketch lines
- Areas where the artist deliberately left white space
- More visual "noise"

Ironically, those imperfections are what make them feel authentic. Add *"slightly loose hand-drawn linework"* and *"visible pen strokes with natural variation"* to steer models away from a sterile, computer-perfect result.

---

## Scene block template (replace for other images)

Keep the **core prompt** (first paragraph) and **linework constraints** (last paragraph). Replace the two middle paragraphs:

> The scene is set in [location]. [Landscape and atmosphere — 2–3 sentences.]
>
> [Subject] [pose and action]. [Costume, gear, or creature detail.] The background remains richly illustrated but clearly secondary to the figure.

---

## Site display — transparent parchment

**Generate on white paper** (models need a light background). **Before publishing**, strip the paper so ink sits on the site's parchment (`#f4eeda`):

```bash
python3 scripts/process-cover-art.py publish/illustrations/maps/your-map.png
python3 scripts/process-cover-art.py publish/illustrations/cover/book-cover-ethium-battle.png
```

The script turns near-white pixels transparent. A backup of the original cover is saved once as `book-cover-ethium-battle-opaque.png`.

**Run only once per file.** Re-processing an already-transparent PNG turns cleared pixels black.

**On the website**, images use `background: transparent` — never a white or off-white box. Chapter plates keep a thin ink frame; cover art and maps are borderless, like the title image.

| Do | Avoid |
|----|--------|
| Black ink on **white** in the source file | Grey washes, coloured backgrounds |
| Run **process-cover-art.py** before `npm run publish` | Shipping opaque white rectangles |
| Pure linework PNG with alpha | JPEG (no transparency) for ink plates |

Chapter pages apply **grayscale + contrast** in CSS only. Source art stays black ink.
