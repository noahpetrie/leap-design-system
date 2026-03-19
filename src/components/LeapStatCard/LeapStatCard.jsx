import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const trendColors = {
  up: 'text-primary',
  down: 'text-destructive',
  neutral: 'text-muted-foreground',
};

const LeapStatCard = ({ label, value, trend, trendDirection, icon: Icon, ...rest }) => {
  return (
    <div className="flex items-center gap-3 border border-border rounded bg-card p-4" {...rest}>
      {Icon && (
        <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
          <Icon size={24} />
        </div>
      )}
      <div className="flex flex-col flex-1">
        <span className="text-base font-semibold text-foreground">{value}</span>
        <span className="text-xs font-medium text-muted-foreground">{label}</span>
      </div>
      {trend && (
        <span className={cn('text-xs font-semibold shrink-0', trendColors[trendDirection || 'neutral'])}>
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
