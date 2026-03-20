import React from 'react';
import PropTypes from 'prop-types';
import { InlineNotification } from '@carbon/react';

const LeapNotification = ({
  title,
  message,
  kind = 'info',
  timestamp,
  onClose,
  ...rest
}) => {
  return (
    <div
      className="leap-notification"
      style={{
        '--cds-support-success': '#0c8c5e',
        marginBottom: '1rem',
      }}
      {...rest}
    >
      <InlineNotification
        kind={kind}
        title={title}
        subtitle={
          <>
            {message}
            {timestamp && (
              <span
                className="leap-notification-timestamp"
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.32px',
                  display: 'block',
                  marginTop: '0.25rem',
                }}
              >
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
