import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

const statusBgMap = {
  Vacation: 'bg-[#f0faf5]',
  approved: 'bg-[#f0faf5]',
  Sick: 'bg-[#edf5ff]',
  sick: 'bg-[#edf5ff]',
  Personal: 'bg-[#f6f2ff]',
  personal: 'bg-[#f6f2ff]',
};

const LeapCalendar = ({
  month = new Date().getMonth(),
  year = new Date().getFullYear(),
  leaveDays = [],
  holidays = [],
  ...rest
}) => {
  const daysInMonth = getDaysInMonth(month, year);
  const firstDay = getFirstDayOfMonth(month, year);

  const leaveMap = {};
  leaveDays.forEach((ld) => {
    const d = new Date(ld.date).getDate();
    leaveMap[d] = ld;
  });

  const holidaySet = new Set(holidays.map((h) => new Date(h).getDate()));

  const cells = [];
  for (let i = 0; i < firstDay; i++) {
    cells.push(<div key={`empty-${i}`} className="aspect-square" />);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    const leave = leaveMap[day];
    const isHoliday = holidaySet.has(day);
    const isWeekend = (firstDay + day - 1) % 7 === 0 || (firstDay + day - 1) % 7 === 6;

    const statusKey = leave ? (leave.status || leave.type) : null;

    cells.push(
      <div
        key={day}
        className={cn(
          'aspect-square flex flex-col items-center justify-center rounded cursor-default relative',
          isWeekend && 'bg-border',
          statusKey && statusBgMap[statusKey],
          isHoliday && 'bg-[#fff1f1]'
        )}
        title={leave ? `${leave.type}: ${leave.status || ''}` : isHoliday ? 'Holiday' : ''}
      >
        <span className="text-sm text-foreground">{day}</span>
        {leave && <span className="text-[9px] font-medium text-muted-foreground">{leave.type?.[0]}</span>}
        {isHoliday && !leave && <span className="text-[9px] font-medium text-muted-foreground">H</span>}
      </div>
    );
  }

  return (
    <div className="border border-border rounded bg-card p-4 max-w-[420px]" {...rest}>
      <div className="text-sm font-semibold text-foreground text-center mb-3">
        {MONTH_NAMES[month]} {year}
      </div>
      <div className="grid grid-cols-7 gap-0.5">
        {DAYS_OF_WEEK.map((d) => (
          <div key={d} className="text-xs font-medium text-muted-foreground text-center p-1">{d}</div>
        ))}
        {cells}
      </div>
      <div className="flex gap-4 mt-3 flex-wrap">
        <span className="text-xs font-medium text-muted-foreground flex items-center gap-1">
          <span className="w-2 h-2 rounded-full inline-block bg-primary" /> Vacation
        </span>
        <span className="text-xs font-medium text-muted-foreground flex items-center gap-1">
          <span className="w-2 h-2 rounded-full inline-block bg-[#4589ff]" /> Sick
        </span>
        <span className="text-xs font-medium text-muted-foreground flex items-center gap-1">
          <span className="w-2 h-2 rounded-full inline-block bg-[#8a3ffc]" /> Personal
        </span>
        <span className="text-xs font-medium text-muted-foreground flex items-center gap-1">
          <span className="w-2 h-2 rounded-full inline-block bg-[#da1e28]" /> Holiday
        </span>
      </div>
    </div>
  );
};

LeapCalendar.propTypes = {
  month: PropTypes.number,
  year: PropTypes.number,
  leaveDays: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      status: PropTypes.string,
    })
  ),
  holidays: PropTypes.arrayOf(PropTypes.string),
};

export default LeapCalendar;
