import React from 'react';
import LeapSearch from './LeapSearch.jsx';

export default {
  title: 'Components/LeapSearch',
  component: LeapSearch,
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    onChange: { action: 'changed' },
    onClear: { action: 'cleared' },
  },
};

export const Default = { args: {} };
export const Small = { args: { size: 'sm', placeholder: 'Quick search...' } };
export const Large = { args: { size: 'lg', placeholder: 'Search all leave requests...' } };
