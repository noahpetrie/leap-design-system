import React from 'react';
import LeapAILabel from './LeapAILabel.jsx';

export default {
  title: 'Components/LeapAILabel',
  component: LeapAILabel,
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['pill', 'inline'] },
  },
};

export const Default = {
  args: {
    explanation: 'This impact assessment was generated using historical change data and stakeholder sentiment analysis.',
    confidence: 87,
    model: 'LeapChange AI v2.1',
  },
};

export const Small = {
  args: { size: 'sm', explanation: 'AI-generated readiness score based on survey responses.' },
};

export const Large = {
  args: { size: 'lg', explanation: 'Stakeholder sentiment analysis from engagement history.', confidence: 92, model: 'Claude' },
};

export const Inline = {
  args: { variant: 'inline', explanation: 'This field was auto-populated by AI.' },
};

export const NoExplanation = {
  args: {},
};

export const InContext = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontWeight: 600 }}>Impact Score: High</span>
        <LeapAILabel size="sm" explanation="Calculated from 12 historical change initiatives with similar scope." confidence={91} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>Stakeholder readiness:</span>
        <span style={{ fontWeight: 600 }}>78%</span>
        <LeapAILabel variant="inline" size="sm" explanation="Based on survey data from 45 respondents." />
      </div>
    </div>
  ),
};
