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

const audioManifest = manifest as AudioManifest;

export function getChapterAudio(slug: string): ChapterAudio | undefined {
  return audioManifest.chapters[slug];
}
