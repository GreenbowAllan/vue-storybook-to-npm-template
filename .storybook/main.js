const path = require('path');
const {
  mergeConfig
} = require('vite');
module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-mdx-gfm"],
  "framework": {
    name: "@storybook/vue3-vite",
    options: {}
  },
  "features": {
    "storyStoreV7": true
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      css: {
        postcss: null,
        preprocessorOptions: {
          scss: {
            additionalData: `
                        @import '../src/styles/variables.scss';
                        @import '../src/styles/classes.scss';
                      `
          }
        }
      }
    });
  },
  docs: {
    autodocs: true
  }
};