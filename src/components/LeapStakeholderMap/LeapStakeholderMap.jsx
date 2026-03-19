import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './LeapStakeholderMap.module.scss';

const QUADRANTS = {
  'high-low': { label: 'Keep Satisfied', row: 0, col: 0 },
  'high-high': { label: 'Manage Closely', row: 0, col: 1 },
  'low-low': { label: 'Monitor', row: 1, col: 0 },
  'low-high': { label: 'Keep Informed', row: 1, col: 1 },
};

const SENTIMENT_COLORS = {
  positive: 'positive',
  neutral: 'neutral',
  negative: 'negative',
};

const LeapStakeholderMap = ({ stakeholders = [] }) => {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const getQuadrantKey = (influence, interest) => `${influence}-${interest}`;

  const quadrantStakeholders = (influence, interest) =>
    stakeholders.filter(
      (s) => s.influence === influence && s.interest === interest
    );

  return (
    <div className={styles['stakeholder-map']}>
      <div className={styles['stakeholder-map__y-label']}>
        <span>Influence</span>
      </div>
      <div className={styles['stakeholder-map__container']}>
        <div className={styles['stakeholder-map__y-axis']}>
          <span>High</span>
          <span>Low</span>
        </div>
        <div className={styles['stakeholder-map__grid']}>
          {[
            { influence: 'high', interest: 'low' },
            { influence: 'high', interest: 'high' },
            { influence: 'low', interest: 'low' },
            { influence: 'low', interest: 'high' },
          ].map(({ influence, interest }) => {
            const key = getQuadrantKey(influence, interest);
            const quadrant = QUADRANTS[key];
            const members = quadrantStakeholders(influence, interest);

            return (
              <div
                key={key}
                className={`${styles['stakeholder-map__quadrant']} ${styles[`stakeholder-map__quadrant--${key}`]}`}
              >
                <span className={styles['stakeholder-map__quadrant-label']}>
                  {quadrant.label}
                </span>
                <div className={styles['stakeholder-map__dots']}>
                  {members.map((stakeholder, i) => (
                    <div
                      key={stakeholder.name}
                      className={styles['stakeholder-map__dot-wrapper']}
                      onMouseEnter={() => setActiveTooltip(stakeholder.name)}
                      onMouseLeave={() => setActiveTooltip(null)}
                      onFocus={() => setActiveTooltip(stakeholder.name)}
                      onBlur={() => setActiveTooltip(null)}
                    >
                      <div
                        className={`${styles['stakeholder-map__dot']} ${styles[`stakeholder-map__dot--${SENTIMENT_COLORS[stakeholder.sentiment] || 'neutral'}`]}`}
                        role="img"
                        aria-label={`${stakeholder.name}: ${stakeholder.sentiment} sentiment`}
                        tabIndex={0}
                      />
                      {activeTooltip === stakeholder.name && (
                        <div className={styles['stakeholder-map__tooltip']}>
                          {stakeholder.name}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles['stakeholder-map__x-axis']}>
          <span>Low</span>
          <span>High</span>
        </div>
        <div className={styles['stakeholder-map__x-label']}>
          <span>Interest</span>
        </div>
      </div>
      <div className={styles['stakeholder-map__legend']}>
        <div className={styles['stakeholder-map__legend-item']}>
          <span className={`${styles['stakeholder-map__legend-dot']} ${styles['stakeholder-map__dot--positive']}`} />
          <span>Positive</span>
        </div>
        <div className={styles['stakeholder-map__legend-item']}>
          <span className={`${styles['stakeholder-map__legend-dot']} ${styles['stakeholder-map__dot--neutral']}`} />
          <span>Neutral</span>
        </div>
        <div className={styles['stakeholder-map__legend-item']}>
          <span className={`${styles['stakeholder-map__legend-dot']} ${styles['stakeholder-map__dot--negative']}`} />
          <span>Negative</span>
        </div>
      </div>
    </div>
  );
};

LeapStakeholderMap.propTypes = {
  stakeholders: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      influence: PropTypes.oneOf(['high', 'low']).isRequired,
      interest: PropTypes.oneOf(['high', 'low']).isRequired,
      sentiment: PropTypes.oneOf(['positive', 'neutral', 'negative']),
    })
  ),
};

export default LeapStakeholderMap;
