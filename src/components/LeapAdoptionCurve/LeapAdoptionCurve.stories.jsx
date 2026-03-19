import React from 'react';
import LeapAdoptionCurve from './LeapAdoptionCurve.jsx';

export default {
  title: 'Components/LeapAdoptionCurve',
  component: LeapAdoptionCurve,
  tags: ['autodocs'],
  argTypes: {
    currentPercentage: { control: { type: 'range', min: 0, max: 100 } },
  },
  parameters: {
    docs: {
      description: {
        component: `Renders an S-curve SVG visualization that tracks adoption progress through five stages: Awareness, Understanding, Commitment, Adoption, and Reinforcement.

### Import
\`\`\`jsx
import { LeapAdoptionCurve } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``,
      },
    },
  },
};

export const EarlyStage = {
  args: {
    currentPercentage: 25,
  },
};

export const MidAdoption = {
  args: {
    currentPercentage: 55,
  },
};

export const HighAdoption = {
  args: {
    currentPercentage: 82,
  },
};
