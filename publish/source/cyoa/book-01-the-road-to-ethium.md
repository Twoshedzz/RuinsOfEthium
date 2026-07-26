# Book 1 — The Road to Ethium

*A choose-your-own-adventure reworking of the published story so far.*  
*You are **Thorn Axehand**, a blue-skinned half-orc fighter. Your companions are **Derek** (dwarf cleric), **Dave** (copper dragonborn wizard), **Nibbles** (dragonborn rogue), and **Loki** (your scruffy guard dog).*

Start at passage **1**.

See [`FORMAT.md`](FORMAT.md) for markup rules and [`encounters.md`](encounters.md) for combat ids.

---

## 1

The North Road winds through the forests of northern Almenor — wolves, bandits, and old ruins. Most travellers take safer paths. You and your companions have chosen this one.

None of you have ever heard the name *Ethium*.

Derek adjusts his shield. Dave clutches a spellbook that smells faintly of potatoes. Nibbles is already watching the trees for shiny things. Loki trots at your heel, ears up.

*If you press on along the dangerous North Road, turn to **2**.*
*If you turn aside onto a quieter farm track toward Fallcrest, turn to **3**.*

---

## 2

The road grows quieter. Birdsong thins. Near a fallen log, something glints in the leaf-mould — coins, bright as new gold.

Loki growls low in his throat.

Nibbles whispers, “Shiny.”

*If you take the coins, turn to **4**.*
*If you leave them and keep walking, turn to **5**.*
*If you pretend to take them, ready for a trap, turn to **6**.*

---

## 3

The farm track is peaceful. You reach Fallcrest without goblin trouble — but you never find Mara, never see her map, and never learn why the stones of Ethium are waking.

**The End** (quiet road). To begin again, turn to **1**.

---

## 4

The coins are painted wood. Arrows hiss from the trees. Goblins drop from the branches, shrieking about a “bargain” you never agreed to.

**Combat:** `goblin-road-ambush` — if you win, turn to **7**. If you are defeated, turn to **110**.

---

## 5

You leave the lure. The goblins attack anyway — patience was never their strength.

**Combat:** `goblin-road-ambush` — if you win, turn to **7**. If you are defeated, turn to **110**.

---

## 6

You crouch as if to scoop the coins. When the first goblin leaps, your axe is already moving. Loki hits like a thrown cloak of fur and teeth.

**Combat:** `goblin-road-ambush` — if you win, turn to **7**. If you are defeated, turn to **110**. *(You had advantage on the first round — note it for your ruleset.)*

---

## 7

The survivors scatter into the woods. On the ground: blood, torn cloth, and a battered shield stamped with Fallcrest’s falcon-and-tower.

Derek frowns. “A guard’s escort. Recently.”

Smoke rises from a cleft in the hillside ahead — a cave mouth.

*If you chase the goblins into the cave, turn to **8**.*
*If you take the shield and continue toward Fallcrest, turn to **9**.*

---

## 8

The cave mouth smells of smoke and damp stone. A bored goblin lookout has wandered off his post. Soft voices echo deeper in.

Dave’s pseudodragon, Peggy, twitches on his shoulder.

*If you send Peggy to scout, turn to **10**.*
*If you rush straight in together, turn to **11**.*
*If you wait and watch the entrance, turn to **12**.*

---

## 9

You reach Fallcrest safely. Without Mara’s map, Tobbs has less to show you, and the Hammers never come for what you never found. Ethium remains a rumour on the cliffs.

**The End** (road not taken). To begin again, turn to **1**.

---

## 10

Peggy returns with a picture in Dave’s mind: fighters and dice-clatter to the **west**; fresher tracks and a muffled cry to the **east**.

Dave was meant to keep watch outside. He lasts almost a minute before panic sends him after you.

*If you take the eastern passage (prisoner?), turn to **13**.*
*If you take the western passage (voices and dice), turn to **14**.*
*If you stay together and clear west first, then east, turn to **15**.*
*If you split — some east, some west — turn to **16**.*

---

## 11

You charge in as a group. The lookout’s absence saves you from an arrow — but deeper in, the passages fork before you have a plan.

*Turn to **10** (you still need to choose a route — treat Peggy’s scouting as a hurried glance as you run).*

---

## 12

