import React from 'react';
import LeapPagination from './LeapPagination.jsx';

export default {
  title: 'Components/LeapPagination',
  component: LeapPagination,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A pagination control that wraps Carbon Pagination with configurable page sizes and total item counts.',
      },
    },
  },
  argTypes: { onChange: { action: 'page-changed' } },
};

export const Default = { args: { totalItems: 147, pageSize: 10, pageSizes: [10, 25, 50, 100] } };

export const SmallDataset = { args: { totalItems: 12, pageSize: 5, pageSizes: [5, 10] } };
