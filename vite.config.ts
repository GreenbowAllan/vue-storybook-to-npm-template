import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { format } from "path";
import { createRequire } from "node:module";
import { resolve } from "path";

const require = createRequire(import.meta.url);
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "./src/index.ts"),
      name: "allan-ui",
      // the proper extensions will be added
      fileName: "allan-ui",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  plugins: [vue()],
});
