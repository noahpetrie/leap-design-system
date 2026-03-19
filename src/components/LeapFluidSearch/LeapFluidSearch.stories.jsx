import React from 'react';
import LeapFluidSearch from './LeapFluidSearch.jsx';

export default {
  title: 'Components/LeapFluidSearch',
  component: LeapFluidSearch,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component:
          `A fluid-style search input with a built-in search icon and clear button. Fills its container width with an underline treatment. Use for search fields in fluid form layouts or as a standalone search bar in dense UIs.

### Import
\`\`\`jsx
import { LeapFluidSearch } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``,
      },
    },
  },
};

export const Default = {
  args: {
    id: 'fluid-search-1',
    labelText: 'Search',
    placeholder: 'Search for people, teams, or initiatives...',
  },
};

export const Disabled = {
  args: {
    id: 'fluid-search-disabled',
    labelText: 'Search',
    placeholder: 'Search...',
    disabled: true,
  },
};

export const WithValue = {
  args: {
    id: 'fluid-search-value',
    labelText: 'Search',
    placeholder: 'Search...',
    defaultValue: 'Engineering team',
  },
};
