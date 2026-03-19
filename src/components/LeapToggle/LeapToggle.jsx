import React, { useState, useId } from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const LeapToggle = ({
  id,
  labelText,
  labelA = 'Off',
  labelB = 'On',
  size = 'md',
  disabled = false,
  toggled,
  defaultToggled = false,
  onToggle,
  hideLabel = false,
  ...rest
}) => {
  const [internalToggled, setInternalToggled] = useState(defaultToggled);
  const isControlled = toggled !== undefined;
  const isOn = isControlled ? toggled : internalToggled;
  const fallbackId = useId();
  const toggleId = id || fallbackId;

  const handleChange = () => {
    if (disabled) return;
    const newValue = !isOn;
    if (!isControlled) setInternalToggled(newValue);
    onToggle && onToggle(newValue);
  };

  const isSm = size === 'sm';

  return (
    <div className="flex items-center gap-2" {...rest}>
      <label
        htmlFor={toggleId}
        className={cn(
          'text-xs font-medium text-foreground',
          hideLabel && 'sr-only'
        )}
      >
        {labelText}
      </label>
      <button
        id={toggleId}
        type="button"
        role="switch"
        aria-checked={isOn}
        disabled={disabled}
        onClick={handleChange}
        className={cn(
          'relative inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          isSm ? 'h-4 w-8' : 'h-6 w-11',
          isOn ? 'bg-primary' : 'bg-muted-foreground/30',
          disabled && 'cursor-not-allowed opacity-50'
        )}
      >
        <span
          className={cn(
            'pointer-events-none inline-block rounded-full bg-white shadow-sm ring-0 transition-transform duration-200',
            isSm ? 'h-3 w-3' : 'h-5 w-5',
            isOn
              ? isSm ? 'translate-x-4' : 'translate-x-5'
              : 'translate-x-0'
          )}
        />
      </button>
      <span className="text-xs text-muted-foreground">
        {isOn ? labelB : labelA}
      </span>
    </div>
  );
};

LeapToggle.propTypes = {
  /** Unique identifier for the toggle */
  id: PropTypes.string.isRequired,
  /** Label text for the toggle */
  labelText: PropTypes.string.isRequired,
  /** Text for the off state */
  labelA: PropTypes.string,
  /** Text for the on state */
  labelB: PropTypes.string,
  /** Toggle size */
  size: PropTypes.oneOf(['sm', 'md']),
  /** Whether the toggle is disabled */
  disabled: PropTypes.bool,
  /** Controlled toggled state */
  toggled: PropTypes.bool,
  /** Default toggled state (uncontrolled) */
  defaultToggled: PropTypes.bool,
  /** Callback when toggled */
  onToggle: PropTypes.func,
  /** Whether to visually hide the label */
  hideLabel: PropTypes.bool,
};

export default LeapToggle;
