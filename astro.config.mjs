import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import minifyHtml from "astro-html-minifier";
import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";
import { readingTimeRemarkPlugin } from "./src/utils/frontmatter.mjs";

export default defineConfig({
  site: "https://increscotech.com",
  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
  },
  integrations: [
    tailwind(),
    sitemap(),
    robotsTxt(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    react(),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    minifyHtml(),
    mdx(),
    compress({
      css: true,
      html: {
        removeAttributeQuotes: false,
      },
      img: false,
      js: true,
      svg: false,

      logger: 1,
    }),
  ],

  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
