import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CheckmarkFilled, ErrorFilled, WarningFilled, InformationFilled, Close } from '@carbon/react/icons';
import styles from './LeapToast.module.scss';

const iconMap = {
  success: CheckmarkFilled,
  error: ErrorFilled,
  warning: WarningFilled,
  info: InformationFilled,
};

const LeapToast = ({ title, message, kind = 'info', duration = 5000, onClose, ...rest }) => {
  const [visible, setVisible] = useState(true);
  const Icon = iconMap[kind];

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
    <div className={`${styles['toast']} ${styles[`toast--${kind}`]}`} role="alert" {...rest}>
      <Icon size={20} className={styles['toast-icon']} />
      <div className={styles['toast-content']}>
        <span className={styles['toast-title']}>{title}</span>
        {message && <span className={styles['toast-message']}>{message}</span>}
      </div>
      <button
        className={styles['toast-close']}
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
