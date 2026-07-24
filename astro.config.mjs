import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ruinsofethium.netlify.app',
  output: 'static',
  redirects: {
    '/dungeonmaster': '/dm',
    '/table': '/dm/plans',
    '/library': '/dm',
    '/library/modules': '/dm/modules',
    '/library/places': '/dm/world',
    '/library/characters': '/dm/world',
    '/library/sessions': '/dm/notes',
  },
});
