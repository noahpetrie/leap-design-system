import React from 'react';
import PropTypes from 'prop-types';
import { InlineNotification } from '@carbon/react';
import styles from './LeapNotification.module.scss';

const LeapNotification = ({
  title,
  message,
  kind = 'info',
  timestamp,
  onClose,
  ...rest
}) => {
  return (
    <div className={styles['leap-notification']} {...rest}>
      <InlineNotification
        kind={kind}
        title={title}
        subtitle={
          <>
            {message}
            {timestamp && (
              <span className={styles['leap-notification-timestamp']}>
                {timestamp}
              </span>
            )}
          </>
        }
        onClose={onClose}
        lowContrast
      />
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
