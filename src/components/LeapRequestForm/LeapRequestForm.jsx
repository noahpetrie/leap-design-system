import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  DatePicker,
  DatePickerInput,
  Dropdown,
  TextArea,
  Button,
} from '@carbon/react';

const LeapRequestForm = ({
  leaveTypes = ['Vacation', 'Sick Leave', 'Personal', 'Bereavement'],
  onSubmit,
  onCancel,
  ...rest
}) => {
  const [leaveType, setLeaveType] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ leaveType, startDate, endDate, notes });
    }
  };

  const typeItems = leaveTypes.map((t) => ({ id: t, label: t }));

  return (
    <form
      className="request-form"
      style={{
        '--cds-button-primary': '#0c8c5e',
        '--cds-button-primary-hover': '#096b48',
        '--cds-button-primary-active': '#096b48',
        '--cds-focus': '#0c8c5e',
      }}
      onSubmit={handleSubmit}
      {...rest}
    >
      <div className="request-form-title">New Leave Request</div>
      <div className="request-form-field">
        <Dropdown
          id="leave-type"
          titleText="Leave type"
          label="Select leave type"
          items={typeItems}
          itemToString={(item) => (item ? item.label : '')}
          onChange={({ selectedItem }) => setLeaveType(selectedItem?.id)}
        />
      </div>
      <div className="request-form-dates">
        <DatePicker
          datePickerType="single"
          onChange={([date]) => setStartDate(date)}
        >
          <DatePickerInput
            id="start-date"
            labelText="Start date"
            placeholder="mm/dd/yyyy"
          />
        </DatePicker>
        <DatePicker
          datePickerType="single"
          onChange={([date]) => setEndDate(date)}
        >
          <DatePickerInput
            id="end-date"
            labelText="End date"
            placeholder="mm/dd/yyyy"
          />
        </DatePicker>
      </div>
      <div className="request-form-field">
        <TextArea
          id="notes"
          labelText="Notes (optional)"
          placeholder="Add any additional context..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
        />
      </div>
      <div className="request-form-actions">
        {onCancel && (
          <Button kind="secondary" onClick={onCancel}>
            Cancel
          </Button>
        )}
        <Button type="submit" kind="primary">
          Submit Request
        </Button>
      </div>
    </form>
  );
};

LeapRequestForm.propTypes = {
  leaveTypes: PropTypes.arrayOf(PropTypes.string),
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
};

export default LeapRequestForm;
