import React from 'react';
import PropTypes from 'prop-types';
import styles from './LeapStatCard.module.scss';

const LeapStatCard = ({ label, value, trend, trendDirection, icon: Icon, ...rest }) => {
  return (
    <div className={styles['stat-card']} {...rest}>
      {Icon && (
        <div className={styles['stat-card-icon']}>
          <Icon size={24} />
        </div>
      )}
      <div className={styles['stat-card-content']}>
        <span className={styles['stat-card-value']}>{value}</span>
        <span className={styles['stat-card-label']}>{label}</span>
      </div>
      {trend && (
        <span className={`${styles['stat-card-trend']} ${styles[`stat-card-trend--${trendDirection || 'neutral'}`]}`}>
          {trend}
        </span>
      )}
    </div>
  );
};

LeapStatCard.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  trend: PropTypes.string,
  trendDirection: PropTypes.oneOf(['up', 'down', 'neutral']),
  icon: PropTypes.elementType,
};

export default LeapStatCard;
