import React from 'react';
import LeapEmployeeCard from './LeapEmployeeCard.jsx';

export default {
  title: 'Components/LeapEmployeeCard',
  component: LeapEmployeeCard,
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
