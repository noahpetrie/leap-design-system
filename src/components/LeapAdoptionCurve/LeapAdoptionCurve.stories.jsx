import React from 'react';
import LeapAdoptionCurve from './LeapAdoptionCurve.jsx';

export default {
  title: 'Components/LeapAdoptionCurve',
  component: LeapAdoptionCurve,
  argTypes: {
    currentPercentage: { control: { type: 'range', min: 0, max: 100 } },
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
