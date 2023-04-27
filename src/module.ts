import { fileURLToPath } from "node:url";
import { addComponentsDir, defineNuxtModule } from "@nuxt/kit";

function rPath(p: string) {
  return fileURLToPath(new URL(p, import.meta.url).toString());
}

export interface ModuleOptions {
  dev?: boolean;
  preset?: string;
}
// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "allan-ui",
    configKey: "allanUI",
  },
  // Default configuration options of the Nuxt module
  defaults: {
    preset: rPath("./preset"),
  },
  async setup(options, nuxt) {
    // Standard components
    addComponentsDir({ path: rPath("./components") });

    nuxt.options.css.unshift(rPath("./assets/styles.css"));

    if (!options.dev)
      // @ts-expect-error - module options
      nuxt.options.vueuse = nuxt.options.vueuse || {};
  },
});
