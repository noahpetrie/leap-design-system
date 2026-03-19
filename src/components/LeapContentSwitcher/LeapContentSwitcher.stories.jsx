import React, { useState } from 'react';
import { List, Grid, TreeView, ChartBar, TableSplit } from '@carbon/react/icons';
import LeapContentSwitcher from './LeapContentSwitcher.jsx';

export default {
  title: 'Components/LeapContentSwitcher',
  component: LeapContentSwitcher,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
    onChange: { action: 'changed' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A segmented toggle for switching between related content views. Supports icons, keyboard navigation (arrow keys, Home, End), and multiple sizes.',
      },
    },
  },
};

export const Default = {
  args: {
    items: [
      { id: 'overview', label: 'Overview' },
      { id: 'details', label: 'Details' },
      { id: 'activity', label: 'Activity' },
    ],
  },
};

export const WithIcons = {
  args: {
    items: [
      { id: 'list', label: 'List', icon: <List /> },
      { id: 'grid', label: 'Grid', icon: <Grid /> },
      { id: 'tree', label: 'Tree', icon: <TreeView /> },
    ],
  },
};

export const Small = {
  args: {
    items: [
      { id: 'day', label: 'Day' },
      { id: 'week', label: 'Week' },
      { id: 'month', label: 'Month' },
      { id: 'year', label: 'Year' },
    ],
    size: 'sm',
  },
};

export const Large = {
  args: {
    items: [
      { id: 'chart', label: 'Chart', icon: <ChartBar /> },
      { id: 'table', label: 'Table', icon: <TableSplit /> },
    ],
    size: 'lg',
  },
};

export const WithContent = {
  render: (args) => {
    const [index, setIndex] = useState(0);
    const panels = [
      'Overview content: High-level summary of the change initiative and its current status.',
      'Details content: Breakdown of tasks, owners, and timelines for each workstream.',
      'Activity content: Recent comments, status updates, and audit log entries.',
    ];
    return (
      <div>
        <LeapContentSwitcher
          {...args}
          selectedIndex={index}
          onChange={(i) => setIndex(i)}
        />
        <div
          style={{
            marginTop: '1rem',
            padding: '1rem',
            border: '1px solid #e0e0e0',
            borderRadius: '4px',
            fontSize: '0.875rem',
            color: '#525252',
          }}
        >
          {panels[index]}
        </div>
      </div>
    );
  },
  args: {
    items: [
      { id: 'overview', label: 'Overview' },
      { id: 'details', label: 'Details' },
      { id: 'activity', label: 'Activity' },
    ],
  },
};
