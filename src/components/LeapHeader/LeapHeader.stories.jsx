import React from 'react';
import { Notification, UserAvatar } from '@carbon/icons-react';
import LeapHeader from './LeapHeader.jsx';
import LeapLogo from '../LeapLogo/LeapLogo.jsx';

export default {
  title: 'Components/LeapHeader',
  component: LeapHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `A fixed top navigation bar with app branding, horizontal nav items, and an action slot for icons and controls.

### Import
\`\`\`jsx
import { LeapHeader } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``,
      },
    },
  },
};

const sampleNav = [
  { id: 'dashboard', label: 'Dashboard', href: '#', isActive: true },
  { id: 'projects', label: 'Projects', href: '#' },
  { id: 'reports', label: 'Reports', href: '#' },
  { id: 'settings', label: 'Settings', href: '#' },
];

export const Default = {
  args: {
    appName: 'Leap',
    navItems: sampleNav,
    onMenuClick: () => console.log('Menu clicked'),
  },
};

export const WithLogo = {
  args: {
    appName: 'Leap',
    logo: <LeapLogo variant="mark" size={20} color="#ffffff" />,
    navItems: sampleNav,
    onMenuClick: () => console.log('Menu clicked'),
  },
};

export const WithActions = {
  render: () => (
    <LeapHeader
      appName="Leap"
      navItems={sampleNav}
      onMenuClick={() => console.log('Menu clicked')}
      actions={
        <>
          <button
            type="button"
            aria-label="Notifications"
            style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          >
            <Notification size={20} />
          </button>
          <button
            type="button"
            aria-label="User profile"
            style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          >
            <UserAvatar size={20} />
          </button>
        </>
      }
    />
  ),
};

export const MinimalHeader = {
  args: {
    appName: 'Leap',
  },
};
