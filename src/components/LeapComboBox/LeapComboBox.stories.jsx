import React from 'react';
import LeapComboBox from './LeapComboBox.jsx';

export default {
  title: 'Components/LeapComboBox',
  component: LeapComboBox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `A searchable dropdown combo box with typeahead filtering, keyboard navigation, and support for string or object items.

### Import
\`\`\`jsx
import { LeapComboBox } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``,
      },
    },
  },
  argTypes: {
    items: {
      description: 'Array of items to display. Can be strings or objects with `id` and `label`.',
      control: 'object',
    },
    selectedItem: {
      description: 'The currently selected item (string or object).',
      control: 'text',
    },
    onChange: {
      description: 'Callback fired when an item is selected.',
      action: 'changed',
    },
    placeholder: {
      description: 'Placeholder text for the input field.',
      control: 'text',
    },
    label: {
      description: 'Label displayed above the combo box.',
      control: 'text',
    },
    helperText: {
      description: 'Helper text displayed below the combo box.',
      control: 'text',
    },
    disabled: {
      description: 'Whether the combo box is disabled.',
      control: 'boolean',
    },
    invalid: {
      description: 'Whether the combo box is in an invalid state.',
      control: 'boolean',
    },
    invalidText: {
      description: 'Error message displayed when `invalid` is true.',
      control: 'text',
    },
  },
};

const countries = [
  'Australia',
  'Brazil',
  'Canada',
  'Denmark',
  'Egypt',
  'France',
  'Germany',
  'India',
  'Japan',
  'Kenya',
  'Mexico',
  'Netherlands',
  'Norway',
  'Poland',
  'South Korea',
  'Spain',
  'Sweden',
  'United Kingdom',
  'United States',
];

export const Default = {
  args: {
    items: countries,
    placeholder: 'Search a country...',
  },
};

export const WithLabel = {
  args: {
    items: countries,
    label: 'Country of residence',
    placeholder: 'Search a country...',
    helperText: 'Select the country where the employee is based',
  },
};

export const Disabled = {
  args: {
    items: countries,
    label: 'Country',
    placeholder: 'Search a country...',
    selectedItem: 'Canada',
    disabled: true,
  },
};

export const Invalid = {
  args: {
    items: countries,
    label: 'Country',
    placeholder: 'Search a country...',
    invalid: true,
    invalidText: 'Please select a valid country',
  },
};
