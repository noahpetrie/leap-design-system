import React from 'react';
import LeapChange from './LeapChange.jsx';

export default {
  title: 'Components/LeapChange',
  component: LeapChange,
  tags: ['autodocs'],
  argTypes: {
    changeType: {
      control: 'select',
      options: ['approved', 'denied', 'modified', 'pending'],
    },
  },
  parameters: {
    docs: {
      description: {
        component: `Displays a change log entry showing a leave request status transition (approved, denied, modified, or pending) with timestamp, employee name, and optional reason.

### Import
\`\`\`jsx
import { LeapChange } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``,
      },
    },
  },
};

export const Approved = {
  args: {
    employeeName: 'Sarah Chen',
    leaveType: 'Vacation',
    changeType: 'approved',
    previousValue: 'Pending review',
    newValue: 'Approved',
    timestamp: 'Mar 15, 2026 at 2:30 PM',
    reason: 'Manager approved — sufficient team coverage',
  },
};

export const Denied = {
  args: {
    employeeName: 'Priya Patel',
    leaveType: 'Personal',
    changeType: 'denied',
    previousValue: 'Pending review',
    newValue: 'Denied',
    timestamp: 'Mar 13, 2026 at 4:45 PM',
    reason:
      'Conflicts with project deadline — please resubmit for alternate dates',
  },
};

export const Modified = {
  args: {
    employeeName: 'James Wilson',
    leaveType: 'Sick Leave',
    changeType: 'modified',
    previousValue: 'Mar 20–22 (3 days)',
    newValue: 'Mar 20–25 (5 days)',
    timestamp: 'Mar 14, 2026 at 9:15 AM',
    reason: 'Extended due to medical note',
  },
};

export const Pending = {
  args: {
    employeeName: 'Alex Moreau',
    leaveType: 'Vacation',
    changeType: 'pending',
    newValue: 'Apr 7–11 (5 days)',
    timestamp: 'Mar 12, 2026 at 11:00 AM',
  },
};
