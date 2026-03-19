import React from 'react';
import LeapTooltip from './LeapTooltip.jsx';

export default {
  title: 'Components/LeapTooltip',
  component: LeapTooltip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A toggletip-based tooltip that displays descriptive text on click, with configurable alignment and an information icon trigger.',
      },
    },
  },
};

export const Default = {
  args: {
    label: 'Readiness score info',
    description: 'The readiness score aggregates survey responses, training completion rates, and sponsor engagement metrics into a single 0-100 index.',
    align: "right",
  },
};

export const Bottom = {
  args: {
    label: 'Adoption curve info',
    description: 'Adoption curves compare actual usage data against the projected adoption trajectory defined during the planning phase.',
    align: 'bottom',
  },
};

export const WithRichContent = {
  args: {
    label: 'Impact levels explained',
    description: 'High impact: fundamental change to daily workflows. Medium impact: moderate adjustments to existing processes. Low impact: minimal disruption with optional adoption.',
    align: "right",
  },
};
