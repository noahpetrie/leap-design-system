import React from 'react';
import LeapEmployeeCard from './LeapEmployeeCard.jsx';

export default {
  title: 'Components/LeapEmployeeCard',
  component: LeapEmployeeCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Displays an employee profile card with avatar (image or initials), name, role, department, and an optional leave balance indicator.

### Import
\`\`\`jsx
import { LeapEmployeeCard } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``,
      },
    },
  },
};

export const Default = {
  args: { name: 'Sarah Chen', role: 'Software Engineer', department: 'Engineering', leaveBalance: 12 },
};

export const NoBalance = {
  args: { name: 'James Wilson', role: 'Product Manager', department: 'Product' },
};

export const NoDepartment = {
  args: { name: 'Priya Patel', role: 'Designer', leaveBalance: 5 },
};

export const LongName = {
  args: { name: 'Alexander Montgomery-Richards', role: 'Senior Staff Engineer', department: 'Platform Engineering', leaveBalance: 18 },
};
