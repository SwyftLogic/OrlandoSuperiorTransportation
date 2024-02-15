import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://new-custom-template.orlandosuperiortransportation.pages.dev",
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
  adapter: cloudflare({
    mode: "directory",
    functionPerRoute: true,
  }),
});
