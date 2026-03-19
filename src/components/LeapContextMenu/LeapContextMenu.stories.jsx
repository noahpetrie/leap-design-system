import React from 'react';
import { Copy, Cut, Paste, TrashCan, Edit, Download, Share, FolderOpen } from '@carbon/react/icons';
import LeapContextMenu from './LeapContextMenu.jsx';

export default {
  title: 'Components/LeapContextMenu',
  component: LeapContextMenu,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A right-click context menu that appears at the cursor position, supporting icons, keyboard shortcuts, dividers, disabled items, and danger actions.',
      },
    },
  },
};

const fileItems = [
  { id: 'open', label: 'Open', icon: <FolderOpen />, shortcut: 'Enter' },
  { id: 'edit', label: 'Edit', icon: <Edit />, shortcut: 'E' },
  { id: 'divider-1', type: 'divider' },
  { id: 'copy', label: 'Copy', icon: <Copy />, shortcut: '\u2318C' },
  { id: 'cut', label: 'Cut', icon: <Cut />, shortcut: '\u2318X' },
  { id: 'paste', label: 'Paste', icon: <Paste />, shortcut: '\u2318V' },
  { id: 'divider-2', type: 'divider' },
  { id: 'download', label: 'Download', icon: <Download /> },
  { id: 'share', label: 'Share', icon: <Share />, disabled: true },
  { id: 'divider-3', type: 'divider' },
  { id: 'delete', label: 'Delete', icon: <TrashCan />, shortcut: 'Del', danger: true },
];

export const Default = {
  args: {
    items: fileItems,
    onSelect: (id) => console.log('Selected:', id),
    children: (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '12rem',
          border: '1px dashed #8d8d8d',
          borderRadius: '4px',
          color: '#525252',
          userSelect: 'none',
        }}
      >
        Right-click anywhere in this area
      </div>
    ),
  },
};

const simpleItems = [
  { id: 'copy', label: 'Copy', shortcut: '\u2318C' },
  { id: 'paste', label: 'Paste', shortcut: '\u2318V' },
  { id: 'divider-1', type: 'divider' },
  { id: 'select-all', label: 'Select All', shortcut: '\u2318A' },
];

export const Simple = {
  args: {
    items: simpleItems,
    onSelect: (id) => console.log('Selected:', id),
    children: (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '8rem',
          border: '1px dashed #8d8d8d',
          borderRadius: '4px',
          color: '#525252',
          userSelect: 'none',
        }}
      >
        Right-click for a simple menu
      </div>
    ),
  },
};
