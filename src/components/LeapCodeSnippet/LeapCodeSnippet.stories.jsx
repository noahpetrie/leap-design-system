import React from 'react';
import LeapCodeSnippet from './LeapCodeSnippet.jsx';

export default {
  title: 'Components/LeapCodeSnippet',
  component: LeapCodeSnippet,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A code display component supporting inline, single-line, and multi-line variants with optional copy-to-clipboard, line numbers, and language labels.',
      },
    },
  },
};

export const Inline = {
  render: () => (
    <p style={{ fontSize: '0.875rem' }}>
      Run <LeapCodeSnippet type="inline">npm install @leap/components</LeapCodeSnippet> to get started.
    </p>
  ),
};

export const SingleLine = {
  render: () => (
    <LeapCodeSnippet type="single">
      npx create-leap-app my-project --template change-management
    </LeapCodeSnippet>
  ),
};

export const MultiLine = {
  render: () => (
    <LeapCodeSnippet type="multi">
      {`import { LeapButton } from '@leap/components';

function App() {
  return (
    <LeapButton kind="primary" onClick={() => console.log('clicked')}>
      Launch Initiative
    </LeapButton>
  );
}`}
    </LeapCodeSnippet>
  ),
};

export const WithLineNumbers = {
  render: () => (
    <LeapCodeSnippet type="multi" showLineNumbers>
      {`const config = {
  org: 'acme-corp',
  project: 'digital-transformation',
  phases: ['assess', 'plan', 'execute', 'sustain'],
  enableAnalytics: true,
};

export default config;`}
    </LeapCodeSnippet>
  ),
};

export const WithLanguageLabel = {
  render: () => (
    <LeapCodeSnippet type="multi" language="JavaScript" showLineNumbers maxHeight="200px">
      {`// Stakeholder engagement scoring
function computeScore(stakeholder) {
  const weights = { influence: 0.4, readiness: 0.3, sentiment: 0.3 };
  return Object.entries(weights).reduce(
    (sum, [key, weight]) => sum + stakeholder[key] * weight,
    0
  );
}

const stakeholders = getActiveStakeholders();
const scores = stakeholders.map(computeScore);
console.log('Average score:', scores.reduce((a, b) => a + b, 0) / scores.length);`}
    </LeapCodeSnippet>
  ),
};