You wait. The lookout returns, yawns, and sits. Nibbles slips up behind him with a dagger pommel. One soft thud later, the way is clear — and quieter.

*Turn to **10**.*

---

## 13

Eastward the floor is treacherous. Derek spots a pit trap and waves you around it. Beyond, a great cavern opens: a goblin boss in a tattered red curtain-cloak, warriors at his side, a giant rat hissing on a chain-pile — and a wooden cage. A young woman with red hair grips the bars.

“Mara,” she breathes, when she sees the Fallcrest shield on your arm. “Please—”

**Combat:** `goblin-boss-cavern` — if you win, turn to **17**. If you are defeated, turn to **110**.

---

## 14

Westward, two goblin warriors argue over a bag of bone dice. They notice you a half-second too late.

**Combat:** `goblin-dice-fight` — if you win, turn to **18**. If you are defeated, turn to **110**.

---

## 15

You clear the western passage first.

**Combat:** `goblin-dice-fight` — if you win, turn to **19**. If you are defeated, turn to **110**.

---

## 16

You split: you, Derek, and Loki take the east; Dave and Nibbles take the west.

East — turn to **13** (resolve that combat).  
West — after the eastern fight is done, your friends arrive battered from **14**’s fight (resolve `goblin-dice-fight` as well if you are tracking both). Then turn to **17**.

*(In a simple playthrough: resolve `goblin-boss-cavern`, then assume Dave and Nibbles win their fight and join you — bruised, proud. Turn to **17**.)*

---

## 17

The boss goes down. Loki finishes the giant rat — Ratbag, if goblins name such things. You smash the cage. Mara tumbles free, clutching a leather satchel.

“I’m a courier,” she says. “This map is for Nimozaran’s apprentice in Fallcrest. The escort… didn’t make it.” She presses the enchanted Fallcrest shield into your hands. “Take it. It wards once a day. You’ve earned it.”

**Gain:** Fallcrest shield  
**Meet:** Mara

Nibbles finds a warm silver dagger in the boss’s junk. Derek pockets a healing potion. Real coins, at last.

*If you escort Mara to Fallcrest at once, turn to **30**.*
*If you linger to loot every corner of the cave first, turn to **20**.*

---

## 18

The dice goblins fall. Deeper east, a cry — you’re late to the great cavern. The boss fight is harder; Mara is bruised but alive.

**Combat:** `goblin-boss-cavern` — if you win, turn to **17**. If you are defeated, turn to **110**. *(Foes are ready — harder fight.)*

---

## 19

West clear. You push east together, careful of pits.

*Turn to **13**.*

---

## 20

You take your time. Extra coin, a length of rope, a half-eaten pie Nibbles claims as treasure. Mara waits, patient but glancing at the dark.

*Turn to **30**.*

---

## 30

Fallcrest rises above the River Nentir — Lowtown by the docks, Upper Fallcrest on the cliffs. At Knight’s Gate the guards know Mara’s name and thank you for bringing her home. Wisara at the **Nentir Inn** gives you free rooms.

Mara needs to deliver the satchel. The Blue Moon Alehouse in Lowtown is where Tobbs Quickfoot — Nimozaran’s halfling apprentice — will meet you.

*If you go straight to the Blue Moon with Mara, turn to **31**.*
*If you spend the afternoon on errands first (smith, shops, ponies), turn to **32**.*

---

## 31

You reach the Blue Moon early. Tobbs has not arrived yet. You eat. Children outside shout about a “little statue” on the roof.

Derek steps into the alley and sees it: a winged **homunculus**, watching. It sees him — and flees on leather wings.

**Flag:** map-seen-by-homunculus

*Turn to **33**.*

---

## 32

Thorn commissions a lifetime axe at the forge. Dave buys spell ink from **Orest Naerumar**. Nibbles fails to purchase “special” poison and nearly causes an incident. Loki terrifies the ponies at Lannar’s paddock. Derek finds **Sergeant Murgaddin** and earns a nod of respect.

By evening you join Mara at the Blue Moon. Children cry that a little statue was on the roof — already gone.

**Flag:** map-may-be-unseen *(the homunculus may still be hunting, but it did not mark Derek here)*

*Turn to **33**.*

---

## 33

Tobbs Quickfoot arrives, spectacles askew, and opens Mara’s map. The blue marks are not one ruin — they are **Ethium**, a whole plateau-city of pale stone. Ethium Stones are waking. A ruined tower is marked west of the great hill.

