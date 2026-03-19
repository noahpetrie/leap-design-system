import React from 'react';
import LeapOrgChart from './LeapOrgChart.jsx';

export default {
  title: 'Components/LeapOrgChart',
  component: LeapOrgChart,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `A hierarchical organization chart that renders a tree of people with name and role cards, supporting up to three levels of depth.

### Import
\`\`\`jsx
import { LeapOrgChart } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``,
      },
    },
  },
};

export const Default = {
  args: {
    data: {
      name: 'Sarah Chen',
      role: 'CEO',
      children: [
        {
          name: 'James Wilson',
          role: 'VP Engineering',
          children: [
            { name: 'Maria Garcia', role: 'Director, Platform' },
            { name: 'David Kim', role: 'Director, Product' },
          ],
        },
        {
          name: 'Lisa Park',
          role: 'VP Marketing',
          children: [
            { name: 'Tom Brown', role: 'Director, Brand' },
            { name: 'Amy Lee', role: 'Director, Growth' },
          ],
        },
        {
          name: 'Michael Ross',
          role: 'VP Operations',
          children: [
            { name: 'Nina Patel', role: 'Director, Supply Chain' },
            { name: 'Chris Wang', role: 'Director, Logistics' },
          ],
        },
      ],
    },
  },
};

export const Small = {
  args: {
    data: {
      name: 'Sarah Chen',
      role: 'CEO',
      children: [
        { name: 'James Wilson', role: 'VP Engineering' },
        { name: 'Lisa Park', role: 'VP Marketing' },
        { name: 'Michael Ross', role: 'VP Operations' },
      ],
    },
  },
};
