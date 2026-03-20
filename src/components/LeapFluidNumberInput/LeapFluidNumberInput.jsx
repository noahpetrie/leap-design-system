import React from 'react';
import PropTypes from 'prop-types';
import { unstable__FluidNumberInput as FluidNumberInput } from '@carbon/react';

/**
 * LeapFluidNumberInput — A fluid-style number input with Leap brand theming.
 */
const LeapFluidNumberInput = React.forwardRef(function LeapFluidNumberInput(
  { className, ...rest },
  ref
) {
  const classNames = ['leap-fluid-number-input', className].filter(Boolean).join(' ');

  return (
    <div className={classNames} style={{ '--cds-focus': '#0c8c5e', '--cds-interactive': '#0c8c5e', '--cds-border-interactive': '#0c8c5e' }}>
      <FluidNumberInput ref={ref} {...rest} />
    </div>
  );
});

LeapFluidNumberInput.propTypes = {
  /** Additional CSS class */
  className: PropTypes.string,
  /** Default value */
  defaultValue: PropTypes.number,
  /** Whether the input is disabled */
  disabled: PropTypes.bool,
  /** Input ID */
  id: PropTypes.string.isRequired,
  /** Whether the input is invalid */
  invalid: PropTypes.bool,
  /** Text shown when invalid */
  invalidText: PropTypes.node,
  /** Label text */
  label: PropTypes.node.isRequired,
  /** Maximum value */
  max: PropTypes.number,
  /** Minimum value */
  min: PropTypes.number,
  /** Change handler */
  onChange: PropTypes.func,
  /** Step increment */
  step: PropTypes.number,
  /** Current value */
  value: PropTypes.number,
  /** Whether in warning state */
  warn: PropTypes.bool,
  /** Text shown in warning state */
  warnText: PropTypes.node,
};

export default LeapFluidNumberInput;
