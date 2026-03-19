import React from 'react';
import LeapHolidayBanner from './LeapHolidayBanner.jsx';

export default {
  title: 'Components/LeapHolidayBanner',
  component: LeapHolidayBanner,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A dismissible banner that displays an upcoming or current holiday with its date and a countdown in days.',
      },
    },
  },
  argTypes: { onDismiss: { action: 'dismissed' } },
};

export const Upcoming = {
  args: { holidayName: 'Victoria Day', date: 'Monday, May 19, 2026', daysUntil: 5 },
};

export const Today = {
  args: { holidayName: 'Canada Day', date: 'Wednesday, July 1, 2026', daysUntil: 0 },
};

export const NoDismiss = {
  args: { holidayName: 'Thanksgiving', date: 'Monday, October 12, 2026', daysUntil: 14, onDismiss: undefined },
};
