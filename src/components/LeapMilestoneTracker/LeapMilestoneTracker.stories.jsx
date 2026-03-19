import React from 'react';
import LeapMilestoneTracker from './LeapMilestoneTracker.jsx';

export default {
  title: 'Components/LeapMilestoneTracker',
  component: LeapMilestoneTracker,
};

export const Default = {
  args: {
    milestones: [
      {
        title: 'Project Kickoff',
        date: 'Jan 15, 2026',
        status: 'completed',
        description: 'Initial stakeholder alignment and scope definition.',
      },
      {
        title: 'Requirements Gathering',
        date: 'Feb 10, 2026',
        status: 'completed',
        description: 'Collected input from all department leads.',
      },
      {
        title: 'Pilot Launch',
        date: 'Mar 1, 2026',
        status: 'overdue',
        description: 'Deploy pilot program to Engineering team.',
      },
      {
        title: 'Training Rollout',
        date: 'Apr 15, 2026',
        status: 'current',
        description: 'Begin company-wide training sessions.',
      },
      {
        title: 'Full Deployment',
        date: 'Jun 1, 2026',
        status: 'upcoming',
        description: 'Organization-wide launch with support resources.',
      },
    ],
  },
};

export const AllComplete = {
  args: {
    milestones: [
      {
        title: 'Discovery Phase',
        date: 'Oct 1, 2025',
        status: 'completed',
        description: 'Research and analysis completed.',
      },
      {
        title: 'Design Phase',
        date: 'Nov 15, 2025',
        status: 'completed',
        description: 'Solution design approved by stakeholders.',
      },
      {
        title: 'Implementation',
        date: 'Jan 10, 2026',
        status: 'completed',
        description: 'System deployed to production.',
      },
      {
        title: 'Post-Launch Review',
        date: 'Feb 28, 2026',
        status: 'completed',
        description: 'Metrics reviewed and improvements identified.',
      },
    ],
  },
};
