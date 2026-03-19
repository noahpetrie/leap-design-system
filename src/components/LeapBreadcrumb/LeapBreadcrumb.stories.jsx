import React from 'react';
import LeapBreadcrumb from './LeapBreadcrumb.jsx';

export default {
  title: 'Components/LeapBreadcrumb',
  component: LeapBreadcrumb,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `A breadcrumb navigation component built on Carbon's Breadcrumb, rendering a list of linked path segments with the last item marked as the current page.

### Import
\`\`\`jsx
import { LeapBreadcrumb } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``,
      },
    },
  },
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
