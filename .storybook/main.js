/** @type {import('@storybook/react-vite').StorybookConfig} */
module.exports = {
  stories: ['../src/components/**/*.stories.@(js|jsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: ['.'],
  docs: {
    autodocs: true,
  },
};
