# Art Style Brief & Canonical Depiction Rules — The Ruins of Ethium

This document defines the visual style standards, canonical character visual rules, monster reference designs, and AI image generation briefs for *The Ruins of Ethium*.

---

## 1. Canonical Party Member Depictions

Unless explicitly instructed otherwise by the user, **all scene illustrations MUST accurately depict the four core party members** based on their canonical portraits in `publish/illustrations/portraits/`:

| Character | Species / Archetype | Key Visual Features & Equipment |
| :--- | :--- | :--- |
| **Dave** | **Golden Dragonborn Wizard** | Golden scales, dragon head, horns, snout, long wizard robes, leather spellbook, wooden staff tipped with a glowing green orb. *NEVER depict Dave as a human wizard.* |
| **Derek** | **Dwarf Cleric** | Completely **bald head**, round wire-rimmed spectacles, long braided red beard, heavy plate armour, holding a warhammer AND a radiant sun-emblem heater shield. |
| **Thorn** | **Goliath / Male Warrior** | Short dark undercut hairstyle, rugged face, pale/purple-tinted skin, fur mantle over leather/chainmail armor, holding a single-headed battleaxe in one hand AND a round shield on his other arm. |
| **Nibbles** | **Red Dragonborn / Kobold Rogue** | Small red scales, horns (with a small pouch tied to one horn), bright green eyes, grinning maw, dark hooded cloak, studded leather gear, holding glowing daggers. |
| **Loki** | **Hunting Dog Companion** | Sturdy wolfhound / hunting dog with a brave, alert posture. |

---

## 2. Canonical Monster Reference Designs

Canonical monster art references are stored in `publish/illustrations/monsters/`:

| Monster | Reference File | Visual Features & Anatomical Rules |
| :--- | :--- | :--- |
| **Quaggoth** | `publish/illustrations/monsters/quaggoth.jpg` | Hunched bipedal/knuckle-walking yeti-gorilla beast, shaggy fur, long ape arms with sharp claws, broad flat ape face, pointed ears, small chin beard, sharp fangs in a wide grinning mouth. *NEVER depict as a wolf or canine.* |
| **Duergar** | `publish/illustrations/monsters/druegar.jpg`, `druegar 2.webp` | Dark grey/ash-skinned dark dwarves, wild white/pale beard, glowing pale eyes, spiked iron pauldrons, bone-reinforced heavy shields, and spiked warhammers. |
| **Goblin** | `publish/illustrations/monsters/goblin.png` | Lean, wiry green-skinned goblins with large pointed ears, sharp teeth, crude leather/scale armor, and jagged iron weapons. |

---

## 3. Chapter Art Brief (Internal Book Plates)

**Reference Folder:** `publish/source/inbox/illustration style/chapter art/`  
*(Key reference examples: `fighting-fantasy-russ-nicholson.jpg`, `titanruss.png`, `Fighting-Fantasy-10.jpg`)*

### Aesthetic & Technical Guidelines
- **Medium**: Pure 100% monochrome black dip-pen line drawing on a clean white background.
- **Line Art Technique**: Classic 1980s Fighting Fantasy gamebook style (by Russ Nicholson / Gary Chalk / Ian Miller). Heavy use of fine stippling, tiny ink dots, delicate crosshatching, and woodcut linework.
- **Textural Precision**: Highly detailed clothing, leather straps, buckles, rivets, fur mantles, chainmail links, stone grain, and wood textures.
- **Framing**: Natural environment framing (stone arches, doorway rubble, pillars) with organic negative space.

### Mandatory Negative Constraints
- ❌ **NO Color**: Pure black ink on white only. NO color accents, NO colored ink shading.
- ❌ **NO Parchment Overlays**: NO beige, yellowed, or textured paper overlays.
- ❌ **NO Artificial Borders**: NO decorative outer frames, black boxes, or rectangular borders.
- ❌ **NO Stalactites in Carved Halls**: Ancient dwarven halls feature carved stone masonry ceilings, not cave stalactites.
- ❌ **Accurate Monster Anatomy**: Quaggoths are bipedal ape-like / yeti-like gorilla beasts with shaggy fur, flat ape faces, and sharp claws — NEVER wolves or canines.

---

## 4. Cover Art Brief (Full-Color Art)

**Reference Folder:** `publish/source/inbox/illustration style/cover art/`  
*(Key reference examples: `cover1.jpg`, `Warlock_25th.jpg`, `DandD-Cover-Crop.webp`)*

### Aesthetic & Technical Guidelines
- **Medium**: Rich, painterly 1980s fantasy oil/acrylic painting style (classic Fighting Fantasy / AD&D 1st Edition cover art by Les Edwards, Chris Achilleos, Ian Miller).
- **Lighting & Color**: Dramatic high-contrast lighting, warm firelight glows, vibrant gold accents, deep emerald greens, and rich crimson hues.
- **Usage**: Homepage cover banners, CYOA book covers (`publish/illustrations/cover/`), and publishable module packs.

---

## 5. Master AI Generator Prompts

### Chapter Art Master Prompt (Black & White Pen-and-Ink)
```text
100% pure black and white pen and ink illustration plate, exactly matching the line art, stippling, and crosshatching style of classic 1980s Fighting Fantasy books by Russ Nicholson (as seen in ch01-goblin-boss-fight.png). Pure black ink drawing on a clean white background. ABSOLUTELY ZERO COLOR, NO parchment paper background, NO decorative border frames, NO cave stalactites in carved dwarven halls. 3:2 landscape aspect ratio.

COMPOSITION & CHARACTERS:
- Dave: Golden Dragonborn wizard with dragon head, scales, horns, and snout, wearing wizard robes, raising a wooden staff with a glowing orb.
- Derek: Noble bald dwarf cleric with round wire-rimmed spectacles, braided beard, plate armor, holding a warhammer in one hand AND a sun-emblem heater shield in his other hand.
- Thorn: Male warrior with short dark undercut hair and fur mantle over armor, holding a single-headed battleaxe in one hand AND a round shield on his other arm.
- Nibbles: Small red dragonborn / kobold rogue in a dark hooded cloak crouching on stone rubble holding a dagger.
```

### Cover Art Master Prompt (Full-Color Painting)
```text
Full-color 1980s Fighting Fantasy gamebook cover art painting in the classic style of Les Edwards and Chris Achilleos. Rich oil/acrylic texture, dramatic cinematic lighting, deep shadows, vibrant golds and crimson highlights. Depicting the adventurer party in a heroic stand against dark forces.
```
