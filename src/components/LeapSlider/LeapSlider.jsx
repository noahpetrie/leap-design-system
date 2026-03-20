import React, { useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

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
      className={cn('flex flex-col gap-2 w-full', disabled && 'opacity-50 pointer-events-none')}
      {...rest}
    >
      {label && (
        <label className="flex items-center justify-between text-[12px] tracking-[0.32px] text-[#525252]" htmlFor="leap-slider-input">
          {label}
          {showValue && (
            <span className="text-[12px] tracking-[0.32px] font-semibold text-[#161616]">{value}</span>
          )}
        </label>
      )}
      {!label && showValue && (
        <span className="text-[12px] tracking-[0.32px] font-semibold text-[#161616]">{value}</span>
      )}
      <input
        ref={inputRef}
        id="leap-slider-input"
        type="range"
        className="w-full h-1 rounded-sm appearance-none cursor-pointer outline-none
          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#0c8c5e] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#0c8c5e] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb:hover]:bg-[#096b48] [&::-webkit-slider-thumb:hover]:border-[#096b48]
          [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#0c8c5e] [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[#0c8c5e] [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:transition-all [&::-moz-range-thumb:hover]:bg-[#096b48] [&::-moz-range-thumb:hover]:border-[#096b48]
          [&::-moz-range-track]:h-1 [&::-moz-range-track]:rounded-sm [&::-moz-range-track]:bg-[#8d8d8d]
          focus-visible:[&::-webkit-slider-thumb]:shadow-[0_0_0_2px_#0c8c5e]
          focus-visible:[&::-moz-range-thumb]:shadow-[0_0_0_2px_#0c8c5e]"
        value={value}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        style={{
          background: `linear-gradient(to right, #0c8c5e 0%, #0c8c5e ${percentage}%, #8d8d8d ${percentage}%, #8d8d8d 100%)`,
        }}
        aria-label={label || 'Slider'}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
      />
      {helperText && (
        <div className="text-[12px] tracking-[0.32px] text-[#6f6f6f]">{helperText}</div>
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
