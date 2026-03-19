import React from 'react';
import LeapKPICard from './LeapKPICard';

export default {
  title: 'Change Management/LeapKPICard',
  component: LeapKPICard,
};

export const OnTrack = {
  args: {
    label: 'Adoption Rate',
    value: 87,
    unit: '%',
    target: 85,
    trend: [42, 55, 60, 64, 70, 74, 78, 82, 85, 87],
    status: 'on-track',
  },
};

export const AtRisk = {
  args: {
    label: 'Training Completion',
    value: 62,
    unit: '%',
    target: 90,
    trend: [30, 38, 42, 48, 50, 53, 55, 58, 60, 62],
    status: 'at-risk',
  },
};

export const OffTrack = {
  args: {
    label: 'Stakeholder Satisfaction',
    value: 3.2,
    unit: '/ 5',
    target: 4.5,
    trend: [4.2, 4.0, 3.8, 3.9, 3.6, 3.5, 3.4, 3.3, 3.2, 3.2],
    status: 'off-track',
  },
};

export const NoSparkline = {
  args: {
    label: 'Change Requests',
    value: 12,
    unit: 'open',
    target: 5,
    trend: [],
    status: 'at-risk',
  },
};
