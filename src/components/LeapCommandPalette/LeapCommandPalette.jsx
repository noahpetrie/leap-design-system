import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Search } from '@carbon/react';
import styles from './LeapCommandPalette.module.scss';

const LeapCommandPalette = ({ open = false, onOpen, onClose, onSelect, commands = [], placeholder = 'Type a command…' }) => {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (open) {
          onClose?.();
        } else {
          onOpen?.();
        }
      }
    };
    document.addEventListener('keydown', handleGlobalKeyDown);
    return () => document.removeEventListener('keydown', handleGlobalKeyDown);
  }, [open, onOpen, onClose]);

  const filtered = useMemo(() => {
    if (!query) return commands;
    const lower = query.toLowerCase();
    return commands.filter(
      (cmd) =>
        cmd.type !== 'group' &&
        (cmd.label.toLowerCase().includes(lower) ||
          (cmd.keywords && cmd.keywords.some((k) => k.toLowerCase().includes(lower))))
    );
  }, [query, commands]);

  const selectableItems = useMemo(() => filtered.filter((cmd) => cmd.type !== 'group' && !cmd.disabled), [filtered]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    if (open) {
      setQuery('');
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.querySelector('input')?.focus(), 0);
    }
  }, [open]);

  const handleSelect = useCallback(
    (item) => {
      if (item.disabled) return;
      onSelect?.(item.id);
      onClose?.();
    },
    [onSelect, onClose]
  );

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        onClose?.();
        return;
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex((i) => (i + 1) % Math.max(selectableItems.length, 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex((i) => (i - 1 + selectableItems.length) % Math.max(selectableItems.length, 1));
      } else if (e.key === 'Enter' && selectableItems[activeIndex]) {
        handleSelect(selectableItems[activeIndex]);
      }
    },
    [selectableItems, activeIndex, handleSelect, onClose]
  );

  useEffect(() => {
    if (listRef.current) {
      const active = listRef.current.querySelector(`[data-index="${activeIndex}"]`);
      active?.scrollIntoView({ block: 'nearest' });
    }
  }, [activeIndex]);

  if (!open) return null;

  let selectableIndex = -1;

  return (
    <div className={styles['leap-command-palette__overlay']} onClick={onClose}>
      <div
        className={styles['leap-command-palette']}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
        role="dialog"
        aria-label="Command palette"
      >
        <div className={styles['leap-command-palette__input']} ref={inputRef}>
          <Search
            labelText="Command search"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
            size="lg"
          />
        </div>
        <div className={styles['leap-command-palette__list']} ref={listRef} role="listbox">
          {filtered.length === 0 && (
            <div className={styles['leap-command-palette__empty']}>No results found</div>
          )}
          {filtered.map((item) => {
            if (item.type === 'group') {
              return (
                <div key={item.id} className={styles['leap-command-palette__group']}>
                  {item.label}
                </div>
              );
            }

            if (!item.disabled) selectableIndex++;
            const currentIndex = selectableIndex;

            return (
              <button
                key={item.id}
                className={`${styles['leap-command-palette__item']} ${
                  !item.disabled && currentIndex === activeIndex ? styles['leap-command-palette__item--active'] : ''
                } ${item.disabled ? styles['leap-command-palette__item--disabled'] : ''}`}
                role="option"
                aria-selected={!item.disabled && currentIndex === activeIndex}
                data-index={!item.disabled ? currentIndex : undefined}
                onClick={() => handleSelect(item)}
                disabled={item.disabled}
              >
                {item.icon && <span className={styles['leap-command-palette__item-icon']}>{item.icon}</span>}
                <span className={styles['leap-command-palette__item-label']}>{item.label}</span>
                {item.shortcut && (
                  <span className={styles['leap-command-palette__item-shortcut']}>{item.shortcut}</span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

LeapCommandPalette.propTypes = {
  open: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  onSelect: PropTypes.func,
  placeholder: PropTypes.string,
  commands: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.node,
      shortcut: PropTypes.string,
      keywords: PropTypes.arrayOf(PropTypes.string),
      disabled: PropTypes.bool,
      type: PropTypes.oneOf(['item', 'group']),
    })
  ),
};

export default LeapCommandPalette;
