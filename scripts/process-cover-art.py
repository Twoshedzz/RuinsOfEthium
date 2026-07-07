#!/usr/bin/env python3
"""Remove light paper from ink art so linework sits on the site parchment background.

Use for cover art, maps, chapter plates, portraits — any black-ink-on-white PNG.
Pass a file path, or run with no args to process the default cover art.
"""

from __future__ import annotations

import shutil
import sys
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
COVER = ROOT / "publish/illustrations/cover/book-cover-ethium-battle.png"
BACKUP = ROOT / "publish/illustrations/cover/book-cover-ethium-battle-opaque.png"

# Luminance above SOLID becomes fully transparent; FADE band softens edges.
FADE_START = 205
SOLID_START = 235


def luminance(r: int, g: int, b: int) -> float:
    return 0.299 * r + 0.587 * g + 0.114 * b


def alpha_for_luminance(lum: float) -> int:
    if lum >= SOLID_START:
        return 0
    if lum <= FADE_START:
        return 255
    return int(255 * (SOLID_START - lum) / (SOLID_START - FADE_START))


def process(path: Path) -> None:
    img = Image.open(path).convert("RGBA")
    pixels = img.load()
    width, height = img.size

    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            if a < 16:
                pixels[x, y] = (0, 0, 0, 0)
                continue
            lum = luminance(r, g, b)
            alpha = alpha_for_luminance(lum)
            if alpha == 0:
                pixels[x, y] = (0, 0, 0, 0)
            elif alpha == 255:
                pixels[x, y] = (r, g, b, 255)
            else:
                pixels[x, y] = (r, g, b, alpha)

    img.save(path, optimize=True)
    print(f"Processed {path} ({width}x{height})")


def main() -> None:
    target = Path(sys.argv[1]) if len(sys.argv) > 1 else COVER
    if not target.exists():
        raise SystemExit(f"Missing cover art: {target}")

    if not BACKUP.exists() and target == COVER:
        shutil.copy2(target, BACKUP)
        print(f"Backup saved to {BACKUP}")

    process(target)


if __name__ == "__main__":
    main()
