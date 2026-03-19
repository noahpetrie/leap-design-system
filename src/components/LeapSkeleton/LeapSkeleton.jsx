import React from 'react';
import PropTypes from 'prop-types';
import styles from './LeapSkeleton.module.scss';

const LeapSkeleton = ({ variant = 'text', width, height, count = 1, circle = false, ...rest }) => {
  const items = Array.from({ length: count }, (_, i) => i);

  return (
    <div className={styles['skeleton-container']} {...rest}>
      {items.map((i) => (
        <div
          key={i}
          className={`${styles['skeleton']} ${styles[`skeleton--${variant}`]} ${circle ? styles['skeleton--circle'] : ''}`}
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
