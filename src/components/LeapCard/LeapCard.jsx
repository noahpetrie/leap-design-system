import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const variantClasses = {
  default: '',
  raised: 'shadow-[0_2px_6px_rgba(0,0,0,0.08)]',
  ai: 'border-[#c6e8d9]',
  danger: 'border-[#da1e28]',
  metric: 'bg-border border-none',
};

const LeapCard = ({
  variant = 'default',
  title,
  subtitle,
  children,
  onClick,
  aiLabel,
  ...rest
}) => {
  const isClickable = !!onClick;
  const Tag = isClickable ? 'button' : 'div';

  return (
    <Tag
      className={cn(
        'border border-border rounded-lg bg-card p-4 text-left w-full',
        variantClasses[variant],
        isClickable && 'cursor-pointer transition-[box-shadow,border-color] duration-150 hover:shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:border-primary focus:outline-2 focus:outline-primary focus:outline-offset-2'
      )}
      onClick={onClick}
      type={isClickable ? 'button' : undefined}
      {...rest}
    >
      {(title || aiLabel) && (
        <div className="flex justify-between items-start mb-3">
          <div className="flex flex-col gap-0.5">
            {title && <span className="text-sm font-semibold text-foreground">{title}</span>}
            {subtitle && <span className="text-xs font-medium text-muted-foreground">{subtitle}</span>}
          </div>
          {aiLabel && <div>{aiLabel}</div>}
        </div>
      )}
      <div className="text-sm text-muted-foreground">{children}</div>
    </Tag>
  );
};

LeapCard.propTypes = {
  variant: PropTypes.oneOf(['default', 'raised', 'ai', 'danger', 'metric']),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  aiLabel: PropTypes.node,
};

export default LeapCard;
