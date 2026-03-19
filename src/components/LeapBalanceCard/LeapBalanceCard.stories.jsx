import React from 'react';
import LeapBalanceCard from './LeapBalanceCard.jsx';

export default {
  title: 'Components/LeapBalanceCard',
  component: LeapBalanceCard,
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
