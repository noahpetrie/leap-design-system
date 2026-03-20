import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const getTrendIcon = (trend) => {
  switch (trend) {
    case 'up':
      return '\u25B2';
    case 'down':
      return '\u25BC';
    case 'stable':
    default:
      return '\u25CF';
  }
};

const getDaysSince = (dateString) => {
  const engagement = new Date(dateString);
  const now = new Date();
  const diffMs = now - engagement;
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
};

const trendColorMap = {
  up: 'text-[#0c8c5e]',
  down: 'text-[#da1e28]',
  stable: 'text-[#525252]',
};

const LeapEngagementTracker = ({ stakeholders }) => {
  const sortedStakeholders = useMemo(() => {
    if (!stakeholders || stakeholders.length === 0) return [];
    return [...stakeholders].sort((a, b) => {
      const daysA = getDaysSince(a.lastEngagement);
      const daysB = getDaysSince(b.lastEngagement);
      return daysB - daysA;
    });
  }, [stakeholders]);

  if (!stakeholders || stakeholders.length === 0) {
    return (
      <div className="rounded border border-[var(--cds-border-subtle,#e0e0e0)] p-4 font-['IBM_Plex_Sans',sans-serif]" style={{ backgroundColor: 'var(--cds-layer, #ffffff)' }}>
        <p className="text-center text-[14px] tracking-[0.16px] text-[#525252] py-6">
          No stakeholder data available.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded border border-[var(--cds-border-subtle,#e0e0e0)] p-4 font-['IBM_Plex_Sans',sans-serif] text-[var(--cds-text-primary,#1a1a18)]" style={{ backgroundColor: 'var(--cds-layer, #ffffff)' }}>
      <h3 className="mb-4 text-[16px] font-semibold text-[#1a1a18]">
        Stakeholder Engagement Tracker
      </h3>
      <div className="grid grid-cols-[2fr_1fr_1fr_0.5fr] gap-2 border-b-2 border-[#0c8c5e] px-3 py-2 text-[12px] font-semibold tracking-[0.32px] text-[#1a1a18]">
        <span>Name</span>
        <span>Days Since</span>
        <span>Engagements</span>
        <span>Trend</span>
      </div>
      <ul className="m-0 list-none p-0">
        {sortedStakeholders.map((stakeholder, index) => {
          const daysSince = getDaysSince(stakeholder.lastEngagement);
          const isStale = daysSince > 30;
          return (
            <li
              key={stakeholder.name + index}
              className={cn(
                'grid grid-cols-[2fr_1fr_1fr_0.5fr] items-center gap-2 border-b border-[#e0e0e0] px-3 py-2 transition-colors hover:bg-[#e8e8e8]',
                isStale && 'border-l-[3px] border-l-[#da1e28] bg-[rgba(218,30,40,0.08)] hover:bg-[rgba(218,30,40,0.14)]'
              )}
            >
              <span className="text-[14px] font-medium tracking-[0.16px] text-[#1a1a18]">
                {stakeholder.name}
              </span>
              <span className="text-[14px] tracking-[0.16px] text-[#525252]">
                {daysSince} {daysSince === 1 ? 'day' : 'days'}
              </span>
              <span className="inline-flex h-5 w-fit min-w-[24px] items-center justify-center rounded-full bg-[#0c8c5e]/15 px-1.5 text-[12px] font-semibold tracking-[0.32px] text-[#0c8c5e]">
                {stakeholder.engagementCount}
              </span>
              <span className={cn('text-center text-[12px]', trendColorMap[stakeholder.trend] || 'text-[#525252]')}>
                {getTrendIcon(stakeholder.trend)}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

LeapEngagementTracker.propTypes = {
  stakeholders: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      lastEngagement: PropTypes.string.isRequired,
      engagementCount: PropTypes.number.isRequired,
      trend: PropTypes.oneOf(['up', 'down', 'stable']).isRequired,
    })
  ),
};

LeapEngagementTracker.defaultProps = {
  stakeholders: [],
};

export default LeapEngagementTracker;
