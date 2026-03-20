import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

/*
 * Carbon-faithful button styles.
 * Colors: primary uses Leap green (#0c8c5e) instead of Carbon blue.
 * All other visual characteristics match IBM Carbon's <Button>.
 */

const kindClasses = {
  primary:
    'bg-[#0c8c5e] text-white hover:bg-[#096b48] active:bg-[#054a32]',
  secondary:
    'bg-[#393939] text-white hover:bg-[#4c4c4c] active:bg-[#6f6f6f]',
  tertiary:
    'bg-transparent text-[#0c8c5e] border border-[#0c8c5e] hover:bg-[#0c8c5e] hover:text-white active:bg-[#054a32] active:text-white',
  ghost:
    'bg-transparent text-[#0c8c5e] hover:bg-[#e8e8e8] active:bg-[#c6c6c6]',
  danger:
    'bg-[#da1e28] text-white hover:bg-[#ba1b23] active:bg-[#750e13]',
};

const sizeClasses = {
  sm: 'min-h-[32px] py-[6px] px-4',
  md: 'min-h-[40px] py-[11px] px-4',
  lg: 'min-h-[48px] py-[14px] px-4',
  xl: 'min-h-[64px] py-[14px] px-4 items-start',
  '2xl': 'min-h-[80px] py-[14px] px-4 items-start',
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
        // Carbon button base styles
        'relative inline-flex items-center text-[0.875rem] leading-[1.29] tracking-[0.16px] font-normal',
        'rounded-none border-0 cursor-pointer',
        'outline-none transition-all duration-100',
        // Carbon focus: inset 1px white + 2px outer border
        'focus:border-[#0c8c5e] focus:shadow-[inset_0_0_0_1px_#ffffff,0_0_0_2px_#0c8c5e]',
        kindClasses[kind],
        sizeClasses[size],
        // Carbon disabled: flat gray, not opacity
        disabled && 'bg-[#c6c6c6] text-[#8d8d8d] border-none shadow-none cursor-not-allowed hover:bg-[#c6c6c6] active:bg-[#c6c6c6]',
        className,
      )}
      disabled={disabled}
      {...rest}
    >
      <span className="flex-1 text-left">{children}</span>
      {Icon && <Icon className="ml-4 h-4 w-4 shrink-0" />}
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

/*
 * Carbon-faithful icon-only button.
 * Matches IBM Carbon's <IconButton>: square, icon-centered, with tooltip label.
 */

const iconSizeClasses = {
  sm: 'w-[32px] h-[32px]',
  md: 'w-[40px] h-[40px]',
  lg: 'w-[48px] h-[48px]',
};

const iconInnerSize = {
  sm: 16,
  md: 16,
  lg: 20,
};

export const LeapIconButton = ({
  label,
  renderIcon: Icon,
  kind = 'primary',
  size = 'md',
  disabled,
  className,
  ...rest
}) => {
  return (
    <button
      className={cn(
        'relative inline-flex items-center justify-center',
        'rounded-none border-0 cursor-pointer',
        'outline-none transition-all duration-100',
        'focus:border-[#0c8c5e] focus:shadow-[inset_0_0_0_1px_#ffffff,0_0_0_2px_#0c8c5e]',
        kindClasses[kind],
        iconSizeClasses[size],
        disabled && 'bg-[#c6c6c6] text-[#8d8d8d] border-none shadow-none cursor-not-allowed hover:bg-[#c6c6c6] active:bg-[#c6c6c6]',
        className,
      )}
      disabled={disabled}
      aria-label={label}
      title={label}
      {...rest}
    >
      {Icon && <Icon size={iconInnerSize[size]} />}
    </button>
  );
};

LeapIconButton.propTypes = {
  /** Accessible label (shown as tooltip on hover) */
  label: PropTypes.string.isRequired,
  /** Carbon icon component to render */
  renderIcon: PropTypes.elementType.isRequired,
  kind: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'ghost', 'danger']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default LeapButton;
