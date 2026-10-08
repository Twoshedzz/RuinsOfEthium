# Development history

What has been built and why, newest first. This is the record of work *done* — the
work still to do lives in [`PROJECT-BRIEF.md`](PROJECT-BRIEF.md#roadmap).

It covers all three apps, because most of the big changes were one change across
three repositories.

---

## October 2026 — one repo became three

The project started as a single Astro site holding three different things: the kids'
published novel, a hidden DM hub, and a parked choose-your-own-adventure rework. Then
the same campaign was run a second time, for a group of adult friends, and one repo
could no longer serve two novels in two voices while keeping one shared world.

| App | Repo | Audience |
|---|---|---|
| **Ruins of Ethium** | `RuinsOfEthium`, public | The kids' novel |
| **Tuesday Night Arguing** | `TuesdayNightArguing`, public | The adults' novel |
| **Ethium Source** | `EthiumSource`, **private** | World canon and both tables' records |

### What made it possible

A house rule that had held from the start: modules stay replayable and party-agnostic.
All eight were clean of play-by-play apart from a single line. That rule created
exactly the seam the split needed — **one campaign, run twice**, not two campaigns.

### The content model that came out of it

> If a different group of players could play it, it belongs in `world/`. If it only
> exists because of these particular players, it belongs in `plotlines/`.

And its sharp edge: **a chapter number is plotline data; a module never names a
chapter.** That is the rule that stops canon re-contaminating on the first night of
the second campaign. Two mechanical checks in `npm run verify` now enforce it as a
hard failure — they are the reason the model will still be true in a year.

Each table keeps a `state.md` with four sections — Known, Changed, Invented, Open
threads — and promotion to canon is a deliberate act: rewrite the fact in
party-agnostic voice in `world/`, and leave the plotline entry as the record of where
it came from.

### The order it was done in

1. **Hygiene.** ~160MB of byte-identical duplicates removed, every file checksummed
   against the copy kept. A broken `.gitignore` path was why 45 private fragments had
   been tracked in a public repo. Generated output untracked; tracked files 529 → 321.
2. **Ethium Source built**, canon de-partied, both plotlines stood up, and the
   verbatim WotC gazetteer text — which had been live on the public site — moved into
   an archive that no sync pass touches.
3. **The kids' repo stripped**, 217 files in one commit. The DM material left the
   public internet.
4. **Tuesday Night Arguing built**, with its own 1979-rulebook design rather than the
   kids' Fighting Fantasy parchment.
5. **A real password** on Ethium Source: a Netlify Edge Function on `path: "/*"`,
   reading an env var that is never `PUBLIC_`-prefixed. Verified by `curl`: 401 on
   pages, maps and PDFs alike, with no content in the 401 body. The old client-side
   gate — which served every DM page in full and kept the passkey in public
   JavaScript — was deleted rather than maintained alongside it.
6. **Canon named Rookwater**, with Fallcrest recorded as the kids' table alias. Their
   novel's prose was not touched.

### Seeding the second book

One player kept a notebook in character as Noct, a dwarven bard, first person,
written at the table. 27,500 words, converted from the original ODT. Six arcs and 26
beats mapped, page-referenced. In October 2026 he sent fourteen photographs of the
pages — six of the seven drawings the transcription had only described, the in-game
letter prop, a character portrait, and three recap sheets giving a clean chronology
for campaign days 1–13 that settles a sequence the notebook itself contradicts.

Names were settled from his handwriting rather than guessed: Shae, Garnel, Oran. One
of my own corrections turned out to be the error — he writes **Tobs**, and that is now
recorded as a table alias rather than normalised away.

---

## October 2026 — the checks that came out of a failed deploy

A Netlify build failed on a file that was present locally and ignored by git. Local
builds were green the whole time, which is the lesson: **a local build passing is not
evidence.**

`npm run verify` now exists in all three repos. One command, plain English output. It
builds, then checks that everything the build needs is actually committed, that no
link or image is broken, that no secret or DM material has crept in, that assets are a
sensible size, and the per-repo content rules. A pre-push hook runs it; GitHub Actions
runs it again from a clean clone, which is the only check that would have caught the
original fault.

It has since caught real faults, not hypothetical ones: a committed passkey, two maps
referenced but never shipped, and nine broken links — one of which was canon
referring to a town that had been promoted but not published.

---

## October 2026 — co-authoring without git

The second book has two authors, and one of them should never see a repository, a
commit or a markdown file. Decided: email invite, no GitHub account, full visual
editing, and new work saves as a draft.

The obstacle was never the editor, it was the markup. A chapter marks the room
interrupting the story, and that was raw HTML no author should ever type.

Two approaches were tried and one was abandoned. `:::room` directives via
`remark-directive` worked for hand-written files but could not be bound to an editor
form — Decap's editor components cannot hold a multi-line fenced block. So the chapter
body became **structured blocks** instead: a list of typed objects — telling,
interruption, read-aloud, table — each with its own small form and its own styling in
the editor's preview. Adding and removing blocks is the feature that makes it a book
rather than a form.

Along the way, three instructive failures: Astro 5's content cache served stale
output and made a changed plugin look like it had not run; `remark-directive` silently
ate the `:47` of a timestamp as a text directive; and markdown pre-parsing `**bold**`
made speaker lines read as empty strings and vanish.

A Keystatic recommendation was also withdrawn — it had been pitched as "one free
GitHub signup", and its own documentation says the writer needs **write access to the
repository**, plus an SSR adapter, React and Markdoc storage.

---

## Earlier — the novel itself

A static Astro site, markdown content collections, Netlify, no server and no CMS. The
published story of a family D&D campaign, written up chapter by chapter after each
session, styled after the Fighting Fantasy paperbacks: parchment, serif type and
black-and-white plates.

Read-aloud audio was built and later parked — the MP3s had drifted out of sync with
prose that kept being revised. A choose-your-own-adventure rework was built and
parked with it. Both sources are intact; see the roadmap for what reviving them takes.
