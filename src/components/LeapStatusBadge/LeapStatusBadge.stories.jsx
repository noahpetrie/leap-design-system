import React from 'react';
import LeapStatusBadge from './LeapStatusBadge.jsx';

export default {
  title: 'Components/LeapStatusBadge',
  component: LeapStatusBadge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A color-coded status badge with an icon, supporting approved, denied, pending, cancelled, and active states.',
      },
    },
  },
  argTypes: {
    status: { control: 'select', options: ['approved', 'denied', 'pending', 'cancelled', 'active'] },
    size: { control: 'select', options: ['sm', 'md'] },
  },
};

export const Approved = { args: { status: 'approved' } };
export const Denied = { args: { status: 'denied' } };
export const Pending = { args: { status: 'pending' } };
export const Cancelled = { args: { status: 'cancelled' } };
export const Active = { args: { status: 'active' } };
