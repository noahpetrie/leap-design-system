import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const LeapTextArea = ({ id, labelText, placeholder, value, onChange, rows = 4, maxCount, disabled, ...rest }) => {
  const currentLength = value ? value.length : 0;

  return (
    <div className="flex flex-col gap-1" {...rest}>
      <label htmlFor={id} className="text-xs font-medium text-foreground">
        {labelText}
      </label>
      <textarea
        id={id}
        className={cn(
          'w-full rounded border border-border bg-muted px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground',
          'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1',
          'resize-y',
          disabled && 'cursor-not-allowed opacity-50'
        )}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        maxLength={maxCount}
        disabled={disabled}
      />
      {maxCount && (
        <span className="self-end text-xs text-muted-foreground">
          {currentLength}/{maxCount}
        </span>
      )}
    </div>
  );
};

LeapTextArea.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  rows: PropTypes.number,
  maxCount: PropTypes.number,
  disabled: PropTypes.bool,
};

export default LeapTextArea;
