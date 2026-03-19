import React, { useState, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

/**
 * LeapFluidMultiSelect -- A fluid-style multi-select dropdown with Leap brand theming.
 */
const LeapFluidMultiSelect = React.forwardRef(function LeapFluidMultiSelect(
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
  const [selectedItems, setSelectedItems] = useState([]);
  const containerRef = useRef(null);

  const handleToggleItem = useCallback(
    (item) => {
      setSelectedItems((prev) => {
        const isSelected = prev.includes(item);
        const next = isSelected ? prev.filter((i) => i !== item) : [...prev, item];
        onChange?.({ selectedItems: next });
        return next;
      });
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

  const displayText =
    selectedItems.length > 0
      ? `${selectedItems.length} selected`
      : label;

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
        <span className={selectedItems.length > 0 ? 'text-foreground' : 'text-muted-foreground'}>
          {displayText}
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
          aria-multiselectable="true"
          className="absolute z-10 mt-0 max-h-60 w-full overflow-auto border border-border bg-background shadow-md"
        >
          {items.map((item, index) => {
            const isSelected = selectedItems.includes(item);
            return (
              <li
                key={index}
                role="option"
                aria-selected={isSelected}
                className={cn(
                  'flex cursor-pointer items-center gap-2 px-4 py-2 text-sm text-foreground hover:bg-accent',
                  isSelected && 'bg-accent'
                )}
                onClick={() => handleToggleItem(item)}
              >
                <span
                  className={cn(
                    'flex h-4 w-4 items-center justify-center rounded-sm border border-border',
                    isSelected && 'border-primary bg-primary text-primary-foreground'
                  )}
                >
                  {isSelected && (
                    <svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M6.5 12.5l-4-4 1.4-1.4 2.6 2.6 5.6-5.6 1.4 1.4z" />
                    </svg>
                  )}
                </span>
                {itemToString(item)}
              </li>
            );
          })}
        </ul>
      )}
      {selectedItems.length > 0 && (
        <div className="flex flex-wrap gap-1 px-4 py-2">
          {selectedItems.map((item, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary"
            >
              {itemToString(item)}
              <button
                type="button"
                className="ml-0.5 inline-flex cursor-pointer border-none bg-transparent p-0 text-primary hover:text-primary/70"
                onClick={() => handleToggleItem(item)}
                aria-label={`Remove ${itemToString(item)}`}
              >
                &times;
              </button>
            </span>
          ))}
        </div>
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

LeapFluidMultiSelect.propTypes = {
  /** Additional CSS class */
  className: PropTypes.string,
  /** Whether the multiselect is disabled */
  disabled: PropTypes.bool,
  /** Multiselect ID */
  id: PropTypes.string.isRequired,
  /** Whether the multiselect is invalid */
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
  /** Title text above the multiselect */
  titleText: PropTypes.node,
  /** Whether in warning state */
  warn: PropTypes.bool,
  /** Text shown in warning state */
  warnText: PropTypes.node,
};

export default LeapFluidMultiSelect;
