import React, { useState, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

/**
 * LeapFluidDropdown -- A fluid-style single-select dropdown with Leap brand theming.
 */
const LeapFluidDropdown = React.forwardRef(function LeapFluidDropdown(
  {
    className,
    disabled,
    id,
    invalid,
    invalidText,
    items,
    itemToString = (item) => (item ? String(item) : ''),
    label,
    onChange,
    titleText,
    warn,
    warnText,
    ...rest
  },
  ref
) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const containerRef = useRef(null);

  const handleSelect = useCallback(
    (item) => {
      setSelectedItem(item);
      setIsOpen(false);
      onChange?.({ selectedItem: item });
    },
    [onChange]
  );

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className={cn('relative', className)} {...rest}>
      {titleText && (
        <span className="block px-4 pt-3 text-xs font-medium text-muted-foreground">
          {titleText}
        </span>
      )}
      <button
        ref={ref}
        id={id}
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setIsOpen((o) => !o)}
        className={cn(
          'flex w-full items-center justify-between border-b-2 border-border bg-muted px-4 pb-3 pt-1 text-left text-sm transition-colors',
          'focus:border-primary focus:outline-none',
          invalid && 'border-destructive',
          warn && !invalid && 'border-yellow-500',
          disabled && 'cursor-not-allowed opacity-50'
        )}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={selectedItem ? 'text-foreground' : 'text-muted-foreground'}>
          {selectedItem ? itemToString(selectedItem) : label}
        </span>
        <svg
          className={cn('ml-2 h-4 w-4 text-foreground transition-transform', isOpen && 'rotate-180')}
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <path d="M8 11L3 6h10z" />
        </svg>
      </button>
      {isOpen && (
        <ul
          role="listbox"
          className="absolute z-10 mt-0 max-h-60 w-full overflow-auto border border-border bg-background shadow-md"
        >
          {items.map((item, index) => (
            <li
              key={index}
              role="option"
              aria-selected={selectedItem === item}
              className={cn(
                'cursor-pointer px-4 py-2 text-sm text-foreground hover:bg-accent',
                selectedItem === item && 'bg-accent font-medium'
              )}
              onClick={() => handleSelect(item)}
            >
              {itemToString(item)}
            </li>
          ))}
        </ul>
      )}
      {invalid && invalidText && (
        <span className="px-4 pt-1 text-xs text-destructive">{invalidText}</span>
      )}
      {warn && warnText && !invalid && (
        <span className="px-4 pt-1 text-xs text-yellow-600">{warnText}</span>
      )}
    </div>
  );
});

LeapFluidDropdown.propTypes = {
  /** Additional CSS class */
  className: PropTypes.string,
  /** Whether the dropdown is disabled */
  disabled: PropTypes.bool,
  /** Dropdown ID */
  id: PropTypes.string.isRequired,
  /** Whether the dropdown is invalid */
  invalid: PropTypes.bool,
  /** Text shown when invalid */
  invalidText: PropTypes.node,
  /** Array of items to select from */
  items: PropTypes.array.isRequired,
  /** Render function for each item */
  itemToString: PropTypes.func,
  /** Label text */
  label: PropTypes.node.isRequired,
  /** Change handler */
  onChange: PropTypes.func,
  /** Title text above the dropdown */
  titleText: PropTypes.node,
  /** Whether in warning state */
  warn: PropTypes.bool,
  /** Text shown in warning state */
  warnText: PropTypes.node,
};

export default LeapFluidDropdown;
