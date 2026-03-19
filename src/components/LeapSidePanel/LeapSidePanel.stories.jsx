import React from 'react';
import LeapSidePanel from './LeapSidePanel.jsx';

export default {
  title: 'Components/LeapSidePanel',
  component: LeapSidePanel,
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
