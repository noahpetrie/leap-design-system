import React from 'react';
import LeapTooltipDefinition from './LeapTooltipDefinition.jsx';

export default {
  title: 'Components/LeapTooltipDefinition',
  component: LeapTooltipDefinition,
  tags: ['autodocs'],
  argTypes: {
    align: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
  },
  parameters: {
    docs: {
      description: {
        component:
          'An inline term with a dotted underline that reveals a definition tooltip on hover or focus. Useful for defining jargon, acronyms, or domain-specific terms without interrupting reading flow.',
      },
    },
  },
};

export const Default = {
  render: (args) => (
    <p style={{ maxWidth: '32rem', lineHeight: 1.6 }}>
      The change initiative was assessed using a{' '}
      <LeapTooltipDefinition {...args}>PROSCI ADKAR model</LeapTooltipDefinition>{' '}
      to evaluate stakeholder readiness across all five dimensions.
    </p>
  ),
  args: {
    definition: 'ADKAR stands for Awareness, Desire, Knowledge, Ability, and Reinforcement — a goal-oriented change management model.',
    align: 'bottom',
  },
};

export const TopAligned = {
  render: (args) => (
    <p style={{ maxWidth: '32rem', lineHeight: 1.6, marginTop: '4rem' }}>
      The team measured{' '}
      <LeapTooltipDefinition {...args}>eNPS</LeapTooltipDefinition>{' '}
      scores quarterly to track employee sentiment over the transition period.
    </p>
  ),
  args: {
    definition: 'Employee Net Promoter Score — a metric measuring how likely employees are to recommend their workplace.',
    align: 'top',
  },
};

export const MultipleTerms = {
  render: () => (
    <p style={{ maxWidth: '36rem', lineHeight: 1.6 }}>
      The{' '}
      <LeapTooltipDefinition definition="A person or group who sponsors and champions the change initiative at the executive level.">
        change sponsor
      </LeapTooltipDefinition>{' '}
      approved the updated{' '}
      <LeapTooltipDefinition definition="A structured plan outlining key messages, audiences, channels, and timing for change-related communications.">
        communication plan
      </LeapTooltipDefinition>{' '}
      before the{' '}
      <LeapTooltipDefinition definition="The specific date when a new system, process, or organizational change officially takes effect.">
        go-live date
      </LeapTooltipDefinition>.
    </p>
  ),
};
