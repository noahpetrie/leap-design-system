import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const trackSizeStyles = {
  sm: 'h-1',
  md: 'h-2',
};

const fillStatusStyles = {
  active: 'bg-[#0c8c5e]',
  success: 'bg-[#24a148]',
  error: 'bg-[#da1e28]',
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
          {label && <span className="text-[14px] tracking-[0.16px] text-[#161616]">{label}</span>}
          {showValue && !indeterminate && (
            <span className="text-[14px] tracking-[0.16px] text-[#525252]">{clampedValue}%</span>
          )}
        </div>
      )}
      <div
        className={cn(
          'w-full bg-[#e0e0e0] rounded-sm overflow-hidden',
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
        <span className="text-[12px] tracking-[0.32px] text-[#6f6f6f] mt-1 block">{helperText}</span>
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
