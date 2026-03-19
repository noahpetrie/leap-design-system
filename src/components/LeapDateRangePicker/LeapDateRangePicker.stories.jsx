import React from 'react';
import LeapDateRangePicker from './LeapDateRangePicker.jsx';

export default {
  title: 'Components/LeapDateRangePicker',
  component: LeapDateRangePicker,
  argTypes: { onChange: { action: 'dates changed' } },
};

export const Default = { args: {} };
export const CustomLabels = { args: { startLabel: 'Leave starts', endLabel: 'Leave ends' } };
