import React from 'react';
import LeapEngagementTracker from './LeapEngagementTracker';

export default {
  title: 'Change Management/LeapEngagementTracker',
  component: LeapEngagementTracker,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Tracks stakeholder engagement by displaying each stakeholder\'s last engagement date, total engagement count, and trend direction (up, down, stable), sorted by least recently engaged.',
      },
    },
  },
};

const today = new Date();
const daysAgo = (n) => {
  const d = new Date(today);
  d.setDate(d.getDate() - n);
  return d.toISOString().split('T')[0];
};

export const Default = {
  args: {
    stakeholders: [
      { name: 'Sarah Chen', lastEngagement: daysAgo(2), engagementCount: 14, trend: 'up' },
      { name: 'Marcus Johnson', lastEngagement: daysAgo(45), engagementCount: 3, trend: 'down' },
      { name: 'Priya Patel', lastEngagement: daysAgo(10), engagementCount: 8, trend: 'stable' },
      { name: 'James O\'Brien', lastEngagement: daysAgo(60), engagementCount: 1, trend: 'down' },
      { name: 'Amara Osei', lastEngagement: daysAgo(5), engagementCount: 22, trend: 'up' },
      { name: 'Liam Foster', lastEngagement: daysAgo(18), engagementCount: 6, trend: 'stable' },
    ],
  },
};

export const AllRecent = {
  args: {
    stakeholders: [
      { name: 'Sarah Chen', lastEngagement: daysAgo(1), engagementCount: 20, trend: 'up' },
      { name: 'Marcus Johnson', lastEngagement: daysAgo(3), engagementCount: 15, trend: 'up' },
      { name: 'Priya Patel', lastEngagement: daysAgo(2), engagementCount: 18, trend: 'stable' },
      { name: 'James O\'Brien', lastEngagement: daysAgo(5), engagementCount: 12, trend: 'up' },
      { name: 'Amara Osei', lastEngagement: daysAgo(1), engagementCount: 25, trend: 'up' },
      { name: 'Liam Foster', lastEngagement: daysAgo(4), engagementCount: 10, trend: 'stable' },
    ],
  },
};
