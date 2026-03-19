import React from 'react';
import LeapStatusBadge from './LeapStatusBadge.jsx';

export default {
  title: 'Components/LeapStatusBadge',
  component: LeapStatusBadge,
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
