import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

export default defineConfig({
  // This repo is "core-service-hub", so GitHub Pages serves it at
  // https://zeehaancode21.github.io/core-service-hub/ — NOT the domain root.
  // base must match the repo name exactly (with leading and trailing slash).
  base: "/core-service-hub/",
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    viteReact(),
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
  ],
});