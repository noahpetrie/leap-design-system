import React, { useCallback, useRef } from 'react';
import PropTypes from 'prop-types';

import styles from './LeapSlider.module.scss';

const LeapSlider = ({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  label,
  helperText,
  showValue = true,
  disabled = false,
  ...rest
}) => {
  const inputRef = useRef(null);

  const percentage = ((value - min) / (max - min)) * 100;

  const handleChange = useCallback(
    (e) => {
      if (onChange) {
        onChange(Number(e.target.value));
      }
    },
    [onChange]
  );

  const handleKeyDown = useCallback(
    (e) => {
      if (disabled) return;

      let newValue = value;
      if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
        newValue = Math.min(value + step, max);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
        newValue = Math.max(value - step, min);
      } else {
        return;
      }

      if (onChange && newValue !== value) {
        onChange(newValue);
      }
    },
    [disabled, value, step, max, min, onChange]
  );

  return (
    <div
      className={`${styles['leap-slider']} ${disabled ? styles['leap-slider--disabled'] : ''}`}
      {...rest}
    >
      {label && (
        <label className={styles['leap-slider__label']} htmlFor="leap-slider-input">
          {label}
          {showValue && (
            <span className={styles['leap-slider__value']}>{value}</span>
          )}
        </label>
      )}
      {!label && showValue && (
        <span className={styles['leap-slider__value']}>{value}</span>
      )}
      <input
        ref={inputRef}
        id="leap-slider-input"
        type="range"
        className={styles['leap-slider__input']}
        value={value}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        style={{ '--slider-percentage': `${percentage}%` }}
        aria-label={label || 'Slider'}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
      />
      {helperText && (
        <div className={styles['leap-slider__helper-text']}>{helperText}</div>
      )}
    </div>
  );
};

LeapSlider.propTypes = {
  /** Current value of the slider */
  value: PropTypes.number.isRequired,
  /** Callback when the value changes */
  onChange: PropTypes.func.isRequired,
  /** Minimum value */
  min: PropTypes.number,
  /** Maximum value */
  max: PropTypes.number,
  /** Step increment */
  step: PropTypes.number,
  /** Label text displayed above the slider */
  label: PropTypes.string,
  /** Helper text displayed below the slider */
  helperText: PropTypes.string,
  /** Whether to show the current value label */
  showValue: PropTypes.bool,
  /** Whether the slider is disabled */
  disabled: PropTypes.bool,
};

export default LeapSlider;
