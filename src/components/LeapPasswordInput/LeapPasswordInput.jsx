import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, ViewOff } from '@carbon/react/icons';
import styles from './LeapPasswordInput.module.scss';

const LeapPasswordInput = ({
  value,
  onChange,
  placeholder = 'Enter password',
  label,
  helperText,
  invalidText,
  invalid = false,
  size = 'md',
  disabled = false,
  ...rest
}) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (!disabled) {
      setVisible((prev) => !prev);
    }
  };

  const wrapperClasses = [
    styles['leap-password-input'],
    styles[`leap-password-input--${size}`],
    invalid ? styles['leap-password-input--invalid'] : '',
    disabled ? styles['leap-password-input--disabled'] : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={wrapperClasses} {...rest}>
      {label && (
        <label className={styles['leap-password-input__label']}>{label}</label>
      )}
      <div className={styles['leap-password-input__field-wrapper']}>
        <input
          type={visible ? 'text' : 'password'}
          className={styles['leap-password-input__input']}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={invalid || undefined}
        />
        <button
          type="button"
          className={styles['leap-password-input__toggle']}
          onClick={toggleVisibility}
          disabled={disabled}
          aria-label={visible ? 'Hide password' : 'Show password'}
        >
          {visible ? <ViewOff size={16} /> : <View size={16} />}
        </button>
      </div>
      {invalid && invalidText && (
        <div className={styles['leap-password-input__error-text']}>
          {invalidText}
        </div>
      )}
      {!invalid && helperText && (
        <div className={styles['leap-password-input__helper-text']}>
          {helperText}
        </div>
      )}
    </div>
  );
};

LeapPasswordInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.string,
  invalidText: PropTypes.string,
  invalid: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
};

export default LeapPasswordInput;
