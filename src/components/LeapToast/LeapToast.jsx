import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CheckmarkFilled, ErrorFilled, WarningFilled, InformationFilled, Close } from '@carbon/icons-react';
import { cn } from '../../lib/utils';

const iconMap = {
  success: CheckmarkFilled,
  error: ErrorFilled,
  warning: WarningFilled,
  info: InformationFilled,
};

const kindStyles = {
  success: { border: 'border-l-[#0c8c5e]', icon: 'text-[#0c8c5e]' },
  error: { border: 'border-l-[#da1e28]', icon: 'text-[#da1e28]' },
  warning: { border: 'border-l-[#f1c21b]', icon: 'text-[#f1c21b]' },
  info: { border: 'border-l-[#4589ff]', icon: 'text-[#4589ff]' },
};

const LeapToast = ({ title, message, kind = 'info', duration = 5000, onClose, ...rest }) => {
  const [visible, setVisible] = useState(true);
  const Icon = iconMap[kind];
  const styles = kindStyles[kind] || kindStyles.info;

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setVisible(false);
        onClose && onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  if (!visible) return null;

  return (
    <div
      className={cn(
        'flex items-start gap-2 rounded-[4px] border-l-4 px-4 py-3 shadow-[0_4px_12px_rgba(0,0,0,0.12)] max-w-[400px]',
        styles.border
      )}
      style={{ backgroundColor: 'var(--cds-layer, #ffffff)' }}
      role="alert"
      {...rest}
    >
      <Icon size={20} className={cn('mt-px shrink-0', styles.icon)} />
      <div className="flex flex-1 flex-col gap-0.5">
        <span className="text-[14px] font-semibold leading-[18px] tracking-[0.16px] text-[var(--cds-text-primary,#161616)]">{title}</span>
        {message && <span className="text-[14px] leading-[18px] tracking-[0.16px] text-[#525252]">{message}</span>}
      </div>
      <button
        className="shrink-0 border-none bg-transparent p-0.5 text-[#525252] hover:text-[var(--cds-text-primary,#161616)] cursor-pointer"
        onClick={() => { setVisible(false); onClose && onClose(); }}
        aria-label="Dismiss"
      >
        <Close size={16} />
      </button>
    </div>
  );
};

LeapToast.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string,
  kind: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
  duration: PropTypes.number,
  onClose: PropTypes.func,
};

export default LeapToast;
