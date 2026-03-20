import React from 'react';
import PropTypes from 'prop-types';
import { ContentSwitcher, Switch } from '@carbon/react';
import { cn } from '../../lib/utils';

const LeapContentSwitcher = ({ items = [], selectedIndex = 0, onChange, size = 'md', className, ...rest }) => {
  const handleChange = (e) => {
    const index = items.findIndex((item) => (item.id || item.label) === e.name);
    onChange?.(index, items[index]);
  };

  return (
    <div
      className={cn('leap-content-switcher', className)}
      style={{
        '--cds-focus': '#0c8c5e',
        '--cds-interactive': '#0c8c5e',
        '--cds-border-interactive': '#0c8c5e',
        '--cds-layer-selected-inverse': '#0c8c5e',
      }}
    >
      <ContentSwitcher
        selectedIndex={selectedIndex}
        onChange={handleChange}
        size={size}
        {...rest}
      >
        {items.map((item) => (
          <Switch
            key={item.id || item.label}
            name={item.id || item.label}
            text={item.label}
            disabled={item.disabled}
          />
        ))}
      </ContentSwitcher>
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
  className: PropTypes.string,
};

export default LeapContentSwitcher;
