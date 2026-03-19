import React from 'react';
import LeapTeamOverview from './LeapTeamOverview.jsx';

export default {
  title: 'Components/LeapTeamOverview',
  component: LeapTeamOverview,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A team availability overview card showing avatar initials grouped by on-leave and available status with a count summary.',
      },
    },
  },
};

export const Default = {
  args: {
    members: [
      { name: 'Sarah Chen', onLeave: true, leaveType: 'Vacation' },
      { name: 'James Wilson', onLeave: true, leaveType: 'Sick Leave' },
      { name: 'Priya Patel', onLeave: false },
      { name: 'Alex Moreau', onLeave: false },
      { name: 'Dana Kim', onLeave: false },
      { name: 'Ravi Kumar', onLeave: false },
      { name: 'Maria Santos', onLeave: false },
    ],
  },
};

export const AllAvailable = {
  args: {
    members: [
      { name: 'Sarah Chen' },
      { name: 'James Wilson' },
      { name: 'Priya Patel' },
    ],
  },
};
