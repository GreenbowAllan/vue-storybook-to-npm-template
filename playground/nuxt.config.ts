import { resolve } from "node:path";

export default defineNuxtConfig({
  modules: ["../src/module"],
  nitro: {
    rootDir: resolve(__dirname, ".."),
  },
});
