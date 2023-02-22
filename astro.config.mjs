import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import minifyHtml from "astro-html-minifier";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://incresco-astro.vercel.app",
  integrations: [
    tailwind(),
    sitemap(),
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
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
