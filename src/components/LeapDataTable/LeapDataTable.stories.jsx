import React from 'react';
import LeapDataTable from './LeapDataTable.jsx';

export default {
  title: 'Components/LeapDataTable',
  component: LeapDataTable,
  tags: ['autodocs'],
  argTypes: { onRowClick: { action: 'row clicked' } },
  parameters: {
    docs: {
      description: {
        component: `A data table component built on Carbon's DataTable that renders rows and headers with optional clickable row support.

### Import
\`\`\`jsx
import { LeapDataTable } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``,
      },
    },
  },
};

const headers = [
  { key: 'employee', header: 'Employee' },
  { key: 'type', header: 'Leave Type' },
  { key: 'dates', header: 'Dates' },
  { key: 'status', header: 'Status' },
];

const rows = [
  { id: '1', employee: 'Sarah Chen', type: 'Vacation', dates: 'Mar 20-24', status: 'Approved' },
  { id: '2', employee: 'James Wilson', type: 'Sick Leave', dates: 'Mar 18-19', status: 'Approved' },
  { id: '3', employee: 'Priya Patel', type: 'Personal', dates: 'Mar 25', status: 'Pending' },
  { id: '4', employee: 'Alex Moreau', type: 'Vacation', dates: 'Apr 7-11', status: 'Denied' },
];

export const Default = { args: { headers, rows } };

export const Clickable = { args: { headers, rows } };
