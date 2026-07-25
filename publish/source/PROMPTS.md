# Campaign Workflow Prompts — The Ruins of Ethium

A handy cheatsheet of plain-English prompts you can use with Antigravity to convert raw notes, photos, and game shorthand into published site content.

---

## 1. Session Prep (Before Play)

### Process Photo of Handwritten Prep Notes $\rightarrow$ DM Run Sheet
> *"I've placed photos of my handwritten prep notes in `publish/source/inbox/`. Please parse them into a DM Session Plan for Session [XX]. Include monster HP tick-boxes, key locations, cold opens, and secrets. Save it to `publish/table/[XX]-session-name.md`."*

### Add a New Map Asset
> *"I've placed a map image in `publish/source/inbox/[map-filename.png]`. Please optimize it, place it in `publish/source/world/maps/`, add it to `publish/table-assets/table-maps.manifest`, and update any related place or module notes."*

---

## 2. Post-Session Prose (After Play)

### Process Shorthand Game Notes $\rightarrow$ Session Notes
> *"Here are shorthand notes from tonight's session (or see `publish/source/inbox/session-[XX]-notes.txt`). Please convert them into a clean session record at `publish/source/sessions/session-[XX]/what-happened.md`."*

### Convert Session Notes $\rightarrow$ Published Novel Chapter
> *"Please write Chapter [XX] from `publish/source/sessions/session-[XX]/what-happened.md` following `publish/source/style-guide.md`. Keep the pace snappy, include natural table humor played straight, mix paragraph lengths, and avoid generic AI clichés or short-sentence staccato. Save to `publish/chapters/[XX]-chapter-slug.md`."*

---

## 3. Replayable Modules (After a Chapter/Arc)

### Amalgamate Session Plans $\rightarrow$ Replayable Adventure Module
> *"Please amalgamate Session Plans [XX] through [YY] into a reusable DM Module in `publish/source/world/modules/[module-slug].md`. Remove party-specific actions ("Thorn cast Fireball") and structure it as a standalone, replayable adventure block for any DM."*

---

## 4. Audio Narration

### Generate Audio Narration for New Chapter
> *"Please run `npm run audio -- --slug [XX]-chapter-slug` to generate static MP3 narration for Chapter [XX]." *
