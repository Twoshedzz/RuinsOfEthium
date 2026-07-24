import { getCollection, type CollectionEntry } from 'astro:content';

export type TableNote = CollectionEntry<'tableNotes'>;

export async function getPublishedTableNotes(): Promise<TableNote[]> {
  const notes = await getCollection('tableNotes', ({ id, data }) => {
    return data.published && !id.startsWith('_');
  });

  return notes.sort((a, b) => {
    const orderA = a.data.order ?? a.data.session ?? 0;
    const orderB = b.data.order ?? b.data.session ?? 0;
    if (orderA !== orderB) return orderA - orderB;
    return a.data.title.localeCompare(b.data.title);
  });
}

export function formatSessionLabel(session?: number): string {
  if (session === undefined) return 'Session note';
  return `Session ${session}`;
}

export function formatStatusLabel(status: TableNote['data']['status']): string {
  switch (status) {
    case 'next':
      return 'Next up';
    case 'prep':
      return 'Prep';
    case 'played':
      return 'Played';
    case 'archive':
      return 'Archive';
  }
}
