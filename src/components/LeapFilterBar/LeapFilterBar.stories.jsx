import React from 'react';
import LeapFilterBar from './LeapFilterBar.jsx';

export default {
  title: 'Components/LeapFilterBar',
  component: LeapFilterBar,
  argTypes: { onChange: { action: 'filter changed' }, onClear: { action: 'filter cleared' } },
};

export const Default = {
  args: {
    filters: [
      { id: 'status', label: 'Status', options: ['Approved', 'Pending', 'Denied', 'Cancelled'] },
      { id: 'type', label: 'Leave Type', options: ['Vacation', 'Sick Leave', 'Personal', 'Bereavement'] },
      { id: 'department', label: 'Department', options: ['Engineering', 'Product', 'Design', 'Marketing'] },
    ],
  },
};

export const WithActive = {
  args: {
    filters: [
      { id: 'status', label: 'Status', options: ['Approved', 'Pending', 'Denied'] },
      { id: 'type', label: 'Leave Type', options: ['Vacation', 'Sick Leave', 'Personal'] },
    ],
    activeFilters: { status: 'Pending', type: 'Vacation' },
  },
};
