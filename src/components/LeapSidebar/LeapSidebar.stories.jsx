import React from 'react';
import { Dashboard, Calendar, UserMultiple, Document, Settings, Analytics } from '@carbon/icons-react';
import LeapSidebar from './LeapSidebar.jsx';

export default {
  title: 'Components/LeapSidebar',
  component: LeapSidebar,
  tags: ['autodocs'],
  argTypes: { onItemClick: { action: 'item clicked' } },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `A collapsible vertical navigation sidebar with icon and label items, active state tracking, and an optional logo.

### Import
\`\`\`jsx
import { LeapSidebar } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``,
      },
    },
  },
};

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Dashboard },
  { id: 'requests', label: 'Leave Requests', icon: Document },
  { id: 'calendar', label: 'Team Calendar', icon: Calendar },
  { id: 'team', label: 'Team', icon: UserMultiple },
  { id: 'analytics', label: 'Analytics', icon: Analytics },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export const Default = {
  args: {
    items: navItems,
    activeItem: 'dashboard',
    logo: { text: 'LeapChange' },
  },
};

export const Collapsed = {
  args: {
    items: navItems,
    activeItem: 'requests',
    collapsed: true,
    logo: { text: 'LeapChange', icon: 'L' },
  },
};

export const RequestsActive = {
  args: {
    items: navItems,
    activeItem: 'requests',
    logo: { text: 'LeapChange' },
  },
};
