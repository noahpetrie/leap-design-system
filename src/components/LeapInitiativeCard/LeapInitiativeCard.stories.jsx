import React from 'react';
import LeapInitiativeCard from './LeapInitiativeCard.jsx';

export default {
  title: 'Components/LeapInitiativeCard',
  component: LeapInitiativeCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `A card displaying a change initiative with its status, owner, timeline, readiness progress bar, and stakeholder count.

### Import
\`\`\`jsx
import { LeapInitiativeCard } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``,
      },
    },
  },
  argTypes: {
    status: { control: 'select', options: ['draft', 'active', 'completed', 'paused'] },
    readiness: { control: { type: 'range', min: 0, max: 100 } },
    onClick: { action: 'clicked' },
  },
};

export const Active = {
  args: {
    title: 'ERP System Migration',
    description: 'Migrating from legacy ERP to SAP S/4HANA across all business units with phased rollout starting Q2.',
    status: 'active',
    owner: 'Sarah Chen',
    startDate: 'Jan 2026',
    targetDate: 'Sep 2026',
    readiness: 72,
    stakeholderCount: 24,
  },
};

export const Draft = {
  args: {
    title: 'Hybrid Work Policy Rollout',
    description: 'Implementing new flexible work arrangements and updating workplace guidelines for all departments.',
    status: 'draft',
    owner: 'Marcus Johnson',
    startDate: 'Apr 2026',
    targetDate: 'Jul 2026',
    readiness: 35,
    stakeholderCount: 8,
  },
};

export const Completed = {
  args: {
    title: 'Agile Transformation - Phase 1',
    description: 'Successfully transitioned engineering teams to agile methodology with Scrum framework adoption.',
    status: 'completed',
    owner: 'Priya Sharma',
    startDate: 'Mar 2025',
    targetDate: 'Dec 2025',
    readiness: 98,
    stakeholderCount: 42,
  },
};

export const Paused = {
  args: {
    title: 'Office Consolidation',
    description: 'Merging three regional offices into a single headquarters. Paused pending budget review.',
    status: 'paused',
    owner: 'David Kim',
    startDate: 'Jun 2026',
    targetDate: 'Dec 2026',
    readiness: 48,
    stakeholderCount: 15,
  },
};
