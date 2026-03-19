import React from 'react';
import { LeapAISkeletonText, LeapAISkeletonIcon, LeapAISkeletonPlaceholder } from './LeapAISkeleton.jsx';

export default {
  title: 'Components/LeapAISkeleton',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `AI-themed skeleton loading states with a green shimmer effect, indicating AI-generated content is being loaded.

### Import
\`\`\`jsx
import { LeapAISkeleton } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``,
      },
    },
  },
};

export const Text = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 400 }}>
      <LeapAISkeletonText heading width="60%" />
      <LeapAISkeletonText paragraph lineCount={3} />
    </div>
  ),
};

export const Icon = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <LeapAISkeletonIcon />
      <LeapAISkeletonIcon style={{ width: '2rem', height: '2rem' }} />
      <LeapAISkeletonIcon style={{ width: '3rem', height: '3rem' }} />
    </div>
  ),
};

export const Placeholder = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <LeapAISkeletonPlaceholder />
      <LeapAISkeletonPlaceholder />
    </div>
  ),
};

export const CardLoading = {
  render: () => (
    <div
      style={{
        border: '1px solid #e0e0e0',
        borderRadius: 8,
        padding: '1.5rem',
        maxWidth: 360,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
      }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <LeapAISkeletonIcon style={{ width: '2rem', height: '2rem' }} />
        <LeapAISkeletonText width="40%" />
      </div>
      <LeapAISkeletonText paragraph lineCount={3} />
      <LeapAISkeletonPlaceholder />
    </div>
  ),
};
