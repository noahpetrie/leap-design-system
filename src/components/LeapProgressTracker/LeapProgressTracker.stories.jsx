import React from 'react';
import LeapProgressTracker from './LeapProgressTracker.jsx';

export default {
  title: 'Components/LeapProgressTracker',
  component: LeapProgressTracker,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `A horizontal step tracker that shows sequential progress through numbered steps with completed, current, and upcoming states.

### Import
\`\`\`jsx
import { LeapProgressTracker } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``,
      },
    },
  },
  argTypes: { currentStep: { control: { type: 'number', min: 0, max: 4 } } },
};

export const Submitted = {
  args: { steps: ['Submitted', 'Under Review', 'Manager Approval', 'Confirmed'], currentStep: 0 },
};

export const UnderReview = {
  args: { steps: ['Submitted', 'Under Review', 'Manager Approval', 'Confirmed'], currentStep: 1 },
};

export const Approved = {
  args: { steps: ['Submitted', 'Under Review', 'Manager Approval', 'Confirmed'], currentStep: 3 },
};

export const Complete = {
  args: { steps: ['Submitted', 'Under Review', 'Manager Approval', 'Confirmed'], currentStep: 4 },
};
