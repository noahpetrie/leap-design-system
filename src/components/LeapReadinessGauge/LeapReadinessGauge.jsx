import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const colorMap = {
  high: { text: 'text-[#0c8c5e]', bg: 'bg-[#0c8c5e]' },
  medium: { text: 'text-[#f1c21b]', bg: 'bg-[#f1c21b]' },
  low: { text: 'text-[#da1e28]', bg: 'bg-[#da1e28]' },
};

const getBarColor = (value) => {
  if (value >= 70) return 'high';
  if (value >= 40) return 'medium';
  return 'low';
};

const LeapReadinessGauge = ({ overall = 0, categories = [] }) => {
  const clampedOverall = Math.max(0, Math.min(100, overall));
  const overallColor = getBarColor(clampedOverall);

  return (
    <div className="flex flex-col gap-3 w-full max-w-[32rem]">
      <div className="flex justify-between items-baseline">
        <span className="text-sm font-semibold text-foreground">Overall Readiness</span>
        <span className={cn('text-base font-semibold tabular-nums', colorMap[overallColor].text)}>
          {clampedOverall}%
        </span>
      </div>
      <div className="w-full h-4 bg-border rounded-lg overflow-hidden">
        <div
          className={cn('h-full rounded-lg transition-all duration-500 ease-out', colorMap[overallColor].bg)}
          style={{ width: `${clampedOverall}%` }}
          role="progressbar"
          aria-valuenow={clampedOverall}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Overall readiness: ${clampedOverall}%`}
        />
      </div>

      {categories.length > 0 && (
        <div className="flex flex-col gap-3 pt-2 border-t border-border">
          {categories.map((cat) => {
            const value = Math.max(0, Math.min(100, cat.value));
            const color = getBarColor(value);

            return (
              <div key={cat.label} className="flex flex-col gap-1">
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-foreground">
                    {cat.label}
                  </span>
                  <span
                    className={cn('text-xs font-semibold tabular-nums', colorMap[color].text)}
                  >
                    {value}%
                  </span>
                </div>
                <div className="w-full h-2 bg-border rounded overflow-hidden">
                  <div
                    className={cn('h-full rounded transition-all duration-500 ease-out', colorMap[color].bg)}
                    style={{ width: `${value}%` }}
                    role="progressbar"
                    aria-valuenow={value}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${cat.label}: ${value}%`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

LeapReadinessGauge.propTypes = {
  overall: PropTypes.number,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ),
};

export default LeapReadinessGauge;
