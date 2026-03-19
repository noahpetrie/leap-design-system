import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styles from './LeapKPICard.module.scss';

const STATUS_LABELS = {
  'on-track': 'On Track',
  'at-risk': 'At Risk',
  'off-track': 'Off Track',
};

const buildSparklinePath = (trend, width = 120, height = 32) => {
  if (!trend || trend.length < 2) return '';

  const min = Math.min(...trend);
  const max = Math.max(...trend);
  const range = max - min || 1;
  const stepX = width / (trend.length - 1);
  const padding = 2;
  const usableHeight = height - padding * 2;

  const points = trend
    .map((val, i) => {
      const x = i * stepX;
      const y = padding + usableHeight - ((val - min) / range) * usableHeight;
      return `${x},${y}`;
    })
    .join(' ');

  return points;
};

const LeapKPICard = ({ label, value, unit, target, trend, status }) => {
  const sparklinePoints = useMemo(
    () => buildSparklinePath(trend),
    [trend]
  );

  const statusColor = useMemo(() => {
    switch (status) {
      case 'on-track':
        return '#0c8c5e';
      case 'at-risk':
        return '#f1c21b';
      case 'off-track':
        return '#da1e28';
      default:
        return '#525252';
    }
  }, [status]);

  return (
    <div className={styles['kpi-card']}>
      <div className={styles['kpi-card__header']}>
        <span className={styles['kpi-card__label']}>{label}</span>
        <span
          className={`${styles['kpi-card__status-dot']} ${
            styles[`kpi-card__status-dot--${status}`]
          }`}
          title={STATUS_LABELS[status]}
          aria-label={STATUS_LABELS[status]}
        />
      </div>
      <div className={styles['kpi-card__value-row']}>
        <span className={styles['kpi-card__value']}>{value}</span>
        {unit && <span className={styles['kpi-card__unit']}>{unit}</span>}
      </div>
      {target !== undefined && target !== null && (
        <div className={styles['kpi-card__target']}>
          Target: {target}
          {unit ? ` ${unit}` : ''}
        </div>
      )}
      {sparklinePoints && (
        <div className={styles['kpi-card__sparkline']}>
          <svg
            width="120"
            height="32"
            viewBox="0 0 120 32"
            className={styles['kpi-card__sparkline-svg']}
            aria-hidden="true"
          >
            <polyline
              points={sparklinePoints}
              fill="none"
              stroke={statusColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
      <div className={styles['kpi-card__status-label']}>
        <span
          className={`${styles['kpi-card__status-badge']} ${
            styles[`kpi-card__status-badge--${status}`]
          }`}
        >
          {STATUS_LABELS[status]}
        </span>
      </div>
    </div>
  );
};

LeapKPICard.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  unit: PropTypes.string,
  target: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  trend: PropTypes.arrayOf(PropTypes.number),
  status: PropTypes.oneOf(['on-track', 'at-risk', 'off-track']).isRequired,
};

LeapKPICard.defaultProps = {
  unit: '',
  target: null,
  trend: [],
};

export default LeapKPICard;
