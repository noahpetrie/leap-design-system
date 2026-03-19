import React from 'react';
import { Pending, Checkmark, Calendar, UserMultiple } from '@carbon/react/icons';
import LeapStatCard from './LeapStatCard.jsx';

export default {
  title: 'Components/LeapStatCard',
  component: LeapStatCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A compact statistics card displaying a label, value, optional icon, and optional trend indicator with directional styling.',
      },
    },
  },
};

export const PendingRequests = {
  args: { label: 'Pending requests', value: 12, icon: Pending, trend: '+3 this week', trendDirection: 'up' },
};

export const ApprovedToday = {
  args: { label: 'Approved today', value: 5, icon: Checkmark },
};

export const OnLeaveToday = {
  args: { label: 'On leave today', value: 3, icon: Calendar, trend: '-1 vs yesterday', trendDirection: 'down' },
};

export const TeamSize = {
  args: { label: 'Team members', value: 24, icon: UserMultiple },
};
