import React from 'react';
import LeapLoading from './LeapLoading.jsx';

export default {
  title: 'Components/LeapLoading',
  component: LeapLoading,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `A loading indicator that supports full-page spinners, overlay mode, and inline status indicators for active, finished, and error states.

### Import
\`\`\`jsx
import { LeapLoading } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``,
      },
    },
  },
};

export const Default = { args: { active: true, description: 'Loading change initiatives...' } };

export const Inline = { args: { status: 'active', description: 'Syncing stakeholder data...' } };

export const WithOverlay = { args: { active: true, withOverlay: true, description: 'Generating impact report...' } };

export const Finished = { args: { status: 'finished', description: 'Adoption metrics loaded' } };
