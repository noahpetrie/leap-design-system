import React from 'react';
import LeapStakeholderMap from './LeapStakeholderMap.jsx';

export default {
  title: 'Components/LeapStakeholderMap',
  component: LeapStakeholderMap,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `A four-quadrant influence/interest stakeholder map that plots stakeholders with sentiment-colored indicators and tooltip details.

### Import
\`\`\`jsx
import { LeapStakeholderMap } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``,
      },
    },
  },
};

export const Default = {
  args: {
    stakeholders: [
      { name: 'CEO - Sarah Chen', influence: 'high', interest: 'high', sentiment: 'positive' },
      { name: 'CFO - James Park', influence: 'high', interest: 'low', sentiment: 'neutral' },
      { name: 'VP Engineering - Maria Lopez', influence: 'high', interest: 'high', sentiment: 'positive' },
      { name: 'HR Director - David Kim', influence: 'low', interest: 'high', sentiment: 'positive' },
      { name: 'IT Manager - Alex Turner', influence: 'low', interest: 'high', sentiment: 'negative' },
      { name: 'Legal Counsel - Priya Sharma', influence: 'high', interest: 'low', sentiment: 'neutral' },
      { name: 'Facilities Lead - Tom Nguyen', influence: 'low', interest: 'low', sentiment: 'neutral' },
      { name: 'Union Rep - Rachel Adams', influence: 'low', interest: 'low', sentiment: 'negative' },
    ],
  },
};

export const FewStakeholders = {
  args: {
    stakeholders: [
      { name: 'Executive Sponsor', influence: 'high', interest: 'high', sentiment: 'positive' },
      { name: 'Department Head', influence: 'high', interest: 'low', sentiment: 'neutral' },
      { name: 'End User Group', influence: 'low', interest: 'high', sentiment: 'negative' },
    ],
  },
};
