import React from 'react';
import LeapPasswordInput from './LeapPasswordInput.jsx';

export default {
  title: 'Components/LeapPasswordInput',
  component: LeapPasswordInput,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `A password input with show/hide toggle, supporting validation states, helper text, and multiple sizes.

### Import
\`\`\`jsx
import { LeapPasswordInput } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``,
      },
    },
  },
  argTypes: { onChange: { action: 'changed' } },
};

export const Default = { args: { placeholder: 'Enter password' } };
export const WithLabel = { args: { label: 'Password', placeholder: 'Enter your password', helperText: 'Must be at least 8 characters' } };
export const Invalid = { args: { label: 'Password', placeholder: 'Enter password', invalid: true, invalidText: 'Password does not meet complexity requirements' } };
export const Disabled = { args: { label: 'Password', value: 'supersecret', disabled: true } };
export const Small = { args: { label: 'Password', placeholder: 'Enter password', size: 'sm' } };
