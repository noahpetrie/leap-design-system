import React from 'react';
import LeapFeedbackSurvey from './LeapFeedbackSurvey.jsx';

export default {
  title: 'Components/LeapFeedbackSurvey',
  component: LeapFeedbackSurvey,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A survey component that collects user feedback through star ratings, free-text responses, and single-select questions.',
      },
    },
  },
  argTypes: {
    onSubmit: { action: 'submitted' },
  },
};

export const Default = {
  args: {
    questions: [
      {
        id: 'q1',
        text: 'How would you rate the change management communication?',
        type: 'rating',
      },
      {
        id: 'q2',
        text: 'What additional support would help your transition?',
        type: 'text',
      },
      {
        id: 'q3',
        text: 'Which training format do you prefer?',
        type: 'select',
        options: [
          'In-person workshop',
          'Virtual live session',
          'Self-paced online',
          'One-on-one coaching',
        ],
      },
    ],
  },
};

export const SingleQuestion = {
  args: {
    questions: [
      {
        id: 'q1',
        text: 'Overall, how satisfied are you with the new process?',
        type: 'rating',
      },
    ],
  },
};
