import React from 'react';
import LeapCheckbox from './LeapCheckbox.jsx';

export default {
  title: 'Components/LeapCheckbox',
  component: LeapCheckbox,
  tags: ['autodocs'],
  argTypes: { onChange: { action: 'changed' } },
  parameters: {
    docs: {
      description: {
        component: `A checkbox input component wrapping Carbon's Checkbox with support for controlled and uncontrolled states, labels, and disabled mode.

### Import
\`\`\`jsx
import { LeapCheckbox } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``,
      },
    },
  },
};

export const Default = { args: { id: 'cb-1', labelText: 'Include weekends' } };
export const Checked = { args: { id: 'cb-2', labelText: 'Notify manager', defaultChecked: true } };
export const Disabled = { args: { id: 'cb-3', labelText: 'Admin only', disabled: true } };

export const Group = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <LeapCheckbox id="opt-1" labelText="Email notification" defaultChecked />
      <LeapCheckbox id="opt-2" labelText="Slack notification" />
      <LeapCheckbox id="opt-3" labelText="Calendar sync" defaultChecked />
    </div>
  ),
};
