import React from 'react';
import { Add } from '@carbon/react/icons';
import { Button } from '@carbon/react';
import LeapPageHeader from './LeapPageHeader.jsx';

export default {
  title: 'Components/LeapPageHeader',
  component: LeapPageHeader,
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
      actions={<Button size="sm" renderIcon={Add}>New Request</Button>}
    />
  ),
};

export const Simple = {
  args: { title: 'Settings' },
};
