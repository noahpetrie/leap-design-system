import React from 'react';
import LeapRadio from './LeapRadio.jsx';

export default { title: 'Components/LeapRadio', component: LeapRadio, argTypes: { onChange: { action: 'changed' }, orientation: { control: 'select', options: ['vertical', 'horizontal'] } } };

export const Default = {
  args: { legendText: 'Leave type', name: 'leave-type', options: [{ value: 'vacation', label: 'Vacation' }, { value: 'sick', label: 'Sick Leave' }, { value: 'personal', label: 'Personal' }], defaultSelected: 'vacation' },
};

export const Horizontal = {
  args: { legendText: 'Duration', name: 'duration', options: [{ value: 'full', label: 'Full day' }, { value: 'half-am', label: 'Half day (AM)' }, { value: 'half-pm', label: 'Half day (PM)' }], orientation: 'horizontal' },
};
