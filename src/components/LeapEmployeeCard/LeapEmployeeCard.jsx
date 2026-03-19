import React from 'react';
import PropTypes from 'prop-types';
import styles from './LeapEmployeeCard.module.scss';

const getInitials = (name) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

const LeapEmployeeCard = ({
  name,
  role,
  department,
  avatarUrl,
  leaveBalance,
  ...rest
}) => {
  return (
    <div className={styles['employee-card']} {...rest}>
      <div className={styles['employee-card-avatar']}>
        {avatarUrl ? (
          <img src={avatarUrl} alt={name} />
        ) : (
          <span>{getInitials(name)}</span>
        )}
      </div>
      <div className={styles['employee-card-info']}>
        <span className={styles['employee-card-name']}>{name}</span>
        <span className={styles['employee-card-role']}>{role}</span>
        {department && (
          <span className={styles['employee-card-department']}>
            {department}
          </span>
        )}
      </div>
      {leaveBalance !== undefined && (
        <div className={styles['employee-card-balance']}>
          <span className={styles['employee-card-balance-value']}>
            {leaveBalance}
          </span>
          <span className={styles['employee-card-balance-label']}>
            days left
          </span>
        </div>
      )}
    </div>
  );
};

LeapEmployeeCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  department: PropTypes.string,
  avatarUrl: PropTypes.string,
  leaveBalance: PropTypes.number,
};

export default LeapEmployeeCard;
