import React from 'react';
import LeapFluidTextArea from './LeapFluidTextArea.jsx';

export default {
  title: 'Components/LeapFluidTextArea',
  component: LeapFluidTextArea,
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
          'A fluid-style multi-line text area for longer-form input. Pairs with `LeapFluidTextInput` for consistent fluid form layouts. Supports character counting with `enableCounter` + `maxCount` and validation states (invalid, warn).',
      },
    },
  },
};

export const Default = {
  args: {
    id: 'fluid-textarea-1',
    labelText: 'Description',
    placeholder: 'Enter a description...',
    rows: 4,
  },
};

export const WithCounter = {
  args: {
    id: 'fluid-textarea-counter',
    labelText: 'Feedback',
    placeholder: 'Share your thoughts...',
    enableCounter: true,
    maxCount: 500,
    rows: 4,
  },
};

export const States = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 400 }}>
      <LeapFluidTextArea id="ta-default" labelText="Default" placeholder="Default state" rows={3} />
      <LeapFluidTextArea id="ta-invalid" labelText="Invalid" invalid invalidText="This field is required" rows={3} />
      <LeapFluidTextArea id="ta-warn" labelText="Warning" warn warnText="Content may be too brief" defaultValue="Short" rows={3} />
      <LeapFluidTextArea id="ta-disabled" labelText="Disabled" disabled placeholder="Disabled" rows={3} />
    </div>
  ),
};
