# Art Style Brief & Canonical Depiction Rules — The Ruins of Ethium

This document defines the visual style standards, canonical character visual rules, monster reference designs, and AI image generation briefs for *The Ruins of Ethium*.

---

## 1. Canonical Party Member Depictions

If a scene is instructed to include the party (or specific party members), accurately depict them using their canonical descriptions below based on their canonical portraits in `publish/illustrations/portraits/`. **Party members do NOT all need to be included by default in every scene.**

| Character | Species / Archetype | Key Visual Features & Equipment |
| :--- | :--- | :--- |
| **Dave** | **Golden Dragonborn Wizard** | Golden scales, dragon head, horns, snout, long wizard robes, leather spellbook, wooden staff tipped with a glowing green orb. *NEVER depict Dave as a human wizard.* |
| **Peggy** | **Pseudodragon Familiar** | Tiny coppery/gold pseudodragon, house-cat-sized, leathery dragon wings, long barbed tail, bright eyes, perches on Dave's shoulder or rests in a pocket dimension. *NEVER depict Peggy as an owl.* |
| **Derek** | **Dwarf Cleric** | Completely **bald head**, round wire-rimmed spectacles, long braided red beard, heavy plate armour, holding a warhammer AND a radiant sun-emblem heater shield. |
| **Thorn** | **Half-Orc / Male Warrior** | Short dark undercut hairstyle, rugged face, pale blue-grey skin, fur mantle over leather/chainmail armor, holding a single-headed battleaxe in one hand AND a round shield with a fallcrest emblem (A roaring lion) on his other arm.  |
| **Nibbles** | **Red Dragonborn / Kobold Rogue** | Small red scales, horns, bright green eyes, grinning maw, dark hooded cloak, studded leather gear, holds a magical short sword and a glowing dagger as his weapons. |
| **Loki** | **Hunting Dog Companion** | Sturdy wolfhound / hunting dog with a brave, alert posture. |
| **Garnel** | **Gnome Ally & Researcher** | Short, scruffy-looking young adult gnome, wild mop of bright red hair sticking up in all directions, round spectacles, eyes darting nervously, carrying leather parchment folders, inkpot & quill, fine charcoal sketching pencils, brass lenses, and tinkering measuring devices. |

---

## 2. Canonical Monster Reference Designs

Canonical monster art references are stored in `publish/illustrations/monsters/`:

| Monster | Reference File | Visual Features & Anatomical Rules |
| :--- | :--- | :--- |
| **Quaggoth** | `publish/illustrations/monsters/quaggoth.jpg` | Hunched bipedal/knuckle-walking yeti-gorilla beast, shaggy fur, long ape arms with sharp claws, flat nosed and long evil and cruel looking face, pointed ears, small chin beard, sharp fangs in a wide grinning mouth. *NEVER depict as a wolf or canine.* |
| **Duergar** | `publish/illustrations/monsters/druegar.jpg`, `druegar 2.webp` | Dark grey/ash-skinned dark dwarves, wild white/pale beard, glowing pale eyes, spiked iron pauldrons, bone-reinforced heavy shields, and spiked warhammers. |
| **Goblin** | `publish/illustrations/monsters/goblin.png` | Lean, wiry green-skinned goblins with large pointed ears, sharp teeth, crude leather/scale armor, and jagged iron weapons. |

---

## 3. Chapter Art Brief (Internal Book Plates)

**Reference Folder:** `publish/source/inbox/illustration style/chapter art/`  

### Aesthetic & Technical Guidelines

- **Medium**: Pure 100% monochrome black dip-pen line drawing on a clean white background.
- **Line Art Technique**: Classic 1980s Fighting Fantasy gamebook interior style (by Russ Nicholson, Gary Chalk, Ian Miller).
  - **High-Contrast Chiaroscuro**: Deep, solid black filled shadow blocks (under tables, inside archways, deep cloak folds) contrasting against stark, un-inked white highlights.
  - **Contour Hatching**: Fine, curved parallel ink lines that wrap around 3D volumes (muscular limbs, draped robes, curved stone pillars, wooden table planks).
  - **Stippling & Texture**: Dense micro-dots and crosshatching for weathered skin, craggy faces, pitted iron, coarse fur, and wood grain.
  - **Dynamic Line Weight**: Strong, heavy black structural outlines combined with delicate, hair-thin internal detail hatching.
  - **Hand-Drawn Authenticity**: Visible pen strokes with natural line variation, slight ink wobble, and organic negative space.
- **Textural Precision**: Expressive, craggy details — leather straps, brass buckles, rivets, fur mantles, chainmail links, stone cracks, and gnarled wood.
- **Framing**: Natural environment framing (stone archways, doorway rubble, pillars) with open white space.

### Mandatory Negative Constraints

- ❌ **NO Color**: Pure black ink on white only. NO color accents, NO colored ink shading.
- ❌ **NO Parchment Overlays**: NO beige, yellowed, or textured paper overlays (pure white background only).
- ❌ **NO Artificial Borders**: NO decorative outer frames, black boxes, or rectangular borders.
- ❌ **NO Stalactites in Carved Halls**: Ancient dwarven halls feature carved stone masonry ceilings, not cave stalactites.

