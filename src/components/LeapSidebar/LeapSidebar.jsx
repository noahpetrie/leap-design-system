import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronLeft, ChevronRight } from '@carbon/react/icons';
import styles from './LeapSidebar.module.scss';

const LeapSidebar = ({ items = [], activeItem, onItemClick, collapsed: controlledCollapsed, logo, ...rest }) => {
  const [internalCollapsed, setInternalCollapsed] = useState(false);
  const collapsed = controlledCollapsed !== undefined ? controlledCollapsed : internalCollapsed;

  return (
    <nav className={`${styles['sidebar']} ${collapsed ? styles['sidebar--collapsed'] : ''}`} {...rest}>
      {logo && (
        <div className={styles['sidebar-logo']}>
          {collapsed ? logo.icon || logo.text?.[0] : logo.text || 'Leap'}
        </div>
      )}
      <div className={styles['sidebar-items']}>
        {items.map((item) => {
          const isActive = activeItem === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className={`${styles['sidebar-item']} ${isActive ? styles['sidebar-item--active'] : ''}`}
              onClick={() => onItemClick && onItemClick(item.id)}
              title={collapsed ? item.label : undefined}
            >
              {Icon && <Icon size={20} />}
              {!collapsed && <span>{item.label}</span>}
            </button>
          );
        })}
      </div>
      <button
        className={styles['sidebar-toggle']}
        onClick={() => setInternalCollapsed(!collapsed)}
        aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>
    </nav>
  );
};

LeapSidebar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.elementType,
    })
  ).isRequired,
  activeItem: PropTypes.string,
  onItemClick: PropTypes.func,
  collapsed: PropTypes.bool,
  logo: PropTypes.shape({ text: PropTypes.string, icon: PropTypes.node }),
};

export default LeapSidebar;
