import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Checkmark,
  ErrorFilled,
  WarningFilled,
  InformationFilled,
  Close,
} from '@carbon/icons-react';
import { cn } from '../../lib/utils';

const iconMap = {
  success: Checkmark,
  error: ErrorFilled,
  warning: WarningFilled,
  info: InformationFilled,
};

const KIND_BORDER_COLORS = {
  success: 'border-l-[#0c8c5e]',
  error: 'border-l-[#da1e28]',
  warning: 'border-l-[#f1c21b]',
  info: 'border-l-[#4589ff]',
};

const KIND_ICON_COLORS = {
  success: 'fill-[#0c8c5e]',
  error: 'fill-[#da1e28]',
  warning: 'fill-[#f1c21b]',
  info: 'fill-[#4589ff]',
};

const KIND_LOW_CONTRAST_BG = {
  success: 'bg-[rgba(12,140,94,0.1)]',
  error: 'bg-[rgba(218,30,40,0.1)]',
  warning: 'bg-[rgba(241,194,27,0.1)]',
  info: 'bg-[rgba(69,137,255,0.1)]',
};

/**
 * LeapInlineNotification — A compact inline notification/alert that
 * communicates success, error, warning, or informational messages
 * with a colored border stripe, icon, and optional close button.
 */
const LeapInlineNotification = ({
  kind = 'info',
  title,
  subtitle,
  closable = true,
  onClose,
  lowContrast = false,
  className,
  ...rest
}) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const Icon = iconMap[kind];

  const handleClose = (e) => {
    setVisible(false);
    if (onClose) onClose(e);
  };

  return (
    <div
      className={cn(
        'flex items-start py-[0.75rem] px-[1rem] mb-[0.75rem] border-l-[3px] gap-[0.5rem]',
        lowContrast && KIND_LOW_CONTRAST_BG[kind],
        KIND_BORDER_COLORS[kind],
        className,
      )}
      style={lowContrast ? undefined : { backgroundColor: 'var(--cds-layer, #ffffff)' }}
      role="alert"
      {...rest}
    >
      <Icon className={cn('shrink-0 mt-[0.125rem]', KIND_ICON_COLORS[kind])} size={20} />
      <div className="flex flex-col flex-1 gap-[0.25rem]">
        {title && (
          <span className="text-[14px] font-semibold tracking-[0.16px] text-[#161616]">
            {title}
          </span>
        )}
        {subtitle && (
          <span className="text-[14px] tracking-[0.16px] text-[#525252]">
            {subtitle}
          </span>
        )}
      </div>
      {closable && (
        <button
          type="button"
          className="flex items-center justify-center shrink-0 w-[1.5rem] h-[1.5rem] p-0 border-none rounded-none bg-transparent cursor-pointer text-[#161616] hover:bg-[#e8e8e8] focus:outline-2 focus:outline-[#0c8c5e] focus:-outline-offset-2"
          aria-label="Close notification"
          onClick={handleClose}
        >
          <Close size={16} />
        </button>
      )}
    </div>
  );
};

LeapInlineNotification.propTypes = {
  /** The notification variant. */
  kind: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
  /** Bold heading text. */
  title: PropTypes.string,
  /** Body / descriptive text. */
  subtitle: PropTypes.string,
  /** Whether to show the close button. */
  closable: PropTypes.bool,
  /** Callback when the notification is closed. */
  onClose: PropTypes.func,
  /** Use a lighter background variant. */
  lowContrast: PropTypes.bool,
  /** Additional CSS class. */
  className: PropTypes.string,
};

export default LeapInlineNotification;
