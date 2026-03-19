import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const variantClasses = {
  text: 'rounded',
  heading: 'rounded w-[40%]',
  card: 'rounded-lg w-full',
  avatar: 'rounded',
  button: 'rounded-lg w-[120px]',
};

const LeapSkeleton = ({ variant = 'text', width, height, count = 1, circle = false, ...rest }) => {
  const items = Array.from({ length: count }, (_, i) => i);

  return (
    <div className="flex flex-col gap-2" {...rest}>
      {items.map((i) => (
        <div
          key={i}
          className={cn(
            'animate-shimmer bg-[length:200%_100%]',
            'bg-gradient-to-r from-border via-white/40 to-border',
            variantClasses[variant],
            circle && 'rounded-full',
            i === count - 1 && variant === 'text' && !width && '!w-[60%]'
          )}
          style={{
            width: circle ? (height || 40) : (width || (variant === 'text' ? '100%' : undefined)),
            height: height || (variant === 'text' ? 14 : variant === 'heading' ? 24 : variant === 'card' ? 120 : 40),
          }}
        />
      ))}
    </div>
  );
};

LeapSkeleton.propTypes = {
  variant: PropTypes.oneOf(['text', 'heading', 'card', 'avatar', 'button']),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  count: PropTypes.number,
  circle: PropTypes.bool,
};

export default LeapSkeleton;
