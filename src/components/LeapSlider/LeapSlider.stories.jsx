import React from 'react';
import LeapSlider from './LeapSlider.jsx';

export default {
  title: 'Components/LeapSlider',
  component: LeapSlider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A custom range slider with a filled track and thumb styled in Leap green, supporting labels, helper text, and keyboard navigation.',
      },
    },
  },
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export const Default = {
  args: {
    value: 50,
    min: 0,
    max: 100,
    step: 1,
    label: 'Slider',
  },
};

export const WithRange = {
  args: {
    value: 50,
    min: 20,
    max: 80,
    step: 1,
    label: 'Constrained range',
  },
};

export const WithStep = {
  args: {
    value: 30,
    min: 0,
    max: 100,
    step: 10,
    label: 'Step of 10',
  },
};

export const CustomLabel = {
  args: {
    value: 70,
    min: 0,
    max: 100,
    step: 1,
    label: 'Volume',
    helperText: 'Adjust the playback volume',
  },
};

export const Disabled = {
  args: {
    value: 40,
    min: 0,
    max: 100,
    step: 1,
    label: 'Disabled slider',
    disabled: true,
  },
};
