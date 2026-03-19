import React from 'react';
import PropTypes from 'prop-types';
import styles from './LeapProgressBar.module.scss';

const LeapProgressBar = ({
  value,
  label,
  helperText,
  showValue = true,
  size = 'md',
  status = 'active',
  indeterminate = false,
  ...rest
}) => {
  const clampedValue = indeterminate ? undefined : Math.min(100, Math.max(0, value ?? 0));

  return (
    <div className={styles['leap-progress-bar']} {...rest}>
      {(label || (showValue && !indeterminate)) && (
        <div className={styles['leap-progress-bar__header']}>
          {label && <span className={styles['leap-progress-bar__label']}>{label}</span>}
          {showValue && !indeterminate && (
            <span className={styles['leap-progress-bar__value']}>{clampedValue}%</span>
          )}
        </div>
      )}
      <div
        className={`${styles['leap-progress-bar__track']} ${styles[`leap-progress-bar__track--${size}`]}`}
        role="progressbar"
        aria-valuenow={indeterminate ? undefined : clampedValue}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label || 'Progress'}
      >
        <div
          className={[
            styles['leap-progress-bar__fill'],
            styles[`leap-progress-bar__fill--${status}`],
            indeterminate ? styles['leap-progress-bar__fill--indeterminate'] : '',
          ]
            .filter(Boolean)
            .join(' ')}
          style={indeterminate ? undefined : { width: `${clampedValue}%` }}
        />
      </div>
      {helperText && (
        <span className={styles['leap-progress-bar__helper-text']}>{helperText}</span>
      )}
    </div>
  );
};

LeapProgressBar.propTypes = {
  value: PropTypes.number,
  label: PropTypes.string,
  helperText: PropTypes.string,
  showValue: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md']),
  status: PropTypes.oneOf(['active', 'success', 'error']),
  indeterminate: PropTypes.bool,
};

LeapProgressBar.defaultProps = {
  showValue: true,
  size: 'md',
  status: 'active',
  indeterminate: false,
};

export default LeapProgressBar;
