import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";
import expressiveCode from "astro-expressive-code";

export default defineConfig({
  site: "https://astro-atomic.vercel.app",
  integrations: [
    tailwind(),
    sitemap(),
    pagefind(),
    expressiveCode({
      themes: ["min-dark"],
    }),
  ],
});
