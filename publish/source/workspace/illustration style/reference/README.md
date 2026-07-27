# Illustration Reference Library

This folder contains reusable, prompt-ready descriptions for chapter artwork.

## How to build an image brief

1. Start with the fixed [`core-prompt.md`](core-prompt.md).
2. Complete a copy of [`scene-brief-template.md`](scene-brief-template.md).
3. Add only the reference entries required by that scene:
   - [`characters/`](characters/README.md) for recurring character identity and equipment;
   - [`creatures/`](creatures/README.md) for anatomy, scale and movement;
   - [`locations/`](locations/README.md) for architecture, materials and atmosphere.
4. Attach the image files named by the selected entries.
5. Label every attached image by role: **style**, **character**, **creature anatomy**, **location**, or **object**.

The scene brief decides what is shown. Reference entries provide continuity; they
do not force a character, creature or location into an image.

## Reference priority

When instructions conflict, use this order:

1. The scene's explicit non-negotiable requirements.
2. Written character, creature and location entries.
3. Canonical reference images.
4. General visual interpretation.

An external monster image controls only the features assigned to it. Its colour,
background, pose, composition and rendering style must be ignored unless the
scene brief explicitly requests one of those qualities.

## Approved project artwork

Approved chapter plates, portraits and cover art may be used as continuity
references. Assign them a narrow role just like any other image:

- portraits are strongest for face, species, build and signature equipment;
- approved chapter plates are useful for side views, action poses, relative
  scale, recurring architecture and how equipment behaves in motion;
- cover art is useful for overall costume, colour identity and group scale, but
  its painterly colour style must never override the chapter-art core prompt.

An older image is not automatically correct in every detail. The written
reference entry and the current scene brief take priority.

## Growing the library

Add one short markdown file whenever a recurring character, creature or location
needs visual continuity. Each entry should contain:

- a compact prompt-ready description;
- dimensions or scale where known;
- non-negotiable features;
- common mistakes to avoid;
- canonical image paths;
- instructions explaining what each image controls.
