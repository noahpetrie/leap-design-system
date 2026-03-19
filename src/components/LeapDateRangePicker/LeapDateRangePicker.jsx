import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

const LeapDateRangePicker = ({
  startLabel = 'Start date',
  endLabel = 'End date',
  onChange,
  ...rest
}) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const startRef = useRef(null);
  const endRef = useRef(null);

  const handleStartChange = (e) => {
    const value = e.target.value;
    setStartDate(value);
    onChange?.([value, endDate]);
  };

  const handleEndChange = (e) => {
    const value = e.target.value;
    setEndDate(value);
    onChange?.([startDate, value]);
  };

  return (
    <div className="flex gap-4" {...rest}>
      <div className="flex flex-col gap-1">
        <label htmlFor="leap-date-start" className="text-xs font-medium text-foreground">
          {startLabel}
        </label>
        <input
          ref={startRef}
          id="leap-date-start"
          type="date"
          value={startDate}
          onChange={handleStartChange}
          placeholder="mm/dd/yyyy"
          className="rounded border border-border bg-muted px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="leap-date-end" className="text-xs font-medium text-foreground">
          {endLabel}
        </label>
        <input
          ref={endRef}
          id="leap-date-end"
          type="date"
          value={endDate}
          onChange={handleEndChange}
          placeholder="mm/dd/yyyy"
          className="rounded border border-border bg-muted px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>
    </div>
  );
};

LeapDateRangePicker.propTypes = {
  startLabel: PropTypes.string,
  endLabel: PropTypes.string,
  onChange: PropTypes.func,
};

export default LeapDateRangePicker;
