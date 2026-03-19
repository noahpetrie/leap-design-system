import React from 'react';
import PropTypes from 'prop-types';
import {
  SkeletonText,
  SkeletonIcon,
  SkeletonPlaceholder,
} from '@carbon/react';
import styles from './LeapAISkeleton.module.scss';

/**
 * LeapAISkeletonText — A skeleton text loader with an AI shimmer effect,
 * indicating that AI-generated content is being loaded.
 */
export const LeapAISkeletonText = ({ className, ...rest }) => {
  return (
    <SkeletonText
      className={[styles['leap-ai-skeleton-text'], className].filter(Boolean).join(' ')}
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
    <SkeletonIcon
      className={[styles['leap-ai-skeleton-icon'], className].filter(Boolean).join(' ')}
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
    <SkeletonPlaceholder
      className={[styles['leap-ai-skeleton-placeholder'], className].filter(Boolean).join(' ')}
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
