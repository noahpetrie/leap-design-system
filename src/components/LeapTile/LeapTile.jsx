import React from 'react';
import PropTypes from 'prop-types';
import { ChevronDown, Checkmark } from '@carbon/react/icons';
import styles from './LeapTile.module.scss';

const LeapTile = ({
  variant = 'default',
  children,
  selected = false,
  onSelect,
  expanded = false,
  onToggle,
  expandedContent,
  onClick,
  disabled = false,
  light = false,
  ...rest
}) => {
  const isClickable = variant === 'clickable';
  const isSelectable = variant === 'selectable';
  const isExpandable = variant === 'expandable';

  const classNames = [
    styles['tile'],
    styles[`tile--${variant}`],
    selected && isSelectable ? styles['tile--selected'] : '',
    expanded && isExpandable ? styles['tile--expanded'] : '',
    disabled ? styles['tile--disabled'] : '',
    light ? styles['tile--light'] : '',
  ]
    .filter(Boolean)
    .join(' ');

  const handleClick = () => {
    if (disabled) return;
    if (isClickable && onClick) onClick();
    if (isSelectable && onSelect) onSelect(!selected);
    if (isExpandable && onToggle) onToggle(!expanded);
  };

  const isInteractive = isClickable || isSelectable || isExpandable;
  const Tag = isInteractive ? 'button' : 'div';

  return (
    <Tag
      className={classNames}
      onClick={isInteractive ? handleClick : undefined}
      type={isInteractive ? 'button' : undefined}
      disabled={isInteractive ? disabled : undefined}
      aria-expanded={isExpandable ? expanded : undefined}
      aria-pressed={isSelectable ? selected : undefined}
      {...rest}
    >
      <div className={styles['tile-content']}>
        <div className={styles['tile-body']}>{children}</div>
        {isSelectable && (
          <span className={styles['tile-checkmark']}>
            <Checkmark size={16} />
          </span>
        )}
        {isExpandable && (
          <span className={styles['tile-chevron']}>
            <ChevronDown size={16} />
          </span>
        )}
      </div>
      {isExpandable && expanded && expandedContent && (
        <div className={styles['tile-expanded']}>{expandedContent}</div>
      )}
    </Tag>
  );
};

LeapTile.propTypes = {
  variant: PropTypes.oneOf(['default', 'clickable', 'selectable', 'expandable']),
  children: PropTypes.node,
  selected: PropTypes.bool,
  onSelect: PropTypes.func,
  expanded: PropTypes.bool,
  onToggle: PropTypes.func,
  expandedContent: PropTypes.node,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  light: PropTypes.bool,
};

export default LeapTile;
