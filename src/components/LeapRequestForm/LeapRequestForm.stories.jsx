import React from 'react';
import LeapRequestForm from './LeapRequestForm.jsx';

export default {
  title: 'Components/LeapRequestForm',
  component: LeapRequestForm,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `A leave request form with leave type dropdown, date pickers, and notes field for submitting new time-off requests.

### Import
\`\`\`jsx
import { LeapRequestForm } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``,
      },
    },
  },
  argTypes: {
    onSubmit: { action: 'submitted' },
    onCancel: { action: 'cancelled' },
  },
};

export const Default = {
  args: {},
};

export const CustomLeaveTypes = {
  args: { leaveTypes: ['Annual Leave', 'Sick Leave', 'Parental Leave', 'Study Leave'] },
};
