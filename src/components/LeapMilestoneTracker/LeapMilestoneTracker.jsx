import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const STATUS_CONFIG = {
  completed: { label: 'Completed', modifier: 'completed' },
  current: { label: 'Current', modifier: 'current' },
  upcoming: { label: 'Upcoming', modifier: 'upcoming' },
  overdue: { label: 'Overdue', modifier: 'overdue' },
};

const dotStyles = {
  completed: 'bg-primary border-primary',
  current: 'bg-white border-primary shadow-[0_0_0_3px_rgba(12,140,94,0.25)]',
  upcoming: 'bg-white border-[#a8a8a0]',
  overdue: 'bg-destructive border-destructive',
};

const badgeStyles = {
  completed: 'bg-primary/10 text-primary',
  current: 'bg-primary/10 text-primary',
  upcoming: 'bg-card text-muted-foreground',
  overdue: 'bg-destructive/10 text-destructive',
};

const LeapMilestoneTracker = ({ milestones }) => {
  if (!milestones || milestones.length === 0) return null;

  return (
    <div className="bg-white border border-border rounded-lg p-4 max-w-[600px]">
      <ol className="list-none m-0 p-0">
        {milestones.map((ms, idx) => {
          const config = STATUS_CONFIG[ms.status] || STATUS_CONFIG.upcoming;
          const isLast = idx === milestones.length - 1;

          return (
            <li
              key={ms.title + idx}
              className={cn(
                'relative flex gap-3',
                !isLast && 'pb-6'
              )}
            >
              {/* Connector line (not on last item) */}
              {!isLast && (
                <span className="absolute left-[9px] top-[22px] w-0.5 bottom-0 bg-border" />
              )}

              {/* Dot */}
              <span
                className={cn(
                  'relative flex-shrink-0 w-5 h-5 rounded-full mt-0.5 border-2 z-[1]',
                  dotStyles[config.modifier]
                )}
                aria-hidden="true"
              />

              {/* Content */}
              <div className={cn(
                'flex-1 min-w-0',
                config.modifier === 'overdue' && 'border-l-[3px] border-l-destructive pl-2 rounded-sm'
              )}>
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="text-sm font-semibold text-foreground m-0">
                    {ms.title}
                  </h4>
                  <span
                    className={cn(
                      'text-xs font-semibold inline-block px-2 py-px rounded-xl',
                      badgeStyles[config.modifier]
                    )}
                  >
                    {config.label}
                  </span>
                </div>
                {ms.date && (
                  <time className="text-xs font-medium block text-muted-foreground mt-1">
                    {ms.date}
                  </time>
                )}
                {ms.description && (
                  <p className="text-sm text-muted-foreground mt-1 mb-0">
                    {ms.description}
                  </p>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

LeapMilestoneTracker.propTypes = {
  /** Array of milestone objects */
  milestones: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string,
      status: PropTypes.oneOf(['completed', 'current', 'upcoming', 'overdue'])
        .isRequired,
      description: PropTypes.string,
    })
  ).isRequired,
};

export default LeapMilestoneTracker;
