import React from 'react';
import LeapBreadcrumb from './LeapBreadcrumb.jsx';

export default {
  title: 'Components/LeapBreadcrumb',
  component: LeapBreadcrumb,
};

export const Default = {
  args: {
    items: [
      { label: 'Dashboard', href: '#' },
      { label: 'Team', href: '#' },
      { label: 'Sarah Chen', href: '#' },
      { label: 'Request #142' },
    ],
  },
};

export const Short = {
  args: {
    items: [
      { label: 'Dashboard', href: '#' },
      { label: 'My Requests' },
    ],
  },
};
