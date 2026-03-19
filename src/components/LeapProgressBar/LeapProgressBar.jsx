import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const trackSizeStyles = {
  sm: 'h-1',
  md: 'h-2',
};

const fillStatusStyles = {
  active: 'bg-primary',
  success: 'bg-green-600',
  error: 'bg-destructive',
};

const LeapProgressBar = ({
  value,
  label,
  helperText,
  showValue = true,
  size = 'md',
  status = 'active',
  indeterminate = false,
  ...rest
}) => {
  const clampedValue = indeterminate ? undefined : Math.min(100, Math.max(0, value ?? 0));

  return (
    <div className="w-full" {...rest}>
      {(label || (showValue && !indeterminate)) && (
        <div className="flex justify-between items-baseline mb-1">
          {label && <span className="text-sm text-foreground">{label}</span>}
          {showValue && !indeterminate && (
            <span className="text-sm text-muted-foreground">{clampedValue}%</span>
          )}
        </div>
      )}
      <div
        className={cn(
          'w-full bg-muted rounded-sm overflow-hidden',
          trackSizeStyles[size]
        )}
        role="progressbar"
        aria-valuenow={indeterminate ? undefined : clampedValue}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label || 'Progress'}
      >
        <div
          className={cn(
            'h-full rounded-sm transition-[width] duration-300 ease-in-out',
            fillStatusStyles[status],
            indeterminate && 'w-[30%] animate-[leap-progress-slide_1.5s_ease-in-out_infinite]'
          )}
          style={indeterminate ? undefined : { width: `${clampedValue}%` }}
        />
      </div>
      {helperText && (
        <span className="text-xs text-muted-foreground mt-1 block">{helperText}</span>
      )}

      {/* Indeterminate animation keyframes */}
      {indeterminate && (
        <style>{`
          @keyframes leap-progress-slide {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(333%); }
          }
        `}</style>
      )}
    </div>
  );
};

LeapProgressBar.propTypes = {
  value: PropTypes.number,
  label: PropTypes.string,
  helperText: PropTypes.string,
  showValue: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md']),
  status: PropTypes.oneOf(['active', 'success', 'error']),
  indeterminate: PropTypes.bool,
};

export default LeapProgressBar;
