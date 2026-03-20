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
      className="flex items-center h-[3rem] w-full px-[1rem] bg-[#161616] text-[#ffffff] fixed top-0 left-0 z-[8000]"
      {...rest}
    >
      <div className="flex items-center gap-[0.5rem] shrink-0">
        {onMenuClick && (
          <button
            className="flex items-center justify-center w-[2rem] h-[2rem] p-0 border-none rounded-none bg-transparent text-[#ffffff] cursor-pointer hover:bg-[rgba(255,255,255,0.1)] focus:outline-2 focus:outline-[#ffffff] focus:-outline-offset-2"
            type="button"
            aria-label="Open menu"
            onClick={onMenuClick}
          >
            <Menu size={20} />
          </button>
        )}
        {logo || (logoSrc && (
          <img className="h-[1.25rem] w-auto" src={logoSrc} alt={`${appName} logo`} />
        ))}
        <span className="text-[14px] font-semibold tracking-[0.16px] text-[#ffffff] whitespace-nowrap">{appName}</span>
      </div>

      {navItems.length > 0 && (
        <nav className="flex items-center h-full ml-[1rem] gap-0 overflow-x-auto" aria-label="Main navigation">
          {navItems.map((item) => {
            const Element = item.href ? 'a' : 'button';
            return (
              <Element
                key={item.id}
                className={cn(
                  'flex items-center h-full px-[1rem] text-[14px] tracking-[0.16px] text-[#ffffff] no-underline border-none bg-transparent cursor-pointer whitespace-nowrap border-b-2 border-b-transparent',
                  'hover:bg-[rgba(255,255,255,0.1)] hover:text-[#ffffff]',
                  'focus:outline-2 focus:outline-[#ffffff] focus:-outline-offset-2',
                  item.isActive && 'border-b-[#0c8c5e] hover:border-b-[#096b48]',
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

      {actions && <div className="flex items-center gap-[0.5rem] ml-auto shrink-0">{actions}</div>}
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
