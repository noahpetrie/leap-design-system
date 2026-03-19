import React from 'react';
import PropTypes from 'prop-types';
import styles from './LeapCalendar.module.scss';

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

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
    cells.push(<div key={`empty-${i}`} className={styles['calendar-cell-empty']} />);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    const leave = leaveMap[day];
    const isHoliday = holidaySet.has(day);
    const isWeekend = (firstDay + day - 1) % 7 === 0 || (firstDay + day - 1) % 7 === 6;

    let cellClass = styles['calendar-cell'];
    if (leave) cellClass += ` ${styles[`calendar-cell--${leave.status || leave.type}`] || ''}`;
    if (isHoliday) cellClass += ` ${styles['calendar-cell--holiday']}`;
    if (isWeekend) cellClass += ` ${styles['calendar-cell--weekend']}`;

    cells.push(
      <div key={day} className={cellClass} title={leave ? `${leave.type}: ${leave.status || ''}` : isHoliday ? 'Holiday' : ''}>
        <span className={styles['calendar-day']}>{day}</span>
        {leave && <span className={styles['calendar-indicator']}>{leave.type?.[0]}</span>}
        {isHoliday && !leave && <span className={styles['calendar-indicator']}>H</span>}
      </div>
    );
  }

  return (
    <div className={styles['calendar']} {...rest}>
      <div className={styles['calendar-header']}>
        {MONTH_NAMES[month]} {year}
      </div>
      <div className={styles['calendar-grid']}>
        {DAYS_OF_WEEK.map((d) => (
          <div key={d} className={styles['calendar-weekday']}>{d}</div>
        ))}
        {cells}
      </div>
      <div className={styles['calendar-legend']}>
        <span className={styles['calendar-legend-item']}><span className={styles['calendar-legend-dot--vacation']} /> Vacation</span>
        <span className={styles['calendar-legend-item']}><span className={styles['calendar-legend-dot--sick']} /> Sick</span>
        <span className={styles['calendar-legend-item']}><span className={styles['calendar-legend-dot--personal']} /> Personal</span>
        <span className={styles['calendar-legend-item']}><span className={styles['calendar-legend-dot--holiday']} /> Holiday</span>
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
