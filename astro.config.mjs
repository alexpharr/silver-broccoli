import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://alexpharr.github.io",
  base: 'silver-broccoli',
  integrations: [mdx(), sitemap(), tailwind()],
});
