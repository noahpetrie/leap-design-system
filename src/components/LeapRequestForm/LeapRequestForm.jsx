import React, { useState } from 'react';
import PropTypes from 'prop-types';

const LeapRequestForm = ({
  leaveTypes = ['Vacation', 'Sick Leave', 'Personal', 'Bereavement'],
  onSubmit,
  onCancel,
  ...rest
}) => {
  const [leaveType, setLeaveType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ leaveType, startDate, endDate, notes });
    }
  };

  return (
    <form
      className="border border-border rounded bg-card p-6 max-w-[600px]"
      onSubmit={handleSubmit}
      {...rest}
    >
      <div className="text-base font-semibold text-foreground mb-4">New Leave Request</div>

      <div className="mb-4">
        <label htmlFor="leave-type" className="block text-xs font-medium text-muted-foreground mb-1">
          Leave type
        </label>
        <select
          id="leave-type"
          className="w-full h-10 rounded border border-border bg-muted px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          value={leaveType}
          onChange={(e) => setLeaveType(e.target.value)}
        >
          <option value="" disabled>Select leave type</option>
          {leaveTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="flex gap-4 mb-4 flex-wrap">
        <div className="flex-1 min-w-[140px]">
          <label htmlFor="start-date" className="block text-xs font-medium text-muted-foreground mb-1">
            Start date
          </label>
          <input
            id="start-date"
            type="date"
            className="w-full h-10 rounded border border-border bg-muted px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            placeholder="mm/dd/yyyy"
          />
        </div>
        <div className="flex-1 min-w-[140px]">
          <label htmlFor="end-date" className="block text-xs font-medium text-muted-foreground mb-1">
            End date
          </label>
          <input
            id="end-date"
            type="date"
            className="w-full h-10 rounded border border-border bg-muted px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            placeholder="mm/dd/yyyy"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="notes" className="block text-xs font-medium text-muted-foreground mb-1">
          Notes (optional)
        </label>
        <textarea
          id="notes"
          className="w-full rounded border border-border bg-muted px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-y"
          placeholder="Add any additional context..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
        />
      </div>

      <div className="flex justify-end gap-2 mt-6">
        {onCancel && (
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium rounded border border-border bg-card text-foreground hover:bg-accent transition-colors"
            onClick={onCancel}
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium rounded bg-primary text-primary-foreground hover:bg-primary/80 transition-colors"
        >
          Submit Request
        </button>
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
