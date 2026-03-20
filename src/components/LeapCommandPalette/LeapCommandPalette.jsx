import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Search } from '@carbon/react';

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
    <div
      className="fixed inset-0 z-[9999] flex justify-center pt-[15vh]"
      style={{ background: 'rgba(0, 0, 0, 0.5)' }}
      onMouseDown={onClose}
    >
      <div
        className="flex flex-col w-full max-w-[36rem] max-h-[24rem] bg-[#f4f4f4] border border-[var(--cds-border-subtle,#e0e0e0)] rounded-[4px] overflow-hidden self-start"
        style={{ boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)' }}
        onMouseDown={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
        role="dialog"
        aria-label="Command palette"
      >
        <div className="shrink-0 border-b border-[var(--cds-border-subtle,#e0e0e0)]" ref={inputRef}>
          <Search
            labelText="Command search"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
            size="lg"
          />
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto py-[0.25rem]" ref={listRef} role="listbox">
          {filtered.length === 0 && (
            <div className="py-[1.5rem] px-[1rem] text-[#525252] text-[0.875rem] leading-[1.125rem] tracking-[0.16px] text-center">
              No results found
            </div>
          )}
          {filtered.map((item) => {
            if (item.type === 'group') {
              return (
                <div
                  key={item.id}
                  className="px-[1rem] pt-[0.5rem] pb-[0.25rem] text-[#525252] text-[0.75rem] leading-[1rem] uppercase"
                  style={{ letterSpacing: '0.04em' }}
                >
                  {item.label}
                </div>
              );
            }

            if (!item.disabled) selectableIndex++;
            const currentIndex = selectableIndex;
            const isActive = !item.disabled && currentIndex === activeIndex;

            return (
              <button
                key={item.id}
                className={[
                  'flex items-center gap-[0.75rem] w-full shrink-0 py-[0.5rem] px-[1rem] border-none text-left text-[0.875rem] leading-[1.125rem] tracking-[0.16px] cursor-pointer',
                  isActive ? 'bg-[#e8e8e8] outline-none' : 'bg-transparent',
                  item.disabled
                    ? 'text-[#c6c6c6] cursor-not-allowed'
                    : 'text-[#161616] hover:bg-[#e8e8e8]',
                  'focus-visible:outline-2 focus-visible:outline-[#0c8c5e] focus-visible:-outline-offset-2',
                ].join(' ')}
                role="option"
                aria-selected={isActive}
                data-index={!item.disabled ? currentIndex : undefined}
                onClick={() => handleSelect(item)}
                disabled={item.disabled}
              >
                {item.icon && (
                  <span className="flex items-center shrink-0 [&_svg]:w-4 [&_svg]:h-4 [&_svg]:fill-current">
                    {item.icon}
                  </span>
                )}
                <span className="flex-1">{item.label}</span>
                {item.shortcut && (
                  <span
                    className="ml-auto py-[0.125rem] px-[0.375rem] rounded-[3px] border border-[var(--cds-border-subtle,#e0e0e0)] text-[#525252] text-[0.75rem] leading-[1rem] tracking-[0.32px] font-mono"
                    style={{ backgroundColor: 'var(--cds-layer, #ffffff)' }}
                  >
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
