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
      <div className="rounded border border-border bg-background p-4">
        <h3 className="text-sm font-semibold text-foreground mb-4">Training Checklist</h3>
        <p className="text-sm text-muted-foreground text-center py-6">
          No training items assigned.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded border border-border bg-background p-4">
      <h3 className="text-sm font-semibold text-foreground mb-4">Training Checklist</h3>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-sm text-muted-foreground whitespace-nowrap min-w-[140px]">
          {completedCount} of {totalCount} completed
        </span>
        <div className="flex-1 h-1.5 rounded-full bg-border overflow-hidden">
          <div
            className="h-full rounded-full bg-primary transition-[width] duration-300 ease-in-out"
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
                'flex items-start gap-3 p-3 border-b border-border transition-colors duration-150 last:border-b-0 hover:bg-accent',
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
                    'relative block h-[18px] w-[18px] rounded-sm border-2 border-border transition-all duration-150',
                    'peer-focus-visible:outline-2 peer-focus-visible:outline-primary peer-focus-visible:outline-offset-2',
                    'peer-checked:border-primary peer-checked:bg-primary',
                    'after:absolute after:left-[5px] after:top-[1px] after:hidden after:h-[9px] after:w-[4px] after:rotate-45 after:border-b-2 after:border-r-2 after:border-white',
                    'peer-checked:after:block'
                  )}
                />
              </label>
              <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                <span
                  className={cn(
                    'text-sm font-medium text-foreground',
                    item.completed && 'line-through text-muted-foreground'
                  )}
                >
                  {item.title}
                </span>
                {item.description && (
                  <span className="text-xs text-muted-foreground">
                    {item.description}
                  </span>
                )}
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <span
                  className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-foreground text-xs font-semibold text-primary-foreground"
                  title={item.assignee}
                >
                  {getInitials(item.assignee)}
                </span>
                <span
                  className={cn(
                    'text-xs font-medium text-muted-foreground whitespace-nowrap',
                    overdue && 'text-destructive font-semibold'
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
