import React from 'react';
import LeapEmptyState from './LeapEmptyState.jsx';

export default {
  title: 'Components/LeapEmptyState',
  component: LeapEmptyState,
  argTypes: {
    icon: { control: 'select', options: ['calendar', 'document', 'search'] },
    onAction: { action: 'action clicked' },
  },
};

export const NoPendingRequests = {
  args: {
    title: 'No pending requests',
    description: 'All leave requests have been reviewed. New requests will appear here.',
    icon: 'document',
  },
};

export const NoResults = {
  args: {
    title: 'No results found',
    description: 'Try adjusting your filters or search terms.',
    icon: 'search',
  },
};

export const EmptyCalendar = {
  args: {
    title: 'No leave scheduled',
    description: 'No one on your team has leave booked for this period.',
    icon: 'calendar',
    actionLabel: 'Create Request',
  },
};