He whispers a word — **“Aethra Lumis”** — and a sample stone glows warm blue.

“Bring stones back for Nimozaran,” Tobbs asks. “Carefully. Please.”

*If you agree to go to Ethium, turn to **34**.*
*If you refuse and stay in Fallcrest, turn to **35**.*

---

## 34

Before you can finish planning, the door crashes open. Men with iron **hammer** pendants — the Hammers — demand the map.

Tobbs goes pale. “Someone knew it was here.”

*If you fight for the map, turn to **36**.*
*If you surrender the map, turn to **37**.*
*If you try to flee with Tobbs and the map, turn to **38**.*

---

## 35

You decline. Tobbs looks heartbroken. Weeks later, rumours say the Gang of Four reached the plateau first. What they woke is not your story.

**The End** (refused the call). To begin again, turn to **1**.

---

## 36

Chairs fly. Dave’s potato spell makes a glorious mess. Loki chooses a thug’s ankle. Customers join in — nobody likes the Hammers.

**Combat:** `blue-moon-brawl` — if you win, turn to **39**. If you are defeated, turn to **111**.

---

## 37

You hand over the map. The Hammers sneer and leave. Tobbs sits down hard. “Then we’ve lost the road,” he whispers.

Without the map, Ethium is guesswork. You may still try the river road — but many endings grow darker from here.

*If you still seek Ethium without the map, turn to **65** (you travel blind — skip manor rewards tied to the letter if you never raid the hideout).*
*If you give up, turn to **35**.*

---

## 38

You bolt for the kitchen door. A Hammer blocks it. Fight is forced.

*Turn to **36**.*

---

## 39

Sergeant **Murgaddin** arrives as the last thug hits the floorboards. The Hammers are the local arm of the **Gang of Four** out of Sunfall. He needs the Fallcrest hideout found — an old ruined manor north of town.

“Help me tomorrow,” he says, “and I’ll help you leave for Ethium the morning after — coin, potions, and my blessing.”

Tobbs and Mara nod. The map is safe… for now.

*If you accept Murgaddin’s manor job, turn to **50**.*
*If you leave for Ethium at first light instead, turn to **40**.*

---

## 40

You slip out at dawn. The manor remains a Hammer nest. Somewhere, **Maelis Varn**’s orders still stand. You take the river road with less gold and no letter of proof — but the plateau still waits.

*Turn to **65**.*

---

## 50

Morning. Murgaddin briefs you at the Nentir Inn: burned manor, about an hour north, Bloodspear War ruin. Hammers in the cellars. Pay on return.

The shell of the house still smells of old ash. Stairs descend into damp dark.

*If you go carefully, scouting ahead, turn to **51**.*
*If you storm the first cellar, turn to **52**.*

---

## 51

Nibbles ghosts ahead. Three Hammers lounge among crates. You catch them half-armed.

**Combat:** `manor-cellar-guards` — if you win, turn to **53**. If you are defeated, turn to **110**. *(Surprise round if your rules allow.)*

---

## 52

You hit the cellar loud.

**Combat:** `manor-cellar-guards` — if you win, turn to **53**. If you are defeated, turn to **110**.

---

## 53

A passage of luminescent mushrooms leads to a larger chamber: more Hammers, a swordsman, a fighter in plate — and a mage in green light. **Rulden**. His first spell flares against your Fallcrest shield and dies.

**Combat:** `rulden-chamber` — if you win, turn to **54**. If you are defeated, turn to **110**.

---

## 54

Rulden falls. Among the loot: an **Ethium Stone**, gold, a scroll, a healing potion, a magic shortsword. Dave finds Sleep in the mage’s spellbook and copies it with shaking hands.

**Gain:** Ethium Stone  
**Gain:** magic shortsword  
**Gain:** Sleep (Dave)

At the back of the chamber, sealed stone doors — a **family tomb**. Dust. Silence. Nibbles’s eyes shine.

*If you open the tomb, turn to **55**.*
*If you leave it sealed and return to Murgaddin, turn to **56**.*

---

## 55

The doors grate. Four skeletons rise from niches, blades scraping.

**Combat:** `manor-tomb-skeletons` — if you win, turn to **57**. If you are defeated, turn to **110**. *(Sleep does not work on undead.)*

