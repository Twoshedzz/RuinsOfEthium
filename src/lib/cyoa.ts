import { getCollection, type CollectionEntry } from 'astro:content';

export type CyoaPage = CollectionEntry<'cyoaPages'>;

function byOrderThenTitle(a: CyoaPage, b: CyoaPage): number {
  const orderA = a.data.order ?? 999;
  const orderB = b.data.order ?? 999;
  if (orderA !== orderB) return orderA - orderB;
  return a.data.title.localeCompare(b.data.title);
}

export async function getPublishedCyoaPages(): Promise<CyoaPage[]> {
  const entries = await getCollection('cyoaPages', ({ id, data }) => {
    return data.published && !id.startsWith('_');
  });
  return entries.sort(byOrderThenTitle);
}
