import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const kindStyles = {
  success: {
    container: 'bg-primary/10 border-primary',
    icon: 'text-primary',
    title: 'text-primary',
  },
  error: {
    container: 'bg-destructive/10 border-destructive',
    icon: 'text-destructive',
    title: 'text-destructive',
  },
  warning: {
    container: 'bg-yellow-50 border-yellow-600',
    icon: 'text-yellow-600',
    title: 'text-yellow-700',
  },
  info: {
    container: 'bg-blue-50 border-blue-600',
    icon: 'text-blue-600',
    title: 'text-blue-700',
  },
};

const kindLabels = {
  success: 'Success',
  error: 'Error',
  warning: 'Warning',
  info: 'Information',
};

const LeapNotification = ({
  title,
  message,
  kind = 'info',
  timestamp,
  onClose,
  ...rest
}) => {
  const styles = kindStyles[kind] || kindStyles.info;

  return (
    <div
      className={cn(
        'flex items-start gap-3 rounded border-l-[3px] px-4 py-3 mb-3',
        styles.container
      )}
      role="status"
      aria-label={`${kindLabels[kind]}: ${title}`}
      {...rest}
    >
      <div className="flex-1 min-w-0">
        <p className={cn('text-sm font-semibold m-0', styles.title)}>
          {title}
        </p>
        <p className="text-sm text-muted-foreground mt-1 mb-0">{message}</p>
        {timestamp && (
          <span className="text-xs font-medium block text-muted-foreground mt-1">
            {timestamp}
          </span>
        )}
      </div>
      {onClose && (
        <button
          type="button"
          className="bg-transparent border-none cursor-pointer text-muted-foreground hover:text-foreground p-0 text-lg leading-none flex-shrink-0"
          onClick={onClose}
          aria-label="Close notification"
        >
          &times;
        </button>
      )}
    </div>
  );
};

LeapNotification.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  kind: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
  timestamp: PropTypes.string,
  onClose: PropTypes.func,
};

export default LeapNotification;
