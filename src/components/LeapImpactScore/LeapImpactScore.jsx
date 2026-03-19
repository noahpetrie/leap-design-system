import React from 'react';
import PropTypes from 'prop-types';
import styles from './LeapImpactScore.module.scss';

const SIZE_MAP = {
  sm: { dimension: 80, strokeWidth: 6, fontSize: '1rem' },
  md: { dimension: 128, strokeWidth: 8, fontSize: '1.5rem' },
  lg: { dimension: 180, strokeWidth: 10, fontSize: '2rem' },
};

const getScoreColor = (score) => {
  if (score >= 70) return 'high';
  if (score >= 40) return 'medium';
  return 'low';
};

const LeapImpactScore = ({ score = 0, label, size = 'md', showAI = false }) => {
  const { dimension, strokeWidth, fontSize } = SIZE_MAP[size] || SIZE_MAP.md;
  const radius = (dimension - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const clampedScore = Math.max(0, Math.min(100, score));
  const offset = circumference - (clampedScore / 100) * circumference;
  const color = getScoreColor(clampedScore);

  return (
    <div className={`${styles['impact-score']} ${styles[`impact-score--${size}`]}`}>
      <div className={styles['impact-score__ring']}>
        <svg
          width={dimension}
          height={dimension}
          viewBox={`0 0 ${dimension} ${dimension}`}
          aria-label={`Impact score: ${clampedScore} out of 100`}
          role="img"
        >
          <circle
            className={styles['impact-score__track']}
            cx={dimension / 2}
            cy={dimension / 2}
            r={radius}
            fill="none"
            strokeWidth={strokeWidth}
          />
          <circle
            className={`${styles['impact-score__progress']} ${styles[`impact-score__progress--${color}`]}`}
            cx={dimension / 2}
            cy={dimension / 2}
            r={radius}
            fill="none"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            transform={`rotate(-90 ${dimension / 2} ${dimension / 2})`}
          />
        </svg>
        <div className={styles['impact-score__value']} style={{ fontSize }}>
          {clampedScore}
        </div>
        {showAI && (
          <div className={styles['impact-score__ai-badge']} title="AI-generated score">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M8 1l1.796 4.858L15 7.5l-4.02 3.264L12.236 16 8 12.88 3.764 16l1.256-5.236L1 7.5l5.204-1.642L8 1z"
                fill="currentColor"
              />
            </svg>
          </div>
        )}
      </div>
      {label && <span className={styles['impact-score__label']}>{label}</span>}
    </div>
  );
};

LeapImpactScore.propTypes = {
  score: PropTypes.number,
  label: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  showAI: PropTypes.bool,
};

export default LeapImpactScore;
