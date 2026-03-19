import React from 'react';
import PropTypes from 'prop-types';
import { unstable__FluidMultiSelect as FluidMultiSelect } from '@carbon/react';
import './LeapFluidMultiSelect.scss';

/**
 * LeapFluidMultiSelect — A fluid-style multi-select dropdown with Leap brand theming.
 */
const LeapFluidMultiSelect = React.forwardRef(function LeapFluidMultiSelect(
  { className, ...rest },
  ref
) {
  const classNames = ['leap-fluid-multiselect', className].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      <FluidMultiSelect ref={ref} {...rest} />
    </div>
  );
});

LeapFluidMultiSelect.propTypes = {
  /** Additional CSS class */
  className: PropTypes.string,
  /** Whether the multiselect is disabled */
  disabled: PropTypes.bool,
  /** Multiselect ID */
  id: PropTypes.string.isRequired,
  /** Whether the multiselect is invalid */
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
  /** Title text above the multiselect */
  titleText: PropTypes.node,
  /** Whether in warning state */
  warn: PropTypes.bool,
  /** Text shown in warning state */
  warnText: PropTypes.node,
};

export default LeapFluidMultiSelect;
