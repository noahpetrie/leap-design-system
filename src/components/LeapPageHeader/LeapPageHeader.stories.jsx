import React from 'react';
import { Add } from '@carbon/icons-react';
import LeapPageHeader from './LeapPageHeader.jsx';
import LeapButton from '../LeapButton/LeapButton.jsx';

export default {
  title: 'Components/LeapPageHeader',
  component: LeapPageHeader,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `A page header with a title, optional subtitle, breadcrumb navigation, and an action slot for buttons.

### Import
\`\`\`jsx
import { LeapPageHeader } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``,
      },
    },
  },
};

export const Default = {
  args: {
    title: 'Leave Requests',
    subtitle: 'Manage and review team leave requests',
    breadcrumbs: [
      { label: 'Dashboard', href: '#' },
      { label: 'Leave Requests' },
    ],
  },
};

export const WithActions = {
  render: () => (
    <LeapPageHeader
      title="Team Calendar"
      subtitle="View team availability and scheduled leave"
      breadcrumbs={[{ label: 'Dashboard', href: '#' }, { label: 'Team Calendar' }]}
      actions={<LeapButton size="sm" renderIcon={Add}>New Request</LeapButton>}
    />
  ),
};

export const Simple = {
  args: { title: 'Settings' },
};
