import React from 'react';
import LeapSearch from './LeapSearch.jsx';

export default {
  title: 'Components/LeapSearch',
  component: LeapSearch,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `A search input field that wraps Carbon's Search component, supporting configurable size and placeholder text.

### Import
\`\`\`jsx
import { LeapSearch } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``,
      },
    },
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    onChange: { action: 'changed' },
    onClear: { action: 'cleared' },
  },
};

export const Default = { args: {} };
export const Small = { args: { size: 'sm', placeholder: 'Quick search...' } };
export const Large = { args: { size: 'lg', placeholder: 'Search all leave requests...' } };
