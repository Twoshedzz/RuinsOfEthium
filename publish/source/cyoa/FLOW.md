# Book 1 — choice flow

Diagrams of [`book-01-the-road-to-ethium.md`](book-01-the-road-to-ethium.md).  
Defeat in most combats goes to **110** (omitted from detail graphs to reduce clutter). Blue Moon lose → **111**.

---

## Overview (arcs)

```mermaid
flowchart TD
  Start["1 Start — North Road"] --> Road["2–20 Goblin cave"]
  Start -->|safer track| E3["3 END quiet road"]

  Road -->|skip cave| E9["9 END no map"]
  Road -->|rescue Mara| Fallcrest["30–40 Fallcrest / Blue Moon"]

  Fallcrest -->|refuse Ethium| E35["35 END refused"]
  Fallcrest -->|lose map fight| E111["111 END map lost"]
  Fallcrest -->|surrender map / skip manor| Road2["65–74 River & plateau"]
  Fallcrest -->|manor job| Manor["50–57 Old manor"]

  Manor --> Road2
  Road2 --> Tower["85–97 Ruined tower & pool"]

  Tower -->|rest / dig then rest| E120["120 END Book 1 — pool camp"]
  Tower -->|return Fallcrest| E97["97 END Book 1 — return"]

  CombatLose["Most combat defeats"] --> E110["110 END defeated"]
```

---

## North Road & goblin cave (1–20)

```mermaid
flowchart TD
  P1["1 North Road"] -->|dangerous road| P2["2 Fake gold lure"]
  P1 -->|farm track| P3["3 END"]

  P2 -->|take coins| P4["4 Combat ambush"]
  P2 -->|leave coins| P5["5 Combat ambush"]
  P2 -->|bait trap| P6["6 Combat ambush + advantage"]

  P4 -->|win| P7["7 After fight"]
  P5 -->|win| P7
  P6 -->|win| P7

  P7 -->|chase cave| P8["8 Cave mouth"]
  P7 -->|to Fallcrest| P9["9 END"]

  P8 -->|Peggy scout| P10["10 Fork intel"]
  P8 -->|rush| P11["11 → 10"]
  P8 -->|wait| P12["12 → 10"]

  P11 --> P10
  P12 --> P10

  P10 -->|east| P13["13 Boss cavern"]
  P10 -->|west| P14["14 Dice fight"]
  P10 -->|west then east| P15["15 Dice → 19 → 13"]
  P10 -->|split| P16["16 → 13 + 14 → 17"]

  P13 -->|win| P17["17 Free Mara"]
  P14 -->|win| P18["18 Late to boss → 13"]
  P15 --> P19["19 → 13"]
  P16 -->|wins| P17
  P18 --> P13
  P19 --> P13

  P17 -->|escort now| P30["30 Fallcrest"]
  P17 -->|loot first| P20["20 → 30"]
  P20 --> P30
```

---

## Fallcrest & Blue Moon (30–40)

```mermaid
flowchart TD
  P30["30 Fallcrest"] -->|straight to Blue Moon| P31["31 Homunculus sees Derek"]
  P30 -->|afternoon errands| P32["32 Shops first"]

  P31 --> P33["33 Tobbs + map"]
  P32 --> P33

  P33 -->|agree Ethium| P34["34 Hammers demand map"]
  P33 -->|refuse| P35["35 END"]

  P34 -->|fight| P36["36 Tavern brawl"]
  P34 -->|surrender| P37["37 Map gone"]
  P34 -->|flee| P38["38 → 36"]

  P38 --> P36
  P36 -->|win| P39["39 Murgaddin"]
  P36 -->|lose| P111["111 END"]

  P37 -->|still go blind| P65["65 River road"]
  P37 -->|give up| P35

  P39 -->|manor job| P50["50 Manor"]
  P39 -->|skip to Ethium| P40["40 → 65"]
  P40 --> P65
```

---

## Old manor (50–57)

```mermaid
flowchart TD
  P50["50 Manor entrance"] -->|scout| P51["51 Cellar combat"]
  P50 -->|storm| P52["52 Cellar combat"]

  P51 -->|win| P53["53 Rulden"]
  P52 -->|win| P53

  P53 -->|win| P54["54 Loot + tomb doors"]

  P54 -->|open tomb| P55["55 Skeletons"]
  P54 -->|leave sealed| P56["56 Murgaddin + letter"]

  P55 -->|win| P57["57 Loot → 56"]
  P57 --> P56

  P56 --> P65["65 River road"]
```

---

## River road, waterfall, plateau (65–74)

```mermaid
flowchart TD
  P65["65 Wolves"] -->|win| P66["66 Axe beaks"]
  P66 -->|win| P67["67 Cloaked watcher"]
  P67 --> P68["68 Waterfall fork"]

  P68 -->|split climb| P69["69 Harder fight"]
  P68 -->|long ledge together| P70["70 Easier fight"]
  P68 -->|scramble together| P71["71 Harder fight"]

  P69 -->|win| P72["72 Plateau + dragon"]
  P70 -->|win| P72
  P71 -->|win| P72

  P72 -->|ruined tower| P85["85 Tower"]
  P72 -->|castle first| P73["73 → shrine → 85"]
  P72 -->|dragon drop| P74["74 Half-goblin → 85"]

  P73 --> P85
  P74 --> P85
```

---

## Ruined tower & pool (85–120)

```mermaid
flowchart TD
  P85["85 Camp ambush"] -->|win| P86["86 Climbing kit"]

  P86 -->|quiet| P87["87 Sludge glint"]
  P86 -->|challenge| P88["88 Alert below"]

  P87 -->|take shiny| P89["89 Zombies"]
  P87 -->|leave it| P91["91 Garnel room"]

  P88 -->|still poke sludge| P89
  P88 -->|skip sludge| P92["92 Alert Garnel fight"]

  P89 -->|win| P90["90 Rune axe"]
  P90 --> P91

  P91 -->|win| P93["93 Garnel joins"]
  P92 -->|win| P93

  P93 --> P94["94 Pool wizard"]
  P94 -->|win| P95["95 Vaelum Thrae"]

  P95 -->|rest| P120["120 END pool camp"]
  P95 -->|dig now| P96["96 → 120"]
  P95 -->|return Fallcrest| P97["97 END return"]

  P96 --> P120
```

---

## Main “canonical” path (novel-like)

If you roughly follow the published chapters:

**1 → 2 → 5/6 → 7 → 8 → 10 → 16 → 17 → 30 → 32 → 33 → 34 → 36 → 39 → 50 → 51 → 53 → 54 → 55 → 56 → 65 → 68 → 69 → 72 → 85 → 87 → 89 → 91 → 93 → 94 → 95 → 120**
