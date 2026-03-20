import React from 'react';
import PropTypes from 'prop-types';
import { unstable__FluidTextInput as FluidTextInput } from '@carbon/react';

/**
 * LeapFluidTextInput — A fluid-style text input that fills its container,
 * with Leap brand theming. Supports password mode via isPassword prop.
 */
const LeapFluidTextInput = React.forwardRef(function LeapFluidTextInput(
  { className, ...rest },
  ref
) {
  const classNames = ['leap-fluid-text-input', className].filter(Boolean).join(' ');

  return (
    <div className={classNames} style={{ '--cds-focus': '#0c8c5e', '--cds-interactive': '#0c8c5e', '--cds-border-interactive': '#0c8c5e' }}>
      <FluidTextInput ref={ref} {...rest} />
    </div>
  );
});

LeapFluidTextInput.propTypes = {
  /** Additional CSS class */
  className: PropTypes.string,
  /** Default value */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Whether the input is disabled */
  disabled: PropTypes.bool,
  /** Whether to show the character counter */
  enableCounter: PropTypes.bool,
  /** Input ID */
  id: PropTypes.string.isRequired,
  /** Whether the input is invalid */
  invalid: PropTypes.bool,
  /** Text shown when invalid */
  invalidText: PropTypes.node,
  /** Whether to render as a password input */
  isPassword: PropTypes.bool,
  /** Label text */
  labelText: PropTypes.node.isRequired,
  /** Max character count for counter */
  maxCount: PropTypes.number,
  /** Change handler */
  onChange: PropTypes.func,
  /** Placeholder text */
  placeholder: PropTypes.string,
  /** Whether the input is read-only */
  readOnly: PropTypes.bool,
  /** Current value */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Whether the input is in warning state */
  warn: PropTypes.bool,
  /** Text shown when in warning state */
  warnText: PropTypes.node,
};

export default LeapFluidTextInput;
