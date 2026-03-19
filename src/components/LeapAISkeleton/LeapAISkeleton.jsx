import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const shimmerClasses =
  'animate-leap-ai-shimmer bg-[length:200%_100%] bg-[linear-gradient(90deg,#e6f4ee_0%,rgba(12,140,94,0.12)_40%,#e6f4ee_60%,rgba(12,140,94,0.12)_100%)]';

/**
 * LeapAISkeletonText — A skeleton text loader with an AI shimmer effect,
 * indicating that AI-generated content is being loaded.
 */
export const LeapAISkeletonText = ({
  className,
  heading,
  lineCount = 3,
  paragraph,
  width = '100%',
  ...rest
}) => {
  if (paragraph) {
    return (
      <div className={cn('space-y-2', className)} {...rest}>
        {Array.from({ length: lineCount }).map((_, i) => (
          <div
            key={i}
            className={cn(
              shimmerClasses,
              heading ? 'h-6 rounded' : 'h-4 rounded',
            )}
            style={{ width: i === lineCount - 1 ? '80%' : width }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(
        shimmerClasses,
        heading ? 'h-6 rounded' : 'h-4 rounded',
        className,
      )}
      style={{ width }}
      {...rest}
    />
  );
};

LeapAISkeletonText.propTypes = {
  className: PropTypes.string,
  /** Larger heading-sized skeleton text */
  heading: PropTypes.bool,
  /** Number of lines when paragraph is true */
  lineCount: PropTypes.number,
  /** Generate multiple lines */
  paragraph: PropTypes.bool,
  /** Width of the text line(s) */
  width: PropTypes.string,
};

/**
 * LeapAISkeletonIcon — A skeleton icon loader with AI shimmer.
 */
export const LeapAISkeletonIcon = ({ className, style, ...rest }) => {
  return (
    <div
      className={cn(shimmerClasses, 'w-4 h-4 rounded-full', className)}
      style={style}
      {...rest}
    />
  );
};

LeapAISkeletonIcon.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

/**
 * LeapAISkeletonPlaceholder — A skeleton placeholder block with AI shimmer,
 * for larger content areas like cards or images.
 */
export const LeapAISkeletonPlaceholder = ({ className, ...rest }) => {
  return (
    <div
      className={cn(shimmerClasses, 'w-full h-24 rounded-lg', className)}
      {...rest}
    />
  );
};

LeapAISkeletonPlaceholder.propTypes = {
  className: PropTypes.string,
};

/**
 * Default export for convenience.
 */
const LeapAISkeleton = {
  Text: LeapAISkeletonText,
  Icon: LeapAISkeletonIcon,
  Placeholder: LeapAISkeletonPlaceholder,
};

export default LeapAISkeleton;
