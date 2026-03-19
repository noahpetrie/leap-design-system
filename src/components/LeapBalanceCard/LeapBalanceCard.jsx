import React from 'react';
import PropTypes from 'prop-types';
import styles from './LeapBalanceCard.module.scss';

const LeapBalanceCard = ({ leaveType, used, total, unit = 'days', ...rest }) => {
  const remaining = total - used;
  const percentage = total > 0 ? (used / total) * 100 : 0;
  const isLow = percentage >= 80;

  return (
    <div className={styles['balance-card']} {...rest}>
      <div className={styles['balance-card-header']}>
        <span className={styles['balance-card-type']}>{leaveType}</span>
        <span className={styles['balance-card-remaining']}>
          {remaining} {unit} remaining
        </span>
      </div>
      <div className={styles['balance-card-bar-track']}>
        <div
          className={`${styles['balance-card-bar-fill']} ${isLow ? styles['balance-card-bar-fill--low'] : ''}`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>
      <div className={styles['balance-card-footer']}>
        <span>{used} {unit} used</span>
        <span>{total} {unit} total</span>
      </div>
    </div>
  );
};

LeapBalanceCard.propTypes = {
  leaveType: PropTypes.string.isRequired,
  used: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  unit: PropTypes.oneOf(['days', 'hours']),
};

export default LeapBalanceCard;
