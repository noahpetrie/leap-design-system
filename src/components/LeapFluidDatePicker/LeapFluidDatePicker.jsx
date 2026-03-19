import React from 'react';
import PropTypes from 'prop-types';
import {
  unstable__FluidDatePicker as FluidDatePicker,
  unstable__FluidDatePickerInput as FluidDatePickerInput,
} from '@carbon/react';
import './LeapFluidDatePicker.scss';

export { unstable__FluidDatePickerInput as LeapFluidDatePickerInput } from '@carbon/react';

/**
 * LeapFluidDatePicker — A fluid-style date picker with Leap brand theming.
 * Use with LeapFluidDatePickerInput for the input field(s).
 */
const LeapFluidDatePicker = React.forwardRef(function LeapFluidDatePicker(
  { className, children, ...rest },
  ref
) {
  const classNames = ['leap-fluid-date-picker', className].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      <FluidDatePicker ref={ref} {...rest}>
        {children}
      </FluidDatePicker>
    </div>
  );
});

LeapFluidDatePicker.propTypes = {
  /** FluidDatePickerInput children */
  children: PropTypes.node,
  /** Additional CSS class */
  className: PropTypes.string,
  /** Date picker type */
  datePickerType: PropTypes.oneOf(['simple', 'single', 'range']),
  /** Change handler */
  onChange: PropTypes.func,
  /** Current value */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
};

export default LeapFluidDatePicker;
