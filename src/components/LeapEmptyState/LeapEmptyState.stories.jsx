import React from 'react';
import LeapEmptyState from './LeapEmptyState.jsx';

export default {
  title: 'Components/LeapEmptyState',
  component: LeapEmptyState,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: 'select', options: ['calendar', 'document', 'search'] },
    onAction: { action: 'action clicked' },
  },
  parameters: {
    docs: {
      description: {
        component: 'A placeholder component for empty views that displays an icon, title, optional description, and an optional call-to-action button.',
      },
    },
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
