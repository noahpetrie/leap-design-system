import React from 'react';
import LeapInlineNotification from './LeapInlineNotification.jsx';

export default {
  title: 'Components/LeapInlineNotification',
  component: LeapInlineNotification,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          `A compact inline notification/alert that communicates success, error, warning, or informational messages with a colored border stripe, icon, and optional close button.

### Import
\`\`\`jsx
import { LeapInlineNotification } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``,
      },
    },
  },
  argTypes: {
    kind: { control: 'select', options: ['success', 'error', 'warning', 'info'] },
    closable: { control: 'boolean' },
    lowContrast: { control: 'boolean' },
    onClose: { action: 'closed' },
  },
};

export const Success = {
  args: {
    kind: 'success',
    title: 'Change plan approved',
    subtitle: 'Your change management plan has been reviewed and approved by all stakeholders.',
  },
};

export const Error = {
  args: {
    kind: 'error',
    title: 'Submission failed',
    subtitle: 'The readiness assessment could not be saved. Please try again.',
  },
};

export const Warning = {
  args: {
    kind: 'warning',
    title: 'Upcoming deadline',
    subtitle: 'The stakeholder review period closes in 2 days.',
  },
};

export const Info = {
  args: {
    kind: 'info',
    title: 'New training available',
    subtitle: 'A new change-readiness training module has been published.',
  },
};

export const LowContrast = {
  args: {
    kind: 'success',
    title: 'Milestone reached',
    subtitle: 'Phase 2 adoption targets have been met.',
    lowContrast: true,
  },
};

export const NotClosable = {
  args: {
    kind: 'info',
    title: 'System notice',
    subtitle: 'Scheduled maintenance is planned for this weekend.',
    closable: false,
  },
};
