import React from 'react';
import PropTypes from 'prop-types';
import styles from './LeapMilestoneTracker.module.scss';

const STATUS_CONFIG = {
  completed: { label: 'Completed', modifier: 'completed' },
  current: { label: 'Current', modifier: 'current' },
  upcoming: { label: 'Upcoming', modifier: 'upcoming' },
  overdue: { label: 'Overdue', modifier: 'overdue' },
};

const LeapMilestoneTracker = ({ milestones }) => {
  if (!milestones || milestones.length === 0) return null;

  return (
    <div className={styles['leap-milestone-tracker']}>
      <ol className={styles['leap-milestone-tracker__list']}>
        {milestones.map((ms, idx) => {
          const config = STATUS_CONFIG[ms.status] || STATUS_CONFIG.upcoming;
          const isLast = idx === milestones.length - 1;

          return (
            <li
              key={ms.title + idx}
              className={`${styles['leap-milestone-tracker__item']} ${styles[`leap-milestone-tracker__item--${config.modifier}`]}`}
            >
              {/* Connector line (not on last item) */}
              {!isLast && (
                <span className={styles['leap-milestone-tracker__connector']} />
              )}

              {/* Dot */}
              <span
                className={`${styles['leap-milestone-tracker__dot']} ${styles[`leap-milestone-tracker__dot--${config.modifier}`]}`}
                aria-hidden="true"
              />

              {/* Content */}
              <div className={styles['leap-milestone-tracker__content']}>
                <div className={styles['leap-milestone-tracker__header']}>
                  <h4 className={styles['leap-milestone-tracker__title']}>
                    {ms.title}
                  </h4>
                  <span
                    className={`${styles['leap-milestone-tracker__badge']} ${styles[`leap-milestone-tracker__badge--${config.modifier}`]}`}
                  >
                    {config.label}
                  </span>
                </div>
                {ms.date && (
                  <time className={styles['leap-milestone-tracker__date']}>
                    {ms.date}
                  </time>
                )}
                {ms.description && (
                  <p className={styles['leap-milestone-tracker__description']}>
                    {ms.description}
                  </p>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

LeapMilestoneTracker.propTypes = {
  /** Array of milestone objects */
  milestones: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string,
      status: PropTypes.oneOf(['completed', 'current', 'upcoming', 'overdue'])
        .isRequired,
      description: PropTypes.string,
    })
  ).isRequired,
};

export default LeapMilestoneTracker;
