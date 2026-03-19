import React from 'react';
import LeapToast from './LeapToast.jsx';

export default {
  title: 'Components/LeapToast',
  component: LeapToast,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `A dismissible toast notification with success, error, warning, and info variants, supporting auto-dismiss via a configurable duration.

### Import
\`\`\`jsx
import { LeapToast } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``,
      },
    },
  },
  argTypes: {
    kind: { control: 'select', options: ['success', 'error', 'warning', 'info'] },
    onClose: { action: 'closed' },
  },
};

export const Success = {
  args: { title: 'Leave Approved', message: 'Vacation request for Mar 20-24 has been approved.', kind: 'success', duration: 0 },
};
export const Error = {
  args: { title: 'Submission Failed', message: 'Unable to submit leave request. Please try again.', kind: 'error', duration: 0 },
};
export const Warning = {
  args: { title: 'Low Balance', message: 'You have only 2 vacation days remaining.', kind: 'warning', duration: 0 },
};
export const Info = {
  args: { title: 'Policy Updated', message: 'Carry-over limits have changed for next fiscal year.', kind: 'info', duration: 0 },
};
