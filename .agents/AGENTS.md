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

- **Chapter Image Generation Workflow**: Whenever the user asks for a chapter image prompt or illustration brief:
  1. Start with the **Base Chapter Art Prompt** from `publish/source/workspace/prompts/ART-STYLE-BRIEF.md` (100% monochrome B&W dip-pen ink, Russ Nicholson style, chiaroscuro shadow blocks, contour hatching, pure white background, negative constraints).
  2. Append the specific **Scene Description** provided by the user.
  3. Include canonical character/monster descriptions **ONLY for those specifically requested to appear in the scene** (plus any additional image references provided by the user).
  4. Always cross-reference the corresponding chapter text in `publish/chapters/` for full scene context, lighting, and environmental details.
- **Canonical Character & Monster Visual Rules**:
  - **Dave**: Golden Dragonborn wizard (reptilian dragon head with gold scales, horns, snout, wizard robes, wooden staff with glowing green orb) and **Peggy** (tiny coppery pseudodragon familiar). NEVER depict Dave as human, NEVER depict Peggy as an owl.
  - **Derek**: Dwarf cleric with a completely **BALD head**, round wire-rimmed spectacles, braided red beard, plate armor, holding a warhammer AND radiant sun-emblem heater shield.
  - **Thorn**: Half-Orc male warrior (short dark undercut hairstyle, pale/purple skin, fur mantle over leather armor, battleaxe AND round shield with Fallcrest lion emblem).
  - **Nibbles**: Small red dragonborn / kobold rogue (red scales, dark hooded cloak, short sword + glowing dagger).
  - **Loki**: Sturdy wolfhound / hunting dog companion.
  - **Quaggoths**: Bipedal ape-like / yeti gorilla monsters covered in shaggy white/grey fur with sharp claws and flat ape faces — NEVER wolves or canines.
- **Strict Negative Constraints**: NO color highlights, NO parchment background overlays, NO artificial border frames, NO cave stalactites in carved dwarven halls.

---

## 6. Local Development & Build Commands

- Dev Server: `npm run dev`
- Publish Sync: `npm run publish`
- Production Build: `npm run build`
- Audio TTS Generator: `npm run audio` (Requires user confirmation due to OpenAI API costs)
- **Full Terminal & Workspace Pre-Authorization**: All workspace file operations (`write_file`, `read_file`) and shell terminal commands (`command(*)`) are fully pre-authorized by user policy to run automatically without prompting. Verification builds, publishing syncs, and git commits/pushes run autonomously upon task completion.

## 7. Git & Netlify Deploy Convention

### Commit-Without-Deploy (Default Workflow)

- **ALWAYS append `[skip netlify]` to every regular `git commit -m` message** to prevent Netlify from auto-building on each commit and consuming unnecessary build credits.
- Example: `git commit -am "feat: update chapter 6 prose [skip netlify]"`

### Triggering a Netlify Production Deploy (On Demand)

- When the user explicitly asks to deploy or publish to the live site, run:

  ```
  npm run deploy
  ```

  This pushes an empty git commit **without** `[skip netlify]`, which triggers exactly one clean Netlify build.
- Never trigger deploys implicitly. Only deploy when the user asks.
