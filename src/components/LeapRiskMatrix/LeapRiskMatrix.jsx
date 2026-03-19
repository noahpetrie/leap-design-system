import React from 'react';
import PropTypes from 'prop-types';
import styles from './LeapRiskMatrix.module.scss';

const LIKELIHOOD_LABELS = ['Rare', 'Unlikely', 'Possible', 'Likely', 'Almost Certain'];
const IMPACT_LABELS = ['Negligible', 'Minor', 'Moderate', 'Major', 'Severe'];

const getCellColor = (likelihood, impact) => {
  const score = likelihood * impact;
  if (score >= 15) return 'high';
  if (score >= 7) return 'medium';
  return 'low';
};

const LeapRiskMatrix = ({ risks = [], onRiskClick }) => {
  const getRisksForCell = (likelihood, impact) =>
    risks.filter((r) => r.likelihood === likelihood && r.impact === impact);

  return (
    <div className={styles['risk-matrix']}>
      <div className={styles['risk-matrix__y-label']}>
        <span>Likelihood</span>
      </div>
      <div className={styles['risk-matrix__grid-area']}>
        <div className={styles['risk-matrix__y-axis']}>
          {[...LIKELIHOOD_LABELS].reverse().map((label, i) => (
            <div key={label} className={styles['risk-matrix__y-tick']}>
              {label}
            </div>
          ))}
        </div>
        <div className={styles['risk-matrix__grid']}>
          {[5, 4, 3, 2, 1].map((likelihood) =>
            [1, 2, 3, 4, 5].map((impact) => {
              const cellRisks = getRisksForCell(likelihood, impact);
              const color = getCellColor(likelihood, impact);
              return (
                <div
                  key={`${likelihood}-${impact}`}
                  className={`${styles['risk-matrix__cell']} ${styles[`risk-matrix__cell--${color}`]}`}
                  title={`Likelihood: ${likelihood}, Impact: ${impact}, Score: ${likelihood * impact}`}
                >
                  <span className={styles['risk-matrix__score']}>
                    {likelihood * impact}
                  </span>
                  {cellRisks.length > 0 && (
                    <div className={styles['risk-matrix__dots']}>
                      {cellRisks.map((risk) => (
                        <button
                          key={risk.id}
                          className={styles['risk-matrix__dot']}
                          onClick={() => onRiskClick && onRiskClick(risk)}
                          title={risk.label}
                          type="button"
                          aria-label={`Risk: ${risk.label}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
        <div className={styles['risk-matrix__x-axis']}>
          {IMPACT_LABELS.map((label) => (
            <div key={label} className={styles['risk-matrix__x-tick']}>
              {label}
            </div>
          ))}
        </div>
        <div className={styles['risk-matrix__x-label']}>
          <span>Impact</span>
        </div>
      </div>
    </div>
  );
};

LeapRiskMatrix.propTypes = {
  risks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
      likelihood: PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
      impact: PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
    })
  ),
  onRiskClick: PropTypes.func,
};

export default LeapRiskMatrix;
