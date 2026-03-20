import React, { useState } from 'react';
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
          `A segmented toggle for switching between related content views. Wraps Carbon's ContentSwitcher with Leap theming.

### Import
\`\`\`jsx
import { LeapContentSwitcher } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``,
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
      { id: 'chart', label: 'Chart' },
      { id: 'table', label: 'Table' },
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
