import React, { useId, useState } from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

/**
 * LeapFluidTextInput — A fluid-style text input that fills its container,
 * with Leap brand theming. Supports password mode via isPassword prop.
 */
const LeapFluidTextInput = React.forwardRef(function LeapFluidTextInput(
  {
    className,
    defaultValue,
    disabled = false,
    enableCounter = false,
    id,
    invalid = false,
    invalidText,
    isPassword = false,
    labelText,
    maxCount,
    onChange,
    placeholder,
    readOnly = false,
    value,
    warn = false,
    warnText,
    ...rest
  },
  ref
) {
  const generatedId = useId();
  const inputId = id || generatedId;
  const helperTextId = `${inputId}-helper`;
  const [showPassword, setShowPassword] = useState(false);
  const charCount = String(value ?? defaultValue ?? '').length;

  return (
    <div
      className={cn(
        'relative w-full border-b-2 bg-muted transition-colors',
        'focus-within:border-primary',
        invalid ? 'border-destructive' : warn ? 'border-yellow-500' : 'border-transparent',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      <div className="px-4 pt-3 pb-2">
        <label
          htmlFor={inputId}
          className={cn(
            'block text-xs text-muted-foreground mb-1',
            invalid && 'text-destructive',
          )}
        >
          {labelText}
        </label>
        <div className="flex items-center gap-2">
          <input
            ref={ref}
            id={inputId}
            type={isPassword && !showPassword ? 'password' : 'text'}
            className={cn(
              'flex-1 bg-transparent text-sm text-foreground',
              'placeholder:text-muted-foreground',
              'focus:outline-none',
              disabled && 'cursor-not-allowed',
              readOnly && 'cursor-default',
            )}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            aria-invalid={invalid || undefined}
            aria-describedby={invalid || warn ? helperTextId : undefined}
            {...rest}
          />
          {isPassword && (
            <button
              type="button"
              className="text-xs text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring rounded px-1"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between px-4 pb-2">
        <div id={helperTextId}>
          {invalid && invalidText && (
            <span className="text-xs text-destructive">{invalidText}</span>
          )}
          {!invalid && warn && warnText && (
            <span className="text-xs text-yellow-600">{warnText}</span>
          )}
        </div>
        {enableCounter && maxCount != null && (
          <span
            className={cn(
              'text-xs text-muted-foreground ml-auto',
              charCount > maxCount && 'text-destructive',
            )}
          >
            {charCount}/{maxCount}
          </span>
        )}
      </div>
    </div>
  );
});

LeapFluidTextInput.propTypes = {
  /** Additional CSS class */
  className: PropTypes.string,
  /** Default value */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Whether the input is disabled */
  disabled: PropTypes.bool,
  /** Whether to show the character counter */
  enableCounter: PropTypes.bool,
  /** Input ID */
  id: PropTypes.string.isRequired,
  /** Whether the input is invalid */
  invalid: PropTypes.bool,
  /** Text shown when invalid */
  invalidText: PropTypes.node,
  /** Whether to render as a password input */
  isPassword: PropTypes.bool,
  /** Label text */
  labelText: PropTypes.node.isRequired,
  /** Max character count for counter */
  maxCount: PropTypes.number,
  /** Change handler */
  onChange: PropTypes.func,
  /** Placeholder text */
  placeholder: PropTypes.string,
  /** Whether the input is read-only */
  readOnly: PropTypes.bool,
  /** Current value */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Whether the input is in warning state */
  warn: PropTypes.bool,
  /** Text shown when in warning state */
  warnText: PropTypes.node,
};

export default LeapFluidTextInput;
