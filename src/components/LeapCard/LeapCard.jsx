import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const variantClasses = {
  default: '',
  raised: 'shadow-[0_2px_6px_rgba(0,0,0,0.08)]',
  ai: 'border-[#c6e8d9]',
  danger: 'border-[#da1e28]',
  metric: 'bg-[#e0e0e0] border-none',
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
        'border border-[var(--cds-border-subtle,#e0e0e0)] rounded-[8px] p-[1rem] text-left w-full',
        variantClasses[variant],
        isClickable && 'cursor-pointer transition-[box-shadow,border-color] duration-150 hover:shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:border-[#0c8c5e] focus:outline-2 focus:outline-[#0c8c5e] focus:outline-offset-2'
      )}
      style={{ backgroundColor: 'var(--cds-layer, #ffffff)' }}
      onClick={onClick}
      type={isClickable ? 'button' : undefined}
      {...rest}
    >
      {(title || aiLabel) && (
        <div className="flex justify-between items-start mb-[0.75rem]">
          <div className="flex flex-col gap-[0.125rem]">
            {title && <span className="text-[0.875rem] leading-[1.125rem] tracking-[0.16px] font-semibold text-[var(--cds-text-primary,#161616)]">{title}</span>}
            {subtitle && <span className="text-[0.75rem] leading-[1rem] tracking-[0.32px] text-[#525252]">{subtitle}</span>}
          </div>
          {aiLabel && <div>{aiLabel}</div>}
        </div>
      )}
      <div className="text-[0.875rem] leading-[1.125rem] tracking-[0.16px] text-[#525252]">{children}</div>
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
