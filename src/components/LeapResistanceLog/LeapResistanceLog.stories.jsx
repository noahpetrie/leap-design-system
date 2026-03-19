import React from 'react';
import LeapResistanceLog from './LeapResistanceLog';

export default {
  title: 'Change Management/LeapResistanceLog',
  component: LeapResistanceLog,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'An expandable log that tracks sources of resistance during change initiatives, showing severity, status, and mitigation strategies.',
      },
    },
  },
};

export const Default = {
  args: {
    entries: [
      {
        id: 1,
        source: 'Engineering Team',
        description:
          'Concerns about the tight migration timeline and potential for increased on-call burden during the transition period.',
        severity: 'high',
        status: 'mitigating',
        mitigation:
          'Extended timeline by two sprints. Added dedicated support rotation for migration issues. Weekly check-ins with tech leads.',
      },
      {
        id: 2,
        source: 'Sales Department',
        description:
          'Resistance to adopting the new CRM workflow due to perceived productivity loss during ramp-up.',
        severity: 'medium',
        status: 'identified',
        mitigation:
          'Planning hands-on workshops and assigning CRM champions within each sales pod.',
      },
      {
        id: 3,
        source: 'Customer Support',
        description:
          'Ticket routing changes may confuse newer team members unfamiliar with legacy categories.',
        severity: 'low',
        status: 'resolved',
        mitigation:
          'Created a mapping guide and ran two training sessions. Support leads confirmed readiness.',
      },
      {
        id: 4,
        source: 'Finance Team',
        description:
          'Budget approval process changes require re-training on new approval thresholds and delegation rules.',
        severity: 'medium',
        status: 'identified',
      },
    ],
  },
};

export const SingleEntry = {
  args: {
    entries: [
      {
        id: 1,
        source: 'Operations Team',
        description:
          'Shift scheduling system replacement raises concerns about fairness in shift allocation algorithms.',
        severity: 'high',
        status: 'mitigating',
        mitigation:
          'Formed a joint committee with union representatives to review and validate the algorithm logic before go-live.',
      },
    ],
  },
};
