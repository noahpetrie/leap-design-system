import React from 'react';
import LeapInput from './LeapInput.jsx';

export default {
  title: 'Components/LeapInput',
  component: LeapInput,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `A themed text input wrapper around Carbon TextInput with support for helper text, validation, and disabled states.

### Import
\`\`\`jsx
import { LeapInput } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``,
      },
    },
  },
  argTypes: { onChange: { action: 'changed' } },
};

export const Default = { args: { id: 'input-1', labelText: 'Initiative name', placeholder: 'e.g. Q3 Digital Transformation' } };
export const WithHelper = { args: { id: 'input-2', labelText: 'Stakeholder email', placeholder: 'name@company.com', helperText: 'Primary contact for change communications' } };
export const Invalid = { args: { id: 'input-3', labelText: 'Target completion date', placeholder: 'YYYY-MM-DD', invalid: true, invalidText: 'Date must be in the future' } };
export const Disabled = { args: { id: 'input-4', labelText: 'Change request ID', value: 'CR-2026-0042', disabled: true } };
