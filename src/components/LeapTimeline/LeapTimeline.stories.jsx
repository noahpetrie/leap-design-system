import React from 'react';
import LeapTimeline from './LeapTimeline.jsx';

export default {
  title: 'Components/LeapTimeline',
  component: LeapTimeline,
};

export const Default = {
  args: {
    events: [
      { timestamp: 'Mar 15, 2026 2:30 PM', title: 'Leave Approved', description: 'Manager approved with sufficient team coverage.', type: 'approved' },
      { timestamp: 'Mar 14, 2026 4:00 PM', title: 'Dates Modified', description: 'Changed from Mar 20-22 to Mar 20-24.', type: 'modified' },
      { timestamp: 'Mar 13, 2026 11:00 AM', title: 'Comment Added', description: 'Please confirm with your team lead before I approve.', type: 'comment' },
      { timestamp: 'Mar 12, 2026 9:00 AM', title: 'Request Submitted', description: 'Vacation request for Mar 20-22 (3 days).', type: 'submitted' },
    ],
  },
};

export const DeniedFlow = {
  args: {
    events: [
      { timestamp: 'Mar 14, 2026 3:00 PM', title: 'Leave Denied', description: 'Conflicts with project deadline. Please resubmit for alternate dates.', type: 'denied' },
      { timestamp: 'Mar 13, 2026 10:00 AM', title: 'Request Submitted', description: 'Personal leave for Mar 25.', type: 'submitted' },
    ],
  },
};
