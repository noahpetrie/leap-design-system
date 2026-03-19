import React from 'react';
import PropTypes from 'prop-types';
import styles from './LeapAvatar.module.scss';

const getInitials = (name) =>
  name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

const sizeMap = {
  sm: 24,
  md: 40,
  lg: 64,
  xl: 96,
};

const LeapAvatar = ({
  name,
  src,
  size = 'md',
  status,
  ...rest
}) => {
  const px = sizeMap[size] || sizeMap.md;

  return (
    <div
      className={`${styles['avatar']} ${styles[`avatar--${size}`]}`}
      style={{ width: px, height: px }}
      title={name}
      {...rest}
    >
      {src ? (
        <img className={styles['avatar-image']} src={src} alt={name} />
      ) : (
        <span className={styles['avatar-initials']}>{getInitials(name)}</span>
      )}
      {status && (
        <span
          className={`${styles['avatar-status']} ${styles[`avatar-status--${status}`] || ''}`}
        />
      )}
    </div>
  );
};

LeapAvatar.propTypes = {
  /** Full name — used for initials fallback and title */
  name: PropTypes.string.isRequired,
  /** Image URL — falls back to initials if not provided */
  src: PropTypes.string,
  /** Avatar size */
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  /** Online status indicator */
  status: PropTypes.oneOf(['online', 'away', 'busy', 'offline']),
};

export default LeapAvatar;
