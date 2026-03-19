import React, { useState, useRef, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { ChevronDown } from '@carbon/icons-react';
import { cn } from '../../lib/utils';

const LeapComboBox = ({
  items = [],
  selectedItem = null,
  onChange,
  placeholder = 'Choose an option',
  label = '',
  helperText = '',
  disabled = false,
  invalid = false,
  invalidText = '',
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const normalizedItems = useMemo(
    () => items.map((item) => (typeof item === 'string' ? { id: item, label: item } : item)),
    [items]
  );

  const filteredItems = useMemo(
    () =>
      inputValue
        ? normalizedItems.filter((item) =>
            item.label.toLowerCase().includes(inputValue.toLowerCase())
          )
        : normalizedItems,
    [normalizedItems, inputValue]
  );

  const selectedLabel = selectedItem
    ? typeof selectedItem === 'string'
      ? selectedItem
      : selectedItem.label
    : '';

  useEffect(() => {
    if (!isOpen) {
      setInputValue(selectedLabel);
      setHighlightedIndex(-1);
    }
  }, [isOpen, selectedLabel]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && highlightedIndex >= 0 && listRef.current) {
      const highlighted = listRef.current.children[highlightedIndex];
      if (highlighted) {
        highlighted.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [highlightedIndex, isOpen]);

  const handleSelect = (item) => {
    onChange && onChange(item);
    setIsOpen(false);
    inputRef.current?.blur();
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setHighlightedIndex(-1);
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const handleKeyDown = (e) => {
    if (disabled) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          setHighlightedIndex((prev) =>
            prev < filteredItems.length - 1 ? prev + 1 : 0
          );
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (isOpen) {
          setHighlightedIndex((prev) =>
            prev > 0 ? prev - 1 : filteredItems.length - 1
          );
        }
        break;
      case 'Enter':
        e.preventDefault();
        if (isOpen && highlightedIndex >= 0 && filteredItems[highlightedIndex]) {
          handleSelect(filteredItems[highlightedIndex]);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  const handleFocus = () => {
    if (!disabled) {
      setIsOpen(true);
      setInputValue('');
    }
  };

  const isItemSelected = (item) =>
    selectedItem && (typeof selectedItem === 'string' ? selectedItem === item.id : selectedItem.id === item.id);

  return (
    <div
      className={cn('relative w-full', disabled && 'opacity-70')}
      ref={containerRef}
      {...rest}
    >
      {label && (
        <label className={cn(
          'block mb-2 text-xs font-medium text-muted-foreground',
          disabled && 'text-muted-foreground opacity-50'
        )}>
          {label}
        </label>
      )}
      <div className={cn(
        'flex items-center relative bg-muted border-b',
        invalid ? 'border-destructive' : 'border-border',
        disabled && 'bg-card border-transparent'
      )}>
        <input
          ref={inputRef}
          className={cn(
            'flex-1 h-10 px-4 pr-10 border-none bg-transparent text-foreground text-sm outline-none w-full',
            'placeholder:text-muted-foreground',
            'focus:outline-2 focus:outline-primary focus:outline-offset-[-2px]',
            invalid && 'focus:outline-destructive',
            disabled && 'text-muted-foreground opacity-50 cursor-not-allowed'
          )}
          type="text"
          role="combobox"
          aria-expanded={isOpen}
          aria-autocomplete="list"
          aria-haspopup="listbox"
          placeholder={placeholder}
          value={isOpen ? inputValue : selectedLabel}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          disabled={disabled}
        />
        <button
          className={cn(
            'absolute right-0 top-0 flex items-center justify-center w-10 h-10 border-none bg-transparent text-foreground cursor-pointer p-0',
            'hover:bg-accent',
            disabled && 'text-muted-foreground opacity-50 cursor-not-allowed hover:bg-transparent'
          )}
          type="button"
          tabIndex={-1}
          aria-label="Open dropdown"
          disabled={disabled}
          onClick={() => {
            if (!disabled) {
              setIsOpen((prev) => !prev);
              inputRef.current?.focus();
            }
          }}
        >
          <ChevronDown size={16} />
        </button>
      </div>
      {isOpen && filteredItems.length > 0 && (
        <ul
          ref={listRef}
          className="absolute z-[9000] top-full left-0 right-0 max-h-52 overflow-y-auto m-0 p-0 list-none bg-card border border-border shadow-[0_2px_6px_rgba(0,0,0,0.2)]"
          role="listbox"
        >
          {filteredItems.map((item, index) => (
            <li
              key={item.id}
              role="option"
              aria-selected={isItemSelected(item)}
              className={cn(
                'flex items-center py-1.5 px-4 text-foreground text-sm cursor-pointer',
                'hover:bg-accent',
                index === highlightedIndex && 'bg-accent',
                isItemSelected(item) && 'bg-primary text-primary-foreground hover:bg-primary/80',
                isItemSelected(item) && index === highlightedIndex && 'bg-primary/80'
              )}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => handleSelect(item)}
              onMouseEnter={() => setHighlightedIndex(index)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
      {invalid && invalidText && (
        <div className="mt-1 text-destructive text-xs">{invalidText}</div>
      )}
      {!invalid && helperText && (
        <div className="mt-1 text-muted-foreground text-xs">{helperText}</div>
      )}
    </div>
  );
};

LeapComboBox.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({ id: PropTypes.string.isRequired, label: PropTypes.string.isRequired }),
    ])
  ).isRequired,
  selectedItem: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({ id: PropTypes.string, label: PropTypes.string }),
  ]),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.string,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  invalidText: PropTypes.string,
};

export default LeapComboBox;
