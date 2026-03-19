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
  success: { border: 'border-l-primary', icon: 'text-primary' },
  error: { border: 'border-l-destructive', icon: 'text-destructive' },
  warning: { border: 'border-l-yellow-400', icon: 'text-yellow-500' },
  info: { border: 'border-l-blue-500', icon: 'text-blue-500' },
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
        'flex items-start gap-2 rounded border-l-4 bg-card p-3 shadow-lg max-w-[400px]',
        styles.border
      )}
      role="alert"
      {...rest}
    >
      <Icon size={20} className={cn('mt-px shrink-0', styles.icon)} />
      <div className="flex flex-1 flex-col gap-0.5">
        <span className="text-sm font-semibold text-foreground">{title}</span>
        {message && <span className="text-sm text-muted-foreground">{message}</span>}
      </div>
      <button
        className="shrink-0 border-none bg-transparent p-0.5 text-muted-foreground hover:text-foreground cursor-pointer"
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
