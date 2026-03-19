import React, { useState } from 'react';
import { Dashboard, Calendar, UserMultiple, Analytics, Collaborate, Education } from '@carbon/react/icons';
import { Button, Tag } from '@carbon/react';
import LeapOnboarding from './LeapOnboarding.jsx';

export default {
  title: 'Components/LeapOnboarding',
  component: LeapOnboarding,
  parameters: { layout: 'fullscreen' },
};

const WelcomeIllustration = () => (
  <svg viewBox="0 0 100 100" fill="currentColor">
    <circle cx="50" cy="35" r="20" opacity="0.3" />
    <circle cx="35" cy="55" r="20" opacity="0.5" />
    <circle cx="65" cy="55" r="20" opacity="0.7" />
  </svg>
);

const defaultSteps = [
  {
    title: 'Welcome to LeapChange',
    description: 'LeapChange helps you manage organizational change with confidence. Track stakeholder engagement, measure readiness, and drive successful transformations — all in one place.',
    illustration: <WelcomeIllustration />,
  },
  {
    title: 'Track your initiatives',
    description: 'Create change initiatives, set milestones, and monitor progress across your organization. Each initiative has its own dashboard with real-time metrics.',
    illustration: <Dashboard size={80} />,
  },
  {
    title: 'Engage stakeholders',
    description: 'Identify key stakeholders, track their sentiment over time, and ensure no one gets left behind during transitions. AI-powered insights highlight engagement gaps.',
    illustration: <UserMultiple size={80} />,
  },
  {
    title: 'What interests you most?',
    description: 'Select the areas you would like to explore first. You can always change these later in your settings.',
    content: (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
        <Tag type="green" size="md">Change Management</Tag>
        <Tag type="cool-gray" size="md">Stakeholder Analysis</Tag>
        <Tag type="cool-gray" size="md">Impact Assessment</Tag>
        <Tag type="green" size="md">Team Readiness</Tag>
        <Tag type="cool-gray" size="md">Communications</Tag>
        <Tag type="green" size="md">Analytics</Tag>
        <Tag type="cool-gray" size="md">Training Plans</Tag>
      </div>
    ),
  },
];

export const FirstTimeOrientation = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <div style={{ padding: '2rem' }}>
        <Button onClick={() => setOpen(true)}>Launch Onboarding</Button>
        <LeapOnboarding
          open={open}
          headerTitle="Welcome to your workspace, Noah!"
          steps={defaultSteps}
          onClose={() => setOpen(false)}
          onComplete={() => { alert('Onboarding complete!'); setOpen(false); }}
        />
      </div>
    );
  },
};

export const TwoSteps = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <div style={{ padding: '2rem' }}>
        <Button onClick={() => setOpen(true)}>Launch Onboarding</Button>
        <LeapOnboarding
          open={open}
          headerTitle="Quick Setup"
          steps={[
            { title: 'Set up your profile', description: 'Add your name, role, and department so your team can find you.', illustration: <Education size={80} /> },
            { title: 'Join your team', description: 'Select your team to see shared initiatives, calendars, and leave schedules.', illustration: <Collaborate size={80} /> },
          ]}
          onClose={() => setOpen(false)}
          onComplete={() => { alert('Setup complete!'); setOpen(false); }}
        />
      </div>
    );
  },
};
