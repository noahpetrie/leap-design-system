import React from 'react';
import LeapCalendar from './LeapCalendar.jsx';

export default {
  title: 'Components/LeapCalendar',
  component: LeapCalendar,
};

export const Default = {
  args: {
    month: 2,
    year: 2026,
    leaveDays: [
      { date: '2026-03-16', type: 'Vacation', status: 'approved' },
      { date: '2026-03-17', type: 'Vacation', status: 'approved' },
      { date: '2026-03-18', type: 'Vacation', status: 'approved' },
      { date: '2026-03-23', type: 'Sick', status: 'sick' },
      { date: '2026-03-24', type: 'Sick', status: 'sick' },
      { date: '2026-03-30', type: 'Personal', status: 'personal' },
    ],
    holidays: ['2026-03-06'],
  },
};

export const Empty = {
  args: { month: 3, year: 2026, leaveDays: [], holidays: [] },
};
