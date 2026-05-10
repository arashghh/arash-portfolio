import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/arash-portfolio/",
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});
