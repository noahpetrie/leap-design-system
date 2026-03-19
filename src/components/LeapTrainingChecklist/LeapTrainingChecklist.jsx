import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styles from './LeapTrainingChecklist.module.scss';

const getInitials = (name) => {
  if (!name) return '?';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const isOverdue = (dueDateString) => {
  const due = new Date(dueDateString);
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return due < now;
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

const LeapTrainingChecklist = ({ items, onToggle }) => {
  const completedCount = useMemo(() => {
    if (!items) return 0;
    return items.filter((item) => item.completed).length;
  }, [items]);

  const totalCount = items ? items.length : 0;
  const progressPercent = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  if (!items || items.length === 0) {
    return (
      <div className={styles['training-checklist']}>
        <h3 className={styles['training-checklist__title']}>Training Checklist</h3>
        <p className={styles['training-checklist__empty']}>
          No training items assigned.
        </p>
      </div>
    );
  }

  return (
    <div className={styles['training-checklist']}>
      <h3 className={styles['training-checklist__title']}>Training Checklist</h3>
      <div className={styles['training-checklist__summary']}>
        <span className={styles['training-checklist__summary-text']}>
          {completedCount} of {totalCount} completed
        </span>
        <div className={styles['training-checklist__progress-bar']}>
          <div
            className={styles['training-checklist__progress-fill']}
            style={{ width: `${progressPercent}%` }}
            role="progressbar"
            aria-valuenow={completedCount}
            aria-valuemin={0}
            aria-valuemax={totalCount}
          />
        </div>
      </div>
      <ul className={styles['training-checklist__list']}>
        {items.map((item) => {
          const overdue = !item.completed && isOverdue(item.dueDate);
          return (
            <li
              key={item.id}
              className={`${styles['training-checklist__item']} ${
                item.completed ? styles['training-checklist__item--completed'] : ''
              }`}
            >
              <label className={styles['training-checklist__checkbox-label']}>
                <input
                  type="checkbox"
                  className={styles['training-checklist__checkbox']}
                  checked={item.completed}
                  onChange={() => onToggle && onToggle(item.id)}
                  aria-label={`Mark "${item.title}" as ${
                    item.completed ? 'incomplete' : 'complete'
                  }`}
                />
                <span className={styles['training-checklist__checkmark']} />
              </label>
              <div className={styles['training-checklist__content']}>
                <span className={styles['training-checklist__item-title']}>
                  {item.title}
                </span>
                {item.description && (
                  <span className={styles['training-checklist__item-description']}>
                    {item.description}
                  </span>
                )}
              </div>
              <div className={styles['training-checklist__meta']}>
                <span
                  className={styles['training-checklist__avatar']}
                  title={item.assignee}
                >
                  {getInitials(item.assignee)}
                </span>
                <span
                  className={`${styles['training-checklist__due-date']} ${
                    overdue ? styles['training-checklist__due-date--overdue'] : ''
                  }`}
                >
                  {overdue && '⚠ '}
                  {formatDate(item.dueDate)}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

LeapTrainingChecklist.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      assignee: PropTypes.string.isRequired,
      dueDate: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ),
  onToggle: PropTypes.func,
};

LeapTrainingChecklist.defaultProps = {
  items: [],
  onToggle: () => {},
};

export default LeapTrainingChecklist;
