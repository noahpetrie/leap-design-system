import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const PRIORITY_CONFIG = {
  urgent: { label: 'Urgent', modifier: 'urgent' },
  high: { label: 'High', modifier: 'high' },
  medium: { label: 'Medium', modifier: 'medium' },
  low: { label: 'Low', modifier: 'low' },
};

const STATUS_OPTIONS = [
  { value: 'todo', label: 'To Do' },
  { value: 'in-progress', label: 'In Progress' },
  { value: 'done', label: 'Done' },
];

const priorityBarColors = {
  urgent: 'bg-[#da1e28]',
  high: 'bg-[#eb6200]',
  medium: 'bg-[#f1c21b]',
  low: 'bg-[#a8a8a0]',
};

const priorityTagStyles = {
  urgent: 'bg-[#da1e28]/[0.12] text-[#da1e28]',
  high: 'bg-[#eb6200]/[0.12] text-[#d45800]',
  medium: 'bg-[#f1c21b]/[0.18] text-[#8e6a00]',
  low: 'bg-[#a8a8a0]/[0.18] text-[#6f6f67]',
};

const getInitials = (name) => {
  if (!name) return '??';
  return name
    .split(' ')
    .map((part) => part.charAt(0).toUpperCase())
    .slice(0, 2)
    .join('');
};

const LeapActionItem = ({
  title,
  assignee,
  dueDate,
  priority = 'medium',
  status = 'todo',
  onStatusChange,
}) => {
  const prioConfig = PRIORITY_CONFIG[priority] || PRIORITY_CONFIG.medium;

  const handleStatusChange = (e) => {
    if (onStatusChange) {
      onStatusChange(e.target.value);
    }
  };

  return (
    <div
      className={cn(
        'flex bg-background border border-border rounded-lg overflow-hidden max-w-[560px] transition-shadow duration-150 ease-out hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)]',
        status === 'done' && 'opacity-70',
      )}
    >
      {/* Priority bar */}
      <span
        className={cn('shrink-0 w-[5px]', priorityBarColors[prioConfig.modifier])}
        title={`Priority: ${prioConfig.label}`}
      />

      <div className="flex-1 px-4 py-3 min-w-0">
        {/* Top row: title + priority tag */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h4
            className={cn(
              'text-sm font-semibold text-foreground m-0 flex-1 min-w-0 overflow-hidden text-ellipsis whitespace-nowrap',
              status === 'done' && 'line-through text-muted-foreground',
            )}
          >
            {title}
          </h4>
          <span
            className={cn(
              'text-xs font-medium inline-block px-2 py-px rounded-xl font-semibold whitespace-nowrap shrink-0',
              priorityTagStyles[prioConfig.modifier],
            )}
          >
            {prioConfig.label}
          </span>
        </div>

        {/* Bottom row: assignee, due date, status */}
        <div className="flex items-center gap-4 flex-wrap">
          {assignee && (
            <span className="flex items-center gap-1" title={assignee}>
              <span className="text-xs font-medium flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                {getInitials(assignee)}
              </span>
              <span className="text-sm text-muted-foreground">
                {assignee}
              </span>
            </span>
          )}

          {dueDate && (
            <time className="text-xs font-medium text-muted-foreground whitespace-nowrap">
              {dueDate}
            </time>
          )}

          <select
            className="text-xs font-medium ml-auto py-1 pl-2 pr-3 border border-border rounded bg-background text-foreground cursor-pointer font-[inherit] focus:outline-2 focus:outline-primary focus:-outline-offset-1"
            value={status}
            onChange={handleStatusChange}
            aria-label="Change status"
          >
            {STATUS_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

LeapActionItem.propTypes = {
  /** Action item title */
  title: PropTypes.string.isRequired,
  /** Name of the assignee */
  assignee: PropTypes.string,
  /** Due date string */
  dueDate: PropTypes.string,
  /** Priority level */
  priority: PropTypes.oneOf(['urgent', 'high', 'medium', 'low']),
  /** Current status */
  status: PropTypes.oneOf(['todo', 'in-progress', 'done']),
  /** Callback when status changes */
  onStatusChange: PropTypes.func,
};

export default LeapActionItem;
