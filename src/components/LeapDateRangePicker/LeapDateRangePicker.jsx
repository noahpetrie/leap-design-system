import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker, DatePickerInput } from '@carbon/react';

const LeapDateRangePicker = ({
  startLabel = 'Start date',
  endLabel = 'End date',
  onChange,
  ...rest
}) => {
  return (
    <div style={{ '--cds-focus': '#0c8c5e', '--cds-interactive': '#0c8c5e' }} {...rest}>
      <DatePicker datePickerType="range" onChange={onChange}>
        <DatePickerInput id="start" labelText={startLabel} placeholder="mm/dd/yyyy" />
        <DatePickerInput id="end" labelText={endLabel} placeholder="mm/dd/yyyy" />
      </DatePicker>
    </div>
  );
};

LeapDateRangePicker.propTypes = {
  startLabel: PropTypes.string,
  endLabel: PropTypes.string,
  onChange: PropTypes.func,
};

export default LeapDateRangePicker;
