import React from 'react';
import LeapFluidMultiSelect from './LeapFluidMultiSelect.jsx';

const items = [
  { id: 'eng', text: 'Engineering' },
  { id: 'design', text: 'Design' },
  { id: 'product', text: 'Product' },
  { id: 'marketing', text: 'Marketing' },
  { id: 'sales', text: 'Sales' },
];

export default {
  title: 'Components/LeapFluidMultiSelect',
  component: LeapFluidMultiSelect,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
    warn: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A fluid-style multi-select dropdown for choosing multiple options from a list. Selected items appear as tags within the field. Use `itemToString` to control how each item renders. Pairs with `LeapFluidDropdown` for consistent fluid form patterns.',
      },
    },
  },
};

export const Default = {
  args: {
    id: 'fluid-multiselect-1',
    titleText: 'Teams',
    label: 'Select teams',
    items,
    itemToString: (item) => item?.text || '',
  },
};

export const States = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 400 }}>
      <LeapFluidMultiSelect
        id="ms-default"
        titleText="Default"
        label="Select teams"
        items={items}
        itemToString={(item) => item?.text || ''}
      />
      <LeapFluidMultiSelect
        id="ms-invalid"
        titleText="Invalid"
        label="Select teams"
        items={items}
        itemToString={(item) => item?.text || ''}
        invalid
        invalidText="At least one team is required"
      />
      <LeapFluidMultiSelect
        id="ms-disabled"
        titleText="Disabled"
        label="Select teams"
        items={items}
        itemToString={(item) => item?.text || ''}
        disabled
      />
    </div>
  ),
};
