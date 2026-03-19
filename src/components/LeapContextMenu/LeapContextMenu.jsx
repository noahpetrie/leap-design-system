import React, { useState, useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const LeapContextMenu = ({ children, items = [], onSelect }) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const menuRef = useRef(null);

  const handleContextMenu = useCallback(
    (e) => {
      e.preventDefault();
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    },
    []
  );

  const handleClick = useCallback(() => {
    setVisible(false);
  }, []);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') setVisible(false);
  }, []);

  useEffect(() => {
    if (visible) {
      document.addEventListener('click', handleClick);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [visible, handleClick, handleKeyDown]);

  useEffect(() => {
    if (visible && menuRef.current) {
      const rect = menuRef.current.getBoundingClientRect();
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      let { x, y } = position;
      if (x + rect.width > vw) x = vw - rect.width - 4;
      if (y + rect.height > vh) y = vh - rect.height - 4;
      if (x !== position.x || y !== position.y) setPosition({ x, y });
    }
  }, [visible, position]);

  const handleItemClick = (item) => {
    if (item.disabled) return;
    setVisible(false);
    if (onSelect) onSelect(item.id);
  };

  return (
    <div className="contents" onContextMenu={handleContextMenu}>
      {children}
      {visible && (
        <div
          ref={menuRef}
          className="fixed z-[9999] min-w-[10rem] max-w-[18rem] py-1 bg-card border border-border shadow-[0_2px_6px_rgba(0,0,0,0.2)] list-none"
          style={{ top: position.y, left: position.x }}
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
                  'flex items-center gap-2 w-full py-1.5 px-4 border-none bg-transparent text-foreground text-sm cursor-pointer text-left whitespace-nowrap',
                  'hover:bg-accent',
                  'focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-[-2px]',
                  item.disabled && 'text-muted-foreground opacity-50 cursor-not-allowed hover:bg-transparent',
                  item.danger && 'text-destructive hover:bg-destructive hover:text-primary-foreground'
                )}
                role="menuitem"
                disabled={item.disabled}
                onClick={() => handleItemClick(item)}
              >
                {item.icon && <span className="flex items-center shrink-0 [&_svg]:w-4 [&_svg]:h-4 [&_svg]:fill-current">{item.icon}</span>}
                <span className="flex-1">{item.label}</span>
                {item.shortcut && (
                  <span className="ml-auto pl-8 text-muted-foreground text-xs font-medium">{item.shortcut}</span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

LeapContextMenu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      icon: PropTypes.node,
      shortcut: PropTypes.string,
      disabled: PropTypes.bool,
      danger: PropTypes.bool,
      type: PropTypes.oneOf(['item', 'divider']),
    })
  ),
  onSelect: PropTypes.func,
};

export default LeapContextMenu;
