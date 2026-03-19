import React from 'react';
import { Folder, Document, Image, Code, Settings, DataBase } from '@carbon/icons-react';
import LeapTreeView from './LeapTreeView.jsx';

export default {
  title: 'Components/LeapTreeView',
  component: LeapTreeView,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md'] },
    onSelect: { action: 'selected' },
  },
  parameters: {
    docs: {
      description: {
        component: `A hierarchical tree view for displaying nested data such as file systems, org structures, or navigation. Supports expand/collapse, selection, custom icons, keyboard navigation, and disabled nodes.

### Import
\`\`\`jsx
import { LeapTreeView } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``,
      },
    },
  },
};

const fileTree = [
  {
    id: 'src',
    label: 'src',
    icon: Folder,
    children: [
      {
        id: 'components',
        label: 'components',
        icon: Folder,
        children: [
          { id: 'button', label: 'Button.jsx', icon: Code },
          { id: 'card', label: 'Card.jsx', icon: Code },
          { id: 'modal', label: 'Modal.jsx', icon: Code },
        ],
      },
      {
        id: 'assets',
        label: 'assets',
        icon: Folder,
        children: [
          { id: 'logo', label: 'logo.svg', icon: Image },
          { id: 'hero', label: 'hero.png', icon: Image },
        ],
      },
      { id: 'app', label: 'App.jsx', icon: Code },
      { id: 'index', label: 'index.js', icon: Code },
    ],
  },
  {
    id: 'config',
    label: 'config',
    icon: Folder,
    children: [
      { id: 'eslint', label: '.eslintrc.json', icon: Settings },
      { id: 'tsconfig', label: 'tsconfig.json', icon: Settings },
    ],
  },
  { id: 'readme', label: 'README.md', icon: Document },
  { id: 'package', label: 'package.json', icon: Settings },
];

export const Default = {
  args: {
    nodes: fileTree,
    defaultExpanded: ['src'],
  },
};

export const FullyExpanded = {
  args: {
    nodes: fileTree,
    defaultExpanded: ['src', 'components', 'assets', 'config'],
  },
};

export const Small = {
  args: {
    nodes: fileTree,
    defaultExpanded: ['src', 'components'],
    size: 'sm',
  },
};

const orgTree = [
  {
    id: 'ceo',
    label: 'CEO — Sarah Chen',
    children: [
      {
        id: 'cto',
        label: 'CTO — James Park',
        children: [
          { id: 'eng-lead', label: 'Engineering Lead — Maria Lopez' },
          { id: 'data-lead', label: 'Data Lead — Raj Patel', icon: DataBase },
        ],
      },
      {
        id: 'coo',
        label: 'COO — Michael Brown',
        children: [
          { id: 'ops', label: 'Operations — Lisa Wang' },
          { id: 'hr', label: 'HR — Tom Harris', disabled: true },
        ],
      },
      { id: 'cfo', label: 'CFO — Anna Kim' },
    ],
  },
];

export const OrgChart = {
  args: {
    nodes: orgTree,
    defaultExpanded: ['ceo'],
  },
};
