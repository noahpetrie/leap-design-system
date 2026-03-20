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
  completed: 'bg-[#0c8c5e] border-[#0c8c5e]',
  current: 'bg-white border-[#0c8c5e] shadow-[0_0_0_3px_rgba(12,140,94,0.25)]',
  upcoming: 'bg-white border-[#a8a8a0]',
  overdue: 'bg-[#da1e28] border-[#da1e28]',
};

const badgeStyles = {
  completed: 'bg-[rgba(12,140,94,0.12)] text-[#0c8c5e]',
  current: 'bg-[rgba(12,140,94,0.12)] text-[#0c8c5e]',
  upcoming: 'bg-[#f4f4f4] text-[#525252]',
  overdue: 'bg-[rgba(218,30,40,0.12)] text-[#da1e28]',
};

const LeapMilestoneTracker = ({ milestones }) => {
  if (!milestones || milestones.length === 0) return null;

  return (
    <div className="border border-[var(--cds-border-subtle,#e0e0e0)] rounded-lg p-4 max-w-[600px]" style={{ backgroundColor: 'var(--cds-layer, #ffffff)' }}>
      <ol className="list-none m-0 p-0">
        {milestones.map((ms, idx) => {
          const config = STATUS_CONFIG[ms.status] || STATUS_CONFIG.upcoming;
          const isLast = idx === milestones.length - 1;

          return (
            <li
              key={ms.title + idx}
              className={cn(
                'relative flex gap-4',
                !isLast && 'pb-6'
              )}
            >
              {/* Connector line (not on last item) */}
              {!isLast && (
                <span className="absolute left-[9px] top-[22px] w-0.5 bottom-0 bg-[var(--cds-border-subtle,#e0e0e0)]" />
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
                config.modifier === 'overdue' && 'border-l-[3px] border-l-[#da1e28] pl-2 rounded-sm'
              )}>
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="text-[14px] font-semibold tracking-[0.16px] text-[#1a1a18] m-0">
                    {ms.title}
                  </h4>
                  <span
                    className={cn(
                      'text-[12px] tracking-[0.32px] font-semibold inline-block px-2 py-px rounded-xl',
                      badgeStyles[config.modifier]
                    )}
                  >
                    {config.label}
                  </span>
                </div>
                {ms.date && (
                  <time className="text-[12px] tracking-[0.32px] block text-[#525252] mt-1">
                    {ms.date}
                  </time>
                )}
                {ms.description && (
                  <p className="text-[14px] tracking-[0.16px] text-[#525252] mt-1 mb-0">
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
