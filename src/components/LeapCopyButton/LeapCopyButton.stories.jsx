import React from 'react';
import LeapCopyButton from './LeapCopyButton.jsx';

export default {
  title: 'Components/LeapCopyButton',
  component: LeapCopyButton,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    kind: { control: 'select', options: ['ghost', 'primary', 'icon-only'] },
    onCopy: { action: 'copied' },
  },
  parameters: {
    docs: {
      description: {
        component:
          `A one-click copy-to-clipboard button with visual feedback. Supports ghost, primary, and icon-only variants with configurable feedback text and timeout.

### Import
\`\`\`jsx
import { LeapCopyButton } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``,
      },
    },
  },
};

export const Default = {
  args: {
    text: 'npm install @carbon/react',
    label: 'Copy',
  },
};

export const Primary = {
  args: {
    text: 'https://leap-design-system.dev',
    label: 'Copy Link',
    kind: 'primary',
  },
};

export const IconOnly = {
  args: {
    text: 'sk-1234567890abcdef',
    kind: 'icon-only',
  },
};

export const Small = {
  args: {
    text: 'copied text',
    label: 'Copy',
    size: 'sm',
  },
};

export const WithCodeBlock = {
  render: (args) => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.5rem 0.75rem',
        background: '#262626',
        borderRadius: '4px',
        fontFamily: 'monospace',
        fontSize: '0.875rem',
        color: '#f4f4f4',
      }}
    >
      <code style={{ flex: 1 }}>npm install @carbon/react</code>
      <LeapCopyButton {...args} />
    </div>
  ),
  args: {
    text: 'npm install @carbon/react',
    kind: 'icon-only',
  },
};
