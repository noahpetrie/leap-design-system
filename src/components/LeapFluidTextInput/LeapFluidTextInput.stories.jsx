import React from 'react';
import LeapFluidTextInput from './LeapFluidTextInput.jsx';

export default {
  title: 'Components/LeapFluidTextInput',
  component: LeapFluidTextInput,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
    isPassword: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    warn: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A fluid-style text input that fills its container width with an underline treatment instead of a bordered box. Ideal for dense form layouts, inline editing, and settings panels. Supports password mode via `isPassword` and character counting via `enableCounter` + `maxCount`.',
      },
    },
  },
};

export const Default = {
  args: {
    id: 'fluid-text-1',
    labelText: 'Full name',
    placeholder: 'Enter your full name',
  },
};

export const Password = {
  args: {
    id: 'fluid-password-1',
    labelText: 'Password',
    placeholder: 'Enter password',
    isPassword: true,
  },
};

export const WithCounter = {
  args: {
    id: 'fluid-counter-1',
    labelText: 'Bio',
    placeholder: 'Tell us about yourself',
    enableCounter: true,
    maxCount: 100,
  },
};

export const States = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 400 }}>
      <LeapFluidTextInput id="default" labelText="Default" placeholder="Default state" />
      <LeapFluidTextInput id="invalid" labelText="Invalid" invalid invalidText="This field is required" />
      <LeapFluidTextInput id="warn" labelText="Warning" warn warnText="Check this value" defaultValue="Maybe wrong" />
      <LeapFluidTextInput id="disabled" labelText="Disabled" disabled placeholder="Disabled" />
      <LeapFluidTextInput id="readonly" labelText="Read only" readOnly defaultValue="Read-only value" />
    </div>
  ),
};
