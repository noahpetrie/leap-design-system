import React from 'react';
import LeapIconIndicator from './LeapIconIndicator.jsx';

export default {
  title: 'Components/LeapIconIndicator',
  component: LeapIconIndicator,
  tags: ['autodocs'],
  argTypes: {
    kind: { control: false },
    size: { control: 'select', options: [16, 20] },
    label: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component:
          `Displays a status icon with a text label to communicate system or item status. Supports 12 status kinds: \`failed\`, \`caution-major\`, \`caution-minor\`, \`undefined\`, \`succeeded\`, \`normal\`, \`in-progress\`, \`incomplete\`, \`not-started\`, \`pending\`, \`unknown\`, and \`informative\`. Each kind maps to a distinct icon and color. Available in size 16 (default) and 20.

### Import
\`\`\`jsx
import { LeapIconIndicator } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``,
      },
    },
  },
};

export const Default = (props) => (
  <div style={{ display: 'flex', flexDirection: 'column', rowGap: '.5rem' }}>
    <LeapIconIndicator kind="failed" label="Failed" {...props} />
    <LeapIconIndicator kind="caution-major" label="Caution major" {...props} />
    <LeapIconIndicator kind="caution-minor" label="Caution minor" {...props} />
    <LeapIconIndicator kind="undefined" label="Undefined" {...props} />
    <LeapIconIndicator kind="succeeded" label="Succeeded" {...props} />
    <LeapIconIndicator kind="normal" label="Normal" {...props} />
    <LeapIconIndicator kind="in-progress" label="In progress" {...props} />
    <LeapIconIndicator kind="incomplete" label="Incomplete" {...props} />
    <LeapIconIndicator kind="not-started" label="Not started" {...props} />
    <LeapIconIndicator kind="pending" label="Pending" {...props} />
    <LeapIconIndicator kind="unknown" label="Unknown" {...props} />
    <LeapIconIndicator kind="informative" label="Informative" {...props} />
  </div>
);
Default.args = { size: 16 };

export const Size20 = (props) => (
  <div style={{ display: 'flex', flexDirection: 'column', rowGap: '.5rem' }}>
    <LeapIconIndicator kind="failed" label="Failed" {...props} />
    <LeapIconIndicator kind="succeeded" label="Succeeded" {...props} />
    <LeapIconIndicator kind="in-progress" label="In progress" {...props} />
    <LeapIconIndicator kind="pending" label="Pending" {...props} />
  </div>
);
Size20.args = { size: 20 };
