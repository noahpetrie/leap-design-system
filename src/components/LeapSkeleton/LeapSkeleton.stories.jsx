import React from 'react';
import LeapSkeleton from './LeapSkeleton.jsx';

export default {
  title: 'Components/LeapSkeleton',
  component: LeapSkeleton,
  argTypes: {
    variant: { control: 'select', options: ['text', 'heading', 'card', 'avatar', 'button'] },
  },
};

export const TextLines = { args: { variant: 'text', count: 4 } };
export const Heading = { args: { variant: 'heading' } };
export const Card = { args: { variant: 'card', height: 160 } };
export const Avatar = { args: { variant: 'avatar', circle: true, height: 48 } };
export const Button = { args: { variant: 'button', height: 40 } };

export const PageSkeleton = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: 600 }}>
      <LeapSkeleton variant="heading" />
      <LeapSkeleton variant="text" count={3} />
      <div style={{ display: 'flex', gap: '16px' }}>
        <LeapSkeleton variant="card" height={120} width="50%" />
        <LeapSkeleton variant="card" height={120} width="50%" />
      </div>
      <LeapSkeleton variant="text" count={2} />
      <LeapSkeleton variant="button" />
    </div>
  ),
};
