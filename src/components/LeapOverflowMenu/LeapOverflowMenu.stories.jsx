import React from 'react';
import { Edit, TrashCan, Download, Share, Settings, Restart } from '@carbon/icons-react';
import LeapOverflowMenu from './LeapOverflowMenu.jsx';

export default {
  title: 'Components/LeapOverflowMenu',
  component: LeapOverflowMenu,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    onSelect: { action: 'selected' },
  },
  parameters: {
    docs: {
      description: {
        component: `A three-dot overflow menu that reveals a list of actions. Supports icons, dividers, disabled items, danger actions, and flipped (right-aligned) positioning.

### Import
\`\`\`jsx
import { LeapOverflowMenu } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``,
      },
    },
  },
};

const defaultItems = [
  { id: 'edit', label: 'Edit', icon: <Edit /> },
  { id: 'download', label: 'Download', icon: <Download /> },
  { id: 'share', label: 'Share', icon: <Share /> },
  { id: 'divider-1', type: 'divider' },
  { id: 'settings', label: 'Settings', icon: <Settings /> },
  { id: 'restart', label: 'Restart', icon: <Restart />, disabled: true },
  { id: 'divider-2', type: 'divider' },
  { id: 'delete', label: 'Delete', icon: <TrashCan />, danger: true },
];

export const Default = {
  args: {
    items: defaultItems,
  },
};

export const Small = {
  args: {
    items: defaultItems,
    size: 'sm',
  },
};

export const Flipped = {
  render: (args) => (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <LeapOverflowMenu {...args} />
    </div>
  ),
  args: {
    items: defaultItems,
    flipped: true,
  },
};

const simpleItems = [
  { id: 'option-1', label: 'Option 1' },
  { id: 'option-2', label: 'Option 2' },
  { id: 'option-3', label: 'Option 3' },
];

export const Simple = {
  args: {
    items: simpleItems,
  },
};

export const InContext = {
  render: (args) => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.75rem 1rem',
        border: '1px solid #e0e0e0',
        borderRadius: '4px',
        maxWidth: '24rem',
      }}
    >
      <div>
        <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>Q1 Change Initiative</div>
        <div style={{ fontSize: '0.75rem', color: '#525252' }}>Last updated 2 hours ago</div>
      </div>
      <LeapOverflowMenu {...args} />
    </div>
  ),
  args: {
    items: defaultItems,
    size: 'sm',
  },
};
