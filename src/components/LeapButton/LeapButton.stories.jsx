import React from 'react';
import { Add, TrashCan, ArrowRight, Edit, Filter, Settings } from '@carbon/icons-react';
import LeapButton, { LeapIconButton } from './LeapButton.jsx';

export default {
  title: 'Components/LeapButton',
  component: LeapButton,
  tags: ['autodocs'],
  argTypes: {
    kind: { control: 'select', options: ['primary', 'secondary', 'tertiary', 'ghost', 'danger'] },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl', '2xl'] },
    onClick: { action: 'clicked' },
  },
  parameters: {
    docs: {
      description: {
        component: `A themed button wrapper around Carbon's Button component, supporting primary, secondary, tertiary, ghost, and danger variants with optional icons.

### Import
\`\`\`jsx
import { LeapButton } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``,
      },
    },
  },
};

export const Primary = { args: { children: 'Submit Request', kind: 'primary' } };
export const Secondary = { args: { children: 'Cancel', kind: 'secondary' } };
export const Danger = { args: { children: 'Delete Request', kind: 'danger', renderIcon: TrashCan } };
export const WithIcon = { args: { children: 'New Request', kind: 'primary', renderIcon: Add } };
export const Ghost = { args: { children: 'View Details', kind: 'ghost', renderIcon: ArrowRight } };

export const IconButtonPrimary = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
      <LeapIconButton label="Add" renderIcon={Add} kind="primary" size="sm" />
      <LeapIconButton label="Add" renderIcon={Add} kind="primary" size="md" />
      <LeapIconButton label="Add" renderIcon={Add} kind="primary" size="lg" />
    </div>
  ),
};

export const IconButtonKinds = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
      <LeapIconButton label="Edit" renderIcon={Edit} kind="primary" />
      <LeapIconButton label="Settings" renderIcon={Settings} kind="secondary" />
      <LeapIconButton label="Filter" renderIcon={Filter} kind="tertiary" />
      <LeapIconButton label="Add" renderIcon={Add} kind="ghost" />
      <LeapIconButton label="Delete" renderIcon={TrashCan} kind="danger" />
    </div>
  ),
};

export const IconButtonDisabled = {
  render: () => (
    <LeapIconButton label="Add" renderIcon={Add} kind="primary" disabled />
  ),
};
