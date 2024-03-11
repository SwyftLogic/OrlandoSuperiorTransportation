import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://www.orlandosuperiortransportation.com",
  integrations: [
    sitemap(),
    tailwind(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
        debug: false,
      },
    })
  ],
  prefetch: {
    defaultStrategy: "hover",
    prefetchAll: true,
  },
  output: "hybrid",
  adapter: cloudflare(),
  redirects: {
    '/book': {
      status: 301,
      destination: '/book-a-ride/'
    }
  }
});
