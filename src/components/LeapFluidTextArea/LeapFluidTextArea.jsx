import React from 'react';
import PropTypes from 'prop-types';
import { unstable__FluidTextArea as FluidTextArea } from '@carbon/react';

/**
 * LeapFluidTextArea — A fluid-style multi-line text area with Leap brand theming.
 */
const LeapFluidTextArea = React.forwardRef(function LeapFluidTextArea(
  { className, ...rest },
  ref
) {
  const classNames = ['leap-fluid-text-area', className].filter(Boolean).join(' ');

  return (
    <div className={classNames} style={{ '--cds-focus': '#0c8c5e', '--cds-interactive': '#0c8c5e', '--cds-border-interactive': '#0c8c5e' }}>
      <FluidTextArea ref={ref} {...rest} />
    </div>
  );
});

LeapFluidTextArea.propTypes = {
  /** Additional CSS class */
  className: PropTypes.string,
  /** Default value */
  defaultValue: PropTypes.string,
  /** Whether the textarea is disabled */
  disabled: PropTypes.bool,
  /** Whether to show the character counter */
  enableCounter: PropTypes.bool,
  /** Textarea ID */
  id: PropTypes.string.isRequired,
  /** Whether the textarea is invalid */
  invalid: PropTypes.bool,
  /** Text shown when invalid */
  invalidText: PropTypes.node,
  /** Label text */
  labelText: PropTypes.node.isRequired,
  /** Max character count for counter */
  maxCount: PropTypes.number,
  /** Change handler */
  onChange: PropTypes.func,
  /** Placeholder text */
  placeholder: PropTypes.string,
  /** Number of visible rows */
  rows: PropTypes.number,
  /** Current value */
  value: PropTypes.string,
  /** Whether in warning state */
  warn: PropTypes.bool,
  /** Text shown in warning state */
  warnText: PropTypes.node,
};

export default LeapFluidTextArea;
