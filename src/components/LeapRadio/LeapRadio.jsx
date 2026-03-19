import React from 'react';
import PropTypes from 'prop-types';
import { RadioButtonGroup, RadioButton } from '@carbon/react';
import styles from './LeapRadio.module.scss';

const LeapRadio = ({ legendText, name, options = [], defaultSelected, onChange, orientation = 'vertical', ...rest }) => {
  return (
    <div className={styles['leap-radio']} {...rest}>
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
