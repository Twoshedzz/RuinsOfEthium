import manifest from '../../public/audio/manifest.json';

export interface ChapterAudio {
  parts: string[];
  contentHash: string;
  generatedAt: string;
}

interface AudioManifest {
  version: number;
  model: string;
  voice: string;
  chapters: Record<string, ChapterAudio>;
}

// Temporarily disabled while chapter text undergoes revisions.
// Set ENABLE_AUDIO_READ_ALOUD to true when ready to regenerate and re-enable audio.
export const ENABLE_AUDIO_READ_ALOUD = false;

export function getChapterAudio(slug: string): ChapterAudio | undefined {
  if (!ENABLE_AUDIO_READ_ALOUD) return undefined;
  return audioManifest.chapters[slug];
}
