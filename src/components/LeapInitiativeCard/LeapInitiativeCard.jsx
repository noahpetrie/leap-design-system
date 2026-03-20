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
  active: 'bg-[rgba(12,140,94,0.12)] text-[#0c8c5e]',
  completed: 'bg-[rgba(0,67,206,0.1)] text-[#0043ce]',
  paused: 'bg-[rgba(241,194,27,0.15)] text-[#8e6a00]',
};

const READINESS_COLORS = {
  high: { value: 'text-[#0c8c5e]', fill: 'bg-[#0c8c5e]' },
  medium: { value: 'text-[#f1c21b]', fill: 'bg-[#f1c21b]' },
  low: { value: 'text-[#da1e28]', fill: 'bg-[#da1e28]' },
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
        'flex flex-col gap-[0.75rem] p-[1rem] border border-[var(--cds-border-subtle,#e0e0e0)] rounded-[8px] w-full text-left font-[inherit]',
        isClickable && 'cursor-pointer transition-[box-shadow,border-color] duration-150 hover:shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:border-[#0c8c5e] focus:outline-2 focus:outline-[#0c8c5e] focus:outline-offset-2',
      )}
      style={{ backgroundColor: 'var(--cds-layer, #ffffff)' }}
      onClick={onClick}
      type={isClickable ? 'button' : undefined}
    >
      <div className="flex justify-between items-start gap-[0.5rem]">
        <h3 className="text-[16px] font-semibold tracking-[0.16px] text-[#1a1a18] m-0 flex-1">{title}</h3>
        <span
          className={cn(
            'text-[12px] tracking-[0.32px] font-semibold px-[0.5rem] py-[0.125rem] rounded-full whitespace-nowrap shrink-0',
            BADGE_STYLES[statusInfo.modifier],
          )}
        >
          {statusInfo.label}
        </span>
      </div>

      {description && (
        <p className="text-[14px] tracking-[0.16px] text-[#525252] m-0 line-clamp-2">{description}</p>
      )}

      <div className="flex flex-col gap-[0.25rem]">
        {owner && (
          <div className="flex items-center gap-[0.25rem] text-[12px] tracking-[0.32px] text-[#525252]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className="shrink-0 opacity-70">
              <path d="M8 2a3 3 0 100 6 3 3 0 000-6zM3 12.5C3 10.567 4.567 9 6.5 9h3c1.933 0 3.5 1.567 3.5 3.5V14H3v-1.5z" />
            </svg>
            <span>{owner}</span>
          </div>
        )}
        {(startDate || targetDate) && (
          <div className="flex items-center gap-[0.25rem] text-[12px] tracking-[0.32px] text-[#525252]">
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

      <div className="flex items-end gap-[1rem] pt-[0.5rem] border-t border-[var(--cds-border-subtle,#e0e0e0)]">
        <div className="flex-1 flex flex-col gap-[0.25rem]">
          <div className="flex justify-between text-[12px] tracking-[0.32px] text-[#525252]">
            <span>Readiness</span>
            <span className={cn('font-semibold', readinessStyles.value)}>
              {clampedReadiness}%
            </span>
          </div>
          <div className="w-full h-[4px] bg-[#e0e0e0] rounded-[2px] overflow-hidden">
            <div
              className={cn('h-full rounded-[2px] transition-[width] duration-500 ease-in-out', readinessStyles.fill)}
              style={{ width: `${clampedReadiness}%` }}
              role="progressbar"
              aria-valuenow={clampedReadiness}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`Readiness: ${clampedReadiness}%`}
            />
          </div>
        </div>

        <div className="flex items-center gap-[0.25rem] text-[12px] tracking-[0.32px] text-[#525252] shrink-0">
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
