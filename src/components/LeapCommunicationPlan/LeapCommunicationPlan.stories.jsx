import React from 'react';
import LeapCommunicationPlan from './LeapCommunicationPlan';

export default {
  title: 'Change Management/LeapCommunicationPlan',
  component: LeapCommunicationPlan,
};

export const Default = {
  args: {
    communications: [
      {
        id: 1,
        date: '2026-04-01',
        audience: 'All Employees',
        channel: 'email',
        message: 'Announcing the new platform migration timeline and what it means for your daily workflow and tooling.',
        status: 'sent',
      },
      {
        id: 2,
        date: '2026-04-05',
        audience: 'Engineering',
        channel: 'slack',
        message: 'Technical deep-dive on the API changes coming in Sprint 14 — please review before standup.',
        status: 'scheduled',
      },
      {
        id: 3,
        date: '2026-04-10',
        audience: 'Leadership',
        channel: 'meeting',
        message: 'Quarterly change readiness review and risk assessment discussion with executive sponsors.',
        status: 'draft',
      },
      {
        id: 4,
        date: '2026-04-15',
        audience: 'All Employees',
        channel: 'townhall',
        message: 'Company-wide town hall to address questions about the organizational restructuring.',
        status: 'scheduled',
      },
      {
        id: 5,
        date: '2026-03-20',
        audience: 'Design Team',
        channel: 'meeting',
        message: 'Design system migration workshop — cancelled due to scheduling conflict.',
        status: 'cancelled',
      },
    ],
  },
};

export const Empty = {
  args: {
    communications: [],
  },
};
