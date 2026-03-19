import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Close } from '@carbon/icons-react';
import { cn } from '../../lib/utils';

const sizeClasses = {
  sm: 'h-8 text-xs',
  md: 'h-10 text-sm',
  lg: 'h-12 text-base',
};

const LeapSearch = ({
  placeholder = 'Search employees or requests...',
  size = 'md',
  labelText = 'Search',
  onChange,
  onClear,
  value,
  ...rest
}) => {
  const inputRef = useRef(null);

  const handleClear = () => {
    if (onClear) onClear();
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <div className="relative w-full" {...rest}>
      <label htmlFor="leap-search-input" className="sr-only">{labelText}</label>
      <svg
        className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
      >
        <path d="M6.5 1a5.5 5.5 0 0 1 4.383 8.823l3.896 3.9a.75.75 0 0 1-1.061 1.06l-3.895-3.9A5.5 5.5 0 1 1 6.5 1Zm0 1.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
      </svg>
      <input
        ref={inputRef}
        id="leap-search-input"
        type="text"
        className={cn(
          'w-full rounded border border-border bg-muted pl-9 pr-9 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring',
          sizeClasses[size]
        )}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {value && (
        <button
          type="button"
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground transition-colors"
          onClick={handleClear}
          aria-label="Clear search"
        >
          <Close size={16} />
        </button>
      )}
    </div>
  );
};

LeapSearch.propTypes = {
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  labelText: PropTypes.string,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  value: PropTypes.string,
};

export default LeapSearch;
