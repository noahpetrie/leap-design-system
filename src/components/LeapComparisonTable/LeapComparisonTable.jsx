import React from 'react';
import PropTypes from 'prop-types';
import styles from './LeapComparisonTable.module.scss';

const LeapComparisonTable = ({ options, criteria }) => {
  if (!options || !criteria || options.length === 0 || criteria.length === 0) {
    return null;
  }

  return (
    <div className={styles['leap-comparison-table']}>
      <div className={styles['leap-comparison-table__scroll']}>
        <table className={styles['leap-comparison-table__table']}>
          <thead>
            <tr>
              <th className={styles['leap-comparison-table__criteria-header']}>
                Criteria
              </th>
              {options.map((opt) => (
                <th
                  key={opt.name}
                  className={`${styles['leap-comparison-table__option-header']} ${
                    opt.recommended
                      ? styles['leap-comparison-table__option-header--recommended']
                      : ''
                  }`}
                >
                  <span className={styles['leap-comparison-table__option-name']}>
                    {opt.name}
                  </span>
                  {opt.recommended && (
                    <span className={styles['leap-comparison-table__recommended-badge']}>
                      Recommended
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {criteria.map((criterion, rowIdx) => (
              <tr
                key={criterion}
                className={
                  rowIdx % 2 === 0
                    ? styles['leap-comparison-table__row--even']
                    : styles['leap-comparison-table__row--odd']
                }
              >
                <td className={styles['leap-comparison-table__criteria-cell']}>
                  {criterion}
                </td>
                {options.map((opt) => (
                  <td
                    key={`${opt.name}-${criterion}`}
                    className={`${styles['leap-comparison-table__value-cell']} ${
                      opt.recommended
                        ? styles['leap-comparison-table__value-cell--recommended']
                        : ''
                    }`}
                  >
                    {opt.values[criterion] !== undefined
                      ? opt.values[criterion]
                      : '\u2014'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

LeapComparisonTable.propTypes = {
  /** Array of option objects with name, values map, and optional recommended flag */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      values: PropTypes.object.isRequired,
      recommended: PropTypes.bool,
    })
  ).isRequired,
  /** Array of criteria strings used as row labels */
  criteria: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default LeapComparisonTable;
