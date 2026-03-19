import React from 'react';
import LeapTextArea from './LeapTextArea.jsx';

export default { title: 'Components/LeapTextArea', component: LeapTextArea, argTypes: { onChange: { action: 'changed' } } };

export const Default = { args: { id: 'ta-1', labelText: 'Change impact summary', placeholder: 'Describe the expected impact on teams and processes...', rows: 4 } };
export const WithCharCount = { args: { id: 'ta-2', labelText: 'Stakeholder communication brief', placeholder: 'Draft a concise message for affected stakeholders...', rows: 6, maxCount: 500 } };
export const Disabled = { args: { id: 'ta-3', labelText: 'Approved change description', value: 'Migrate finance team from legacy ERP to cloud-based platform. Phase 1 covers accounts payable and receivable modules with full training rollout.', disabled: true, rows: 4 } };
