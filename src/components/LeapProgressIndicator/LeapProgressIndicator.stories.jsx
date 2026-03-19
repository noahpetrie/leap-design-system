import React from 'react';
import LeapProgressIndicator from './LeapProgressIndicator.jsx';

export default {
  title: 'Components/LeapProgressIndicator',
  component: LeapProgressIndicator,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `A horizontal or vertical step-by-step wizard/stepper that guides users through a sequential process with completed, current, and incomplete states.

### Import
\`\`\`jsx
import { LeapProgressIndicator } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``,
      },
    },
  },
  argTypes: {
    currentIndex: { control: { type: 'number', min: 0, max: 5 } },
    vertical: { control: 'boolean' },
  },
};

const defaultSteps = [
  { id: 'details', label: 'Details' },
  { id: 'configuration', label: 'Configuration' },
  { id: 'review', label: 'Review' },
  { id: 'submit', label: 'Submit' },
];

export const Default = {
  args: {
    steps: defaultSteps,
    currentIndex: 2,
  },
};

export const FirstStep = {
  args: {
    steps: defaultSteps,
    currentIndex: 0,
  },
};

export const LastStep = {
  args: {
    steps: defaultSteps,
    currentIndex: 3,
  },
};

export const Vertical = {
  args: {
    steps: defaultSteps,
    currentIndex: 2,
    vertical: true,
  },
};

export const WithDescriptions = {
  args: {
    steps: [
      { id: 'gather', label: 'Gather Requirements', description: 'Collect input from stakeholders and define scope.', secondaryLabel: 'Step 1 of 4' },
      { id: 'design', label: 'Design Solution', description: 'Create wireframes and technical architecture.', secondaryLabel: 'Step 2 of 4' },
      { id: 'implement', label: 'Implement', description: 'Build and test the solution.', secondaryLabel: 'Step 3 of 4' },
      { id: 'deploy', label: 'Deploy', description: 'Roll out to production environment.', secondaryLabel: 'Step 4 of 4' },
    ],
    currentIndex: 1,
  },
};
