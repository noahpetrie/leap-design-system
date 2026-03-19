import React from 'react';
import LeapComparisonTable from './LeapComparisonTable.jsx';

export default {
  title: 'Components/LeapComparisonTable',
  component: LeapComparisonTable,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `A side-by-side comparison table that evaluates multiple options against a set of criteria, with optional recommended-option highlighting.

### Import
\`\`\`jsx
import { LeapComparisonTable } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``,
      },
    },
  },
};

export const Default = {
  args: {
    criteria: [
      'Implementation Time',
      'Cost Estimate',
      'Risk Level',
      'Stakeholder Impact',
      'Training Required',
    ],
    options: [
      {
        name: 'Phased Rollout',
        recommended: true,
        values: {
          'Implementation Time': '6 months',
          'Cost Estimate': '$120K',
          'Risk Level': 'Low',
          'Stakeholder Impact': 'Medium',
          'Training Required': '40 hours',
        },
      },
      {
        name: 'Big Bang',
        values: {
          'Implementation Time': '3 months',
          'Cost Estimate': '$95K',
          'Risk Level': 'High',
          'Stakeholder Impact': 'High',
          'Training Required': '60 hours',
        },
      },
      {
        name: 'Pilot Program',
        values: {
          'Implementation Time': '9 months',
          'Cost Estimate': '$150K',
          'Risk Level': 'Very Low',
          'Stakeholder Impact': 'Low',
          'Training Required': '20 hours',
        },
      },
    ],
  },
};

export const TwoOptions = {
  args: {
    criteria: [
      'Timeline',
      'Budget',
      'Team Size',
      'Complexity',
      'Success Rate',
    ],
    options: [
      {
        name: 'Option A: In-House',
        values: {
          Timeline: '4 months',
          Budget: '$80K',
          'Team Size': '8 people',
          Complexity: 'High',
          'Success Rate': '72%',
        },
      },
      {
        name: 'Option B: Vendor-Led',
        recommended: true,
        values: {
          Timeline: '3 months',
          Budget: '$140K',
          'Team Size': '4 internal + vendor',
          Complexity: 'Medium',
          'Success Rate': '89%',
        },
      },
    ],
  },
};
