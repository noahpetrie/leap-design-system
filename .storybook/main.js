/** @type {import('@storybook/react-vite').StorybookConfig} */
module.exports = {
  stories: ['../src/components/**/*.stories.@(js|jsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  viteFinal: async (config) => {
    config.css = {
      ...config.css,
      preprocessorOptions: {
        scss: {
          additionalData: `@use '@carbon/colors' as *;\n`,
          includePaths: [
            'node_modules',
            'node_modules/@carbon/styles/scss',
            'node_modules/@carbon/react/scss',
          ],
        },
      },
    };
    return config;
  },
};
