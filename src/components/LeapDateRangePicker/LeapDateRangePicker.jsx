import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker, DatePickerInput } from '@carbon/react';
import styles from './LeapDateRangePicker.module.scss';

const LeapDateRangePicker = ({
  startLabel = 'Start date',
  endLabel = 'End date',
  onChange,
  ...rest
}) => {
  return (
    <div className={styles['leap-date-range']} {...rest}>
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
