import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // output: 'server',
  site: 'https://new-custom-template.orlandosuperiortransportation.pages.dev',
  integrations: [sitemap(), tailwind()],
  prefetch: {
    defaultStrategy: 'hover',
    prefetchAll: true
  }
});