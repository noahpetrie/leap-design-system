import React from 'react';
import LeapFluidNumberInput from './LeapFluidNumberInput.jsx';

export default {
  title: 'Components/LeapFluidNumberInput',
  component: LeapFluidNumberInput,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
    warn: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A fluid-style number input with increment/decrement controls. Supports `min`, `max`, and `step` constraints. Use for numeric fields like quantities, team sizes, or scores in fluid form layouts.',
      },
    },
  },
};

export const Default = {
  args: {
    id: 'fluid-number-1',
    label: 'Team size',
    min: 1,
    max: 100,
    step: 1,
    defaultValue: 5,
  },
};

export const States = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 400 }}>
      <LeapFluidNumberInput id="num-default" label="Default" min={0} max={100} defaultValue={10} />
      <LeapFluidNumberInput id="num-invalid" label="Invalid" min={0} max={100} invalid invalidText="Value out of range" defaultValue={150} />
      <LeapFluidNumberInput id="num-warn" label="Warning" min={0} max={100} warn warnText="Unusually high value" defaultValue={95} />
      <LeapFluidNumberInput id="num-disabled" label="Disabled" min={0} max={100} disabled defaultValue={0} />
    </div>
  ),
};
