import React from 'react';
import PropTypes from 'prop-types';
import styles from './LeapTimeline.module.scss';

const typeClassMap = {
  approved: 'approved',
  denied: 'denied',
  modified: 'modified',
  pending: 'pending',
  submitted: 'submitted',
  comment: 'comment',
};

const LeapTimeline = ({ events = [], ...rest }) => {
  return (
    <div className={styles['timeline']} {...rest}>
      {events.map((event, index) => {
        const typeClass = typeClassMap[event.type] || 'comment';
        return (
          <div key={index} className={styles['timeline-event']}>
            <div className={styles['timeline-line-container']}>
              <div
                className={`${styles['timeline-dot']} ${styles[`timeline-dot--${typeClass}`] || ''}`}
              />
              {index < events.length - 1 && (
                <div className={styles['timeline-line']} />
              )}
            </div>
            <div className={styles['timeline-content']}>
              <div className={styles['timeline-event-header']}>
                <span className={styles['timeline-event-title']}>
                  {event.title}
                </span>
                <span className={styles['timeline-event-timestamp']}>
                  {event.timestamp}
                </span>
              </div>
              {event.description && (
                <p className={styles['timeline-event-description']}>
                  {event.description}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

LeapTimeline.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      timestamp: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      type: PropTypes.oneOf([
        'approved',
        'denied',
        'modified',
        'pending',
        'submitted',
        'comment',
      ]),
    })
  ).isRequired,
};

export default LeapTimeline;
