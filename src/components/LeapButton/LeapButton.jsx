import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const kindClasses = {
  primary:
    'bg-primary text-primary-foreground hover:bg-primary/80 active:bg-primary/70',
  secondary:
    'bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border',
  tertiary:
    'border border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground',
  ghost:
    'bg-transparent text-primary hover:bg-accent',
  danger:
    'bg-destructive text-destructive-foreground hover:bg-destructive/80',
};

const sizeClasses = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-4 text-base',
  xl: 'h-14 px-5 text-base',
  '2xl': 'h-16 px-5 text-lg',
};

const LeapButton = ({
  children,
  kind = 'primary',
  size = 'md',
  disabled,
  renderIcon: Icon,
  className,
  ...rest
}) => {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded font-medium transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        kindClasses[kind],
        sizeClasses[size],
        disabled && 'opacity-50 pointer-events-none',
        className,
      )}
      disabled={disabled}
      {...rest}
    >
      {children}
      {Icon && <Icon className="h-4 w-4" />}
    </button>
  );
};

LeapButton.propTypes = {
  children: PropTypes.node.isRequired,
  kind: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'ghost', 'danger']),
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', '2xl']),
  disabled: PropTypes.bool,
  renderIcon: PropTypes.elementType,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default LeapButton;
