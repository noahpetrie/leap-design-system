import React from 'react';
import PropTypes from 'prop-types';
import { unstable__FluidDropdown as FluidDropdown } from '@carbon/react';
import './LeapFluidDropdown.scss';

/**
 * LeapFluidDropdown — A fluid-style single-select dropdown with Leap brand theming.
 */
const LeapFluidDropdown = React.forwardRef(function LeapFluidDropdown(
  { className, ...rest },
  ref
) {
  const classNames = ['leap-fluid-dropdown', className].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      <FluidDropdown ref={ref} {...rest} />
    </div>
  );
});

LeapFluidDropdown.propTypes = {
  /** Additional CSS class */
  className: PropTypes.string,
  /** Whether the dropdown is disabled */
  disabled: PropTypes.bool,
  /** Dropdown ID */
  id: PropTypes.string.isRequired,
  /** Whether the dropdown is invalid */
  invalid: PropTypes.bool,
  /** Text shown when invalid */
  invalidText: PropTypes.node,
  /** Array of items to select from */
  items: PropTypes.array.isRequired,
  /** Render function for each item */
  itemToString: PropTypes.func,
  /** Label text */
  label: PropTypes.node.isRequired,
  /** Change handler */
  onChange: PropTypes.func,
  /** Title text above the dropdown */
  titleText: PropTypes.node,
  /** Whether in warning state */
  warn: PropTypes.bool,
  /** Text shown in warning state */
  warnText: PropTypes.node,
};

export default LeapFluidDropdown;
