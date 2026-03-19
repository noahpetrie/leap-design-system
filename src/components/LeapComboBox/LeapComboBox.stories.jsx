import React from 'react';
import LeapComboBox from './LeapComboBox.jsx';

export default {
  title: 'Components/LeapComboBox',
  component: LeapComboBox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A searchable dropdown combo box with typeahead filtering, keyboard navigation, and support for string or object items.',
      },
    },
  },
  argTypes: { onChange: { action: 'changed' } },
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
