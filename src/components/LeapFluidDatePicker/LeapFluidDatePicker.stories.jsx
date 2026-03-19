import React from 'react';
import { unstable__FluidDatePickerInput as FluidDatePickerInput } from '@carbon/react';
import LeapFluidDatePicker from './LeapFluidDatePicker.jsx';

export default {
  title: 'Components/LeapFluidDatePicker',
  component: LeapFluidDatePicker,
  tags: ['autodocs'],
  argTypes: {
    datePickerType: { control: 'select', options: ['simple', 'single', 'range'] },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A fluid-style date picker with calendar popover support. Supports `simple` (text-only, no calendar), `single` (one date with calendar), and `range` (start/end dates with calendar). Use with `FluidDatePickerInput` from `@carbon/react` for each date field.',
      },
    },
  },
};

export const Single = {
  render: () => (
    <div style={{ maxWidth: 400 }}>
      <LeapFluidDatePicker datePickerType="single">
        <FluidDatePickerInput
          id="date-single"
          labelText="Start date"
          placeholder="mm/dd/yyyy"
        />
      </LeapFluidDatePicker>
    </div>
  ),
};

export const Range = {
  render: () => (
    <div style={{ maxWidth: 600 }}>
      <LeapFluidDatePicker datePickerType="range">
        <FluidDatePickerInput
          id="date-range-start"
          labelText="Start date"
          placeholder="mm/dd/yyyy"
        />
        <FluidDatePickerInput
          id="date-range-end"
          labelText="End date"
          placeholder="mm/dd/yyyy"
        />
      </LeapFluidDatePicker>
    </div>
  ),
};

export const Simple = {
  render: () => (
    <div style={{ maxWidth: 400 }}>
      <LeapFluidDatePicker datePickerType="simple">
        <FluidDatePickerInput
          id="date-simple"
          labelText="Date"
          placeholder="mm/dd/yyyy"
        />
      </LeapFluidDatePicker>
    </div>
  ),
};
