import React from 'react';
import LeapTrainingChecklist from './LeapTrainingChecklist';

export default {
  title: 'Change Management/LeapTrainingChecklist',
  component: LeapTrainingChecklist,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `A training progress checklist with toggleable items, assignee avatars, due date tracking, overdue highlighting, and a progress bar.

### Import
\`\`\`jsx
import { LeapTrainingChecklist } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``,
      },
    },
  },
  argTypes: {
    onToggle: { action: 'toggled' },
  },
};

export const Default = {
  args: {
    items: [
      {
        id: 1,
        title: 'Complete CRM migration e-learning module',
        description: 'Self-paced course covering new CRM features and workflows.',
        assignee: 'Sarah Chen',
        dueDate: '2026-04-10',
        completed: true,
      },
      {
        id: 2,
        title: 'Attend API v3 hands-on workshop',
        description: 'Instructor-led session on new endpoint patterns and auth flow.',
        assignee: 'Marcus Johnson',
        dueDate: '2026-03-15',
        completed: false,
      },
      {
        id: 3,
        title: 'Review updated security policies',
        description: 'Read and acknowledge the revised data handling procedures.',
        assignee: 'Priya Patel',
        dueDate: '2026-04-01',
        completed: true,
      },
      {
        id: 4,
        title: 'Shadow a support champion for one shift',
        description: 'Pair with an experienced agent using the new ticketing system.',
        assignee: 'James O\'Brien',
        dueDate: '2026-03-10',
        completed: false,
      },
      {
        id: 5,
        title: 'Pass the platform certification exam',
        description: 'Score 80% or higher on the certification assessment.',
        assignee: 'Amara Osei',
        dueDate: '2026-04-20',
        completed: false,
      },
    ],
  },
};

export const AllComplete = {
  args: {
    items: [
      {
        id: 1,
        title: 'Complete CRM migration e-learning module',
        description: 'Self-paced course covering new CRM features and workflows.',
        assignee: 'Sarah Chen',
        dueDate: '2026-04-10',
        completed: true,
      },
      {
        id: 2,
        title: 'Attend API v3 hands-on workshop',
        description: 'Instructor-led session on new endpoint patterns and auth flow.',
        assignee: 'Marcus Johnson',
        dueDate: '2026-04-05',
        completed: true,
      },
      {
        id: 3,
        title: 'Review updated security policies',
        description: 'Read and acknowledge the revised data handling procedures.',
        assignee: 'Priya Patel',
        dueDate: '2026-04-01',
        completed: true,
      },
      {
        id: 4,
        title: 'Shadow a support champion for one shift',
        description: 'Pair with an experienced agent using the new ticketing system.',
        assignee: 'James O\'Brien',
        dueDate: '2026-04-08',
        completed: true,
      },
      {
        id: 5,
        title: 'Pass the platform certification exam',
        description: 'Score 80% or higher on the certification assessment.',
        assignee: 'Amara Osei',
        dueDate: '2026-04-20',
        completed: true,
      },
    ],
  },
};
