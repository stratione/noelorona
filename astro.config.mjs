import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: "static",
  site: "https://example.com", // TODO: replace with production domain for correct canonical URLs.
  trailingSlash: "never",
  integrations: [
    tailwind({
      applyBaseStyles: false
    })
  ]
});
