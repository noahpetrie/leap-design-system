import React from 'react';
import LeapCard from './LeapCard.jsx';
import LeapAILabel from '../LeapAILabel/LeapAILabel.jsx';

export default {
  title: 'Components/LeapCard',
  component: LeapCard,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'raised', 'ai', 'danger', 'metric'] },
    onClick: { action: 'clicked' },
  },
  parameters: {
    docs: {
      description: {
        component: `A versatile card container available in default, raised, AI, danger, and metric variants. Supports optional click behavior, titles, subtitles, and AI labels.

### Import
\`\`\`jsx
import { LeapCard } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``,
      },
    },
  },
};

export const Default = {
  args: { title: 'Stakeholder Group', subtitle: 'Engineering', children: '12 members, 3 on leave today' },
};

export const Raised = {
  args: { variant: 'raised', title: 'Change Initiative', subtitle: 'Q2 Restructuring', children: 'Impact: High — 45 stakeholders affected' },
};

export const AICard = {
  render: () => (
    <LeapCard
      variant="ai"
      title="AI Impact Assessment"
      subtitle="Auto-generated"
      aiLabel={<LeapAILabel size="sm" explanation="Generated from 12 historical initiatives." confidence={87} />}
    >
      Based on similar past changes, this initiative has a 78% readiness score with moderate resistance expected from mid-management.
    </LeapCard>
  ),
};

export const Danger = {
  args: { variant: 'danger', title: 'Critical Alert', children: '3 stakeholders have not been engaged in 30+ days. This risks initiative success.' },
};

export const Metric = {
  args: { variant: 'metric', title: '78%', subtitle: 'Overall Readiness', children: 'Up 12% from last assessment' },
};

export const Clickable = {
  args: { variant: 'raised', title: 'Sarah Chen', subtitle: 'Software Engineer', children: 'Click to view profile' },
};
