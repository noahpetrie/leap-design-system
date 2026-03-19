import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Search as SearchIcon } from '@carbon/icons-react';
import { cn } from '../../lib/utils';

const LeapCommandPalette = ({ open = false, onOpen, onClose, onSelect, commands = [], placeholder = 'Type a command\u2026' }) => {
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
      setTimeout(() => inputRef.current?.focus(), 0);
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
    <div className="fixed inset-0 z-[9999] flex justify-center pt-[15vh] bg-black/50" onClick={onClose}>
      <div
        className="flex flex-col w-full max-w-[36rem] max-h-96 bg-card border border-border rounded shadow-[0_8px_24px_rgba(0,0,0,0.25)] overflow-hidden self-start"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
        role="dialog"
        aria-label="Command palette"
      >
        <div className="shrink-0 border-b border-border relative">
          <div className="flex items-center px-4">
            <SearchIcon size={16} className="text-muted-foreground shrink-0" />
            <input
              ref={inputRef}
              type="text"
              className="flex-1 h-12 px-3 border-none bg-transparent text-foreground text-sm outline-none placeholder:text-muted-foreground"
              placeholder={placeholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoComplete="off"
              aria-label="Command search"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto py-1" ref={listRef} role="listbox">
          {filtered.length === 0 && (
            <div className="py-6 px-4 text-muted-foreground text-sm text-center">No results found</div>
          )}
          {filtered.map((item) => {
            if (item.type === 'group') {
              return (
                <div key={item.id} className="py-2 px-4 pb-1 text-muted-foreground text-xs font-medium uppercase tracking-wide">
                  {item.label}
                </div>
              );
            }

            if (!item.disabled) selectableIndex++;
            const currentIndex = selectableIndex;

            return (
              <button
                key={item.id}
                className={cn(
                  'flex items-center gap-3 w-full py-2 px-4 border-none bg-transparent text-foreground text-sm cursor-pointer text-left',
                  'hover:bg-accent',
                  'focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-[-2px]',
                  !item.disabled && currentIndex === activeIndex && 'bg-accent outline-none',
                  item.disabled && 'text-muted-foreground opacity-50 cursor-not-allowed hover:bg-transparent'
                )}
                role="option"
                aria-selected={!item.disabled && currentIndex === activeIndex}
                data-index={!item.disabled ? currentIndex : undefined}
                onClick={() => handleSelect(item)}
                disabled={item.disabled}
              >
                {item.icon && <span className="flex items-center shrink-0 [&_svg]:w-4 [&_svg]:h-4 [&_svg]:fill-current">{item.icon}</span>}
                <span className="flex-1">{item.label}</span>
                {item.shortcut && (
                  <span className="ml-auto px-1.5 py-0.5 rounded-sm bg-muted border border-border text-muted-foreground text-xs font-mono">
                    {item.shortcut}
                  </span>
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
