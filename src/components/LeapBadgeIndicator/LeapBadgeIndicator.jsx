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
        'absolute flex items-center justify-center px-[0.25rem] pb-[0.125rem] rounded-full bg-[#da1e28] text-white text-[0.75rem] leading-[1rem] tracking-[0.32px] top-0 right-0 mt-[0.5rem] mr-[0.5rem] max-h-[1rem] min-h-[0.5rem] min-w-[0.5rem]',
        count && 'mt-[0.25rem] mr-[0.25rem]',
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
