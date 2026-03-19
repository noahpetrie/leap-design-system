import React from 'react';
import '../src/styles/globals.css';

/** @type {import('storybook').Preview} */
const preview = {
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Light or dark mode',
      defaultValue: 'light',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const isDocsView = context.viewMode === 'docs';
      const theme = context.globals.theme || 'light';
      return React.createElement(
        'div',
        {
          className: theme === 'dark' ? 'dark' : '',
          style: {
            padding: isDocsView ? '1rem' : '2rem',
            minHeight: isDocsView ? undefined : '100vh',
            backgroundColor: 'hsl(var(--background))',
            color: 'hsl(var(--foreground))',
          },
        },
        React.createElement(Story)
      );
    },
  ],
};

export default preview;
