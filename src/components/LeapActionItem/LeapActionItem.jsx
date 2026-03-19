import React from 'react';
import PropTypes from 'prop-types';
import styles from './LeapActionItem.module.scss';

const PRIORITY_CONFIG = {
  urgent: { label: 'Urgent', modifier: 'urgent' },
  high: { label: 'High', modifier: 'high' },
  medium: { label: 'Medium', modifier: 'medium' },
  low: { label: 'Low', modifier: 'low' },
};

const STATUS_OPTIONS = [
  { value: 'todo', label: 'To Do' },
  { value: 'in-progress', label: 'In Progress' },
  { value: 'done', label: 'Done' },
];

const getInitials = (name) => {
  if (!name) return '??';
  return name
    .split(' ')
    .map((part) => part.charAt(0).toUpperCase())
    .slice(0, 2)
    .join('');
};

const LeapActionItem = ({
  title,
  assignee,
  dueDate,
  priority = 'medium',
  status = 'todo',
  onStatusChange,
}) => {
  const prioConfig = PRIORITY_CONFIG[priority] || PRIORITY_CONFIG.medium;

  const handleStatusChange = (e) => {
    if (onStatusChange) {
      onStatusChange(e.target.value);
    }
  };

  return (
    <div
      className={`${styles['leap-action-item']} ${
        status === 'done' ? styles['leap-action-item--done'] : ''
      }`}
    >
      {/* Priority bar */}
      <span
        className={`${styles['leap-action-item__priority-bar']} ${styles[`leap-action-item__priority-bar--${prioConfig.modifier}`]}`}
        title={`Priority: ${prioConfig.label}`}
      />

      <div className={styles['leap-action-item__body']}>
        {/* Top row: title + priority tag */}
        <div className={styles['leap-action-item__top']}>
          <h4 className={styles['leap-action-item__title']}>{title}</h4>
          <span
            className={`${styles['leap-action-item__priority-tag']} ${styles[`leap-action-item__priority-tag--${prioConfig.modifier}`]}`}
          >
            {prioConfig.label}
          </span>
        </div>

        {/* Bottom row: assignee, due date, status */}
        <div className={styles['leap-action-item__bottom']}>
          {assignee && (
            <span
              className={styles['leap-action-item__assignee']}
              title={assignee}
            >
              <span className={styles['leap-action-item__initials']}>
                {getInitials(assignee)}
              </span>
              <span className={styles['leap-action-item__assignee-name']}>
                {assignee}
              </span>
            </span>
          )}

          {dueDate && (
            <time className={styles['leap-action-item__due']}>
              {dueDate}
            </time>
          )}

          <select
            className={styles['leap-action-item__status-select']}
            value={status}
            onChange={handleStatusChange}
            aria-label="Change status"
          >
            {STATUS_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

LeapActionItem.propTypes = {
  /** Action item title */
  title: PropTypes.string.isRequired,
  /** Name of the assignee */
  assignee: PropTypes.string,
  /** Due date string */
  dueDate: PropTypes.string,
  /** Priority level */
  priority: PropTypes.oneOf(['urgent', 'high', 'medium', 'low']),
  /** Current status */
  status: PropTypes.oneOf(['todo', 'in-progress', 'done']),
  /** Callback when status changes */
  onStatusChange: PropTypes.func,
};

export default LeapActionItem;
