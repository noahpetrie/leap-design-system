import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const sizeClasses = {
  sm: 'py-1 px-3 text-xs font-medium',
  md: 'py-1.5 px-4 text-sm',
  lg: 'py-2 px-5 text-sm',
  xl: 'py-2.5 px-6 text-base',
};

const LeapContentSwitcher = ({ items = [], selectedIndex = 0, onChange, size = 'md' }) => {
  const [activeIndex, setActiveIndex] = useState(selectedIndex);
  const buttonsRef = useRef([]);

  const handleSelect = (index) => {
    setActiveIndex(index);
    onChange?.(index, items[index]);
  };

  const handleKeyDown = (e, index) => {
    let nextIndex;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      nextIndex = (index + 1) % items.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      nextIndex = (index - 1 + items.length) % items.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextIndex = items.length - 1;
    }

    if (nextIndex !== undefined) {
      handleSelect(nextIndex);
      buttonsRef.current[nextIndex]?.focus();
    }
  };

  return (
    <div
      className="inline-flex rounded bg-card border border-border"
      role="tablist"
    >
      {items.map((item, index) => (
        <button
          key={item.id || index}
          ref={(el) => (buttonsRef.current[index] = el)}
          className={cn(
            'inline-flex items-center gap-1.5 border-none bg-transparent text-muted-foreground cursor-pointer whitespace-nowrap transition-[background,color] duration-150 relative',
            sizeClasses[size],
            index !== items.length - 1 && 'border-r border-border',
            index === 0 && 'rounded-l-[3px]',
            index === items.length - 1 && 'rounded-r-[3px]',
            index !== activeIndex && !item.disabled && 'hover:bg-accent hover:text-foreground',
            index === activeIndex && 'bg-primary text-white hover:bg-primary/80',
            index === activeIndex && index !== items.length - 1 && 'border-r-primary',
            item.disabled && 'text-muted-foreground opacity-50 cursor-not-allowed',
            'focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-[-2px] focus-visible:z-[1]'
          )}
          role="tab"
          aria-selected={index === activeIndex}
          tabIndex={index === activeIndex ? 0 : -1}
          onClick={() => handleSelect(index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          disabled={item.disabled}
        >
          {item.icon && <span className="flex items-center [&_svg]:w-4 [&_svg]:h-4 [&_svg]:fill-current">{item.icon}</span>}
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
};

LeapContentSwitcher.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string.isRequired,
      icon: PropTypes.node,
      disabled: PropTypes.bool,
    })
  ).isRequired,
  selectedIndex: PropTypes.number,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
};

export default LeapContentSwitcher;
