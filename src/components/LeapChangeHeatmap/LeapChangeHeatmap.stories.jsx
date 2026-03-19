import React from 'react';
import LeapChangeHeatmap from './LeapChangeHeatmap.jsx';

export default {
  title: 'Components/LeapChangeHeatmap',
  component: LeapChangeHeatmap,
};

export const Default = {
  args: {
    rows: ['Engineering', 'Marketing', 'Sales', 'Operations'],
    columns: ['Readiness', 'Impact', 'Training', 'Adoption'],
    data: [
      [85, 72, 60, 90],
      [45, 88, 35, 55],
      [70, 50, 80, 65],
      [15, 40, 92, 78],
    ],
  },
};

export const Large = {
  args: {
    rows: ['Engineering', 'Marketing', 'Sales', 'Operations', 'Finance', 'HR'],
    columns: ['Readiness', 'Impact', 'Training', 'Adoption', 'Engagement', 'Satisfaction'],
    data: [
      [85, 72, 60, 90, 55, 80],
      [45, 88, 35, 55, 70, 62],
      [70, 50, 80, 65, 42, 91],
      [15, 40, 92, 78, 83, 30],
      [60, 25, 74, 88, 67, 52],
      [95, 68, 48, 36, 90, 75],
    ],
  },
};
