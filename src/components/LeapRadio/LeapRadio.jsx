import React from 'react';
import PropTypes from 'prop-types';
import { RadioButtonGroup, RadioButton } from '@carbon/react';

const LeapRadio = ({ legendText, name, options = [], defaultSelected, onChange, orientation = 'vertical', ...rest }) => {
  return (
    <div style={{ '--cds-interactive': '#0c8c5e', '--cds-focus': '#0c8c5e' }} {...rest}>
      <RadioButtonGroup legendText={legendText} name={name} defaultSelected={defaultSelected} onChange={onChange} orientation={orientation}>
        {options.map((opt) => (
          <RadioButton key={opt.value} id={`${name}-${opt.value}`} value={opt.value} labelText={opt.label} />
        ))}
      </RadioButtonGroup>
    </div>
  );
};

LeapRadio.propTypes = {
  legendText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })).isRequired,
  defaultSelected: PropTypes.string,
  onChange: PropTypes.func,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
};

export default LeapRadio;
