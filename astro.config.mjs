import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: 'https://new-custom-template.orlandosuperiortransportation.pages.dev',
  integrations: [sitemap(), tailwind()],
  prefetch: {
    defaultStrategy: 'hover',
    prefetchAll: true
  },
  output: "server",
  adapter: cloudflare({
    mode: 'directory',
    functionPerRoute: true
  })
});