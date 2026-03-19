import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const LeapBalanceCard = ({ leaveType, used, total, unit = 'days', ...rest }) => {
  const remaining = total - used;
  const percentage = total > 0 ? (used / total) * 100 : 0;
  const isLow = percentage >= 80;

  return (
    <div className="border border-border rounded bg-card p-4" {...rest}>
      <div className="flex justify-between items-baseline mb-3">
        <span className="text-sm font-semibold text-foreground">{leaveType}</span>
        <span className="text-xs font-medium text-muted-foreground">
          {remaining} {unit} remaining
        </span>
      </div>
      <div className="h-2 bg-border rounded overflow-hidden mb-2">
        <div
          className={cn(
            'h-full rounded transition-[width] duration-300 ease-out',
            isLow ? 'bg-destructive' : 'bg-primary',
          )}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>
      <div className="text-xs font-medium flex justify-between text-muted-foreground">
        <span>{used} {unit} used</span>
        <span>{total} {unit} total</span>
      </div>
    </div>
  );
};

LeapBalanceCard.propTypes = {
  leaveType: PropTypes.string.isRequired,
  used: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  unit: PropTypes.oneOf(['days', 'hours']),
};

export default LeapBalanceCard;
