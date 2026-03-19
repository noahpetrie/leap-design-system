import React from 'react';
import LeapFileUploader from './LeapFileUploader.jsx';

export default {
  title: 'Components/LeapFileUploader',
  component: LeapFileUploader,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'files changed' },
  },
  parameters: {
    docs: {
      description: {
        component:
          `A file upload component with drag-and-drop support, file type and size validation, and a removable file list.

### Import
\`\`\`jsx
import { LeapFileUploader } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``,
      },
    },
  },
};

export const Default = {
  args: {},
};

export const AcceptImages = {
  args: {
    accept: '.jpg,.png,.gif',
    label: 'Drag and drop images here or click to upload',
    description: 'Accepted formats: JPG, PNG, GIF',
  },
};

export const AcceptPDF = {
  args: {
    accept: '.pdf',
    label: 'Drag and drop a PDF here or click to upload',
    description: 'Only PDF files are accepted',
  },
};

export const Multiple = {
  args: {
    multiple: true,
    label: 'Drag and drop files here or click to upload',
    description: 'You can select multiple files at once',
  },
};

export const Disabled = {
  args: {
    disabled: true,
    label: 'File upload is currently disabled',
  },
};
