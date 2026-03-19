import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const sizeClasses = {
  sm: 'h-8 text-xs',
  md: 'h-10 text-sm',
  lg: 'h-12 text-base',
};

const LeapSelect = ({ id, titleText, label = 'Choose an option', items = [], onChange, size = 'md', disabled, ...rest }) => {
  const dropdownItems = items.map((item) => typeof item === 'string' ? { id: item, label: item } : item);

  return (
    <div className="flex flex-col gap-1" {...rest}>
      {titleText && (
        <label htmlFor={id} className="text-xs font-medium text-muted-foreground">
          {titleText}
        </label>
      )}
      <select
        id={id}
        className={cn(
          'w-full rounded border border-border bg-muted px-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50 disabled:cursor-not-allowed',
          sizeClasses[size]
        )}
        disabled={disabled}
        defaultValue=""
        onChange={(e) => {
          const selected = dropdownItems.find((item) => item.id === e.target.value);
          if (onChange) onChange(selected);
        }}
      >
        <option value="" disabled>{label}</option>
        {dropdownItems.map((item) => (
          <option key={item.id} value={item.id}>{item.label}</option>
        ))}
      </select>
    </div>
  );
};

LeapSelect.propTypes = {
  id: PropTypes.string.isRequired,
  titleText: PropTypes.string,
  label: PropTypes.string,
  items: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
};

export default LeapSelect;
