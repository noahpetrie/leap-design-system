import React from 'react';
import LeapShapeIndicator from './LeapShapeIndicator.jsx';

export default {
  title: 'Components/LeapShapeIndicator',
  component: LeapShapeIndicator,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `A severity/status indicator that pairs a shaped icon (circle, diamond, triangle, etc.) with a label to convey severity levels like critical, high, medium, and low.

### Import
\`\`\`jsx
import { LeapShapeIndicator } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``,
      },
    },
  },
  argTypes: {
    kind: { control: false },
    textSize: { control: 'select', options: [12, 14] },
    label: { control: 'text' },
  },
};

export const Default = (props) => (
  <div style={{ display: 'flex', flexDirection: 'column', rowGap: '.5rem' }}>
    <LeapShapeIndicator kind="failed" label="Failed" {...props} />
    <LeapShapeIndicator kind="critical" label="Critical" {...props} />
    <LeapShapeIndicator kind="high" label="High" {...props} />
    <LeapShapeIndicator kind="medium" label="Medium" {...props} />
    <LeapShapeIndicator kind="low" label="Low" {...props} />
    <LeapShapeIndicator kind="cautious" label="Cautious" {...props} />
    <LeapShapeIndicator kind="undefined" label="Undefined" {...props} />
    <LeapShapeIndicator kind="stable" label="Stable" {...props} />
    <LeapShapeIndicator kind="informative" label="Informative" {...props} />
    <LeapShapeIndicator kind="incomplete" label="Incomplete" {...props} />
    <LeapShapeIndicator kind="draft" label="Draft" {...props} />
  </div>
);
Default.args = { textSize: 12 };

export const TextSize14 = (props) => (
  <div style={{ display: 'flex', flexDirection: 'column', rowGap: '.5rem' }}>
    <LeapShapeIndicator kind="failed" label="Failed" {...props} />
    <LeapShapeIndicator kind="critical" label="Critical" {...props} />
    <LeapShapeIndicator kind="stable" label="Stable" {...props} />
    <LeapShapeIndicator kind="draft" label="Draft" {...props} />
  </div>
);
TextSize14.args = { textSize: 14 };
