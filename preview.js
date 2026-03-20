import React from 'react';
import '@carbon/styles/css/styles.css';
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
      const theme = context.globals.theme || 'white';

      const themeStyles = {
        white: { backgroundColor: '#ffffff', color: '#161616' },
        g10: { backgroundColor: '#f4f4f4', color: '#161616' },
        g90: { backgroundColor: '#262626', color: '#f4f4f4' },
        g100: { backgroundColor: '#161616', color: '#f4f4f4' },
      };

      return React.createElement(
        'div',
        {
          className: `cds--${theme}`,
          'data-carbon-theme': theme,
          style: {
            padding: isDocsView ? '1rem' : '2rem',
            minHeight: isDocsView ? undefined : '100vh',
            ...themeStyles[theme],
          },
        },
        React.createElement(Story)
      );
    },
  ],
};

export default preview;
