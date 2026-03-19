import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const LeapCheckbox = ({ id, labelText, checked, defaultChecked, onChange, disabled, ...rest }) => {
  const inputRef = useRef(null);

  const handleChange = (e) => {
    onChange?.(e.target.checked, id, e);
  };

  return (
    <div className="flex items-center gap-2" {...rest}>
      <div className="relative flex items-center">
        <input
          ref={inputRef}
          type="checkbox"
          id={id}
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={handleChange}
          disabled={disabled}
          className={cn(
            'peer h-4 w-4 shrink-0 rounded-sm border border-border',
            'focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2',
            'disabled:cursor-not-allowed disabled:opacity-50',
            'accent-primary'
          )}
        />
      </div>
      {labelText && (
        <label
          htmlFor={id}
          className={cn(
            'text-sm text-foreground cursor-pointer',
            disabled && 'text-muted-foreground opacity-50 cursor-not-allowed'
          )}
        >
          {labelText}
        </label>
      )}
    </div>
  );
};

LeapCheckbox.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

export default LeapCheckbox;
