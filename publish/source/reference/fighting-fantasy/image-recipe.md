# Image recipe

**Canonical prompt** for Fighting Fantasy–style plates.

**Location:** `publish/source/reference/fighting-fantasy/image-recipe.md`  
**Companion docs:** [`illustration-style.md`](../../illustration-style.md) · [`character-illustration-refs.md`](../character-illustration-refs.md)

When generating: use the **full prompt** below, or swap the scene block for another subject.

---

## Character source images (always required)

If the scene includes **any party member or recurring NPC**, you **must** attach their source images before generating. Do not invent faces, builds, or costumes.

1. Open [`character-illustration-refs.md`](../character-illustration-refs.md).
2. Collect the **portrait path** for every character in the scene.
3. Add any relevant **ink scene plate** for group composition or Loki.
4. Pass all paths as `reference_image_paths` (Cursor) or attach manually (ChatGPT).
5. Prompt must include: *"Match character designs exactly from the attached reference images. Render as black ink on white."*

**Party:** Thorn, Derek, Dave, Nibbles, Loki — see character refs.  
**NPCs:** Tobbs, Mara, Murgaddin — see character refs.

Scenes with **only monsters, items, or landscapes** do not need character portraits.

---

## Full prompt (copy-paste)

Highly detailed black ink illustration. Traditional dip-pen fantasy artwork on white paper, drawn by hand at the table — not digitally cleaned or vectorised. Slightly loose hand-drawn linework with visible pen strokes, natural wobble, and uneven line weight. Fine cross-hatching and stippling, but leave deliberate white space; do not over-fill every area. Classic early-1980s British fantasy gamebook interior illustration in the manner of Russ Nicholson. Full-page composition with a single dominant subject occupying around seventy percent of the page. Slightly imperfect perspective is fine. Occasional light sketch lines and a little visual noise are welcome. Ancient windswept atmosphere.

The scene is set on the Ethium Plateau: a broad, cracked stone landscape stretching to the horizon, scattered with shattered temples, broken arches, weathered monoliths, collapsed towers and remnants of a civilisation thousands of years old. The land is mostly flat with gentle rises and mesas rather than dramatic cliffs. Sparse scrub grows between broken flagstones. In the far distance a tiny dragon circles high in the sky, barely visible.

The dragonborn wizard stands confidently in the foreground holding a twisted wooden staff with a crystal set in living branches and an ancient spellbook. His ornate robes are covered with embroidered geometric patterns. His scales, clothing and equipment are rendered with meticulous pen-and-ink detail. The background remains richly illustrated but clearly secondary to the figure.

Crisp black linework only. No colour. No greyscale. No digital painting. No soft shading. No engraving effect. No sterile computer-perfect lines. White paper background.

---

## Hand-drawn feel (required)

The original Fighting Fantasy books were inked by hand. **Every generation should read as hand-drawn**, not as polished digital art. Include these qualities in the prompt:

| Do | Avoid |
|----|--------|
| Uneven line weight, pen wobble, loose hatching | Perfect symmetry, vector-clean edges |
| Slightly imperfect perspective | Rigid one-point perspective |
| Deliberate white space — don't shade everything | Grey fills, airbrush, smooth gradients |
| Occasional sketch lines, a little mess | Over-rendered, hyper-detailed sterility |
| Varied hatch direction, visible pen strokes | Engraving effect, woodcut look |

**Add to every prompt:** *"Slightly loose hand-drawn linework, visible pen strokes with natural variation, drawn by hand not computer."*

---

## Scene block template (replace for other images)

Keep the **opening paragraph** (ink + hand-drawn style) and **linework constraints** (last paragraph). Replace the two middle paragraphs:

> The scene is set in [location]. [Landscape and atmosphere — 2–3 sentences.]
>
> [Subject] [pose and action]. [Costume, gear, or creature detail.] The background remains richly illustrated but clearly secondary to the figure.

If characters appear, add:

> Match [names] exactly from the attached character reference images.

---

## Generation checklist

1. Scene from `publish/chapters/` — who is in the frame?
2. **Character refs attached?** (required if party/NPCs present)
3. Full prompt + scene block + hand-drawn lines
4. `process-cover-art.py` once on the PNG
5. Save to `publish/illustrations/scenes/` → `npm run publish`

---

## Site display — transparent parchment

**Generate on white paper** (models need a light background). **Before publishing**, strip the paper so ink sits on the site's parchment (`#f4eeda`):

```bash
python3 scripts/process-cover-art.py publish/illustrations/scenes/your-scene.png
python3 scripts/process-cover-art.py publish/illustrations/maps/your-map.png
```

The script turns near-white pixels transparent. Keep an `-opaque.png` backup of the original.

**Run only once per file.** Re-processing an already-transparent PNG turns cleared pixels black.

**On the website**, images use `background: transparent` — never a white or off-white box. Chapter plates keep a thin ink frame; cover art and maps are borderless, like the title image.

| Do | Avoid |
|----|--------|
| Black ink on **white** in the source file | Grey washes, coloured backgrounds |
| Run **process-cover-art.py** before `npm run publish` | Shipping opaque white rectangles |
| Pure linework PNG with alpha | JPEG (no transparency) for ink plates |
| Attach **character refs** for party/NPC scenes | Inventing new character designs |

Chapter pages apply **grayscale + contrast** in CSS only. Source art stays black ink.
