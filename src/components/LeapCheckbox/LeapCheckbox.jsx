import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from '@carbon/react';

const LeapCheckbox = ({ id, labelText, checked, defaultChecked, onChange, disabled, ...rest }) => {
  return (
    <div style={{ '--cds-interactive': '#0c8c5e', '--cds-focus': '#0c8c5e' }} {...rest}>
      <Checkbox id={id} labelText={labelText} checked={checked} defaultChecked={defaultChecked} onChange={onChange} disabled={disabled} />
    </div>
  );
};

LeapCheckbox.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

export default LeapCheckbox;
