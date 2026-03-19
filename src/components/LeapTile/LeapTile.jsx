import React from 'react';
import PropTypes from 'prop-types';
import { ChevronDown, Checkmark } from '@carbon/icons-react';
import { cn } from '../../lib/utils';

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
      className={cn(
        'w-full rounded-lg border border-border bg-card p-4 text-left text-sm text-foreground',
        light && 'bg-muted',
        disabled && 'pointer-events-none opacity-50',
        isClickable && 'cursor-pointer transition-[box-shadow,border-color] duration-150 hover:shadow-md hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        isSelectable && 'cursor-pointer transition-[border-color,background-color] duration-150 hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        isExpandable && 'cursor-pointer transition-[border-color] duration-150 hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        selected && isSelectable && 'border-primary bg-primary/10'
      )}
      onClick={isInteractive ? handleClick : undefined}
      type={isInteractive ? 'button' : undefined}
      disabled={isInteractive ? disabled : undefined}
      aria-expanded={isExpandable ? expanded : undefined}
      aria-pressed={isSelectable ? selected : undefined}
      {...rest}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">{children}</div>
        {isSelectable && (
          <span
            className={cn(
              'flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-border transition-[border-color,background-color,color] duration-150',
              selected && 'border-primary bg-primary text-white'
            )}
          >
            <Checkmark size={16} className={cn(!selected && 'text-transparent')} />
          </span>
        )}
        {isExpandable && (
          <span
            className={cn(
              'flex shrink-0 items-center justify-center text-muted-foreground transition-transform duration-200',
              expanded && 'rotate-180'
            )}
          >
            <ChevronDown size={16} />
          </span>
        )}
      </div>
      {isExpandable && expanded && expandedContent && (
        <div className="mt-3 border-t border-border pt-3 text-sm text-muted-foreground">
          {expandedContent}
        </div>
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
