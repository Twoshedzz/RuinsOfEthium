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

---

## 5. Local Development & Build Commands
- Dev Server: `npm run dev`
- Publish Sync: `npm run publish`
- Production Build: `npm run build`
- Audio TTS Generator: `npm run audio` (Requires user confirmation due to OpenAI API costs)
