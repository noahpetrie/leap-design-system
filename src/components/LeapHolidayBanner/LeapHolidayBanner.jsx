import React from 'react';
import PropTypes from 'prop-types';
import { Calendar } from '@carbon/icons-react';

const LeapHolidayBanner = ({ holidayName, date, daysUntil, onDismiss, ...rest }) => {
  return (
    <div
      className="flex items-center gap-3 bg-[#f0faf5] border border-[#c6e8d9] rounded px-4 py-3"
      {...rest}
    >
      <div className="text-primary shrink-0">
        <Calendar size={20} />
      </div>
      <div className="flex flex-col flex-1">
        <span className="text-sm font-semibold text-foreground">{holidayName}</span>
        <span className="text-xs font-medium text-muted-foreground">
          {date}
          {daysUntil !== undefined && ` — ${daysUntil === 0 ? 'Today' : `in ${daysUntil} day${daysUntil !== 1 ? 's' : ''}`}`}
        </span>
      </div>
      {onDismiss && (
        <button
          className="bg-transparent border-none text-xl text-muted-foreground cursor-pointer p-1 leading-none hover:text-foreground"
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
