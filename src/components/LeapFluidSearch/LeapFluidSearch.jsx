import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

/**
 * LeapFluidSearch -- A fluid-style search input with Leap brand theming.
 */
const LeapFluidSearch = React.forwardRef(function LeapFluidSearch(
  { className, disabled, id, labelText, onChange, onClear, placeholder = 'Search...', value, ...rest },
  ref
) {
  const inputRef = ref || useRef(null);

  const handleClear = () => {
    onClear?.();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={cn('relative', className)} {...rest}>
      {labelText && (
        <label
          htmlFor={id}
          className="block px-4 pt-3 text-xs font-medium text-muted-foreground"
        >
          {labelText}
        </label>
      )}
      <div className="relative flex items-center">
        <svg
          className="absolute left-4 h-4 w-4 text-muted-foreground"
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <path d="M11.5 10.1c.8-1.1 1.2-2.4 1.2-3.8C12.7 3 10 .3 6.7.3S.7 3 .7 6.3s2.7 6 6 6c1.4 0 2.7-.4 3.8-1.2l4 4 1-1-4-4zm-4.8 1.2c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z" />
        </svg>
        <input
          ref={inputRef}
          id={id}
          type="search"
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          className={cn(
            'w-full border-b-2 border-border bg-muted py-3 pl-10 pr-10 text-sm text-foreground transition-colors placeholder:text-muted-foreground',
            'focus:border-primary focus:outline-none',
            disabled && 'cursor-not-allowed opacity-50'
          )}
        />
        {value && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 flex h-6 w-6 items-center justify-center rounded-full border-none bg-transparent text-muted-foreground hover:bg-accent hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label="Clear search"
          >
            <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
              <path d="M12 4.7L11.3 4 8 7.3 4.7 4 4 4.7 7.3 8 4 11.3l.7.7L8 8.7l3.3 3.3.7-.7L8.7 8z" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
});

LeapFluidSearch.propTypes = {
  /** Additional CSS class */
  className: PropTypes.string,
  /** Whether the search is disabled */
  disabled: PropTypes.bool,
  /** Search ID */
  id: PropTypes.string.isRequired,
  /** Label text */
  labelText: PropTypes.node.isRequired,
  /** Change handler */
  onChange: PropTypes.func,
  /** Clear handler */
  onClear: PropTypes.func,
  /** Placeholder text */
  placeholder: PropTypes.string,
  /** Current value */
  value: PropTypes.string,
};

export default LeapFluidSearch;
