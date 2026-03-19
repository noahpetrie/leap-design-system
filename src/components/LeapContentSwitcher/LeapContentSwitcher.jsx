import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './LeapContentSwitcher.module.scss';

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
      className={`${styles['leap-content-switcher']} ${styles[`leap-content-switcher--${size}`]}`}
      role="tablist"
    >
      {items.map((item, index) => (
        <button
          key={item.id || index}
          ref={(el) => (buttonsRef.current[index] = el)}
          className={`${styles['leap-content-switcher__item']} ${
            index === activeIndex ? styles['leap-content-switcher__item--selected'] : ''
          }`}
          role="tab"
          aria-selected={index === activeIndex}
          tabIndex={index === activeIndex ? 0 : -1}
          onClick={() => handleSelect(index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          disabled={item.disabled}
        >
          {item.icon && <span className={styles['leap-content-switcher__icon']}>{item.icon}</span>}
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
