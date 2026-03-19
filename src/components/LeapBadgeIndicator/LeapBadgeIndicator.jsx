import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

/**
 * LeapBadgeIndicator — A small notification badge, typically used
 * as an overlay on icons or avatars to show unread counts.
 */
const LeapBadgeIndicator = React.forwardRef(function LeapBadgeIndicator(
  { className, count, ...rest },
  ref
) {
  const displayCount = count && count > 999 ? '999+' : count;

  return (
    <div
      className={cn(
        'absolute flex items-center justify-center px-1 pb-0.5 rounded-full bg-destructive text-primary-foreground text-xs top-0 right-0 mt-2 mr-2 max-h-4 min-h-2 min-w-2',
        count && 'mt-1 mr-1',
        className,
      )}
      ref={ref}
      {...rest}
    >
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
