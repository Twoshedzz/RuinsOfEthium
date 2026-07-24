import { defineCollection, z } from 'astro:content';

const chapters = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    chapter: z.number(),
    summary: z.string().optional(),
    coverIllustration: z.string().optional(),
    published: z.boolean().default(true),
  }),
});

const tableNotes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    session: z.number().optional(),
    status: z.enum(['next', 'prep', 'played', 'archive']).default('prep'),
    summary: z.string().optional(),
    order: z.number().optional(),
    published: z.boolean().default(true),
  }),
});

const libraryEntry = z.object({
  title: z.string(),
  summary: z.string().optional(),
  order: z.number().optional(),
  published: z.boolean().default(true),
});

const libraryModules = defineCollection({
  type: 'content',
  schema: libraryEntry,
});

const libraryPlaces = defineCollection({
  type: 'content',
  schema: libraryEntry,
});

const libraryCharacters = defineCollection({
  type: 'content',
  schema: libraryEntry,
});

const librarySessions = defineCollection({
  type: 'content',
  schema: libraryEntry.extend({
    session: z.number().optional(),
  }),
});

const cyoaPages = defineCollection({
  type: 'content',
  schema: libraryEntry,
});

export const collections = {
  chapters,
  tableNotes,
  libraryModules,
  libraryPlaces,
  libraryCharacters,
  librarySessions,
  cyoaPages,
};
