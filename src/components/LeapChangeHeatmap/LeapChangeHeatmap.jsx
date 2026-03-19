import React from 'react';
import PropTypes from 'prop-types';
import styles from './LeapChangeHeatmap.module.scss';

const getColorClass = (value) => {
  if (value >= 80) return 'cell--dark-green';
  if (value >= 60) return 'cell--light-green';
  if (value >= 40) return 'cell--yellow';
  if (value >= 20) return 'cell--orange';
  return 'cell--red';
};

const LeapChangeHeatmap = ({ rows, columns, data }) => {
  if (!rows || !columns || !data) return null;

  return (
    <div className={styles['leap-change-heatmap']}>
      <div className={styles['leap-change-heatmap__scroll']}>
        <table className={styles['leap-change-heatmap__table']}>
          <thead>
            <tr>
              <th className={styles['leap-change-heatmap__corner']} />
              {columns.map((col) => (
                <th key={col} className={styles['leap-change-heatmap__col-header']}>
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIdx) => (
              <tr key={row}>
                <th className={styles['leap-change-heatmap__row-header']}>
                  {row}
                </th>
                {columns.map((col, colIdx) => {
                  const value = data[rowIdx]?.[colIdx] ?? 0;
                  const colorClass = getColorClass(value);
                  return (
                    <td
                      key={`${row}-${col}`}
                      className={`${styles['leap-change-heatmap__cell']} ${styles[`leap-change-heatmap__${colorClass}`]}`}
                      title={`${row} / ${col}: ${value}`}
                    >
                      {value}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles['leap-change-heatmap__legend']}>
        <span className={styles['leap-change-heatmap__legend-item']}>
          <span className={`${styles['leap-change-heatmap__swatch']} ${styles['leap-change-heatmap__swatch--red']}`} />
          0-19
        </span>
        <span className={styles['leap-change-heatmap__legend-item']}>
          <span className={`${styles['leap-change-heatmap__swatch']} ${styles['leap-change-heatmap__swatch--orange']}`} />
          20-39
        </span>
        <span className={styles['leap-change-heatmap__legend-item']}>
          <span className={`${styles['leap-change-heatmap__swatch']} ${styles['leap-change-heatmap__swatch--yellow']}`} />
          40-59
        </span>
        <span className={styles['leap-change-heatmap__legend-item']}>
          <span className={`${styles['leap-change-heatmap__swatch']} ${styles['leap-change-heatmap__swatch--light-green']}`} />
          60-79
        </span>
        <span className={styles['leap-change-heatmap__legend-item']}>
          <span className={`${styles['leap-change-heatmap__swatch']} ${styles['leap-change-heatmap__swatch--dark-green']}`} />
          80-100
        </span>
      </div>
    </div>
  );
};

LeapChangeHeatmap.propTypes = {
  /** Department / team names shown as row headers */
  rows: PropTypes.arrayOf(PropTypes.string).isRequired,
  /** Metric names shown as column headers */
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  /** 2D number array [row][col] with values 0-100 */
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
};

export default LeapChangeHeatmap;
