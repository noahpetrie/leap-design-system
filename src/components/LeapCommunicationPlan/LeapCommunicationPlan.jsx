import React from 'react';
import PropTypes from 'prop-types';
import styles from './LeapCommunicationPlan.module.scss';

const CHANNEL_LABELS = {
  email: 'Email',
  slack: 'Slack',
  meeting: 'Meeting',
  townhall: 'Town Hall',
};

const STATUS_MAP = {
  draft: 'Draft',
  scheduled: 'Scheduled',
  sent: 'Sent',
  cancelled: 'Cancelled',
};

const truncateMessage = (message, maxLength = 80) => {
  if (!message) return '';
  if (message.length <= maxLength) return message;
  return message.substring(0, maxLength).trimEnd() + '…';
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

const LeapCommunicationPlan = ({ communications }) => {
  if (!communications || communications.length === 0) {
    return (
      <div className={styles['communication-plan']}>
        <h3 className={styles['communication-plan__title']}>Communication Plan</h3>
        <p className={styles['communication-plan__empty']}>
          No communications planned yet.
        </p>
      </div>
    );
  }

  return (
    <div className={styles['communication-plan']}>
      <h3 className={styles['communication-plan__title']}>Communication Plan</h3>
      <div className={styles['communication-plan__header']}>
        <span className={styles['communication-plan__header-date']}>Date</span>
        <span className={styles['communication-plan__header-audience']}>Audience</span>
        <span className={styles['communication-plan__header-channel']}>Channel</span>
        <span className={styles['communication-plan__header-message']}>Message</span>
        <span className={styles['communication-plan__header-status']}>Status</span>
      </div>
      <ul className={styles['communication-plan__list']}>
        {communications.map((comm) => (
          <li key={comm.id} className={styles['communication-plan__row']}>
            <span className={styles['communication-plan__date']}>
              {formatDate(comm.date)}
            </span>
            <span className={styles['communication-plan__audience']}>
              <span className={styles['communication-plan__audience-tag']}>
                {comm.audience}
              </span>
            </span>
            <span className={styles['communication-plan__channel']}>
              {CHANNEL_LABELS[comm.channel] || comm.channel}
            </span>
            <span className={styles['communication-plan__message']}>
              {truncateMessage(comm.message)}
            </span>
            <span className={styles['communication-plan__status']}>
              <span
                className={`${styles['communication-plan__status-badge']} ${
                  styles[`communication-plan__status-badge--${comm.status}`]
                }`}
              >
                {STATUS_MAP[comm.status] || comm.status}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

LeapCommunicationPlan.propTypes = {
  communications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      date: PropTypes.string.isRequired,
      audience: PropTypes.string.isRequired,
      channel: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      status: PropTypes.oneOf(['draft', 'scheduled', 'sent', 'cancelled']).isRequired,
    })
  ),
};

LeapCommunicationPlan.defaultProps = {
  communications: [],
};

export default LeapCommunicationPlan;
