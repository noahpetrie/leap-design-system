import React from 'react';
import { Add, Send, Renew, ThumbsUp } from '@carbon/icons-react';
import LeapChatButton from './LeapChatButton.jsx';

export default {
  title: 'Components/LeapChatButton',
  component: LeapChatButton,
  tags: ['autodocs'],
  argTypes: {
    kind: { control: 'select', options: ['primary', 'secondary', 'tertiary', 'ghost', 'danger'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    isQuickAction: { control: 'boolean' },
    isSelected: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
  parameters: {
    docs: {
      description: {
        component:
          `A chat-optimized pill-shaped button for conversational UI patterns. Supports standard button kinds (\`primary\`, \`secondary\`, \`tertiary\`, \`ghost\`, \`danger\`) and a \`isQuickAction\` mode for compact, outlined quick-reply buttons. Quick actions can be marked as \`isSelected\` to show a filled state.

### Import
\`\`\`jsx
import { LeapChatButton } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``,
      },
    },
  },
};

export const Primary = {
  args: { children: 'Send Message', kind: 'primary', renderIcon: Send },
};

export const Secondary = {
  args: { children: 'Cancel', kind: 'secondary' },
};

export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <LeapChatButton size="sm" renderIcon={Send}>Small</LeapChatButton>
      <LeapChatButton size="md" renderIcon={Send}>Medium</LeapChatButton>
      <LeapChatButton size="lg" renderIcon={Send}>Large</LeapChatButton>
    </div>
  ),
};

export const Kinds = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <LeapChatButton kind="primary" renderIcon={Send}>Primary</LeapChatButton>
      <LeapChatButton kind="secondary" renderIcon={Renew}>Secondary</LeapChatButton>
      <LeapChatButton kind="tertiary" renderIcon={Add}>Tertiary</LeapChatButton>
      <LeapChatButton kind="ghost" renderIcon={ThumbsUp}>Ghost</LeapChatButton>
      <LeapChatButton kind="danger">Danger</LeapChatButton>
    </div>
  ),
};

export const QuickAction = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <LeapChatButton isQuickAction renderIcon={ThumbsUp}>Helpful</LeapChatButton>
      <LeapChatButton isQuickAction>Summarize</LeapChatButton>
      <LeapChatButton isQuickAction isSelected>Selected</LeapChatButton>
      <LeapChatButton isQuickAction disabled>Disabled</LeapChatButton>
      <LeapChatButton isQuickAction isSelected disabled>Selected + Disabled</LeapChatButton>
    </div>
  ),
};
