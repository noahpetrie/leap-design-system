import React, { useId } from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

/**
 * LeapFluidTextArea — A fluid-style multi-line text area with Leap brand theming.
 */
const LeapFluidTextArea = React.forwardRef(function LeapFluidTextArea(
  {
    className,
    defaultValue,
    disabled = false,
    enableCounter = false,
    id,
    invalid = false,
    invalidText,
    labelText,
    maxCount,
    onChange,
    placeholder,
    rows = 4,
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
  const charCount = (value ?? defaultValue ?? '').length;

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
      <div className="px-4 pt-3 pb-1">
        <label
          htmlFor={inputId}
          className={cn(
            'block text-xs text-muted-foreground mb-1',
            invalid && 'text-destructive',
          )}
        >
          {labelText}
        </label>
        <textarea
          ref={ref}
          id={inputId}
          className={cn(
            'w-full bg-transparent text-sm text-foreground resize-none',
            'placeholder:text-muted-foreground',
            'focus:outline-none',
            disabled && 'cursor-not-allowed',
          )}
          rows={rows}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={invalid || undefined}
          aria-describedby={invalid || warn ? helperTextId : undefined}
          {...rest}
        />
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

LeapFluidTextArea.propTypes = {
  /** Additional CSS class */
  className: PropTypes.string,
  /** Default value */
  defaultValue: PropTypes.string,
  /** Whether the textarea is disabled */
  disabled: PropTypes.bool,
  /** Whether to show the character counter */
  enableCounter: PropTypes.bool,
  /** Textarea ID */
  id: PropTypes.string.isRequired,
  /** Whether the textarea is invalid */
  invalid: PropTypes.bool,
  /** Text shown when invalid */
  invalidText: PropTypes.node,
  /** Label text */
  labelText: PropTypes.node.isRequired,
  /** Max character count for counter */
  maxCount: PropTypes.number,
  /** Change handler */
  onChange: PropTypes.func,
  /** Placeholder text */
  placeholder: PropTypes.string,
  /** Number of visible rows */
  rows: PropTypes.number,
  /** Current value */
  value: PropTypes.string,
  /** Whether in warning state */
  warn: PropTypes.bool,
  /** Text shown in warning state */
  warnText: PropTypes.node,
};

export default LeapFluidTextArea;
