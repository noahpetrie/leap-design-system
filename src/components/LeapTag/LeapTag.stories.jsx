import React from 'react';
import LeapTag from './LeapTag.jsx';

export default {
  title: 'Components/LeapTag',
  component: LeapTag,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `A color-coded tag component built on Carbon Tag, supporting multiple color types, sizes, and an optional filterable close action.

### Import
\`\`\`jsx
import { LeapTag } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``,
      },
    },
  },
  argTypes: { onClose: { action: 'closed' } },
};

export const AllTypes = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <LeapTag type="green">On Track</LeapTag>
      <LeapTag type="red">At Risk</LeapTag>
      <LeapTag type="blue">In Review</LeapTag>
      <LeapTag type="warm-gray">Archived</LeapTag>
      <LeapTag type="cool-gray">Draft</LeapTag>
      <LeapTag type="purple">Executive Sponsor</LeapTag>
      <LeapTag type="teal">Change Champion</LeapTag>
      <LeapTag type="cyan">Training Complete</LeapTag>
    </div>
  ),
};

export const Small = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <LeapTag type="green" size="sm">Phase 1</LeapTag>
      <LeapTag type="blue" size="sm">Phase 2</LeapTag>
      <LeapTag type="purple" size="sm">Phase 3</LeapTag>
    </div>
  ),
};

export const Filterable = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <LeapTag type="green" filter onClose={args.onClose}>Stakeholder aligned</LeapTag>
      <LeapTag type="blue" filter onClose={args.onClose}>Comms sent</LeapTag>
      <LeapTag type="teal" filter onClose={args.onClose}>Training scheduled</LeapTag>
    </div>
  ),
};
