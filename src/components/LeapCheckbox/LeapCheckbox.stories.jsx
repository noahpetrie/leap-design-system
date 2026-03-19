import React from 'react';
import LeapCheckbox from './LeapCheckbox.jsx';

export default { title: 'Components/LeapCheckbox', component: LeapCheckbox, argTypes: { onChange: { action: 'changed' } } };

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
