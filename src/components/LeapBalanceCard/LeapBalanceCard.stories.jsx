import React from 'react';
import LeapBalanceCard from './LeapBalanceCard.jsx';

export default {
  title: 'Components/LeapBalanceCard',
  component: LeapBalanceCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Shows a leave balance summary card with a progress bar indicating how much of a leave type (e.g. Vacation, Sick Leave) has been used versus the total allocation.',
      },
    },
  },
};

export const Vacation = {
  args: { leaveType: 'Vacation', used: 8, total: 20, unit: 'days' },
};

export const SickLeave = {
  args: { leaveType: 'Sick Leave', used: 2, total: 10, unit: 'days' },
};

export const Personal = {
  args: { leaveType: 'Personal', used: 4, total: 5, unit: 'days' },
};

export const LowBalance = {
  args: { leaveType: 'Vacation', used: 18, total: 20, unit: 'days' },
};
