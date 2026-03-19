import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from '@carbon/react/icons';
import styles from './LeapHeader.module.scss';

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
    <header className={styles['header']} {...rest}>
      <div className={styles['header-left']}>
        {onMenuClick && (
          <button
            className={styles['header-menu-btn']}
            type="button"
            aria-label="Open menu"
            onClick={onMenuClick}
          >
            <Menu size={20} />
          </button>
        )}
        {logo || (logoSrc && (
          <img className={styles['header-logo']} src={logoSrc} alt={`${appName} logo`} />
        ))}
        <span className={styles['header-app-name']}>{appName}</span>
      </div>

      {navItems.length > 0 && (
        <nav className={styles['header-nav']} aria-label="Main navigation">
          {navItems.map((item) => {
            const Element = item.href ? 'a' : 'button';
            return (
              <Element
                key={item.id}
                className={`${styles['header-nav-item']} ${item.isActive ? styles['header-nav-item--active'] : ''}`}
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

      {actions && <div className={styles['header-actions']}>{actions}</div>}
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
