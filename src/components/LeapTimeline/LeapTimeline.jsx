import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const dotColorMap = {
  approved: 'bg-primary',
  denied: 'bg-destructive',
  modified: 'bg-blue-500',
  pending: 'bg-gray-400',
  submitted: 'bg-teal-500',
  comment: 'bg-purple-500',
};

const LeapTimeline = ({ events = [], ...rest }) => {
  return (
    <div className="py-2" {...rest}>
      {events.map((event, index) => {
        const dotColor = dotColorMap[event.type] || dotColorMap.comment;
        return (
          <div key={index} className="flex gap-3">
            <div className="flex flex-col items-center w-4 shrink-0">
              <div
                className={cn(
                  'mt-1 h-3 w-3 shrink-0 rounded-full',
                  dotColor
                )}
              />
              {index < events.length - 1 && (
                <div className="w-0.5 flex-1 bg-border min-h-[1rem]" />
              )}
            </div>
            <div className="flex-1 pb-4">
              <div className="flex items-baseline justify-between gap-2 mb-0.5">
                <span className="text-sm font-semibold text-foreground">
                  {event.title}
                </span>
                <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">
                  {event.timestamp}
                </span>
              </div>
              {event.description && (
                <p className="m-0 text-sm text-muted-foreground">
                  {event.description}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

LeapTimeline.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      timestamp: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      type: PropTypes.oneOf([
        'approved',
        'denied',
        'modified',
        'pending',
        'submitted',
        'comment',
      ]),
    })
  ).isRequired,
};

export default LeapTimeline;
