import React from 'react';
import LeapReadinessGauge from './LeapReadinessGauge.jsx';

export default {
  title: 'Components/LeapReadinessGauge',
  component: LeapReadinessGauge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A readiness gauge that displays an overall readiness percentage with a progress bar and optional category-level breakdowns.',
      },
    },
  },
  argTypes: {
    overall: { control: { type: 'range', min: 0, max: 100 } },
  },
};

export const Default = {
  args: {
    overall: 78,
    categories: [
      { label: 'Leadership', value: 92 },
      { label: 'Communication', value: 74 },
      { label: 'Training', value: 65 },
      { label: 'Technology', value: 81 },
    ],
  },
};

export const LowReadiness = {
  args: {
    overall: 31,
    categories: [
      { label: 'Leadership', value: 45 },
      { label: 'Communication', value: 28 },
      { label: 'Training', value: 18 },
      { label: 'Technology', value: 35 },
    ],
  },
};
