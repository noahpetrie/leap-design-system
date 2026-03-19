import React from 'react';
import LeapSidePanel from './LeapSidePanel.jsx';

export default {
  title: 'Components/LeapSidePanel',
  component: LeapSidePanel,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A slide-in side panel overlay with a header, close button, and content area for displaying contextual details.',
      },
    },
  },
  argTypes: { onClose: { action: 'closed' } },
};

export const Open = {
  args: {
    open: true,
    title: 'Leave Request #142',
    children: 'Sarah Chen — Vacation, Mar 20-24 (5 days). Status: Approved.',
  },
};

export const Closed = {
  args: { open: false, title: 'Details' },
};
