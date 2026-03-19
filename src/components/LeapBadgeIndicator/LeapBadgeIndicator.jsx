import React from 'react';
import PropTypes from 'prop-types';
import styles from './LeapBadgeIndicator.module.scss';

/**
 * LeapBadgeIndicator — A small notification badge, typically used
 * as an overlay on icons or avatars to show unread counts.
 */
const LeapBadgeIndicator = React.forwardRef(function LeapBadgeIndicator(
  { className, count, ...rest },
  ref
) {
  const classNames = [
    styles['leap-badge-indicator'],
    count ? styles['leap-badge-indicator--count'] : '',
    className || '',
  ]
    .filter(Boolean)
    .join(' ');

  const displayCount = count && count > 999 ? '999+' : count;

  return (
    <div className={classNames} ref={ref} {...rest}>
      {displayCount}
    </div>
  );
});

LeapBadgeIndicator.propTypes = {
  className: PropTypes.string,
  /** Numeric count to display. Values above 999 show as "999+". Omit for a dot indicator. */
  count: PropTypes.number,
  id: PropTypes.string,
};

export default LeapBadgeIndicator;
