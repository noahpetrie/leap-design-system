import React from 'react';
import LeapLogo from './LeapLogo.jsx';

export default {
  title: 'Brand/LeapLogo',
  component: LeapLogo,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['mark', 'bordered'] },
    size: { control: { type: 'range', min: 16, max: 200, step: 4 } },
    color: { control: 'color' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'The official Leap logo as a React component. Available in two variants: "mark" (the triple-circle logomark) and "bordered" (logomark inside a rounded square border). Supports custom size and color.',
      },
    },
  },
};

export const Mark = {
  args: {
    variant: 'mark',
    size: 80,
  },
};

export const Bordered = {
  args: {
    variant: 'bordered',
    size: 80,
  },
};

export const Small = {
  args: {
    variant: 'mark',
    size: 24,
  },
};

export const Large = {
  args: {
    variant: 'mark',
    size: 160,
  },
};

export const White = {
  args: {
    variant: 'mark',
    size: 80,
    color: '#ffffff',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '2rem', background: '#161616', borderRadius: '8px', display: 'inline-block' }}>
        <Story />
      </div>
    ),
  ],
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
      <LeapLogo size={16} />
      <LeapLogo size={24} />
      <LeapLogo size={32} />
      <LeapLogo size={48} />
      <LeapLogo size={64} />
      <LeapLogo size={96} />
    </div>
  ),
};
