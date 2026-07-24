import { getCollection, type CollectionEntry } from 'astro:content';

export type LibraryModule = CollectionEntry<'libraryModules'>;
export type LibraryPlace = CollectionEntry<'libraryPlaces'>;
export type LibraryCharacter = CollectionEntry<'libraryCharacters'>;
export type LibrarySession = CollectionEntry<'librarySessions'>;

function byOrderThenTitle<T extends { data: { title: string; order?: number } }>(a: T, b: T): number {
  const orderA = a.data.order ?? 999;
  const orderB = b.data.order ?? 999;
  if (orderA !== orderB) return orderA - orderB;
  return a.data.title.localeCompare(b.data.title);
}

export async function getPublishedLibraryModules(): Promise<LibraryModule[]> {
  const entries = await getCollection('libraryModules', ({ id, data }) => {
    return data.published && !id.startsWith('_');
  });
  return entries.sort(byOrderThenTitle);
}

export async function getPublishedLibraryPlaces(): Promise<LibraryPlace[]> {
  const entries = await getCollection('libraryPlaces', ({ id, data }) => {
    return data.published && !id.startsWith('_');
  });
  return entries.sort(byOrderThenTitle);
}

export async function getPublishedLibraryCharacters(): Promise<LibraryCharacter[]> {
  const entries = await getCollection('libraryCharacters', ({ id, data }) => {
    return data.published && !id.startsWith('_');
  });
  return entries.sort(byOrderThenTitle);
}

export async function getPublishedLibrarySessions(): Promise<LibrarySession[]> {
  const entries = await getCollection('librarySessions', ({ id, data }) => {
    return data.published && !id.startsWith('_');
  });
  return entries.sort((a, b) => {
    const sessionA = a.data.session ?? a.data.order ?? 0;
    const sessionB = b.data.session ?? b.data.order ?? 0;
    if (sessionA !== sessionB) return sessionA - sessionB;
    return a.data.title.localeCompare(b.data.title);
  });
}

export function formatLibrarySessionLabel(session?: number): string {
  if (session === undefined) return 'Session notes';
  return `Session ${session}`;
}
