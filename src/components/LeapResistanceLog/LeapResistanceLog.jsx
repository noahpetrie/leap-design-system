import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './LeapResistanceLog.module.scss';

const SEVERITY_LABELS = {
  low: 'Low',
  medium: 'Medium',
  high: 'High',
};

const STATUS_LABELS = {
  identified: 'Identified',
  mitigating: 'Mitigating',
  resolved: 'Resolved',
};

const LeapResistanceLog = ({ entries }) => {
  const [expandedIds, setExpandedIds] = useState(new Set());

  const toggleExpand = (id) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  if (!entries || entries.length === 0) {
    return (
      <div className={styles['resistance-log']}>
        <h3 className={styles['resistance-log__title']}>Resistance Log</h3>
        <p className={styles['resistance-log__empty']}>
          No resistance entries recorded.
        </p>
      </div>
    );
  }

  return (
    <div className={styles['resistance-log']}>
      <h3 className={styles['resistance-log__title']}>Resistance Log</h3>
      <div className={styles['resistance-log__grid']}>
        {entries.map((entry) => {
          const isExpanded = expandedIds.has(entry.id);
          return (
            <div
              key={entry.id}
              className={`${styles['resistance-log__card']} ${
                styles[`resistance-log__card--${entry.severity}`]
              }`}
            >
              <div className={styles['resistance-log__card-header']}>
                <span
                  className={`${styles['resistance-log__severity']} ${
                    styles[`resistance-log__severity--${entry.severity}`]
                  }`}
                >
                  {SEVERITY_LABELS[entry.severity]}
                </span>
                <span
                  className={`${styles['resistance-log__status']} ${
                    styles[`resistance-log__status--${entry.status}`]
                  }`}
                >
                  {STATUS_LABELS[entry.status]}
                </span>
              </div>
              <h4 className={styles['resistance-log__source']}>{entry.source}</h4>
              <p className={styles['resistance-log__description']}>
                {entry.description}
              </p>
              {entry.mitigation && (
                <>
                  <button
                    type="button"
                    className={styles['resistance-log__toggle']}
                    onClick={() => toggleExpand(entry.id)}
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? '▾ Hide mitigation' : '▸ Show mitigation'}
                  </button>
                  {isExpanded && (
                    <div className={styles['resistance-log__mitigation']}>
                      <span className={styles['resistance-log__mitigation-label']}>
                        Mitigation Plan
                      </span>
                      <p className={styles['resistance-log__mitigation-text']}>
                        {entry.mitigation}
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

LeapResistanceLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      source: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      severity: PropTypes.oneOf(['low', 'medium', 'high']).isRequired,
      status: PropTypes.oneOf(['identified', 'mitigating', 'resolved']).isRequired,
      mitigation: PropTypes.string,
    })
  ),
};

LeapResistanceLog.defaultProps = {
  entries: [],
};

export default LeapResistanceLog;
