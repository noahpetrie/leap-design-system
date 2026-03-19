import React from 'react';
import LeapAvatar from './LeapAvatar.jsx';

export default {
  title: 'Components/LeapAvatar',
  component: LeapAvatar,
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
    status: { control: 'select', options: [undefined, 'online', 'away', 'busy', 'offline'] },
  },
};

export const Initials = {
  args: { name: 'Sarah Chen', size: 'lg' },
};

export const WithImage = {
  args: { name: 'James Wilson', src: 'https://i.pravatar.cc/150?u=james', size: 'lg' },
};

export const Online = {
  args: { name: 'Priya Patel', size: 'lg', status: 'online' },
};

export const Away = {
  args: { name: 'Alex Moreau', size: 'lg', status: 'away' },
};

export const Busy = {
  args: { name: 'Dana Kim', size: 'lg', status: 'busy' },
};

export const Small = {
  args: { name: 'Sarah Chen', size: 'sm', status: 'online' },
};

export const ExtraLarge = {
  args: { name: 'James Wilson', size: 'xl', status: 'online' },
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <LeapAvatar name="Sarah Chen" size="sm" status="online" />
      <LeapAvatar name="Sarah Chen" size="md" status="online" />
      <LeapAvatar name="Sarah Chen" size="lg" status="online" />
      <LeapAvatar name="Sarah Chen" size="xl" status="online" />
    </div>
  ),
};