---

## 4. Cover Art Brief (Full-Color Art)

**Reference Folder:** `publish/source/workspace/illustration style/cover art/`  
*(Reference styles: Jeff Easley D&D Red Box cover `DandD-Cover-Crop.webp`, Les Edwards `cover1.jpg`, Chris Achilleos `Warlock_25th.jpg`)*

### Aesthetic & Technical Guidelines

- **Medium**: Clean, painterly 1980s fantasy oil and acrylic painting style with bold brushwork and clean form rendering.
- **Clarity & Separation**: Clear silhouette separation between characters, monsters, and environment. Enemies and goblins MUST have distinct, readable shapes and color contrast — NEVER blending or visually merging into background foliage or dark shadows.
- **Lighting & Color**: Dramatic high-contrast focal lighting, warm glowing firelight or spell effects, vibrant gold accents, deep emeralds, and warm rich tones.
- **Usage**: Homepage cover banner, CYOA book covers (`publish/illustrations/cover/`), and publishable module packs.

---

## 5. Master AI Generator Prompts

### Chapter Art Master Prompt (Black & White Pen-and-Ink)

```text
A 100% pure black and white pen and ink illustration plate in the classic 1980s Fighting Fantasy gamebook interior art style of Russ Nicholson. 

ART STYLE & TECHNIQUE: Traditional dip-pen ink artwork on a clean white background. High-contrast chiaroscuro with solid black shadow blocks and stark white highlights. Fine contour hatching wrapping around 3D forms, delicate stippling, micro-dot shading, and craggy woodcut linework. Hand-drawn feel with variable line weights, heavy outlines, and hair-thin interior textures.

NEGATIVE CONSTRAINTS: ABSOLUTELY ZERO COLOR, NO greyscale washes, NO parchment paper background, NO decorative border frames, NO cave stalactites in carved dwarven halls. 3:2 landscape aspect ratio.

CANONICAL PARTY MEMBER DESCRIPTIONS (include ONLY those requested for the scene):
- Dave: Golden Dragonborn wizard with reptilian dragon head, gold scales, horns, wearing long orange/terracotta wizard robes with blue lining, and holding a wooden staff with a glowing green orb. Peggy, a tiny coppery pseudodragon familiar with leathery wings, perches on his shoulder.
- Derek: Noble dwarf cleric with a completely BALD head, round wire-rimmed spectacles, long braided red beard, heavy plate armor, holding a warhammer AND a radiant sun-emblem heater shield.
- Thorn: Half-Orc male warrior with short dark undercut hair, pale blue-grey skin, fur mantle over leather armor, holding a single-headed battleaxe AND a round shield with a Fallcrest lion emblem.
- Nibbles: Small red dragonborn/kobold rogue in a dark hooded cloak holding a magical short sword and a glowing dagger.
- Loki: Sturdy wolfhound / hunting dog companion.

CHAPTER CONTEXT & NARRATIVE:
Always cross-reference the chapter prose in `publish/chapters/` for the exact scene context, environment, lighting, and character actions.

SCENE DESCRIPTION:
[Insert specific scene location, characters, and action derived from the chapter text here]
```

### Cover Art Master Prompt (Full-Color Painting)

```text
A clean, painterly full-color 1980s fantasy gamebook cover art oil painting in the iconic style of Jeff Easley (D&D Red Box) and Les Edwards (Forest of Doom). 

STYLE & TECHNIQUE: Bold oil/acrylic brushwork with clean form rendering and distinct, crisp character silhouettes. High contrast color separation — monsters and goblins stand out sharply against the background, with clearly defined shapes and skin tones, NEVER blending or merging visually into background foliage or dark shadows. Dramatic focal lighting, warm glowing magical highlights, deep cast shadows, and rich vibrant gold and crimson tones. 16:9 widescreen or 3:2 aspect ratio.

CANONICAL PARTY MEMBERS IN HEROIC POSES:
- Thorn: Male Half-Orc warrior with short dark undercut hair, pale blue-grey skin, fur mantle over leather armor, raising a single-headed battleaxe and round Fallcrest lion-emblem shield.
- Loki: Sturdy wolfhound / hunting dog companion standing loyally behind Thorn with a brave, alert, growling posture.
- Dave: Golden Dragonborn wizard in orange/terracotta robes with blue lining raising a wooden staff with a glowing green orb, with tiny pseudodragon Peggy on his shoulder.
- Derek: Bald dwarf cleric with round wire-rimmed spectacles, braided red beard, plate armor, wielding a warhammer and radiant sun kite shield.
- Nibbles: Small red dragonborn rogue in dark hooded cloak holding glowing daggers.

SCENE / ENVIRONMENT:
Heroic adventure battle scene set at an overgrown ancient stone ruins site in the jungle, with dark forces advancing from the shadows.
```
