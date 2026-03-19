import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const STATUS_CONFIG = {
  draft: { label: 'Draft', modifier: 'draft' },
  active: { label: 'Active', modifier: 'active' },
  completed: { label: 'Completed', modifier: 'completed' },
  paused: { label: 'Paused', modifier: 'paused' },
};

const BADGE_STYLES = {
  draft: 'bg-[rgba(141,141,141,0.15)] text-[#6f6f6f]',
  active: 'bg-[rgba(12,140,94,0.12)] text-primary',
  completed: 'bg-[rgba(0,67,206,0.1)] text-[#0043ce]',
  paused: 'bg-[rgba(241,194,27,0.15)] text-[#8e6a00]',
};

const READINESS_COLORS = {
  high: { value: 'text-primary', fill: 'bg-primary' },
  medium: { value: 'text-[#f1c21b]', fill: 'bg-[#f1c21b]' },
  low: { value: 'text-destructive', fill: 'bg-destructive' },
};

const getReadinessColor = (value) => {
  if (value >= 70) return 'high';
  if (value >= 40) return 'medium';
  return 'low';
};

const LeapInitiativeCard = ({
  title,
  description,
  status = 'draft',
  owner,
  startDate,
  targetDate,
  readiness = 0,
  stakeholderCount = 0,
  onClick,
}) => {
  const isClickable = !!onClick;
  const Tag = isClickable ? 'button' : 'div';
  const statusInfo = STATUS_CONFIG[status] || STATUS_CONFIG.draft;
  const clampedReadiness = Math.max(0, Math.min(100, readiness));
  const readinessColor = getReadinessColor(clampedReadiness);
  const readinessStyles = READINESS_COLORS[readinessColor];

  return (
    <Tag
      className={cn(
        'flex flex-col gap-3 p-4 border border-border rounded-lg bg-card w-full text-left font-[inherit]',
        isClickable && 'cursor-pointer transition-[box-shadow,border-color] duration-150 hover:shadow-md hover:border-primary focus:outline-2 focus:outline-primary focus:outline-offset-2',
      )}
      onClick={onClick}
      type={isClickable ? 'button' : undefined}
    >
      <div className="flex justify-between items-start gap-2">
        <h3 className="text-base font-semibold text-foreground m-0 flex-1">{title}</h3>
        <span
          className={cn(
            'text-xs font-semibold px-2 py-0.5 rounded-full whitespace-nowrap shrink-0',
            BADGE_STYLES[statusInfo.modifier],
          )}
        >
          {statusInfo.label}
        </span>
      </div>

      {description && (
        <p className="text-sm text-muted-foreground m-0 line-clamp-2">{description}</p>
      )}

      <div className="flex flex-col gap-1">
        {owner && (
          <div className="flex items-center gap-1 text-xs font-medium text-muted-foreground">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className="shrink-0 opacity-70">
              <path d="M8 2a3 3 0 100 6 3 3 0 000-6zM3 12.5C3 10.567 4.567 9 6.5 9h3c1.933 0 3.5 1.567 3.5 3.5V14H3v-1.5z" />
            </svg>
            <span>{owner}</span>
          </div>
        )}
        {(startDate || targetDate) && (
          <div className="flex items-center gap-1 text-xs font-medium text-muted-foreground">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className="shrink-0 opacity-70">
              <path d="M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zM4 3h8a1 1 0 011 1v1H3V4a1 1 0 011-1zm8 10H4a1 1 0 01-1-1V6h10v6a1 1 0 01-1 1z" />
            </svg>
            <span>
              {startDate && targetDate
                ? `${startDate} — ${targetDate}`
                : startDate || targetDate}
            </span>
          </div>
        )}
      </div>

      <div className="flex items-end gap-4 pt-2 border-t border-border">
        <div className="flex-1 flex flex-col gap-1">
          <div className="flex justify-between text-xs font-medium text-muted-foreground">
            <span>Readiness</span>
            <span className={cn('font-semibold', readinessStyles.value)}>
              {clampedReadiness}%
            </span>
          </div>
          <div className="w-full h-1 bg-border rounded-sm overflow-hidden">
            <div
              className={cn('h-full rounded-sm transition-[width] duration-500 ease-in-out', readinessStyles.fill)}
              style={{ width: `${clampedReadiness}%` }}
              role="progressbar"
              aria-valuenow={clampedReadiness}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`Readiness: ${clampedReadiness}%`}
            />
          </div>
        </div>

        <div className="flex items-center gap-1 text-xs font-medium text-muted-foreground shrink-0">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className="opacity-70">
            <path d="M6 3a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM1.5 12C1.5 10.343 2.843 9 4.5 9h3c1.657 0 3 1.343 3 3v1h-9v-1zM11.5 5a2 2 0 100 4 2 2 0 000-4zM12 10h1.5c1.105 0 2 .895 2 2v1h-4v-.5c0-.98-.382-1.87-1.006-2.53.162-.02.332-.03.506-.03z" />
          </svg>
          <span>{stakeholderCount}</span>
        </div>
      </div>
    </Tag>
  );
};

LeapInitiativeCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  status: PropTypes.oneOf(['draft', 'active', 'completed', 'paused']),
  owner: PropTypes.string,
  startDate: PropTypes.string,
  targetDate: PropTypes.string,
  readiness: PropTypes.number,
  stakeholderCount: PropTypes.number,
  onClick: PropTypes.func,
};

export default LeapInitiativeCard;
