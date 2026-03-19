import React from 'react';
import LeapNumberInput from './LeapNumberInput.jsx';

export default {
  title: 'Components/LeapNumberInput',
  component: LeapNumberInput,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
  parameters: {
    docs: {
      description: {
        component: `A number stepper input with +/- buttons, supporting min/max constraints, step increments, validation, and keyboard interaction. Use for numeric fields like quantities, scores, or thresholds.

### Import
\`\`\`jsx
import { LeapNumberInput } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``,
      },
    },
  },
};

export const Default = {
  args: {
    id: 'number-default',
    label: 'Quantity',
    value: 10,
  },
};

export const WithMinMax = {
  args: {
    id: 'number-minmax',
    label: 'Adoption score',
    value: 50,
    min: 0,
    max: 100,
    helperText: 'Value must be between 0 and 100',
  },
};

export const WithStep = {
  args: {
    id: 'number-step',
    label: 'Budget increment',
    value: 25,
    step: 5,
    min: 0,
    max: 200,
    helperText: 'Increments of 5',
  },
};

export const Small = {
  args: {
    id: 'number-sm',
    label: 'Priority',
    value: 1,
    min: 1,
    max: 5,
    size: 'sm',
  },
};

export const Large = {
  args: {
    id: 'number-lg',
    label: 'Team capacity',
    value: 20,
    min: 1,
    max: 500,
    size: 'lg',
  },
};

export const Invalid = {
  args: {
    id: 'number-invalid',
    label: 'Target completion days',
    value: -5,
    min: 0,
    invalid: true,
    invalidText: 'Value must be a positive number',
  },
};

export const Disabled = {
  args: {
    id: 'number-disabled',
    label: 'Fixed allocation',
    value: 42,
    disabled: true,
  },
};
