# Project Guidelines & Collaboration Rules — The Ruins of Ethium

## 1. User Profile & Collaboration Model
- **User Role**: Senior Web Designer (30+ years experience) acting as **Product Manager with a Design Eye**.
- **Coding Level**: Low-code / Vibe coding. Has strong conceptual grasp of databases, structured data, APIs, and frontend/backend boundaries, but does not write raw code day-to-day.
- **Communication Style**:
  - **Plain English Explanations**: Explain technical decisions, code changes, and architecture in plain, accessible terms without jargon.
  - **Design & Product Focus**: Frame solutions around user experience, design elegance, product features, and maintainability.
- **Commercial Vision**: Hobby project with ambitions to become a publishable, modular, and potentially commercial product (e.g., publishable DM module packs, CYOA book editions). Keep monetization potential, copyright cleanliness, and legal packaging in mind.

---

## 2. Code Quality, Testing & Anti-Messiness
- **Zero Messy Code / Zero Tech Debt**: Keep the codebase clean, modular, and well-structured. Avoid quick hacks or dirty patches.
- **Verification First**: NEVER declare a task done without running verification commands (`npm run build`, `npm run dev`) and confirming 0 errors/warnings.
- **Human-Readable Code & Documentation**:
  - Write code and folder structures so they are easily readable by human developers.
  - Maintain thorough documentation in markdown files (`README.md`, `WORKFLOW.md`, `ARCHITECTURE.md`).
  - Write clear, conventional commit messages when staging changes.

---

## 3. Budget & Token Safety
- **Cost Awareness**: The user operates on a budget.
- **Proactive Warnings**: ALWAYS warn the user before launching large automated refactors, massive file batch operations, or API-heavy tasks (such as running OpenAI TTS `npm run audio` across all chapters) that consume significant token quota or external API costs.

---

## 4. Content & Authoring Rules (The Ruins of Ethium)

### Human Edit Surface (`publish/`)
- All human content editing happens strictly under the **`publish/`** directory.
- Never manually edit `src/content/` or `public/dm/` directly, as these are auto-generated during build via `scripts/sync-publish.mjs`.
- Raw photos of notes, whiteboard snaps, and high-res map scans belong in `publish/source/inbox/` (which is `.gitignore`'d for zero repository bloat).

### Story Pacing & Prose Style (`publish/source/style-guide.md`)
When drafting or editing novel chapters (`publish/chapters/`):
- **Tone**: Classic *Fighting Fantasy* novel for 12-year-olds: clear, vivid, warm, never graphic.
- **Pacing & Rhythm**: Mix paragraph lengths to suit the scene. Slower/longer for travel and lore; faster/sharper for action.
- **Dialogue**: Sparse and intentional. Use narration to carry the journey.
- **Humour**: Play table humor straight in-world (understated, funny situations, no forced quips).
- **Avoid AI Slop**: Absolutely NO uniform one-sentence paragraph staccato, NO generic AI clichés (*"a testament to"*, *"in the heart of"*, *"as the dust settled"*), and NO dry play-by-play summaries.

### Replayable DM Modules (`publish/source/world/modules/`)
- Adventure modules in `publish/source/world/modules/` (`/dm/modules/`) must remain **replayable and party-agnostic**.
- Never paste specific party play-by-play ("Thorn cast Fireball") into modules. Store party outcomes in `publish/source/sessions/` instead.

### Dramatis Personae Maintenance Rule (`/about/`)
- Whenever new characters, allies, or major antagonists are introduced into the story or world (`publish/source/characters/` or novel chapters), **evaluate whether they should be added to the public Dramatis Personae** on the About page (`src/pages/about.astro`).
- Group characters logically (*The Heroes*, *Friends*, *Enemies*) and write concise, kid-friendly descriptions matching the Fighting Fantasy novel tone.

---

## 5. Illustration & Artwork Guidelines
- **Mandatory Party Depiction Rule**: Unless explicitly specified otherwise by the user, all scene illustrations MUST accurately depict the four core party members based on their canonical portraits in `publish/illustrations/portraits/`:
  - **Dave**: Golden Dragonborn wizard (reptilian dragon head with gold scales, horns, snout, wizard robes, wooden staff with glowing green orb) and **Peggy** (tiny coppery/gold pseudodragon familiar with leathery wings perching on his shoulder). NEVER depict Dave as a human wizard, and NEVER depict Peggy as an owl.
  - **Derek**: Bald dwarf cleric (completely bald head, round wire-rimmed spectacles, braided red beard, plate armour, holding a warhammer AND a radiant sun-emblem heater shield).
  - **Thorn**: Half-Orc male warrior (short dark undercut hairstyle, pale/purple skin, fur mantle over leather armor, holding a single-headed battleaxe in one hand AND a round shield on the other arm).
  - **Nibbles**: Small red dragonborn / kobold rogue (red scales, horns with small pouch, dark hooded cloak, holding daggers).
  - **Loki**: Wolfhound / hunting dog companion.
- **Art Style Brief**:
  - **Style**: Pure 100% monochrome black-and-white pen-and-ink line drawing matching `ch01-goblin-boss-fight.png` (classic 1980s Fighting Fantasy adventure book style by Russ Nicholson / Gary Chalk).
  - **Strict Constraints**: NO color highlights, NO parchment background overlays, NO artificial border frames, NO cave stalactites in carved dwarven halls.
  - **Monster Anatomy Accuracy**: Quaggoths are bipedal ape-like / yeti-like gorilla monsters covered in shaggy white/grey fur with sharp claws and ape faces — NEVER wolves or canines.

---

## 6. Local Development & Build Commands
- Dev Server: `npm run dev`
- Publish Sync: `npm run publish`
- Production Build: `npm run build`
- Audio TTS Generator: `npm run audio` (Requires user confirmation due to OpenAI API costs)
- **Full Terminal Command Pre-Authorization**: The user has explicitly authorized running all terminal build, sync, test, and git commands directly without asking for confirmation. Automatically run verification builds and `git commit` / `git push origin main` upon completing work.
