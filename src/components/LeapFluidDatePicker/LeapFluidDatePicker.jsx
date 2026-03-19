import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

/**
 * LeapFluidDatePickerInput -- A fluid-style date input field.
 */
export const LeapFluidDatePickerInput = React.forwardRef(function LeapFluidDatePickerInput(
  { id, labelText, placeholder = 'mm/dd/yyyy', invalid, invalidText, warn, warnText, className, ...rest },
  ref
) {
  return (
    <div className={cn('relative flex flex-col', className)}>
      {labelText && (
        <label
          htmlFor={id}
          className="px-4 pt-3 text-xs font-medium text-muted-foreground"
        >
          {labelText}
        </label>
      )}
      <input
        ref={ref}
        id={id}
        type="date"
        placeholder={placeholder}
        className={cn(
          'border-b-2 border-border bg-muted px-4 pb-3 pt-1 text-sm text-foreground transition-colors',
          'focus:border-primary focus:outline-none',
          invalid && 'border-destructive',
          warn && 'border-yellow-500'
        )}
        {...rest}
      />
      {invalid && invalidText && (
        <span className="px-4 pt-1 text-xs text-destructive">{invalidText}</span>
      )}
      {warn && warnText && !invalid && (
        <span className="px-4 pt-1 text-xs text-yellow-600">{warnText}</span>
      )}
    </div>
  );
});

/**
 * LeapFluidDatePicker -- A fluid-style date picker with Leap brand theming.
 * Use with LeapFluidDatePickerInput for the input field(s).
 */
const LeapFluidDatePicker = React.forwardRef(function LeapFluidDatePicker(
  { className, children, datePickerType = 'simple', onChange, value, ...rest },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn(
        'flex gap-0',
        datePickerType === 'range' && 'flex-row',
        className
      )}
      {...rest}
    >
      {children}
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
