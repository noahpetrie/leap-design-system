import React from 'react';
import LeapActionItem from './LeapActionItem.jsx';

export default {
  title: 'Components/LeapActionItem',
  component: LeapActionItem,
  argTypes: {
    priority: {
      control: 'select',
      options: ['urgent', 'high', 'medium', 'low'],
    },
    status: {
      control: 'select',
      options: ['todo', 'in-progress', 'done'],
    },
    onStatusChange: { action: 'statusChanged' },
  },
};

export const Urgent = {
  args: {
    title: 'Resolve critical stakeholder concerns before go-live',
    assignee: 'Sarah Chen',
    dueDate: 'Mar 22, 2026',
    priority: 'urgent',
    status: 'in-progress',
  },
};

export const High = {
  args: {
    title: 'Finalize change communication plan',
    assignee: 'James Wilson',
    dueDate: 'Apr 1, 2026',
    priority: 'high',
    status: 'todo',
  },
};

export const Medium = {
  args: {
    title: 'Schedule department training sessions',
    assignee: 'Lisa Park',
    dueDate: 'Apr 15, 2026',
    priority: 'medium',
    status: 'todo',
  },
};

export const Low = {
  args: {
    title: 'Update internal wiki with new process docs',
    assignee: 'David Kim',
    dueDate: 'May 1, 2026',
    priority: 'low',
    status: 'todo',
  },
};

export const Done = {
  args: {
    title: 'Complete stakeholder analysis matrix',
    assignee: 'Maria Garcia',
    dueDate: 'Mar 10, 2026',
    priority: 'high',
    status: 'done',
  },
};
