import React from 'react';
import PropTypes from 'prop-types';
import {
  CheckmarkFilled,
  CloseFilled,
  Pending,
  Edit,
  ArrowRight,
} from '@carbon/icons-react';
import { cn } from '../../lib/utils';

const changeTypeConfig = {
  approved: {
    label: 'Approved',
    badgeClasses: 'bg-[#defbe6] text-[#198038]',
    icon: CheckmarkFilled,
  },
  denied: {
    label: 'Denied',
    badgeClasses: 'bg-[#fff1f1] text-[#da1e28]',
    icon: CloseFilled,
  },
  modified: {
    label: 'Modified',
    badgeClasses: 'bg-[#edf5ff] text-[#0043ce]',
    icon: Edit,
  },
  pending: {
    label: 'Pending',
    badgeClasses: 'bg-[#f2f2f2] text-[#6f6f6f]',
    icon: Pending,
  },
};

const LeapChange = ({
  employeeName,
  leaveType,
  changeType,
  previousValue,
  newValue,
  timestamp,
  reason,
  ...rest
}) => {
  const config = changeTypeConfig[changeType] || changeTypeConfig.pending;
  const StatusIcon = config.icon;

  return (
    <div className="border border-border rounded bg-card p-4 mb-4 last:mb-0" {...rest}>
      <div className="flex items-center justify-between mb-3">
        <div>
          <span className="text-sm font-semibold text-foreground mr-2">{employeeName}</span>
          <span className="text-xs font-medium text-muted-foreground">{leaveType}</span>
        </div>
        <div>
          <span className={cn('inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium', config.badgeClasses)}>
            <StatusIcon size={12} />
            <span>{config.label}</span>
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-3">
          {previousValue && (
            <>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-medium text-muted-foreground">Previous</span>
                <span className="text-sm text-muted-foreground line-through">{previousValue}</span>
              </div>
              <ArrowRight size={16} className="fill-muted-foreground shrink-0 mt-3" />
            </>
          )}
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium text-muted-foreground">
              {previousValue ? 'New' : 'Value'}
            </span>
            <span className="text-sm text-foreground">{newValue}</span>
          </div>
        </div>
        <div className="text-xs font-medium text-muted-foreground">{timestamp}</div>
      </div>
      {reason && (
        <div className="flex flex-col gap-1 mt-3 pt-3 border-t border-border text-sm text-foreground">
          <span className="text-xs font-medium text-muted-foreground">Reason</span>
          <span>{reason}</span>
        </div>
      )}
    </div>
  );
};

LeapChange.propTypes = {
  /** The employee's name */
  employeeName: PropTypes.string.isRequired,
  /** The type of leave (e.g. "Vacation", "Sick", "Personal") */
  leaveType: PropTypes.string.isRequired,
  /** The type of change that occurred */
  changeType: PropTypes.oneOf(['approved', 'denied', 'modified', 'pending'])
    .isRequired,
  /** The previous value before the change */
  previousValue: PropTypes.string,
  /** The new value after the change */
  newValue: PropTypes.string.isRequired,
  /** When the change occurred */
  timestamp: PropTypes.string.isRequired,
  /** Optional reason for the change */
  reason: PropTypes.string,
};

export default LeapChange;
