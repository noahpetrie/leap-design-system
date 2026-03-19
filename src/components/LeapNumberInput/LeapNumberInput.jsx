import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const sizeStyles = {
  sm: 'h-8 text-sm',
  md: 'h-10 text-sm',
  lg: 'h-12 text-base',
};

const buttonSizeStyles = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
};

/**
 * LeapNumberInput — A number stepper input with +/- buttons and Leap brand theming.
 */
const LeapNumberInput = React.forwardRef(function LeapNumberInput(
  {
    id,
    label,
    value,
    onChange,
    min,
    max,
    step = 1,
    helperText,
    invalidText,
    invalid = false,
    size = 'md',
    disabled = false,
    readOnly = false,
    className,
    ...rest
  },
  ref
) {
  const [internalValue, setInternalValue] = useState(value ?? 0);
  const currentValue = value !== undefined ? value : internalValue;

  const triggerChange = useCallback(
    (e, nextValue, direction) => {
      if (value === undefined) setInternalValue(nextValue);
      onChange?.(e, { value: nextValue, direction });
    },
    [value, onChange]
  );

  const handleIncrement = (e) => {
    if (disabled || readOnly) return;
    const next = currentValue + step;
    if (max === undefined || next <= max) {
      triggerChange(e, next, 'up');
    }
  };

  const handleDecrement = (e) => {
    if (disabled || readOnly) return;
    const next = currentValue - step;
    if (min === undefined || next >= min) {
      triggerChange(e, next, 'down');
    }
  };

  const handleInputChange = (e) => {
    if (disabled || readOnly) return;
    const parsed = parseFloat(e.target.value);
    if (!isNaN(parsed)) {
      triggerChange(e, parsed, 'input');
    }
  };

  const handleKeyDown = useCallback(
    (e) => {
      if (disabled || readOnly) return;

      if (e.key === 'ArrowUp') {
        e.preventDefault();
        const next = currentValue + step;
        if (max === undefined || next <= max) {
          triggerChange(e, next, 'up');
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        const next = currentValue - step;
        if (min === undefined || next >= min) {
          triggerChange(e, next, 'down');
        }
      }
    },
    [currentValue, step, min, max, disabled, readOnly, triggerChange]
  );

  return (
    <div className={cn('flex flex-col gap-1', className)} {...rest}>
      {label && (
        <label
          htmlFor={id}
          className={cn(
            'text-xs font-medium',
            disabled ? 'text-muted-foreground opacity-50' : 'text-muted-foreground'
          )}
        >
          {label}
        </label>
      )}
      <div className="flex items-center">
        <button
          type="button"
          className={cn(
            'flex items-center justify-center border border-border bg-transparent text-foreground cursor-pointer rounded-l transition-colors',
            'hover:bg-primary hover:text-primary-foreground',
            'focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-[-2px]',
            'disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-foreground',
            buttonSizeStyles[size]
          )}
          onClick={handleDecrement}
          disabled={disabled || readOnly || (min !== undefined && currentValue - step < min)}
          aria-label="Decrement"
        >
          &minus;
        </button>
        <input
          ref={ref}
          id={id}
          type="number"
          value={currentValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          readOnly={readOnly}
          aria-invalid={invalid || undefined}
          className={cn(
            'border-y border-border bg-muted text-foreground text-center outline-none w-16 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
            'focus:border-primary focus:ring-1 focus:ring-ring',
            invalid && 'border-destructive focus:border-destructive focus:ring-destructive',
            sizeStyles[size]
          )}
        />
        <button
          type="button"
          className={cn(
            'flex items-center justify-center border border-border bg-transparent text-foreground cursor-pointer rounded-r transition-colors',
            'hover:bg-primary hover:text-primary-foreground',
            'focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-[-2px]',
            'disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-foreground',
            buttonSizeStyles[size]
          )}
          onClick={handleIncrement}
          disabled={disabled || readOnly || (max !== undefined && currentValue + step > max)}
          aria-label="Increment"
        >
          +
        </button>
      </div>
      {invalid && invalidText && (
        <span className="text-xs text-destructive">{invalidText}</span>
      )}
      {!invalid && helperText && (
        <span className="text-xs text-muted-foreground">{helperText}</span>
      )}
    </div>
  );
});

LeapNumberInput.propTypes = {
  /** Unique identifier for the input */
  id: PropTypes.string.isRequired,
  /** Label text displayed above the input */
  label: PropTypes.string.isRequired,
  /** Current numeric value */
  value: PropTypes.number,
  /** Change handler called with (event, { value, direction }) */
  onChange: PropTypes.func,
  /** Minimum allowed value */
  min: PropTypes.number,
  /** Maximum allowed value */
  max: PropTypes.number,
  /** Increment/decrement step amount */
  step: PropTypes.number,
  /** Helper text displayed below the input */
  helperText: PropTypes.string,
  /** Text displayed when the input is in an invalid state */
  invalidText: PropTypes.string,
  /** Whether the input is in an invalid state */
  invalid: PropTypes.bool,
  /** Input size variant */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** Whether the input is disabled */
  disabled: PropTypes.bool,
  /** Whether the input is read-only */
  readOnly: PropTypes.bool,
  /** Additional CSS class */
  className: PropTypes.string,
};

export default LeapNumberInput;
