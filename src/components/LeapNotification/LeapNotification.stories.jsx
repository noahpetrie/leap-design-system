import React from 'react';
import LeapNotification from './LeapNotification.jsx';

export default {
  title: 'Components/LeapNotification',
  component: LeapNotification,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'An inline notification component that displays success, error, warning, or info messages with an optional timestamp.',
      },
    },
  },
  argTypes: {
    kind: { control: 'select', options: ['success', 'error', 'warning', 'info'] },
    onClose: { action: 'closed' },
  },
};

export const Success = {
  args: { title: 'Leave Approved', message: 'Your vacation request for Mar 20-24 has been approved.', kind: 'success', timestamp: 'Mar 15, 2026 at 2:30 PM' },
};

export const Error = {
  args: { title: 'Leave Denied', message: 'Your personal leave request conflicts with a project deadline.', kind: 'error', timestamp: 'Mar 14, 2026 at 9:15 AM' },
};

export const Warning = {
  args: { title: 'Low Balance', message: 'You have only 2 vacation days remaining this year.', kind: 'warning' },
};

export const Info = {
  args: { title: 'Policy Update', message: 'Carry-over policy has been updated for next fiscal year.', kind: 'info', timestamp: 'Mar 1, 2026' },
};
