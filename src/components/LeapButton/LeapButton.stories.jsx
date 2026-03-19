import React from 'react';
import { Add, TrashCan, ArrowRight } from '@carbon/react/icons';
import LeapButton from './LeapButton.jsx';

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
        component: 'A themed button wrapper around Carbon\'s Button component, supporting primary, secondary, tertiary, ghost, and danger variants with optional icons.',
      },
    },
  },
};

export const Primary = { args: { children: 'Submit Request', kind: 'primary' } };
export const Secondary = { args: { children: 'Cancel', kind: 'secondary' } };
export const Danger = { args: { children: 'Delete Request', kind: 'danger', renderIcon: TrashCan } };
export const WithIcon = { args: { children: 'New Request', kind: 'primary', renderIcon: Add } };
export const Ghost = { args: { children: 'View Details', kind: 'ghost', renderIcon: ArrowRight } };
