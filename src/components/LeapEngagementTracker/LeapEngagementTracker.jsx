import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styles from './LeapEngagementTracker.module.scss';

const getTrendIcon = (trend) => {
  switch (trend) {
    case 'up':
      return '▲';
    case 'down':
      return '▼';
    case 'stable':
    default:
      return '●';
  }
};

const getDaysSince = (dateString) => {
  const engagement = new Date(dateString);
  const now = new Date();
  const diffMs = now - engagement;
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
};

const LeapEngagementTracker = ({ stakeholders }) => {
  const sortedStakeholders = useMemo(() => {
    if (!stakeholders || stakeholders.length === 0) return [];
    return [...stakeholders].sort((a, b) => {
      const daysA = getDaysSince(a.lastEngagement);
      const daysB = getDaysSince(b.lastEngagement);
      return daysB - daysA;
    });
  }, [stakeholders]);

  if (!stakeholders || stakeholders.length === 0) {
    return (
      <div className={styles['engagement-tracker']}>
        <p className={styles['engagement-tracker__empty']}>
          No stakeholder data available.
        </p>
      </div>
    );
  }

  return (
    <div className={styles['engagement-tracker']}>
      <h3 className={styles['engagement-tracker__title']}>
        Stakeholder Engagement Tracker
      </h3>
      <div className={styles['engagement-tracker__header']}>
        <span className={styles['engagement-tracker__header-name']}>Name</span>
        <span className={styles['engagement-tracker__header-days']}>Days Since</span>
        <span className={styles['engagement-tracker__header-count']}>Engagements</span>
        <span className={styles['engagement-tracker__header-trend']}>Trend</span>
      </div>
      <ul className={styles['engagement-tracker__list']}>
        {sortedStakeholders.map((stakeholder, index) => {
          const daysSince = getDaysSince(stakeholder.lastEngagement);
          const isStale = daysSince > 30;
          return (
            <li
              key={stakeholder.name + index}
              className={`${styles['engagement-tracker__row']} ${
                isStale ? styles['engagement-tracker__row--stale'] : ''
              }`}
            >
              <span className={styles['engagement-tracker__name']}>
                {stakeholder.name}
              </span>
              <span className={styles['engagement-tracker__days']}>
                {daysSince} {daysSince === 1 ? 'day' : 'days'}
              </span>
              <span className={styles['engagement-tracker__count']}>
                {stakeholder.engagementCount}
              </span>
              <span
                className={`${styles['engagement-tracker__trend']} ${
                  styles[`engagement-tracker__trend--${stakeholder.trend}`]
                }`}
              >
                {getTrendIcon(stakeholder.trend)}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

LeapEngagementTracker.propTypes = {
  stakeholders: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      lastEngagement: PropTypes.string.isRequired,
      engagementCount: PropTypes.number.isRequired,
      trend: PropTypes.oneOf(['up', 'down', 'stable']).isRequired,
    })
  ),
};

LeapEngagementTracker.defaultProps = {
  stakeholders: [],
};

export default LeapEngagementTracker;
