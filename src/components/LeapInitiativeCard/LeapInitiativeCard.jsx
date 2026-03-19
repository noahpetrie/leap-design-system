import React from 'react';
import PropTypes from 'prop-types';
import styles from './LeapInitiativeCard.module.scss';

const STATUS_CONFIG = {
  draft: { label: 'Draft', modifier: 'draft' },
  active: { label: 'Active', modifier: 'active' },
  completed: { label: 'Completed', modifier: 'completed' },
  paused: { label: 'Paused', modifier: 'paused' },
};

const getReadinessColor = (value) => {
  if (value >= 70) return 'high';
  if (value >= 40) return 'medium';
  return 'low';
};

const LeapInitiativeCard = ({
  title,
  description,
  status = 'draft',
  owner,
  startDate,
  targetDate,
  readiness = 0,
  stakeholderCount = 0,
  onClick,
}) => {
  const isClickable = !!onClick;
  const Tag = isClickable ? 'button' : 'div';
  const statusInfo = STATUS_CONFIG[status] || STATUS_CONFIG.draft;
  const clampedReadiness = Math.max(0, Math.min(100, readiness));
  const readinessColor = getReadinessColor(clampedReadiness);

  return (
    <Tag
      className={`${styles['initiative-card']} ${isClickable ? styles['initiative-card--clickable'] : ''}`}
      onClick={onClick}
      type={isClickable ? 'button' : undefined}
    >
      <div className={styles['initiative-card__header']}>
        <h3 className={styles['initiative-card__title']}>{title}</h3>
        <span
          className={`${styles['initiative-card__badge']} ${styles[`initiative-card__badge--${statusInfo.modifier}`]}`}
        >
          {statusInfo.label}
        </span>
      </div>

      {description && (
        <p className={styles['initiative-card__description']}>{description}</p>
      )}

      <div className={styles['initiative-card__meta']}>
        {owner && (
          <div className={styles['initiative-card__meta-item']}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M8 2a3 3 0 100 6 3 3 0 000-6zM3 12.5C3 10.567 4.567 9 6.5 9h3c1.933 0 3.5 1.567 3.5 3.5V14H3v-1.5z" />
            </svg>
            <span>{owner}</span>
          </div>
        )}
        {(startDate || targetDate) && (
          <div className={styles['initiative-card__meta-item']}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zM4 3h8a1 1 0 011 1v1H3V4a1 1 0 011-1zm8 10H4a1 1 0 01-1-1V6h10v6a1 1 0 01-1 1z" />
            </svg>
            <span>
              {startDate && targetDate
                ? `${startDate} — ${targetDate}`
                : startDate || targetDate}
            </span>
          </div>
        )}
      </div>

      <div className={styles['initiative-card__footer']}>
        <div className={styles['initiative-card__readiness']}>
          <div className={styles['initiative-card__readiness-header']}>
            <span>Readiness</span>
            <span
              className={styles[`initiative-card__readiness-value--${readinessColor}`]}
            >
              {clampedReadiness}%
            </span>
          </div>
          <div className={styles['initiative-card__readiness-track']}>
            <div
              className={`${styles['initiative-card__readiness-fill']} ${styles[`initiative-card__readiness-fill--${readinessColor}`]}`}
              style={{ width: `${clampedReadiness}%` }}
              role="progressbar"
              aria-valuenow={clampedReadiness}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`Readiness: ${clampedReadiness}%`}
            />
          </div>
        </div>

        <div className={styles['initiative-card__stakeholders']}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path d="M6 3a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM1.5 12C1.5 10.343 2.843 9 4.5 9h3c1.657 0 3 1.343 3 3v1h-9v-1zM11.5 5a2 2 0 100 4 2 2 0 000-4zM12 10h1.5c1.105 0 2 .895 2 2v1h-4v-.5c0-.98-.382-1.87-1.006-2.53.162-.02.332-.03.506-.03z" />
          </svg>
          <span>{stakeholderCount}</span>
        </div>
      </div>
    </Tag>
  );
};

LeapInitiativeCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  status: PropTypes.oneOf(['draft', 'active', 'completed', 'paused']),
  owner: PropTypes.string,
  startDate: PropTypes.string,
  targetDate: PropTypes.string,
  readiness: PropTypes.number,
  stakeholderCount: PropTypes.number,
  onClick: PropTypes.func,
};

export default LeapInitiativeCard;
