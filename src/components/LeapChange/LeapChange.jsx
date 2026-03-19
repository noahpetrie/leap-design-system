import React from 'react';
import PropTypes from 'prop-types';
import { Tag } from '@carbon/react';
import {
  CheckmarkFilled,
  CloseFilled,
  Pending,
  Edit,
  ArrowRight,
} from '@carbon/react/icons';

import styles from './LeapChange.module.scss';

const changeTypeConfig = {
  approved: {
    label: 'Approved',
    tagType: 'green',
    icon: CheckmarkFilled,
  },
  denied: {
    label: 'Denied',
    tagType: 'red',
    icon: CloseFilled,
  },
  modified: {
    label: 'Modified',
    tagType: 'blue',
    icon: Edit,
  },
  pending: {
    label: 'Pending',
    tagType: 'warm-gray',
    icon: Pending,
  },
};

const LeapChange = ({
  employeeName,
  leaveType,
  changeType,
  previousValue,
  newValue,
  timestamp,
  reason,
  ...rest
}) => {
  const config = changeTypeConfig[changeType] || changeTypeConfig.pending;
  const StatusIcon = config.icon;

  return (
    <div className={styles['leap-change']} {...rest}>
      <div className={styles['leap-change-header']}>
        <div>
          <span className={styles['leap-change-employee']}>{employeeName}</span>
          <span className={styles['leap-change-leave-type']}>{leaveType}</span>
        </div>
        <div className={styles['leap-change-badge']}>
          <Tag type={config.tagType} size="sm">
            <StatusIcon size={12} />
            <span>{config.label}</span>
          </Tag>
        </div>
      </div>
      <div className={styles['leap-change-body']}>
        <div className={styles['leap-change-values']}>
          {previousValue && (
            <>
              <div className={styles['leap-change-previous']}>
                <span className={styles['leap-change-label']}>Previous</span>
                <span>{previousValue}</span>
              </div>
              <ArrowRight size={16} className={styles['leap-change-arrow']} />
            </>
          )}
          <div className={styles['leap-change-new']}>
            <span className={styles['leap-change-label']}>
              {previousValue ? 'New' : 'Value'}
            </span>
            <span>{newValue}</span>
          </div>
        </div>
        <div className={styles['leap-change-timestamp']}>{timestamp}</div>
      </div>
      {reason && (
        <div className={styles['leap-change-reason']}>
          <span className={styles['leap-change-label']}>Reason</span>
          <span>{reason}</span>
        </div>
      )}
    </div>
  );
};

LeapChange.propTypes = {
  /** The employee's name */
  employeeName: PropTypes.string.isRequired,
  /** The type of leave (e.g. "Vacation", "Sick", "Personal") */
  leaveType: PropTypes.string.isRequired,
  /** The type of change that occurred */
  changeType: PropTypes.oneOf(['approved', 'denied', 'modified', 'pending'])
    .isRequired,
  /** The previous value before the change */
  previousValue: PropTypes.string,
  /** The new value after the change */
  newValue: PropTypes.string.isRequired,
  /** When the change occurred */
  timestamp: PropTypes.string.isRequired,
  /** Optional reason for the change */
  reason: PropTypes.string,
};

export default LeapChange;
