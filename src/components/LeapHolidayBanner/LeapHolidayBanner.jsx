import React from 'react';
import PropTypes from 'prop-types';
import { Calendar } from '@carbon/react/icons';
import styles from './LeapHolidayBanner.module.scss';

const LeapHolidayBanner = ({ holidayName, date, daysUntil, onDismiss, ...rest }) => {
  return (
    <div className={styles['holiday-banner']} {...rest}>
      <div className={styles['holiday-banner-icon']}>
        <Calendar size={20} />
      </div>
      <div className={styles['holiday-banner-content']}>
        <span className={styles['holiday-banner-name']}>{holidayName}</span>
        <span className={styles['holiday-banner-date']}>
          {date}
          {daysUntil !== undefined && ` — ${daysUntil === 0 ? 'Today' : `in ${daysUntil} day${daysUntil !== 1 ? 's' : ''}`}`}
        </span>
      </div>
      {onDismiss && (
        <button className={styles['holiday-banner-dismiss']} onClick={onDismiss} aria-label="Dismiss">
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
