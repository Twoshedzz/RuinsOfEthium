export interface ChapterAudio {
  parts: string[];
  contentHash: string;
  generatedAt: string;
}

// Read-aloud narration is switched off and the generated MP3s have been removed:
// the recordings covered only the prologue through chapter 05 and had fallen out
// of sync with the revised prose.
//
// To bring it back:
//   1. npm run audio          — regenerates public/audio/ and its manifest.json
//   2. import manifest from '../../public/audio/manifest.json'
//      and return manifest.chapters[slug] below
//   3. set ENABLE_AUDIO_READ_ALOUD to true
export const ENABLE_AUDIO_READ_ALOUD = false;

export function getChapterAudio(_slug: string): ChapterAudio | undefined {
  return undefined;
}
