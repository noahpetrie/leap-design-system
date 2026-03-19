import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from '@carbon/icons-react';
import { cn } from '../../lib/utils';

const LeapHeader = ({
  appName = 'Leap',
  logoSrc,
  logo,
  navItems = [],
  actions,
  onMenuClick,
  ...rest
}) => {
  return (
    <header
      className="flex items-center h-12 w-full px-4 bg-foreground text-primary-foreground fixed top-0 left-0 z-[8000]"
      {...rest}
    >
      <div className="flex items-center gap-2 shrink-0">
        {onMenuClick && (
          <button
            className="flex items-center justify-center w-8 h-8 p-0 border-none bg-transparent text-primary-foreground cursor-pointer hover:bg-white/10 focus:outline-2 focus:outline-ring focus:-outline-offset-2"
            type="button"
            aria-label="Open menu"
            onClick={onMenuClick}
          >
            <Menu size={20} />
          </button>
        )}
        {logo || (logoSrc && (
          <img className="h-5 w-auto" src={logoSrc} alt={`${appName} logo`} />
        ))}
        <span className="text-sm font-semibold text-primary-foreground whitespace-nowrap">{appName}</span>
      </div>

      {navItems.length > 0 && (
        <nav className="flex items-center h-full ml-4 overflow-x-auto" aria-label="Main navigation">
          {navItems.map((item) => {
            const Element = item.href ? 'a' : 'button';
            return (
              <Element
                key={item.id}
                className={cn(
                  'flex items-center h-full px-4 text-sm text-primary-foreground no-underline border-none bg-transparent cursor-pointer whitespace-nowrap border-b-2 border-transparent',
                  'hover:bg-white/10 hover:text-primary-foreground',
                  'focus:outline-2 focus:outline-ring focus:-outline-offset-2',
                  item.isActive && 'border-b-primary hover:border-b-primary/80',
                )}
                href={item.href || undefined}
                onClick={item.onClick}
                type={item.href ? undefined : 'button'}
              >
                {item.label}
              </Element>
            );
          })}
        </nav>
      )}

      {actions && <div className="flex items-center gap-2 ml-auto shrink-0">{actions}</div>}
    </header>
  );
};

LeapHeader.propTypes = {
  appName: PropTypes.string,
  logoSrc: PropTypes.string,
  logo: PropTypes.node,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
      onClick: PropTypes.func,
      isActive: PropTypes.bool,
    })
  ),
  actions: PropTypes.node,
  onMenuClick: PropTypes.func,
};

export default LeapHeader;
