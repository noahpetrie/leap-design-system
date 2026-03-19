import React from 'react';
import LeapProgressTracker from './LeapProgressTracker.jsx';

export default {
  title: 'Components/LeapProgressTracker',
  component: LeapProgressTracker,
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
