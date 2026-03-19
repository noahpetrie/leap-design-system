import React from 'react';
import PropTypes from 'prop-types';
import { Undo } from '@carbon/icons-react';
import { cn } from '../../lib/utils';

/**
 * LeapAILabelContent — Renders the popover body content for LeapAILabel.
 */
export const LeapAILabelContent = ({ className, children }) => {
  return (
    <div className={cn('p-4 text-sm max-w-[320px]', className)}>
      {children}
    </div>
  );
};

LeapAILabelContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

/**
 * LeapAILabelActions — Renders the popover toolbar/actions for LeapAILabel.
 */
export const LeapAILabelActions = ({ className, children }) => {
  return (
    <div className={cn('flex gap-2 px-4 py-2 border-t border-border', className)}>
      {children}
    </div>
  );
};

LeapAILabelActions.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const sizeClasses = {
  mini: 'px-1 rounded-md text-[0.625rem] leading-4',
  '2xs': 'px-1 py-0.5 rounded-lg text-[0.6875rem] leading-4',
  xs: 'px-2 py-0.5 rounded-[10px] text-xs',
  sm: 'px-2 py-1 rounded-xl',
  md: 'px-3 py-1 rounded-[14px] text-sm font-semibold',
  lg: 'px-4 py-2 rounded-2xl text-sm font-semibold',
  xl: 'px-4 py-2 rounded-[18px] text-sm font-semibold',
};

/**
 * LeapAILabel — An AI indicator badge with a popover,
 * used to mark AI-generated or AI-assisted content in the Leap platform.
 */
const LeapAILabel = React.forwardRef(function LeapAILabel(
  {
    aiText = 'AI',
    textLabel,
    align,
    autoAlign = true,
    children,
    className,
    kind = 'default',
    onRevertClick,
    revertActive,
    revertLabel = 'Revert to AI input',
    size = 'xs',
    ...rest
  },
  ref
) {
  const isInline = kind === 'inline';

  const buttonClasses = cn(
    'inline-flex items-center gap-1 border-none cursor-pointer text-xs font-semibold transition-shadow duration-150 ease-out',
    !isInline && 'bg-gradient-to-br from-primary to-primary/80 text-primary-foreground tracking-[0.02em] hover:shadow-[0_2px_8px_rgba(12,140,94,0.35)] active:scale-[0.96]',
    !isInline && sizeClasses[size],
    isInline && 'bg-transparent text-primary font-semibold p-0 rounded-none border-b border-dashed border-primary hover:text-primary/80 hover:border-primary/80 hover:shadow-none',
    isInline && textLabel && 'gap-1',
  );

  const ariaLabelText = !textLabel
    ? `${aiText} Show information`
    : `${aiText} ${textLabel}`;

  return (
    <div
      className={cn('inline-flex items-center', revertActive && '[&_button]:text-primary', className)}
      ref={ref}
    >
      {revertActive ? (
        <button
          onClick={onRevertClick}
          className="inline-flex items-center justify-center rounded-md p-2 text-primary hover:bg-accent"
          title={revertLabel}
          aria-label={revertLabel}
          {...rest}
        >
          <Undo />
        </button>
      ) : (
        <div className="relative inline-flex" {...rest}>
          <button
            className={buttonClasses}
            aria-label={isInline ? undefined : ariaLabelText}
          >
            <span className="tracking-[0.02em]">{aiText}</span>
            {isInline && textLabel && (
              <span className="opacity-85 text-xs font-medium">{textLabel}</span>
            )}
          </button>
          {children}
        </div>
      )}
    </div>
  );
});

LeapAILabel.propTypes = {
  /** Text shown on the AI badge */
  aiText: PropTypes.string,
  /** Popover alignment relative to the trigger */
  align: PropTypes.oneOf([
    'top', 'top-start', 'top-end',
    'bottom', 'bottom-start', 'bottom-end',
    'left', 'left-start', 'left-end',
    'right', 'right-start', 'right-end',
  ]),
  /** Auto-align popover if not visible */
  autoAlign: PropTypes.bool,
  /** Popover body content (use LeapAILabelContent and LeapAILabelActions) */
  children: PropTypes.node,
  /** Additional CSS class */
  className: PropTypes.string,
  /** Label style: default badge or inline text */
  kind: PropTypes.oneOf(['default', 'inline']),
  /** Callback when the revert button is clicked */
  onRevertClick: PropTypes.func,
  /** Show the revert/undo button instead of the AI badge */
  revertActive: PropTypes.bool,
  /** Tooltip text for the revert button */
  revertLabel: PropTypes.string,
  /** Badge size */
  size: PropTypes.oneOf(['mini', '2xs', 'xs', 'sm', 'md', 'lg', 'xl']),
  /** Additional inline text next to the AI label */
  textLabel: PropTypes.string,
};

export default LeapAILabel;
