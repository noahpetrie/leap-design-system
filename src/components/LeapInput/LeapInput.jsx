import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from '@carbon/react';
import styles from './LeapInput.module.scss';

const LeapInput = ({ id, labelText, placeholder, value, onChange, helperText, invalid, invalidText, disabled, size, ...rest }) => {
  return (
    <div className={styles['leap-input']} {...rest}>
      <TextInput
        id={id}
        labelText={labelText}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        helperText={helperText}
        invalid={invalid}
        invalidText={invalidText}
        disabled={disabled}
        size={size}
      />
    </div>
  );
};

LeapInput.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  helperText: PropTypes.string,
  invalid: PropTypes.bool,
  invalidText: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default LeapInput;
