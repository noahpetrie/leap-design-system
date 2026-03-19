import React from 'react';
import LeapTile from './LeapTile.jsx';

export default {
  title: 'Components/LeapTile',
  component: LeapTile,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'clickable', 'selectable', 'expandable'] },
    onClick: { action: 'clicked' },
    onSelect: { action: 'selected' },
    onToggle: { action: 'toggled' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A versatile tile/card component supporting default, clickable, selectable, and expandable variants. Use tiles to group related content in a visually contained surface.',
      },
    },
  },
};

export const Default = {
  args: {
    children: 'This is a static tile with informational content. It does not respond to user interaction.',
  },
};

export const Clickable = {
  args: {
    variant: 'clickable',
    children: 'Click this tile to perform an action.',
  },
};

export const Selectable = {
  args: {
    variant: 'selectable',
    selected: false,
    children: 'Select this tile to include it in your change plan.',
  },
};

export const Expandable = {
  args: {
    variant: 'expandable',
    expanded: false,
    children: 'Stakeholder Impact Summary',
    expandedContent: (
      <div>
        <p>12 stakeholders affected across 3 departments.</p>
        <p>Estimated readiness: 74%</p>
      </div>
    ),
  },
};

export const Grid = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
      <LeapTile>Adoption Rate: 82%</LeapTile>
      <LeapTile>Active Initiatives: 5</LeapTile>
      <LeapTile>Stakeholders Engaged: 47</LeapTile>
    </div>
  ),
};
