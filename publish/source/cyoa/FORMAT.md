# CYOA format (simple)

Designed to be readable by humans and easy to parse into a game graph.

## Passages

Each passage is a Markdown heading with a numeric ID:

```markdown
## 12

You stand at the mouth of the cave. Smoke trickles from the dark.

*If you send Peggy ahead to scout, turn to **13**.*
*If you rush straight in, turn to **14**.*
*If you wait and watch the entrance, turn to **15**.*
```

Rules:

- Passage IDs are unique integers within a book.
- Choices use the exact phrase `turn to **N**` (bold number) so a parser can find links.
- Start at passage **1**.
- Ending passages have no choices (or only “The End” / “turn to 1 to begin again”).

## Combat

When a fight starts, use a combat directive:

```markdown
**Combat:** `goblin-road-ambush` — if you win, turn to **8**. If you are defeated, turn to **90**.
```

- The backtick id matches an entry in [`encounters.md`](encounters.md).
- Resolve the fight with your open D&D ruleset (or a simplified tabletop procedure).
- On victory / defeat, jump to the named passages.

Optional flags after combat can be noted in prose (“You take the shield”) — a game engine may track inventory separately later.

## Special directives (optional)

```markdown
**Gain:** Fallcrest shield
**Gain:** Ethium Stone
**Meet:** Garnel Stoneblender
**Flag:** map-seen-by-homunculus
```

Use these when you want a machine to update inventory / quest state. Prose should still make sense without them.

## Suggested JSON shape (for your game repo)

When you import, each passage can become:

```json
{
  "id": 12,
  "text": "You stand at the mouth of the cave...",
  "choices": [
    { "label": "Send Peggy ahead to scout", "to": 13 },
    { "label": "Rush straight in", "to": 14 },
    { "label": "Wait and watch", "to": 15 }
  ],
  "combat": null
}
```

Or with combat:

```json
{
  "id": 7,
  "text": "...",
  "combat": {
    "id": "goblin-road-ambush",
    "win": 8,
    "lose": 90
  },
  "choices": []
}
```

## Numbering ranges (Book 1)

| Range | Arc |
|-------|-----|
| 1–29 | North Road & goblin cave |
| 30–49 | Fallcrest & Blue Moon |
| 50–64 | Old manor |
| 65–84 | River road, waterfall, plateau |
| 85–109 | Ruined tower, Garnel, pool |
| 110–120 | Endings & failures |
