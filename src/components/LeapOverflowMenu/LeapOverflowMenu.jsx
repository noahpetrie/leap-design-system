import React, { useState, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { OverflowMenuVertical } from '@carbon/react/icons';
import styles from './LeapOverflowMenu.module.scss';

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
        // Right-aligned: ensure left edge isn't off-screen
        const adjustedLeft = left - menu.width;
        left = adjustedLeft < 4 ? 4 : left;
      } else {
        if (left + menu.width > vw - 4) left = vw - menu.width - 4;
      }
      if (top + menu.height > vh - 4) {
        // Flip above
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
    <div className={styles['leap-overflow-menu']}>
      <button
        ref={triggerRef}
        className={`${styles['leap-overflow-menu__trigger']} ${styles[`leap-overflow-menu__trigger--${size}`]}`}
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
          className={`${styles['leap-overflow-menu__menu']} ${flipped ? styles['leap-overflow-menu__menu--flipped'] : ''}`}
          style={{ top: menuPos.top, left: flipped ? 'auto' : menuPos.left, right: flipped ? `calc(100vw - ${menuPos.left}px)` : 'auto' }}
          role="menu"
        >
          {items.map((item) => {
            if (item.type === 'divider') {
              return <div key={item.id} className={styles['leap-overflow-menu__divider']} role="separator" />;
            }
            return (
              <button
                key={item.id}
                className={`${styles['leap-overflow-menu__item']} ${
                  item.danger ? styles['leap-overflow-menu__item--danger'] : ''
                } ${item.disabled ? styles['leap-overflow-menu__item--disabled'] : ''}`}
                role="menuitem"
                disabled={item.disabled}
                onClick={() => handleItemClick(item)}
              >
                {item.icon && <span className={styles['leap-overflow-menu__item-icon']}>{item.icon}</span>}
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
