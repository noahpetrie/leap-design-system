import React from 'react';
import LeapRequestForm from './LeapRequestForm.jsx';

export default {
  title: 'Components/LeapRequestForm',
  component: LeapRequestForm,
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
