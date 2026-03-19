import React, { useState, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { OverflowMenuVertical } from '@carbon/icons-react';
import { cn } from '../../lib/utils';

const triggerSizeStyles = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
};

const LeapOverflowMenu = ({ items = [], icon: Icon = OverflowMenuVertical, size = 'md', flipped = false, onSelect, ariaLabel = 'Options' }) => {
  const [open, setOpen] = useState(false);
  const [menuPos, setMenuPos] = useState({ top: 0, left: 0 });
  const triggerRef = useRef(null);
  const menuRef = useRef(null);

  const updatePosition = useCallback(() => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();

    let top = rect.bottom + 2;
    let left = flipped ? rect.right : rect.left;

    setMenuPos({ top, left });
  }, [flipped]);

  useEffect(() => {
    if (open) {
      updatePosition();
    }
  }, [open, updatePosition]);

  useEffect(() => {
    if (!open) return;

    // Adjust if off-screen after render
    const adjustPosition = () => {
      if (!menuRef.current) return;
      const menu = menuRef.current.getBoundingClientRect();
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      let { top, left } = menuPos;

      if (flipped) {
        const adjustedLeft = left - menu.width;
        left = adjustedLeft < 4 ? 4 : left;
      } else {
        if (left + menu.width > vw - 4) left = vw - menu.width - 4;
      }
      if (top + menu.height > vh - 4) {
        top = triggerRef.current.getBoundingClientRect().top - menu.height - 2;
      }

      if (top !== menuPos.top || left !== menuPos.left) {
        setMenuPos({ top, left });
      }
    };

    requestAnimationFrame(adjustPosition);
  }, [open, menuPos, flipped]);

  const handleClickOutside = useCallback((e) => {
    if (triggerRef.current?.contains(e.target) || menuRef.current?.contains(e.target)) return;
    setOpen(false);
  }, []);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') setOpen(false);
  }, []);

  useEffect(() => {
    if (open) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, handleClickOutside, handleKeyDown]);

  const handleItemClick = (item) => {
    if (item.disabled) return;
    setOpen(false);
    onSelect?.(item.id);
  };

  const iconSize = size === 'sm' ? 16 : size === 'lg' ? 24 : 20;

  return (
    <div className="inline-block relative">
      <button
        ref={triggerRef}
        className={cn(
          'inline-flex items-center justify-center border-none rounded bg-transparent text-foreground cursor-pointer transition-colors',
          'hover:bg-accent',
          'focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-[-2px]',
          triggerSizeStyles[size]
        )}
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={ariaLabel}
        type="button"
      >
        <Icon size={iconSize} />
      </button>
      {open && (
        <div
          ref={menuRef}
          className="fixed z-[9999] min-w-[10rem] max-w-[18rem] py-1 bg-card border border-border shadow-[0_2px_6px_rgba(0,0,0,0.2)]"
          style={{ top: menuPos.top, left: flipped ? 'auto' : menuPos.left, right: flipped ? `calc(100vw - ${menuPos.left}px)` : 'auto' }}
          role="menu"
        >
          {items.map((item) => {
            if (item.type === 'divider') {
              return <div key={item.id} className="h-px my-1 bg-border" role="separator" />;
            }
            return (
              <button
                key={item.id}
                className={cn(
                  'flex items-center gap-2 w-full px-4 py-2 border-none bg-transparent text-foreground text-sm cursor-pointer text-left whitespace-nowrap',
                  'hover:bg-accent',
                  'focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-[-2px]',
                  item.danger && 'text-destructive hover:bg-destructive hover:text-primary-foreground',
                  item.disabled && 'text-muted-foreground opacity-50 cursor-not-allowed hover:bg-transparent'
                )}
                role="menuitem"
                disabled={item.disabled}
                onClick={() => handleItemClick(item)}
              >
                {item.icon && <span className="flex items-center flex-shrink-0 [&_svg]:w-4 [&_svg]:h-4 [&_svg]:fill-current">{item.icon}</span>}
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

LeapOverflowMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      icon: PropTypes.node,
      disabled: PropTypes.bool,
      danger: PropTypes.bool,
      type: PropTypes.oneOf(['item', 'divider']),
    })
  ),
  icon: PropTypes.elementType,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  flipped: PropTypes.bool,
  onSelect: PropTypes.func,
  ariaLabel: PropTypes.string,
};

export default LeapOverflowMenu;
