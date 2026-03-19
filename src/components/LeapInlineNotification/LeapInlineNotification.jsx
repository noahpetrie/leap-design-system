import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Checkmark,
  ErrorFilled,
  WarningFilled,
  InformationFilled,
  Close,
} from '@carbon/react/icons';
import styles from './LeapInlineNotification.module.scss';

const iconMap = {
  success: Checkmark,
  error: ErrorFilled,
  warning: WarningFilled,
  info: InformationFilled,
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

  const classNames = [
    styles['leap-inline-notification'],
    styles[`leap-inline-notification--${kind}`],
    lowContrast ? styles['leap-inline-notification--low-contrast'] : '',
    className || '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames} role="alert" {...rest}>
      <Icon className={styles['leap-inline-notification__icon']} size={20} />
      <div className={styles['leap-inline-notification__content']}>
        {title && (
          <span className={styles['leap-inline-notification__title']}>
            {title}
          </span>
        )}
        {subtitle && (
          <span className={styles['leap-inline-notification__subtitle']}>
            {subtitle}
          </span>
        )}
      </div>
      {closable && (
        <button
          type="button"
          className={styles['leap-inline-notification__close']}
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
