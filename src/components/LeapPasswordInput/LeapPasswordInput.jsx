import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, ViewOff } from '@carbon/icons-react';
import { cn } from '../../lib/utils';

const inputSizeStyles = {
  sm: 'h-8 px-3 pr-8',
  md: 'h-10 px-4 pr-10',
  lg: 'h-12 px-4 pr-10',
};

const LeapPasswordInput = ({
  value,
  onChange,
  placeholder = 'Enter password',
  label,
  helperText,
  invalidText,
  invalid = false,
  size = 'md',
  disabled = false,
  ...rest
}) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (!disabled) {
      setVisible((prev) => !prev);
    }
  };

  return (
    <div className="flex flex-col gap-1" {...rest}>
      {label && (
        <label
          className={cn(
            'text-xs font-medium mb-1',
            disabled ? 'text-muted-foreground opacity-50' : 'text-muted-foreground'
          )}
        >
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        <input
          type={visible ? 'text' : 'password'}
          className={cn(
            'w-full border-0 border-b bg-muted text-foreground text-sm outline-none transition-colors',
            'placeholder:text-muted-foreground/60',
            'focus:border-b-2 focus:border-b-primary',
            invalid && 'border-b-2 border-b-destructive focus:border-b-destructive',
            disabled && 'bg-muted text-muted-foreground opacity-50 border-b-transparent cursor-not-allowed',
            !invalid && !disabled && 'border-b-border',
            inputSizeStyles[size]
          )}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={invalid || undefined}
        />
        <button
          type="button"
          className={cn(
            'absolute right-0 flex items-center justify-center w-10 h-full p-0 border-none bg-transparent cursor-pointer text-foreground',
            'hover:text-primary/80',
            'focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-[-2px]',
            disabled && 'text-muted-foreground opacity-50 cursor-not-allowed'
          )}
          onClick={toggleVisibility}
          disabled={disabled}
          aria-label={visible ? 'Hide password' : 'Show password'}
        >
          {visible ? <ViewOff size={16} /> : <View size={16} />}
        </button>
      </div>
      {invalid && invalidText && (
        <div className="text-xs font-medium text-destructive mt-1">{invalidText}</div>
      )}
      {!invalid && helperText && (
        <div className="text-xs text-muted-foreground mt-1">{helperText}</div>
      )}
    </div>
  );
};

LeapPasswordInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.string,
  invalidText: PropTypes.string,
  invalid: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
};

export default LeapPasswordInput;
