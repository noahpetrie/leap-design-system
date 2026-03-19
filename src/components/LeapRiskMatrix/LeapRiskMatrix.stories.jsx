import React from 'react';
import LeapRiskMatrix from './LeapRiskMatrix.jsx';

export default {
  title: 'Components/LeapRiskMatrix',
  component: LeapRiskMatrix,
  argTypes: {
    onRiskClick: { action: 'riskClicked' },
  },
};

export const Default = {
  args: {
    risks: [
      { id: 1, label: 'Data migration failure', likelihood: 4, impact: 5 },
      { id: 2, label: 'Budget overrun', likelihood: 3, impact: 4 },
      { id: 3, label: 'Stakeholder resistance', likelihood: 5, impact: 3 },
      { id: 4, label: 'Skill gap', likelihood: 2, impact: 2 },
      { id: 5, label: 'Vendor delay', likelihood: 3, impact: 3 },
      { id: 6, label: 'Regulatory non-compliance', likelihood: 1, impact: 5 },
    ],
  },
};

export const Empty = {
  args: {
    risks: [],
  },
};
