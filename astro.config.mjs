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
    // CYOA rebranded → Solo Play (DM Vault)
    '/cyoa': '/dm/solo',
    '/cyoa/[slug]': '/dm/solo/[slug]',
  },
});
