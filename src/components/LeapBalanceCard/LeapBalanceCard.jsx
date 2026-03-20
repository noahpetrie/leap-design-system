import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const LeapBalanceCard = ({ leaveType, used, total, unit = 'days', ...rest }) => {
  const remaining = total - used;
  const percentage = total > 0 ? (used / total) * 100 : 0;
  const isLow = percentage >= 80;

  return (
    <div className="border border-[var(--cds-border-subtle,#e0e0e0)] rounded p-[1rem]" style={{ backgroundColor: 'var(--cds-layer, #ffffff)' }} {...rest}>
      <div className="flex justify-between items-baseline mb-[0.75rem]">
        <span className="text-[0.875rem] leading-[1.125rem] tracking-[0.16px] font-semibold text-[var(--cds-text-primary,#161616)]">{leaveType}</span>
        <span className="text-[0.75rem] leading-[1rem] tracking-[0.32px] text-[#525252]">
          {remaining} {unit} remaining
        </span>
      </div>
      <div className="h-2 bg-[#e0e0e0] rounded overflow-hidden mb-[0.5rem]">
        <div
          className={cn(
            'h-full rounded transition-[width] duration-300 ease-out',
            isLow ? 'bg-[#da1e28]' : 'bg-[#0c8c5e]',
          )}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>
      <div className="text-[0.75rem] leading-[1rem] tracking-[0.32px] flex justify-between text-[#525252]">
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
