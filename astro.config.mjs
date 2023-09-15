import { defineConfig, squooshImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  image: { service: squooshImageService() },
  site: "https://Leo0114.github.io",
  base: "/PaDemo",
  integrations: [tailwind(), preact()],
});
