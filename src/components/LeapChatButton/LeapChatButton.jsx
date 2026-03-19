import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const sizeClasses = {
  sm: 'h-8 px-3 text-xs',
  md: 'h-9 px-4 text-sm',
  lg: 'h-11 px-5 text-sm',
};

const kindClasses = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/80',
  secondary: 'bg-muted text-foreground hover:bg-accent',
  danger: 'bg-destructive text-primary-foreground hover:bg-destructive/80',
  ghost: 'bg-transparent text-foreground hover:bg-accent',
  tertiary: 'border border-primary text-primary bg-transparent hover:bg-primary/10',
};

/**
 * LeapChatButton — A chat-optimized button with quick-action support,
 * themed with Leap brand colors.
 */
const LeapChatButton = React.forwardRef(function LeapChatButton(
  {
    className,
    children,
    kind = 'primary',
    size = 'md',
    disabled = false,
    isQuickAction = false,
    isSelected = false,
    renderIcon: Icon,
    onClick,
    ...rest
  },
  ref
) {
  return (
    <button
      ref={ref}
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'inline-flex items-center justify-center gap-1.5 rounded font-medium transition-colors duration-150',
        'focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        isQuickAction
          ? cn(
              'bg-transparent text-foreground border border-border hover:bg-accent rounded-full px-3 py-1 text-xs',
              isSelected && 'bg-primary text-primary-foreground border-primary hover:bg-primary/80'
            )
          : cn(sizeClasses[size], kindClasses[kind]),
        className
      )}
      {...rest}
    >
      {Icon && <Icon size={size === 'sm' ? 14 : 16} />}
      {children}
    </button>
  );
});

LeapChatButton.propTypes = {
  /** Button content */
  children: PropTypes.node,
  /** Additional CSS class */
  className: PropTypes.string,
  /** Whether the button is disabled */
  disabled: PropTypes.bool,
  /** Render as a quick-action button (compact, ghost style) */
  isQuickAction: PropTypes.bool,
  /** Whether the quick-action button is in a selected state */
  isSelected: PropTypes.bool,
  /** Button variant */
  kind: PropTypes.oneOf(['primary', 'secondary', 'danger', 'ghost', 'tertiary']),
  /** Icon component to render */
  renderIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /** Button size */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** Click handler */
  onClick: PropTypes.func,
};

export default LeapChatButton;
