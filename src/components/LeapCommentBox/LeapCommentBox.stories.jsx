import React from 'react';
import LeapCommentBox from './LeapCommentBox.jsx';

export default {
  title: 'Components/LeapCommentBox',
  component: LeapCommentBox,
  argTypes: { onSubmit: { action: 'comment submitted' } },
};

export const WithComments = {
  args: {
    comments: [
      { author: 'Manager - Dana Kim', text: 'Please confirm with your team lead before I approve.', timestamp: 'Mar 13, 2026 11:00 AM' },
      { author: 'Sarah Chen', text: 'Confirmed with team lead. All tasks are delegated.', timestamp: 'Mar 13, 2026 2:30 PM' },
    ],
  },
};

export const Empty = { args: { comments: [] } };
