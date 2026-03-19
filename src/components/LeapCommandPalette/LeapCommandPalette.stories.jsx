import React, { useState } from 'react';
import {
  Search,
  Settings,
  UserAvatar,
  Logout,
  Document,
  Add,
  Copy,
  TrashCan,
  Home,
  Dashboard,
  NotificationNew,
  Help,
} from '@carbon/icons-react';
import LeapCommandPalette from './LeapCommandPalette.jsx';

export default {
  title: 'Components/LeapCommandPalette',
  component: LeapCommandPalette,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          `A keyboard-driven command palette for quick navigation and actions. Supports fuzzy search, grouped commands, keyboard shortcuts, and arrow-key navigation. Open with \u2318K.

### Import
\`\`\`jsx
import { LeapCommandPalette } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``,
      },
    },
  },
};

const allCommands = [
  { id: 'nav-group', label: 'Navigation', type: 'group' },
  { id: 'home', label: 'Go to Home', icon: <Home />, shortcut: '\u2318H', keywords: ['dashboard', 'main'] },
  { id: 'dashboard', label: 'Go to Dashboard', icon: <Dashboard />, keywords: ['overview', 'analytics'] },
  { id: 'notifications', label: 'View Notifications', icon: <NotificationNew />, shortcut: '\u2318N' },
  { id: 'actions-group', label: 'Actions', type: 'group' },
  { id: 'new-doc', label: 'New Document', icon: <Document />, shortcut: '\u2318\u21E7N', keywords: ['create', 'file'] },
  { id: 'duplicate', label: 'Duplicate', icon: <Copy />, shortcut: '\u2318D' },
  { id: 'delete', label: 'Delete', icon: <TrashCan />, shortcut: 'Del', keywords: ['remove', 'trash'] },
  { id: 'settings-group', label: 'Settings', type: 'group' },
  { id: 'settings', label: 'Open Settings', icon: <Settings />, shortcut: '\u2318,' },
  { id: 'profile', label: 'View Profile', icon: <UserAvatar />, keywords: ['account', 'user'] },
  { id: 'help', label: 'Help & Support', icon: <Help />, shortcut: '\u2318?', keywords: ['docs', 'support'] },
  { id: 'logout', label: 'Sign Out', icon: <Logout />, keywords: ['exit'] },
];

const PaletteWrapper = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        style={{
          padding: '0.5rem 1rem',
          border: '1px solid #8d8d8d',
          borderRadius: '4px',
          background: 'none',
          cursor: 'pointer',
          color: '#525252',
        }}
      >
        Press {'\u2318'}K or click to open
      </button>
      <LeapCommandPalette
        {...args}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        onSelect={(id) => console.log('Selected:', id)}
      />
    </div>
  );
};

export const Default = {
  render: (args) => <PaletteWrapper {...args} />,
  args: {
    commands: allCommands,
  },
};

const simpleCommands = [
  { id: 'search', label: 'Search', icon: <Search />, shortcut: '\u2318F' },
  { id: 'add', label: 'Add Item', icon: <Add />, shortcut: '\u2318\u21E7A' },
  { id: 'settings', label: 'Settings', icon: <Settings />, shortcut: '\u2318,' },
  { id: 'help', label: 'Help', icon: <Help />, shortcut: '\u2318?' },
];

export const Simple = {
  render: (args) => <PaletteWrapper {...args} />,
  args: {
    commands: simpleCommands,
    placeholder: 'What do you need?',
  },
};
