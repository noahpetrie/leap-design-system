import React from 'react';
import LeapLoading from './LeapLoading.jsx';

export default { title: 'Components/LeapLoading', component: LeapLoading };

export const Default = { args: { active: true, description: 'Loading change initiatives...' } };

export const Inline = { args: { status: 'active', description: 'Syncing stakeholder data...' } };

export const WithOverlay = { args: { active: true, withOverlay: true, description: 'Generating impact report...' } };

export const Finished = { args: { status: 'finished', description: 'Adoption metrics loaded' } };
