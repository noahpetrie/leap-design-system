import React from 'react';
import LeapProgressBar from './LeapProgressBar.jsx';

export default {
  title: 'Components/LeapProgressBar',
  component: LeapProgressBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `A progress bar that visualizes completion status with support for determinate values, indeterminate loading, size variants, and active/success/error states using Leap brand colors.

### Import
\`\`\`jsx
import { LeapProgressBar } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``,
      },
    },
  },
};

export const Default = { args: { value: 65 } };

export const HalfWay = { args: { value: 50, label: 'Upload progress' } };

export const Complete = { args: { value: 100, status: 'success', label: 'Migration complete' } };

export const Error = { args: { value: 30, status: 'error', label: 'Import failed', helperText: 'An error occurred during import' } };

export const Indeterminate = { args: { indeterminate: true, label: 'Processing...' } };

export const Small = { args: { value: 45, size: 'sm', label: 'Compact progress' } };

export const WithLabel = { args: { value: 72, label: 'Adoption readiness', helperText: '72 of 100 stakeholders onboarded' } };
