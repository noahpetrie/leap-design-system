import React from 'react';
import PropTypes from 'prop-types';
import { unstable__FluidSearch as FluidSearch } from '@carbon/react';
import './LeapFluidSearch.scss';

/**
 * LeapFluidSearch — A fluid-style search input with Leap brand theming.
 */
const LeapFluidSearch = React.forwardRef(function LeapFluidSearch(
  { className, ...rest },
  ref
) {
  const classNames = ['leap-fluid-search', className].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      <FluidSearch ref={ref} {...rest} />
    </div>
  );
});

LeapFluidSearch.propTypes = {
  /** Additional CSS class */
  className: PropTypes.string,
  /** Whether the search is disabled */
  disabled: PropTypes.bool,
  /** Search ID */
  id: PropTypes.string.isRequired,
  /** Label text */
  labelText: PropTypes.node.isRequired,
  /** Change handler */
  onChange: PropTypes.func,
  /** Clear handler */
  onClear: PropTypes.func,
  /** Placeholder text */
  placeholder: PropTypes.string,
  /** Current value */
  value: PropTypes.string,
};

export default LeapFluidSearch;
