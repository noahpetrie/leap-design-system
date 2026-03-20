import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const getInitials = (name) => {
  if (!name) return '?';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const isOverdue = (dueDateString) => {
  const due = new Date(dueDateString);
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return due < now;
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

const LeapTrainingChecklist = ({ items, onToggle }) => {
  const completedCount = useMemo(() => {
    if (!items) return 0;
    return items.filter((item) => item.completed).length;
  }, [items]);

  const totalCount = items ? items.length : 0;
  const progressPercent = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  if (!items || items.length === 0) {
    return (
      <div className="rounded-[4px] border border-[var(--cds-border-subtle,#e0e0e0)] p-4 font-['IBM_Plex_Sans',sans-serif] text-[var(--cds-text-primary,#1a1a18)]" style={{ backgroundColor: 'var(--cds-layer, #ffffff)' }}>
        <h3 className="text-[16px] font-semibold leading-[22px] tracking-[0.16px] text-[#1a1a18] mb-4">Training Checklist</h3>
        <p className="text-[14px] leading-[18px] tracking-[0.16px] text-[#525252] text-center py-6">
          No training items assigned.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-[4px] border border-[var(--cds-border-subtle,#e0e0e0)] p-4 font-['IBM_Plex_Sans',sans-serif] text-[var(--cds-text-primary,#1a1a18)]" style={{ backgroundColor: 'var(--cds-layer, #ffffff)' }}>
      <h3 className="text-[16px] font-semibold leading-[22px] tracking-[0.16px] text-[#1a1a18] mb-4">Training Checklist</h3>
      <div className="flex items-center gap-4 mb-4">
        <span className="text-[14px] leading-[18px] tracking-[0.16px] text-[#525252] whitespace-nowrap min-w-[140px]">
          {completedCount} of {totalCount} completed
        </span>
        <div className="flex-1 h-1.5 rounded-[3px] bg-[#e0e0e0] overflow-hidden">
          <div
            className="h-full rounded-[3px] bg-[#0c8c5e] transition-[width] duration-300 ease-in-out"
            style={{ width: `${progressPercent}%` }}
            role="progressbar"
            aria-valuenow={completedCount}
            aria-valuemin={0}
            aria-valuemax={totalCount}
          />
        </div>
      </div>
      <ul className="m-0 list-none p-0">
        {items.map((item) => {
          const overdue = !item.completed && isOverdue(item.dueDate);
          return (
            <li
              key={item.id}
              className={cn(
                'flex items-start gap-4 p-4 border-b border-[#e0e0e0] transition-colors duration-150 last:border-b-0 hover:bg-[#e8e8e8]',
                item.completed && 'opacity-70'
              )}
            >
              <label className="relative flex shrink-0 cursor-pointer items-center pt-0.5">
                <input
                  type="checkbox"
                  className="peer absolute h-0 w-0 opacity-0"
                  checked={item.completed}
                  onChange={() => onToggle && onToggle(item.id)}
                  aria-label={`Mark "${item.title}" as ${
                    item.completed ? 'incomplete' : 'complete'
                  }`}
                />
                <span
                  className={cn(
                    'relative block h-[18px] w-[18px] rounded-[3px] border-2 border-[#8d8d8d] transition-all duration-150',
                    'peer-focus-visible:outline-2 peer-focus-visible:outline-[#0c8c5e] peer-focus-visible:outline-offset-2',
                    'peer-checked:border-[#0c8c5e] peer-checked:bg-[#0c8c5e]',
                    'after:absolute after:left-[5px] after:top-[1px] after:hidden after:h-[9px] after:w-[4px] after:rotate-45 after:border-b-2 after:border-r-2 after:border-white',
                    'peer-checked:after:block'
                  )}
                />
              </label>
              <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                <span
                  className={cn(
                    'text-[14px] leading-[18px] tracking-[0.16px] font-medium text-[#1a1a18]',
                    item.completed && 'line-through text-[#525252]'
                  )}
                >
                  {item.title}
                </span>
                {item.description && (
                  <span className="text-[12px] leading-[16px] tracking-[0.32px] text-[#525252]">
                    {item.description}
                  </span>
                )}
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <span
                  className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0c8c5e] text-[12px] leading-[16px] tracking-[0.32px] font-semibold text-[#ffffff]"
                  title={item.assignee}
                >
                  {getInitials(item.assignee)}
                </span>
                <span
                  className={cn(
                    'text-[12px] leading-[16px] tracking-[0.32px] text-[#525252] whitespace-nowrap',
                    overdue && 'text-[#da1e28] font-semibold'
                  )}
                >
                  {overdue && '\u26A0 '}
                  {formatDate(item.dueDate)}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

LeapTrainingChecklist.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      assignee: PropTypes.string.isRequired,
      dueDate: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ),
  onToggle: PropTypes.func,
};

LeapTrainingChecklist.defaultProps = {
  items: [],
  onToggle: () => {},
};

export default LeapTrainingChecklist;
