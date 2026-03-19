import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { NumberInput } from '@carbon/react';
import styles from './LeapNumberInput.module.scss';

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
  const classNames = [styles['leap-number-input'], className].filter(Boolean).join(' ');

  const handleKeyDown = useCallback(
    (e) => {
      if (disabled || readOnly) return;

      if (e.key === 'ArrowUp') {
        e.preventDefault();
        const next = (value ?? 0) + step;
        if (max === undefined || next <= max) {
          onChange?.(e, { value: next, direction: 'up' });
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        const next = (value ?? 0) - step;
        if (min === undefined || next >= min) {
          onChange?.(e, { value: next, direction: 'down' });
        }
      }
    },
    [value, step, min, max, disabled, readOnly, onChange]
  );

  return (
    <div className={classNames} onKeyDown={handleKeyDown}>
      <NumberInput
        ref={ref}
        id={id}
        label={label}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
        helperText={helperText}
        invalidText={invalidText}
        invalid={invalid}
        size={size}
        disabled={disabled}
        readOnly={readOnly}
        {...rest}
      />
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
