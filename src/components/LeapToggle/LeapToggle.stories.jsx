import React from 'react';
import LeapToggle from './LeapToggle.jsx';

export default {
  title: 'Components/LeapToggle',
  component: LeapToggle,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `A toggle switch built on the Carbon Toggle, with configurable on/off labels, size, and controlled or uncontrolled state.

### Import
\`\`\`jsx
import { LeapToggle } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
    onToggle: { action: 'toggled' },
  },
};

export const Default = {
  args: {
    id: 'leap-toggle-default',
    labelText: 'Auto-approve leave requests',
    labelA: 'Off',
    labelB: 'On',
  },
};

export const Small = {
  args: {
    id: 'leap-toggle-small',
    labelText: 'Email notifications',
    labelA: 'Off',
    labelB: 'On',
    size: 'sm',
  },
};

export const DefaultOn = {
  args: {
    id: 'leap-toggle-on',
    labelText: 'Show calendar view',
    labelA: 'Off',
    labelB: 'On',
    defaultToggled: true,
  },
};

export const Disabled = {
  args: {
    id: 'leap-toggle-disabled',
    labelText: 'Admin only setting',
    labelA: 'Off',
    labelB: 'On',
    disabled: true,
  },
};
