import React from 'react';
import LeapSelect from './LeapSelect.jsx';

export default {
  title: 'Components/LeapSelect',
  component: LeapSelect,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `A dropdown select component that wraps Carbon's Dropdown, accepting string or object items for option selection.

### Import
\`\`\`jsx
import { LeapSelect } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``,
      },
    },
  },
  argTypes: { onChange: { action: 'changed' }, size: { control: 'select', options: ['sm', 'md', 'lg'] } },
};

export const Default = {
  args: { id: 'dept', titleText: 'Department', items: ['Engineering', 'Product', 'Design', 'Marketing', 'Sales'] },
};

export const LeaveType = {
  args: { id: 'type', titleText: 'Leave type', label: 'Select type', items: ['Vacation', 'Sick Leave', 'Personal', 'Bereavement', 'Parental'] },
};

export const Disabled = {
  args: { id: 'disabled', titleText: 'Region', items: ['North America', 'Europe', 'Asia Pacific'], disabled: true },
};
