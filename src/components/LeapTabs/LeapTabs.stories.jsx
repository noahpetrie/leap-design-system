import React from 'react';
import LeapTabs from './LeapTabs.jsx';

export default { title: 'Components/LeapTabs', component: LeapTabs };

export const Default = {
  args: {
    tabs: [
      { label: 'Overview', content: 'This change initiative targets the migration of 12 regional offices to the new collaboration platform. Expected completion: Q4 2026.' },
      { label: 'Stakeholders', content: 'Primary sponsors: VP of Operations, Director of IT. Change champions have been identified across all affected business units.' },
      { label: 'Timeline', content: 'Phase 1 (Apr-Jun): Assessment and planning. Phase 2 (Jul-Sep): Pilot rollout. Phase 3 (Oct-Dec): Full deployment and hypercare.' },
    ],
  },
};

export const TwoTabs = {
  args: {
    tabs: [
      { label: 'Readiness', content: 'Organizational readiness score: 72%. Key gaps identified in middle-management engagement and training resource allocation.' },
      { label: 'Risks', content: 'Top risk: Competing priorities in Q3 may reduce sponsor availability. Mitigation: Secure executive commitment through steering committee.' },
    ],
  },
};
