import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

/**
 * LeapFluidNumberInput -- A fluid-style number input with Leap brand theming.
 */
const LeapFluidNumberInput = React.forwardRef(function LeapFluidNumberInput(
  {
    className,
    defaultValue,
    disabled,
    id,
    invalid,
    invalidText,
    label,
    max,
    min,
    onChange,
    step = 1,
    value: controlledValue,
    warn,
    warnText,
    ...rest
  },
  ref
) {
  const [internalValue, setInternalValue] = useState(defaultValue ?? 0);
  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : internalValue;

  const handleChange = useCallback(
    (newValue) => {
      let clamped = newValue;
      if (min !== undefined && clamped < min) clamped = min;
      if (max !== undefined && clamped > max) clamped = max;

      if (!isControlled) {
        setInternalValue(clamped);
      }
      onChange?.(clamped);
    },
    [isControlled, min, max, onChange]
  );

  const handleInputChange = (e) => {
    const val = parseFloat(e.target.value);
    if (!isNaN(val)) {
      handleChange(val);
    }
  };

  const increment = () => handleChange(currentValue + step);
  const decrement = () => handleChange(currentValue - step);

  return (
    <div className={cn('relative', className)} {...rest}>
      {label && (
        <label
          htmlFor={id}
          className="block px-4 pt-3 text-xs font-medium text-muted-foreground"
        >
          {label}
        </label>
      )}
      <div className="flex items-stretch">
        <button
          type="button"
          disabled={disabled || (min !== undefined && currentValue <= min)}
          onClick={decrement}
          className="flex items-center justify-center border-b-2 border-border bg-muted px-3 text-foreground transition-colors hover:bg-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Decrement"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M3 7h10v2H3z" />
          </svg>
        </button>
        <input
          ref={ref}
          id={id}
          type="number"
          value={currentValue}
          onChange={handleInputChange}
          disabled={disabled}
          min={min}
          max={max}
          step={step}
          className={cn(
            'flex-1 border-b-2 border-border bg-muted px-4 pb-3 pt-1 text-center text-sm text-foreground [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
            'focus:border-primary focus:outline-none',
            invalid && 'border-destructive',
            warn && !invalid && 'border-yellow-500',
            disabled && 'cursor-not-allowed opacity-50'
          )}
        />
        <button
          type="button"
          disabled={disabled || (max !== undefined && currentValue >= max)}
          onClick={increment}
          className="flex items-center justify-center border-b-2 border-border bg-muted px-3 text-foreground transition-colors hover:bg-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Increment"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M7 3h2v4h4v2H9v4H7V9H3V7h4z" />
          </svg>
        </button>
      </div>
      {invalid && invalidText && (
        <span className="px-4 pt-1 text-xs text-destructive">{invalidText}</span>
      )}
      {warn && warnText && !invalid && (
        <span className="px-4 pt-1 text-xs text-yellow-600">{warnText}</span>
      )}
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
