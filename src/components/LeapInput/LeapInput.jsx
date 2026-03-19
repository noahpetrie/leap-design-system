import React, { useId } from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const SIZE_CLASSES = {
  sm: 'h-8 text-sm px-3',
  md: 'h-10 text-sm px-3',
  lg: 'h-12 text-base px-4',
};

const LeapInput = ({
  id,
  labelText,
  placeholder,
  value,
  onChange,
  helperText,
  invalid = false,
  invalidText,
  disabled = false,
  size = 'md',
  ...rest
}) => {
  const generatedId = useId();
  const inputId = id || generatedId;
  const helperId = `${inputId}-helper`;

  return (
    <div className="flex flex-col gap-1" {...rest}>
      <label
        htmlFor={inputId}
        className={cn(
          'text-xs font-medium text-foreground',
          disabled && 'text-muted-foreground opacity-50',
        )}
      >
        {labelText}
      </label>
      <input
        id={inputId}
        type="text"
        className={cn(
          'w-full rounded border bg-muted text-foreground placeholder:text-muted-foreground',
          'focus:outline-none focus:ring-2 focus:ring-ring',
          'transition-colors',
          invalid ? 'border-destructive' : 'border-border',
          disabled && 'opacity-50 cursor-not-allowed',
          SIZE_CLASSES[size] || SIZE_CLASSES.md,
        )}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        aria-invalid={invalid || undefined}
        aria-describedby={helperText || (invalid && invalidText) ? helperId : undefined}
      />
      {invalid && invalidText ? (
        <span id={helperId} className="text-xs text-destructive">
          {invalidText}
        </span>
      ) : helperText ? (
        <span id={helperId} className="text-xs text-muted-foreground">
          {helperText}
        </span>
      ) : null}
    </div>
  );
};

LeapInput.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  helperText: PropTypes.string,
  invalid: PropTypes.bool,
  invalidText: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default LeapInput;
