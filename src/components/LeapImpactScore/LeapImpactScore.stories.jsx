import React from 'react';
import LeapImpactScore from './LeapImpactScore.jsx';

export default {
  title: 'Components/LeapImpactScore',
  component: LeapImpactScore,
  argTypes: {
    score: { control: { type: 'range', min: 0, max: 100 } },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    showAI: { control: 'boolean' },
  },
};

export const High = {
  args: {
    score: 87,
    label: 'Overall Impact',
    size: 'md',
  },
};

export const Medium = {
  args: {
    score: 52,
    label: 'Process Impact',
    size: 'md',
  },
};

export const Low = {
  args: {
    score: 23,
    label: 'Risk Level',
    size: 'md',
  },
};

export const Small = {
  args: {
    score: 74,
    label: 'Adoption',
    size: 'sm',
  },
};

export const WithAI = {
  args: {
    score: 87,
    label: 'AI-Assessed Impact',
    size: 'md',
    showAI: true,
  },
};
