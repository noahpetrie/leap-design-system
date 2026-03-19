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
  up: 'text-primary',
  down: 'text-destructive',
  stable: 'text-muted-foreground',
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
      <div className="rounded border border-border bg-background p-4">
        <p className="text-center text-sm text-muted-foreground py-6">
          No stakeholder data available.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded border border-border bg-background p-4 text-foreground">
      <h3 className="mb-4 text-base font-semibold text-foreground">
        Stakeholder Engagement Tracker
      </h3>
      <div className="grid grid-cols-[2fr_1fr_1fr_0.5fr] gap-2 border-b-2 border-primary px-3 py-2 text-xs font-semibold text-foreground">
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
                'grid grid-cols-[2fr_1fr_1fr_0.5fr] items-center gap-2 border-b border-border px-3 py-2 transition-colors hover:bg-accent',
                isStale && 'border-l-[3px] border-l-destructive bg-destructive/[0.08] hover:bg-destructive/[0.14]'
              )}
            >
              <span className="text-sm font-medium text-foreground">
                {stakeholder.name}
              </span>
              <span className="text-sm text-muted-foreground">
                {daysSince} {daysSince === 1 ? 'day' : 'days'}
              </span>
              <span className="inline-flex h-6 w-fit min-w-[28px] items-center justify-center rounded-full bg-primary px-1.5 text-xs font-semibold text-primary-foreground">
                {stakeholder.engagementCount}
              </span>
              <span className={cn('text-center text-xs', trendColorMap[stakeholder.trend] || 'text-muted-foreground')}>
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
