import React from 'react';
import LeapModal from './LeapModal.jsx';

export default {
  title: 'Components/LeapModal',
  component: LeapModal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A confirmation modal dialog built on Carbon Modal with support for standard and danger variants.',
      },
    },
  },
  argTypes: {
    onRequestClose: { action: 'closed' },
    onRequestSubmit: { action: 'submitted' },
  },
};

export const Confirmation = {
  args: {
    open: true,
    modalHeading: 'Approve leave request?',
    primaryButtonText: 'Approve',
    children: 'This will approve Sarah Chen\'s vacation request for Mar 20-24 (5 days).',
  },
};

export const Danger = {
  args: {
    open: true,
    modalHeading: 'Cancel leave request?',
    primaryButtonText: 'Cancel Request',
    danger: true,
    children: 'This action cannot be undone. The employee will be notified.',
  },
};
