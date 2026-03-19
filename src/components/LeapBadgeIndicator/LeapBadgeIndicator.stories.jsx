import React from 'react';
import { Notification } from '@carbon/icons-react';
import LeapBadgeIndicator from './LeapBadgeIndicator.jsx';

export default {
  title: 'Components/LeapBadgeIndicator',
  component: LeapBadgeIndicator,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `A small notification badge indicator, used as an overlay on icons or avatars to show a dot or numeric unread count (capped at 999+).

### Import
\`\`\`jsx
import { LeapBadgeIndicator } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``,
      },
    },
  },
  argTypes: {
    count: { control: 'number' },
  },
};

export const Dot = {
  render: () => (
    <div style={{ position: 'relative', display: 'inline-block', padding: '1rem' }}>
      <Notification size={24} />
      <LeapBadgeIndicator />
    </div>
  ),
};

export const WithCount = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <div style={{ position: 'relative', display: 'inline-block', padding: '1rem' }}>
        <Notification size={24} />
        <LeapBadgeIndicator count={3} />
      </div>
      <div style={{ position: 'relative', display: 'inline-block', padding: '1rem' }}>
        <Notification size={24} />
        <LeapBadgeIndicator count={42} />
      </div>
      <div style={{ position: 'relative', display: 'inline-block', padding: '1rem' }}>
        <Notification size={24} />
        <LeapBadgeIndicator count={999} />
      </div>
      <div style={{ position: 'relative', display: 'inline-block', padding: '1rem' }}>
        <Notification size={24} />
        <LeapBadgeIndicator count={1500} />
      </div>
    </div>
  ),
};
