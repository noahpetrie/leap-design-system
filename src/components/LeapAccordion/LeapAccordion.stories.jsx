import React from 'react';
import LeapAccordion from './LeapAccordion.jsx';

export default { title: 'Components/LeapAccordion', component: LeapAccordion };

export const Default = {
  args: {
    items: [
      { title: 'What is a change impact assessment?', content: 'A change impact assessment evaluates how a proposed change will affect people, processes, and technology across the organization. It identifies risks and informs the communication and training strategy.' },
      { title: 'Who are change champions?', content: 'Change champions are volunteers from affected teams who advocate for the change, provide peer support, and relay feedback to the project team. They bridge the gap between leadership and frontline employees.' },
      { title: 'How is adoption measured?', content: 'Adoption is measured through usage analytics, proficiency assessments, and periodic pulse surveys. LeapChange tracks adoption curves against target benchmarks for each initiative phase.' },
      { title: 'What happens during hypercare?', content: 'Hypercare is the post-launch support period where dedicated resources are available to resolve issues quickly, gather feedback, and reinforce new behaviors before transitioning to steady-state support.' },
    ],
  },
};

export const SingleItem = {
  args: {
    items: [
      { title: 'Resistance management approach', content: 'LeapChange uses a proactive resistance management framework that identifies potential resistance early, engages key influencers, and provides targeted interventions to address root causes rather than symptoms.' },
    ],
  },
};
