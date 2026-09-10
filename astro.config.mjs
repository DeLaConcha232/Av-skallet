import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.avskallet.com",
  output: "static",
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: { es: "es-MX", en: "en-US" },
      },
    }),
  ],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: { prefixDefaultLocale: false },
  },
});
