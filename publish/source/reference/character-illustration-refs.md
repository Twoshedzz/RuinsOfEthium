# Character illustration references

**Always attach these source images** when generating chapter plates that include party members or recurring NPCs. Convert colour portraits to **black ink on white** in the final plate — match face, build, gear, and silhouette from the refs; do not invent new designs.

When generating in Cursor, pass paths via `reference_image_paths`. Prefer **portraits first** for identity; add **ink scene plates** for group composition and Loki.

---

## Active party

| Character | Role | Primary reference | Ink scene reference (costume / group) |
|-----------|------|-------------------|--------------------------------------|
| **Thorn Axehand** | Human fighter | `publish/illustrations/portraits/thorn-axehand.png` | `publish/illustrations/scenes/prologue-party-north-road-opaque.png` |
| **Derek** | Dwarf cleric | `publish/illustrations/portraits/derek.jpg` | `publish/illustrations/scenes/prologue-party-north-road-opaque.png` |
| **Dave** | Copper dragonborn wizard (6′7″, tallest) | `publish/illustrations/portraits/dave-wizard.png` | `publish/illustrations/scenes/ch01-goblin-cave-dice-fight-opaque.png` (tall robed dragonborn) |
| **Nibbles McPicklepants** | Dragonborn rogue (mid-height) | `publish/illustrations/portraits/nibbles.jpg` | `publish/illustrations/scenes/ch01-goblin-cave-dice-fight-opaque.png` (armoured dragonborn) |
| **Loki** | Thorn's scruffy guard dog | — | `publish/illustrations/scenes/prologue-party-north-road-opaque.png` |

### Visual notes (party)

- **Thorn:** muscular human, short dark hair, fur-trimmed leather. **Loadout:** one-handed battle axe **and** the round Fallcrest shield (given to him by Mara) — axe in one hand, shield in the other. Rendered this way on the book cover. Not a two-handed/double-headed axe.
- **Derek:** stout dwarf, bald, round spectacles, long braided beard, plate armour, round shield with sunburst, warhammer.
- **Dave:** copper-scaled dragonborn, exceptionally tall, ornate wizard robes, spellbook. Always tallest in frame.
- **Nibbles:** dragonborn rogue, leather armour, cloak, dagger. Red scales in colour ref — render as ink texture. **Height:** between Derek and Thorn — taller than Derek (dwarf), shorter than Thorn. Not tiny.
- **Loki:** wolf-like scruffy dog, not a golden retriever.

**Party height order (tallest → shortest):** Dave (by far the tallest) › Thorn › Nibbles › Derek (dwarf, shortest).

---

## Recurring NPCs

| Character | Primary reference | Notes |
|-----------|-------------------|-------|
| **Tobbs Quickfoot** | `publish/illustrations/portraits/tobbs.png` | Halfling apprentice; also left panel of `npc-tobbs-mara-murgaddin.png` |
| **Mara** | `publish/illustrations/portraits/npc-tobbs-mara-murgaddin.png` (centre panel) | Young woman, red hair. **Novel costume:** courier travel clothes, leather satchel — not plate armour unless the scene calls for it |
| **Sergeant Murgaddin** | `publish/illustrations/portraits/npc-tobbs-mara-murgaddin.png` (right panel) | Older dwarf, heavy beard, battered armour |

---

## Group ink plates (composition)

Use when several party members appear together:

| Plate | Path | Use for |
|-------|------|---------|
| Prologue — North Road | `publish/illustrations/scenes/prologue-party-north-road-opaque.png` | Full party walking; Loki; relative heights |
| Ch 1 — dice fight | `publish/illustrations/scenes/ch01-goblin-cave-dice-fight-opaque.png` | Dave + Nibbles action poses |
| Ch 1 — boss fight | `publish/illustrations/scenes/ch01-goblin-boss-fight-opaque.png` | Thorn, Derek, Mara (captive), combat gear |

---

## Generation checklist

1. Read scene in `publish/chapters/`.
2. Collect **every character** in the scene from the tables above.
3. Attach **all** their portrait paths + relevant ink group plate to `reference_image_paths`.
4. Prompt: Fighting Fantasy ink recipe + scene block + *"Match character designs exactly from reference images"*.
5. `process-cover-art.py` once → `publish/illustrations/scenes/` → `npm run publish`.

**Not in campaign yet:** Willow — `publish/illustrations/portraits/willow.png` — do not use in published chapter art.

---

## Site paths (embedding only)

Portraits on the live site: `/illustrations/portraits/…` — same filenames as `publish/illustrations/portraits/`.
