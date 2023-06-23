const { mergeConfig } = require('vite');
const { resolve } = require('path');

module.exports = {
  // other storybook options...,
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite'
  },
  features: {
    storyStoreV7: true
  },
  async viteFinal(config, options) {
    return mergeConfig(config, {
      publicPath: '/storybook/',
      resolve: {
        alias: {
          Assets: resolve(__dirname, './../src/assets'),
          Components: resolve(__dirname, './../src/components'),
          Elements: resolve(__dirname, './../src/elements'),
          Features: resolve(__dirname, './../src/features'),
          Hooks: resolve(__dirname, './../src/hooks'),
          Libs: resolve(__dirname, './../src/libs'),
          Pages: resolve(__dirname, './../src/pages'),
          Routes: resolve(__dirname, './../src/routes'),
          Services: resolve(__dirname, './../src/services'),
          State: resolve(__dirname, './../src/state'),
          Stories: resolve(__dirname, './../src/stories'),
          Tests: resolve(__dirname, './../src/tests'),
          Types: resolve(__dirname, './../src/types'),
          Utils: resolve(__dirname, './../src/utils')
        }
      }
    });
  }
};
