import React from 'react';
import { Button } from '@carbon/react';
import LeapPopover from './LeapPopover.jsx';

export default {
  title: 'Components/LeapPopover',
  component: LeapPopover,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A general-purpose popover container that anchors to a trigger element. Supports click and hover triggers, four alignment directions, controlled and uncontrolled open state, and closes on outside click or Escape.',
      },
    },
  },
};

export const Default = () => (
  <div style={{ padding: '4rem', display: 'flex', justifyContent: 'center' }}>
    <LeapPopover
      content={<p>This is a basic popover with some helpful context for the user.</p>}
    >
      <Button size="sm">Click me</Button>
    </LeapPopover>
  </div>
);

export const HoverTrigger = () => (
  <div style={{ padding: '4rem', display: 'flex', justifyContent: 'center' }}>
    <LeapPopover
      trigger="hover"
      content={<p>Popover appears on hover and dismisses when the cursor leaves.</p>}
    >
      <Button size="sm" kind="tertiary">Hover me</Button>
    </LeapPopover>
  </div>
);

export const TopAligned = () => (
  <div style={{ padding: '8rem 4rem 4rem', display: 'flex', justifyContent: 'center' }}>
    <LeapPopover
      align="top"
      content={<p>This popover is aligned above the trigger element.</p>}
    >
      <Button size="sm">Open above</Button>
    </LeapPopover>
  </div>
);

export const RightAligned = () => (
  <div style={{ padding: '4rem', display: 'flex', justifyContent: 'flex-start' }}>
    <LeapPopover
      align="right"
      content={<p>This popover is aligned to the right of the trigger.</p>}
    >
      <Button size="sm">Open right</Button>
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
          <Button size="sm" kind="primary">
            Take action
          </Button>
        </div>
      }
    >
      <Button size="sm" kind="ghost">Show details</Button>
    </LeapPopover>
  </div>
);
