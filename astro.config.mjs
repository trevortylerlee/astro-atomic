import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // change this to your own domain
  site: "https://astro-byte.vercel.app",
  integrations: [tailwind(), sitemap()],
});
