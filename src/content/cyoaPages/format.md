---
title: "CYOA format (simple)"
order: 2
summary: "Designed to be readable by humans and easy to parse into a game graph."
published: true
---
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
- Choices use the exact phrase `turn to **N**` “turn to 1 to begin again”).

```markdown
**Combat:** `goblin-road-ambush` — if you win, turn to **8**. If you are defeated, turn to **90**.
``` defeat, jump to the named passages.

Optional flags after combat can be noted in prose (“You take the shield”) — a game engine may track inventory separately later.

```markdown
**Gain:** Fallcrest shield
**Gain:** Ethium Stone
**Meet:** Garnel Stoneblender
**Flag:** map-seen-by-homunculus
``` quest state. Prose should still make sense without them.

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
