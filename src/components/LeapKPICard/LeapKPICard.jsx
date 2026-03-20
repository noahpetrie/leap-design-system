import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const STATUS_LABELS = {
  'on-track': 'On Track',
  'at-risk': 'At Risk',
  'off-track': 'Off Track',
};

const STATUS_DOT_COLORS = {
  'on-track': 'bg-[#0c8c5e]',
  'at-risk': 'bg-[#f1c21b]',
  'off-track': 'bg-[#da1e28]',
};

const STATUS_BADGE_STYLES = {
  'on-track': 'bg-[rgba(12,140,94,0.15)] text-[#0c8c5e]',
  'at-risk': 'bg-[rgba(241,194,27,0.2)] text-[#8e6a00]',
  'off-track': 'bg-[#fff1f1] text-[#da1e28]',
};

const STATUS_STROKE_COLORS = {
  'on-track': '#0c8c5e',
  'at-risk': '#f1c21b',
  'off-track': '#da1e28',
};

const buildSparklinePath = (trend, width = 120, height = 40) => {
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
    <div className="border border-[var(--cds-border-subtle,#e0e0e0)] rounded-[4px] p-[1.25rem] font-['IBM_Plex_Sans',sans-serif] text-[var(--cds-text-primary,#1a1a18)] min-w-[220px] max-w-[320px]" style={{ backgroundColor: 'var(--cds-layer, #ffffff)' }}>
      <div className="flex items-center justify-between mb-[0.75rem]">
        <span className="text-[12px] tracking-[0.32px] text-[#525252] uppercase font-medium">{label}</span>
        <span
          className={cn(
            'inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] tracking-[0.32px] font-semibold',
            STATUS_BADGE_STYLES[status],
          )}
        >
          <span className={cn('w-[6px] h-[6px] rounded-full shrink-0', STATUS_DOT_COLORS[status])} />
          {STATUS_LABELS[status]}
        </span>
      </div>
      <div className="flex items-baseline gap-[0.25rem] mb-[0.125rem]">
        <span className="text-[2rem] font-semibold leading-[1.1] text-[#1a1a18]">{value}</span>
        {unit && <span className="text-[14px] tracking-[0.16px] text-[#525252]">{unit}</span>}
      </div>
      {target !== undefined && target !== null && (
        <div className="text-[12px] tracking-[0.32px] text-[#525252] mb-[0.75rem]">
          Target: {target}
          {unit ? ` ${unit}` : ''}
        </div>
      )}
      {sparklinePoints && (
        <div className="py-[0.25rem]">
          <svg
            width="120"
            height="40"
            viewBox="0 0 120 40"
            className="block w-full h-[40px]"
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
