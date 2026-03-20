import React from 'react';
import PropTypes from 'prop-types';
import { Calendar } from '@carbon/icons-react';
import { cn } from '../../lib/utils';

const LeapHolidayBanner = ({ holidayName, date, daysUntil, onDismiss, ...rest }) => {
  return (
    <div
      className="flex items-center gap-[0.75rem] bg-[#f0faf5] border border-[#c6e8d9] rounded-[4px] px-[1rem] py-[0.75rem]"
      {...rest}
    >
      <div className="text-[#0c8c5e] shrink-0">
        <Calendar size={20} />
      </div>
      <div className="flex flex-col flex-1">
        <span className="text-[14px] font-semibold tracking-[0.16px] text-[#161616]">{holidayName}</span>
        <span className="text-[12px] tracking-[0.32px] text-[#525252]">
          {date}
          {daysUntil !== undefined && ` — ${daysUntil === 0 ? 'Today' : `in ${daysUntil} day${daysUntil !== 1 ? 's' : ''}`}`}
        </span>
      </div>
      {onDismiss && (
        <button
          className="bg-transparent border-none text-[20px] text-[#525252] cursor-pointer p-[0.25rem] leading-none hover:text-[#161616]"
          onClick={onDismiss}
          aria-label="Dismiss"
        >
          &times;
        </button>
      )}
    </div>
  );
};

LeapHolidayBanner.propTypes = {
  holidayName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  daysUntil: PropTypes.number,
  onDismiss: PropTypes.func,
};

export default LeapHolidayBanner;