---

## 56

You bring Rulden’s papers to Murgaddin — including a letter signed **Maelis Varn**, Third Hand of the Valnaran family: seize Mara’s map; kill the courier if needed; deliver to an agent at the river crossing.

Murgaddin’s face hardens. He pays you well. Tobbs is waiting: first light, river road, waterfall path, ruined tower.

*Turn to **65**.*

---

## 57

Bones scatter. Nibbles loots old coins and jewellery from the tombs — respectfully enough, he insists.

*Turn to **56**.*

---

## 65

The river road runs east of Fallcrest. Farms thin to hedgerows, then open grass. You camp by the water.

Night brings eyes in the dark.

**Combat:** `river-wolves` — if you win, turn to **66**. If you are defeated, turn to **110**.

---

## 66

Next day: burial mounds on the hills. Axe-beak birds — tall, mean, hungry — strut among the stones.

**Combat:** `axe-beak-herd` — if you win, turn to **67**. If you are defeated, turn to **110**. *(Dave’s Sleep can drop some before steel.)*

---

## 67

You butcher drumsticks for the pot. That night Derek sees a **cloaked watcher** among the eastern stones. It flees when spotted. Watches are doubled.

**Flag:** cloaked-watcher-seen

*Turn to **68**.*

---

## 68

The waterfall. Tobbs’s path climbs behind the curtain of water. The ledge forks: a longer covered route left, a steep wet scramble right.

*If you take the longer covered ledge (you, Dave, Loki), while Nibbles and Derek take the scramble, turn to **69**.*
*If everyone takes the longer ledge together, turn to **70**.*
*If everyone takes the steep scramble together, turn to **71**.*

---

## 69

Spray blinds you. Goblin archers fire from niches. A bugbear waits on your ledge; another above Derek’s climb.

**Combat:** `waterfall-climb` — if you win, turn to **72**. If you are defeated, turn to **110**.

---

## 70

Slower, safer. Archers still find you, but you fight as one shield-wall in the wet.

**Combat:** `waterfall-climb` — if you win, turn to **72**. If you are defeated, turn to **110**. *(Easier than split — note for your rules.)*

---

## 71

The scramble is brutal. Nibbles slips; Derek hauls him; bugbears press hard.

**Combat:** `waterfall-climb` — if you win, turn to **72**. If you are defeated, turn to **110**. *(Harder.)*

---

## 72

You stand on the **Ethium plateau**. Pale ruins stretch like the bones of a city. Distant goblin wolf-riders watch, then turn away. Far off, a greater hill wears castle ruins like a crown.

Evening: a **black dragon** cuts the clouds, circles once, and drops something dark toward the broken hills.

*If you head west to Tobbs’s ruined tower, turn to **85**.*
*If you turn toward the castle hill instead, turn to **73**.*
*If you investigate where the dragon dropped its burden, turn to **74**.*

---

## 73

The castle is days of careful ruin-crawling, not an afternoon. Exhausted, low on spells, you realise Tobbs’s tower was the wiser first strike. You camp in a collapsed **shrine** that warms and mends you overnight — then turn west.

*Turn to **85**.*

---

## 74

In the grass you find **half a goblin** — no tracks, no blood trail that makes sense. The dragon’s message is a warning, not a map.

A collapsed Ethium shrine nearby offers shelter and strange gentle healing.

*Turn to **85**.*

---

## 85

The ruined tower stands on a low western ridge. North of the wall: a “bandit” camp. Archers in the trees. A hooded figure bolts for the tower door — iron hammer pendant flashing.

**Combat:** `tower-camp-ambush` — if you win, turn to **86**. If you are defeated, turn to **110**.

---

## 86

Hammers. You take their climbing gear — rope, pitons, grappling hook — and open the tower door. Pale Ethium steps spiral down. The stone swallowed most of the fight’s noise; whoever waits below may not know you’re coming.

**Gain:** climbing kit

*If you descend quietly, turn to **87**.*
*If you call a challenge down the stair, turn to **88**.*

---

## 87

At a landing, sludge and old looter-debris. Something glints.

*If Nibbles reaches for the shiny thing, turn to **89**.*
*If you leave it and press on, turn to **91**.*

---

## 88

