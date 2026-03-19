import React from 'react';
import LeapDateRangePicker from './LeapDateRangePicker.jsx';

export default {
  title: 'Components/LeapDateRangePicker',
  component: LeapDateRangePicker,
  tags: ['autodocs'],
  argTypes: { onChange: { action: 'dates changed' } },
  parameters: {
    docs: {
      description: {
        component: `A date range picker component wrapping Carbon's DatePicker in range mode, providing start and end date inputs with customizable labels.

### Import
\`\`\`jsx
import { LeapDateRangePicker } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``,
      },
    },
  },
};

export const Default = { args: {} };
export const CustomLabels = { args: { startLabel: 'Leave starts', endLabel: 'Leave ends' } };
