import React from 'react';
import { Theme } from '@carbon/react';
import '@carbon/styles/css/styles.css';

const themeMap = {
  white: 'white',
  g10: 'g10',
  g90: 'g90',
  g100: 'g100',
};

/** @type {import('storybook').Preview} */
const preview = {
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
  globalTypes: {
    theme: {
      name: 'Carbon Theme',
      description: 'Carbon design system theme',
      defaultValue: 'white',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'white', title: 'White' },
          { value: 'g10', title: 'Gray 10' },
          { value: 'g90', title: 'Gray 90' },
          { value: 'g100', title: 'Gray 100' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const isDocsView = context.viewMode === 'docs';
      const theme = themeMap[context.globals.theme] || 'white';
      return React.createElement(
        Theme,
        { theme: theme },
        React.createElement(
          'div',
          {
            style: {
              padding: isDocsView ? '1rem' : '2rem',
              background: 'var(--cds-background)',
              minHeight: isDocsView ? undefined : '100vh',
            },
          },
          React.createElement(Story)
        )
      );
    },
  ],
};

export default preview;
