import React from 'react';
import PropTypes from 'prop-types';
import { TextArea } from '@carbon/react';

const LeapTextArea = ({ id, labelText, placeholder, value, onChange, rows, maxCount, disabled, ...rest }) => {
  return (
    <div style={{ '--cds-interactive': '#0c8c5e', '--cds-focus': '#0c8c5e' }} {...rest}>
      <TextArea
        id={id}
        labelText={labelText}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        maxCount={maxCount}
        disabled={disabled}
        enableCounter={!!maxCount}
      />
    </div>
  );
};

LeapTextArea.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  rows: PropTypes.number,
  maxCount: PropTypes.number,
  disabled: PropTypes.bool,
};

export default LeapTextArea;
