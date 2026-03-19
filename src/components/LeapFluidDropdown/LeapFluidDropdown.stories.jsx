import React from 'react';
import LeapFluidDropdown from './LeapFluidDropdown.jsx';

const items = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

export default {
  title: 'Components/LeapFluidDropdown',
  component: LeapFluidDropdown,
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
          `A fluid-style single-select dropdown that fills its container width. Use for choosing one option from a list in fluid form layouts. Pass items as an array and provide \`itemToString\` to control how each item renders as text.

### Import
\`\`\`jsx
import { LeapFluidDropdown } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``,
      },
    },
  },
};

export const Default = {
  args: {
    id: 'fluid-dropdown-1',
    titleText: 'Department',
    label: 'Select a department',
    items,
    itemToString: (item) => item || '',
  },
};

export const States = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 400 }}>
      <LeapFluidDropdown
        id="dd-default"
        titleText="Default"
        label="Choose one"
        items={items}
        itemToString={(item) => item || ''}
      />
      <LeapFluidDropdown
        id="dd-invalid"
        titleText="Invalid"
        label="Choose one"
        items={items}
        itemToString={(item) => item || ''}
        invalid
        invalidText="Selection is required"
      />
      <LeapFluidDropdown
        id="dd-warn"
        titleText="Warning"
        label="Choose one"
        items={items}
        itemToString={(item) => item || ''}
        warn
        warnText="This may change"
      />
      <LeapFluidDropdown
        id="dd-disabled"
        titleText="Disabled"
        label="Choose one"
        items={items}
        itemToString={(item) => item || ''}
        disabled
      />
    </div>
  ),
};
