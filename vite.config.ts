import { value defineConfig } from "vite";
import * as path from "path";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/guide/build.html#library-mode
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/styles/variables.scss";
          @import "./src/styles/classes.scss";
          @import "./src/assets/scss/style.scss";
        `,
      },
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/library.ts"),
      name: "allan-library",
      fileName: (format) => `allan-library.${format}.js`,
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
});
