import React from 'react';
import PropTypes from 'prop-types';
import {
  SkeletonText,
  SkeletonIcon,
  SkeletonPlaceholder,
} from '@carbon/react';

/* AI shimmer style — matches the original SCSS @mixin ai-shimmer */
const aiShimmerStyle = {
  background: 'linear-gradient(90deg, #e6f4ee 0%, rgba(12,140,94,0.12) 40%, #e6f4ee 60%, rgba(12,140,94,0.12) 100%)',
  backgroundSize: '200% 100%',
  animation: 'leap-ai-shimmer 2s ease-in-out infinite',
};

/**
 * LeapAISkeletonText — A skeleton text loader with an AI shimmer effect.
 */
export const LeapAISkeletonText = ({ className, style, ...rest }) => {
  return (
    <SkeletonText
      className={className}
      style={{ ...aiShimmerStyle, ...style }}
      {...rest}
    />
  );
};

LeapAISkeletonText.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.bool,
  lineCount: PropTypes.number,
  paragraph: PropTypes.bool,
  style: PropTypes.object,
  width: PropTypes.string,
};

/**
 * LeapAISkeletonIcon — A skeleton icon loader with AI shimmer.
 */
export const LeapAISkeletonIcon = ({ className, style, ...rest }) => {
  return (
    <SkeletonIcon
      className={className}
      style={{ ...aiShimmerStyle, borderRadius: '50%', ...style }}
      {...rest}
    />
  );
};

LeapAISkeletonIcon.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

/**
 * LeapAISkeletonPlaceholder — A skeleton placeholder block with AI shimmer.
 */
export const LeapAISkeletonPlaceholder = ({ className, style, ...rest }) => {
  return (
    <SkeletonPlaceholder
      className={className}
      style={{ ...aiShimmerStyle, borderRadius: '8px', ...style }}
      {...rest}
    />
  );
};

LeapAISkeletonPlaceholder.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

const LeapAISkeleton = {
  Text: LeapAISkeletonText,
  Icon: LeapAISkeletonIcon,
  Placeholder: LeapAISkeletonPlaceholder,
};

export default LeapAISkeleton;
