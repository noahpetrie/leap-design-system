import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronLeft, ChevronRight } from '@carbon/icons-react';
import { cn } from '../../lib/utils';

const LeapSidebar = ({ items = [], activeItem, onItemClick, collapsed: controlledCollapsed, logo, ...rest }) => {
  const [internalCollapsed, setInternalCollapsed] = useState(false);
  const collapsed = controlledCollapsed !== undefined ? controlledCollapsed : internalCollapsed;

  return (
    <nav
      className={cn(
        'h-screen bg-[#1a1a18] flex flex-col transition-[width] duration-200 ease-in-out',
        collapsed ? 'w-14' : 'w-60'
      )}
      {...rest}
    >
      {logo && (
        <div className="text-base font-semibold text-white p-4 border-b border-white/10 whitespace-nowrap overflow-hidden">
          {collapsed ? logo.icon || logo.text?.[0] : logo.text || 'Leap'}
        </div>
      )}
      <div className="flex-1 py-2 overflow-y-auto">
        {items.map((item) => {
          const isActive = activeItem === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className={cn(
                'flex items-center gap-2 w-full px-4 py-2 bg-transparent border-none border-l-[3px] border-l-transparent text-white/70 cursor-pointer text-left whitespace-nowrap text-[14px] tracking-[0.16px] transition-colors',
                'hover:bg-white/[0.06] hover:text-white',
                isActive && 'bg-[rgba(12,140,94,0.18)] border-l-[#0c8c5e] text-white hover:bg-[rgba(12,140,94,0.18)]'
              )}
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
        className="flex items-center justify-center p-3 bg-transparent border-none border-t border-t-white/10 text-white/50 cursor-pointer hover:text-white transition-colors"
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
