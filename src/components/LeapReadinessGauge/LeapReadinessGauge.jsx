import React from 'react';
import PropTypes from 'prop-types';
import styles from './LeapReadinessGauge.module.scss';

const getBarColor = (value) => {
  if (value >= 70) return 'high';
  if (value >= 40) return 'medium';
  return 'low';
};

const LeapReadinessGauge = ({ overall = 0, categories = [] }) => {
  const clampedOverall = Math.max(0, Math.min(100, overall));
  const overallColor = getBarColor(clampedOverall);

  return (
    <div className={styles['readiness-gauge']}>
      <div className={styles['readiness-gauge__header']}>
        <span className={styles['readiness-gauge__title']}>Overall Readiness</span>
        <span
          className={`${styles['readiness-gauge__percentage']} ${styles[`readiness-gauge__percentage--${overallColor}`]}`}
        >
          {clampedOverall}%
        </span>
      </div>
      <div className={styles['readiness-gauge__bar-track']}>
        <div
          className={`${styles['readiness-gauge__bar-fill']} ${styles[`readiness-gauge__bar-fill--${overallColor}`]}`}
          style={{ width: `${clampedOverall}%` }}
          role="progressbar"
          aria-valuenow={clampedOverall}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Overall readiness: ${clampedOverall}%`}
        />
      </div>

      {categories.length > 0 && (
        <div className={styles['readiness-gauge__categories']}>
          {categories.map((cat) => {
            const value = Math.max(0, Math.min(100, cat.value));
            const color = getBarColor(value);

            return (
              <div key={cat.label} className={styles['readiness-gauge__category']}>
                <div className={styles['readiness-gauge__category-header']}>
                  <span className={styles['readiness-gauge__category-label']}>
                    {cat.label}
                  </span>
                  <span
                    className={`${styles['readiness-gauge__category-value']} ${styles[`readiness-gauge__category-value--${color}`]}`}
                  >
                    {value}%
                  </span>
                </div>
                <div className={styles['readiness-gauge__category-track']}>
                  <div
                    className={`${styles['readiness-gauge__category-fill']} ${styles[`readiness-gauge__category-fill--${color}`]}`}
                    style={{ width: `${value}%` }}
                    role="progressbar"
                    aria-valuenow={value}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${cat.label}: ${value}%`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

LeapReadinessGauge.propTypes = {
  overall: PropTypes.number,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ),
};

export default LeapReadinessGauge;
