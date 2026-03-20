import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const trendColors = {
  up: 'text-[#0c8c5e]',
  down: 'text-[#da1e28]',
  neutral: 'text-[#525252]',
};

const LeapStatCard = ({ label, value, trend, trendDirection, icon: Icon, ...rest }) => {
  return (
    <div className="flex items-center gap-3 border border-[#e0e0e0] rounded bg-[#f4f4f4] p-4" {...rest}>
      {Icon && (
        <div className="w-12 h-12 rounded-full bg-[#f0faf5] text-[#0c8c5e] flex items-center justify-center shrink-0">
          <Icon size={24} />
        </div>
      )}
      <div className="flex flex-col flex-1">
        <span className="text-base font-semibold text-[#161616]">{value}</span>
        <span className="text-[12px] tracking-[0.32px] text-[#525252]">{label}</span>
      </div>
      {trend && (
        <span className={cn('text-[12px] tracking-[0.32px] font-semibold shrink-0', trendColors[trendDirection || 'neutral'])}>
          {trend}
        </span>
      )}
    </div>
  );
};

LeapStatCard.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  trend: PropTypes.string,
  trendDirection: PropTypes.oneOf(['up', 'down', 'neutral']),
  icon: PropTypes.elementType,
};

export default LeapStatCard;
