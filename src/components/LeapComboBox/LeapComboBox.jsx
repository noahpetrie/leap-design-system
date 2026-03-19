import React, { useState, useRef, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { ChevronDown } from '@carbon/react/icons';
import styles from './LeapComboBox.module.scss';

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

  return (
    <div
      className={`${styles['leap-combo-box']} ${disabled ? styles['leap-combo-box--disabled'] : ''} ${invalid ? styles['leap-combo-box--invalid'] : ''}`}
      ref={containerRef}
      {...rest}
    >
      {label && <label className={styles['leap-combo-box__label']}>{label}</label>}
      <div className={styles['leap-combo-box__field']}>
        <input
          ref={inputRef}
          className={styles['leap-combo-box__input']}
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
          className={styles['leap-combo-box__toggle']}
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
          className={styles['leap-combo-box__list']}
          role="listbox"
        >
          {filteredItems.map((item, index) => (
            <li
              key={item.id}
              role="option"
              aria-selected={selectedItem && (typeof selectedItem === 'string' ? selectedItem === item.id : selectedItem.id === item.id)}
              className={`${styles['leap-combo-box__item']} ${index === highlightedIndex ? styles['leap-combo-box__item--highlighted'] : ''} ${selectedItem && (typeof selectedItem === 'string' ? selectedItem === item.id : selectedItem.id === item.id) ? styles['leap-combo-box__item--selected'] : ''}`}
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
        <div className={styles['leap-combo-box__error']}>{invalidText}</div>
      )}
      {!invalid && helperText && (
        <div className={styles['leap-combo-box__helper']}>{helperText}</div>
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
