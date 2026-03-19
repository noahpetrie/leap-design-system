import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const STATUS_LABELS = {
  'on-track': 'On Track',
  'at-risk': 'At Risk',
  'off-track': 'Off Track',
};

const STATUS_DOT_COLORS = {
  'on-track': 'bg-primary',
  'at-risk': 'bg-[#f1c21b]',
  'off-track': 'bg-[#da1e28]',
};

const STATUS_BADGE_STYLES = {
  'on-track': 'bg-[rgba(12,140,94,0.15)] text-primary',
  'at-risk': 'bg-[rgba(241,194,27,0.2)] text-[#8e6a00]',
  'off-track': 'bg-[#fff1f1] text-[#da1e28]',
};

const STATUS_STROKE_COLORS = {
  'on-track': '#0c8c5e',
  'at-risk': '#f1c21b',
  'off-track': '#da1e28',
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

  const statusColor = STATUS_STROKE_COLORS[status] || '#525252';

  return (
    <div className="bg-background border border-border rounded p-4 min-w-[200px] max-w-[280px] text-foreground">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{label}</span>
        <span
          className={cn('w-2.5 h-2.5 rounded-full shrink-0', STATUS_DOT_COLORS[status])}
          title={STATUS_LABELS[status]}
          aria-label={STATUS_LABELS[status]}
        />
      </div>
      <div className="flex items-baseline gap-1 mb-1">
        <span className="text-3xl font-semibold leading-tight text-foreground">{value}</span>
        {unit && <span className="text-sm text-muted-foreground">{unit}</span>}
      </div>
      {target !== undefined && target !== null && (
        <div className="text-xs text-muted-foreground mb-3">
          Target: {target}
          {unit ? ` ${unit}` : ''}
        </div>
      )}
      {sparklinePoints && (
        <div className="mb-3 py-1">
          <svg
            width="120"
            height="32"
            viewBox="0 0 120 32"
            className="block w-full h-8"
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
      <div className="flex">
        <span
          className={cn(
            'inline-block px-2 py-0.5 rounded-xl text-xs font-semibold',
            STATUS_BADGE_STYLES[status],
          )}
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
