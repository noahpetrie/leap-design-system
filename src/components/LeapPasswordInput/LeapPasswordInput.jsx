import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, ViewOff } from '@carbon/icons-react';
import { cn } from '../../lib/utils';

const inputSizeStyles = {
  sm: 'h-8 px-4 pr-8',
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
            'text-[12px] tracking-[0.32px] mb-1',
            disabled ? 'text-[#8d8d8d]' : 'text-[#525252]'
          )}
        >
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        <input
          type={visible ? 'text' : 'password'}
          className={cn(
            'w-full border-0 border-b text-[14px] tracking-[0.16px] bg-[#f4f4f4] text-[#161616] outline-none transition-colors',
            'placeholder:text-[#a8a8a8]',
            'focus:border-b-2 focus:border-b-[#0c8c5e]',
            invalid && 'border-b-2 border-b-[#da1e28] focus:border-b-[#da1e28]',
            disabled && 'bg-[#f4f4f4] text-[#8d8d8d] border-b-transparent cursor-not-allowed',
            !invalid && !disabled && 'border-b-[#8d8d8d]',
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
            'absolute right-0 flex items-center justify-center w-10 h-full p-0 border-none bg-transparent cursor-pointer text-[#161616]',
            'hover:text-[#096b48]',
            'focus:outline-2 focus:outline-[#0c8c5e] focus:outline-offset-[-2px]',
            disabled && 'text-[#8d8d8d] cursor-not-allowed'
          )}
          onClick={toggleVisibility}
          disabled={disabled}
          aria-label={visible ? 'Hide password' : 'Show password'}
        >
          {visible ? <ViewOff size={16} /> : <View size={16} />}
        </button>
      </div>
      {invalid && invalidText && (
        <div className="text-[12px] tracking-[0.32px] text-[#da1e28] mt-1">{invalidText}</div>
      )}
      {!invalid && helperText && (
        <div className="text-[12px] tracking-[0.32px] text-[#6f6f6f] mt-1">{helperText}</div>
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
