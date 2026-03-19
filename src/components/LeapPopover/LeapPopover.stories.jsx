import React from 'react';
import LeapPopover from './LeapPopover.jsx';
import LeapButton from '../LeapButton/LeapButton.jsx';

export default {
  title: 'Components/LeapPopover',
  component: LeapPopover,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `A general-purpose popover container that anchors to a trigger element. Supports click and hover triggers, four alignment directions, controlled and uncontrolled open state, and closes on outside click or Escape.

### Import
\`\`\`jsx
import { LeapPopover } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``,
      },
    },
  },
};

export const Default = () => (
  <div style={{ padding: '4rem', display: 'flex', justifyContent: 'center' }}>
    <LeapPopover
      content={<p>This is a basic popover with some helpful context for the user.</p>}
    >
      <LeapButton size="sm">Click me</LeapButton>
    </LeapPopover>
  </div>
);

export const HoverTrigger = () => (
  <div style={{ padding: '4rem', display: 'flex', justifyContent: 'center' }}>
    <LeapPopover
      trigger="hover"
      content={<p>Popover appears on hover and dismisses when the cursor leaves.</p>}
    >
      <LeapButton size="sm" kind="tertiary">Hover me</LeapButton>
    </LeapPopover>
  </div>
);

export const TopAligned = () => (
  <div style={{ padding: '8rem 4rem 4rem', display: 'flex', justifyContent: 'center' }}>
    <LeapPopover
      align="top"
      content={<p>This popover is aligned above the trigger element.</p>}
    >
      <LeapButton size="sm">Open above</LeapButton>
    </LeapPopover>
  </div>
);

export const RightAligned = () => (
  <div style={{ padding: '4rem', display: 'flex', justifyContent: 'flex-start' }}>
    <LeapPopover
      align="right"
      content={<p>This popover is aligned to the right of the trigger.</p>}
    >
      <LeapButton size="sm">Open right</LeapButton>
    </LeapPopover>
  </div>
);

export const RichContent = () => (
  <div style={{ padding: '4rem', display: 'flex', justifyContent: 'center' }}>
    <LeapPopover
      content={
        <div>
          <h4 style={{ margin: '0 0 0.5rem' }}>Popover heading</h4>
          <p style={{ margin: '0 0 0.75rem' }}>
            This popover contains richer content including a heading, descriptive
            text, and an action button.
          </p>
          <LeapButton size="sm" kind="primary">
            Take action
          </LeapButton>
        </div>
      }
    >
      <LeapButton size="sm" kind="ghost">Show details</LeapButton>
    </LeapPopover>
  </div>
);
