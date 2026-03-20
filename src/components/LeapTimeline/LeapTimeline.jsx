import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const dotColorMap = {
  approved: 'bg-[#0c8c5e]',
  denied: 'bg-[#da1e28]',
  modified: 'bg-[#4589ff]',
  pending: 'bg-[#8d8d8d]',
  submitted: 'bg-[#009d9a]',
  comment: 'bg-[#8a3ffc]',
};

const LeapTimeline = ({ events = [], ...rest }) => {
  return (
    <div className="py-2" {...rest}>
      {events.map((event, index) => {
        const dotColor = dotColorMap[event.type] || dotColorMap.comment;
        return (
          <div key={index} className="flex gap-4">
            <div className="flex flex-col items-center w-4 shrink-0">
              <div
                className={cn(
                  'mt-1 h-3 w-3 shrink-0 rounded-full',
                  dotColor
                )}
              />
              {index < events.length - 1 && (
                <div className="w-0.5 flex-1 bg-[#e0e0e0] min-h-[1rem]" />
              )}
            </div>
            <div className="flex-1 pb-4">
              <div className="flex items-baseline justify-between gap-2 mb-1">
                <span className="text-[14px] font-semibold leading-[18px] tracking-[0.16px] text-[#161616]">
                  {event.title}
                </span>
                <span className="text-[12px] leading-[16px] tracking-[0.32px] text-[#525252] whitespace-nowrap">
                  {event.timestamp}
                </span>
              </div>
              {event.description && (
                <p className="m-0 text-[14px] leading-[18px] tracking-[0.16px] text-[#525252]">
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
