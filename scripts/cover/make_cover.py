"""The book cover, laid out like a classic early-1980s red rulebook or module:
a red field, cream rules above and below the title, and the art in a thick
black frame with clipped corners. Our own wording and lettering; no D&D or
TSR marks.

    python3 scripts/cover/make_cover.py

Writes publish/illustrations/cover/ruins-of-ethium-cover.png (1700 x 2200,
8.5 x 11 in at 200 dpi) and a print PDF beside it. Needs Google Chrome and
an internet connection (for the Google Fonts).
"""
import os
import subprocess
import tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.join(HERE, '..', '..')
ART = os.path.abspath(os.path.join(ROOT, 'publish', 'illustrations', 'cover', 'book-cover-ethium-battle-colour.png'))
OUT = os.path.abspath(os.path.join(ROOT, 'publish', 'illustrations', 'cover', 'ruins-of-ethium-cover'))
CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

HTML = f'''<!doctype html><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Rye&family=Libre+Baskerville:wght@400;700&display=block" rel="stylesheet">
<style>
@page {{ size: 8.5in 11in; margin: 0 }}
html, body {{ margin: 0 }}
.cover {{
  width: 8.5in; height: 11in; position: relative; overflow: hidden;
  background: #c4232b;
  background-image:
    radial-gradient(ellipse at 30% 20%, rgba(255,255,255,.07), transparent 60%),
    radial-gradient(ellipse at 80% 90%, rgba(0,0,0,.18), transparent 55%);
  color: #f6ecd8; font-family: "Libre Baskerville", Georgia, serif;
  display: flex; flex-direction: column; align-items: center;
  padding: 0.42in 0.75in 0.35in; box-sizing: border-box;
}}
.grain {{ position: absolute; inset: 0; opacity: .22; mix-blend-mode: multiply; pointer-events: none }}
.kicker {{ font-size: 15pt; letter-spacing: .06em; text-transform: uppercase; margin-bottom: .06in }}
.rule {{ width: 100%; height: 0; border-top: 3px solid #f6ecd8; }}
.rule.thin {{ border-top-width: 2px }}
.title {{
  font-family: "Rye", Georgia, serif; text-transform: uppercase; text-align: center;
  font-size: 60pt; line-height: .95; margin: .1in 0 .06in; letter-spacing: .01em;
  color: #f6ecd8;
  text-shadow: 3px 3px 0 #6b0f13, -1px -1px 0 #6b0f13, 1px -1px 0 #6b0f13, -1px 1px 0 #6b0f13;
}}
.title small {{ display: block; font-size: 30pt; margin: 0 }}
.sub {{ font-size: 16pt; letter-spacing: .07em; text-transform: uppercase; margin: .08in 0 }}
.frame {{
  margin: .18in 0 .2in; width: 7in; height: 5.2in; background: #111;
  clip-path: polygon(0.42in 0, calc(100% - 0.42in) 0, 100% 0.42in, 100% calc(100% - 0.42in),
                     calc(100% - 0.42in) 100%, 0.42in 100%, 0 calc(100% - 0.42in), 0 0.42in);
  display: flex; align-items: center; justify-content: center;
}}
.frame img {{
  width: calc(7in - 0.36in); height: calc(5.2in - 0.36in); object-fit: cover; object-position: 50% 42%;
  clip-path: polygon(0.3in 0, calc(100% - 0.3in) 0, 100% 0.3in, 100% calc(100% - 0.3in),
                     calc(100% - 0.3in) 100%, 0.3in 100%, 0 calc(100% - 0.3in), 0 0.3in);
}}
.genre {{ font-size: 17pt; letter-spacing: .04em; text-transform: uppercase; margin: .08in 0 }}
.mark {{ margin-top: .16in; display: flex; flex-direction: column; align-items: center; gap: .04in }}
.stone {{ width: .55in; height: .55in; border: 3px solid #f6ecd8; transform: rotate(45deg); display: flex;
  align-items: center; justify-content: center }}
.stone span {{ transform: rotate(-45deg); font-family: "Rye", serif; font-size: 20pt; line-height: 1 }}
.small {{ font-size: 8.5pt; letter-spacing: .05em; opacity: .9; margin-top: .12in }}
</style>
<div class="cover">
  <svg class="grain" width="100%" height="100%"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="1.6" numOctaves="2" seed="4"/>
    <feColorMatrix values="0 0 0 0 0.3  0 0 0 0 0.05  0 0 0 0 0.05  0 0 0 0.9 -0.35"/></filter><rect width="100%" height="100%" filter="url(#n)"/></svg>
  <div class="kicker">Read this book first!</div>
  <div class="rule"></div>
  <div class="title">The Ruins<small>of</small>Ethium</div>
  <div class="rule"></div>
  <div class="sub">An Adventure Novel · Book One</div>
  <div class="rule thin"></div>
  <div class="frame"><img src="file://{ART}" alt=""></div>
  <div class="rule thin"></div>
  <div class="genre">For heroes of levels 1–3</div>
  <div class="rule"></div>
  <div class="mark"><div class="stone"><span>E</span></div></div>
  <div class="small">A tale from the table at Fallcrest</div>
</div>
'''


def chrome(*args):
    subprocess.run([CHROME, '--headless=new', '--disable-gpu', '--hide-scrollbars', '--allow-file-access-from-files',
                    '--virtual-time-budget=8000', *args], check=True, capture_output=True)


if __name__ == '__main__':
    with tempfile.NamedTemporaryFile('w', suffix='.html', delete=False, encoding='utf-8') as tmp:
        tmp.write(HTML)
    url = f'file://{tmp.name}'
    chrome('--no-pdf-header-footer', f'--print-to-pdf={OUT}.pdf', url)
    chrome('--force-device-scale-factor=2.0833', '--window-size=816,1056', f'--screenshot={OUT}.png', url)
    os.unlink(tmp.name)
    print(OUT + '.png')
    print(OUT + '.pdf')
