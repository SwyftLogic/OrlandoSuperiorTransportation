import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://new-custom-template.orlandosuperiortransportation.pages.dev',
  integrations: [sitemap()],
  prefetch: {
    defaultStrategy: 'hover',
    prefetchAll: true
  }
});