Your voice booms. Below, a roar answers. The orc and his Hammers are ready when you arrive — harder fight ahead.

*Turn to **89** only if you still poke the sludge; otherwise turn to **92** (alert foes).*

---

## 89

A hand shoots from the muck. Zombies — old adventurers who never left.

**Combat:** `alcove-zombies` — if you win, turn to **90**. If you are defeated, turn to **110**.

---

## 90

Thorn claims a finely made **battleaxe** etched with an Ethium rune. The metal is sound; the magic sleeps.

**Gain:** rune battleaxe (dormant)

*Turn to **91**.*

---

## 91

The passage opens into a broad, square chamber. Every block is carved with runes. Papers scatter the floor. A large **orc** towers over a wild-haired gnome with round spectacles — **Garnel** — forcing him to read the floor. Two Hammer thugs lounge against the wall. Double doors stand ajar to the left.

**Combat:** `garnel-rescue` — if you win, turn to **93**. If you are defeated, turn to **110**. *(After the first round, Garnel may cast to help.)*

---

## 92

Same chamber — but the orc faces the stair, weapons ready.

**Combat:** `garnel-rescue` — if you win, turn to **93**. If you are defeated, turn to **110**. *(Foes are alert — harder.)*

---

## 93

Garnel lives. He stammers thanks, then truth: the Hammers took him in Sunfall, hold his grandmother **Mala Stoneblender**’s Ethium research book, and forced him to document *this* rune chamber — not the pool below. The pool’s wizard died centuries ago, corrupted by bending Ethium magic.

**Meet:** Garnel Stoneblender

Beyond: a partly collapsed stair, a rotten plank, a waiting **maul trap**. You cross with Hammer rope and pitons.

*Turn to **94**.*

---

## 94

The pool chamber: a sunken bathing pool in pale stone; four pillars with sockets — three hold Ethium Stones; the fourth stone lies on a makeshift wizard’s table. An undead wizard in rotted robes waits. Zombies stir in alcoves. East, a corridor is sealed by cave-in.

**Combat:** `ethium-pool-wizard` — if you win, turn to **95**. If you are defeated, turn to **110**.

---

## 95

The wizard is dust and fading light. Garnel sets the fourth stone into its socket and speaks carefully: **“Vaelum Thrae.”**

Warmth rolls out. Bruises ease. The pool will heal those who bathe — once a day, Garnel thinks. His grandmother was right.

Wizard’s notes speak of more chambers **east**, beyond the collapse — more sockets, more stones. He never got through.

*If you rest by the pool tonight and plan to dig tomorrow, turn to **120**.*
*If you begin digging at once, turn to **96**.*
*If you leave the plateau to return to Fallcrest with Garnel and news, turn to **97**.*

---

## 96

Exhaustion is a kind of trap. After an hour of rubble, Derek calls a halt. You achieve little but sore backs — then rest anyway.

*Turn to **120**.*

---

## 97

You leave the glowing pool behind. Fallcrest will want Murgaddin’s report; Tobbs will want stones and stories. The east dig waits for another expedition.

**The End of Book 1** (return to Fallcrest).  
*To camp at the pool instead, turn to **120**. To begin the whole adventure again, turn to **1**.*

---

## 110

Darkness. Cold stone. A defeat on the road to Ethium.

*(Soft mode: you wake captive or driven off — lose an item, turn to the last safe hub: Fallcrest **30**, or the shrine on the plateau **85**, at the referee’s choice.)*

**The End** (defeated). To begin again, turn to **1**.

---

## 111

The Hammers take the map and leave you under a table with a lump on your head. Tobbs is gone. Ethium’s secrets walk away in someone else’s satchel.

**The End** (map lost). To begin again, turn to **1**.

---

## 120

You make camp where the air is warm and the water glows. Garnel traces the dormant rune on Nibbles’s axe and promises you’ll wake it with Ethium, given time. The collapsed eastern corridor is a dark heap at the edge of the light.

For the first time since the wolves on the river road, nobody sleeps with a hand on a weapon.

**The End of Book 1** — *to be continued* (east tunnels, castle hill, dragon, Gang of Four).

Open threads for Book 2+: dig east; castle; black dragon; Maelis Varn’s river agent; Mala’s stolen book; the cloaked watcher; the secret of the mountain water.

To begin again, turn to **1**.
