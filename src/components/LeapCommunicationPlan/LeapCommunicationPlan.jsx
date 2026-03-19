import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const CHANNEL_LABELS = {
  email: 'Email',
  slack: 'Slack',
  meeting: 'Meeting',
  townhall: 'Town Hall',
};

const STATUS_MAP = {
  draft: 'Draft',
  scheduled: 'Scheduled',
  sent: 'Sent',
  cancelled: 'Cancelled',
};

const statusBadgeClasses = {
  draft: 'bg-[#e0e0e0] text-[#525252]',
  scheduled: 'bg-[#d0e2ff] text-[#0043ce]',
  sent: 'bg-primary/15 text-primary',
  cancelled: 'bg-[#fff1f1] text-[#da1e28]',
};

const truncateMessage = (message, maxLength = 80) => {
  if (!message) return '';
  if (message.length <= maxLength) return message;
  return message.substring(0, maxLength).trimEnd() + '\u2026';
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

const LeapCommunicationPlan = ({ communications }) => {
  if (!communications || communications.length === 0) {
    return (
      <div className="bg-background border border-border rounded p-4 text-foreground">
        <h3 className="text-sm font-semibold mb-4 text-foreground">Communication Plan</h3>
        <p className="text-sm text-muted-foreground text-center py-6">
          No communications planned yet.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-background border border-border rounded p-4 text-foreground">
      <h3 className="text-sm font-semibold mb-4 text-foreground">Communication Plan</h3>
      <div className="grid grid-cols-[120px_1fr_100px_2fr_100px] gap-2 px-3 py-2 border-b-2 border-primary text-xs font-semibold text-foreground">
        <span>Date</span>
        <span>Audience</span>
        <span>Channel</span>
        <span>Message</span>
        <span>Status</span>
      </div>
      <ul className="list-none m-0 p-0">
        {communications.map((comm) => (
          <li
            key={comm.id}
            className="grid grid-cols-[120px_1fr_100px_2fr_100px] gap-2 items-center px-3 py-2 border-b border-border transition-colors duration-150 hover:bg-accent"
          >
            <span className="text-sm text-muted-foreground whitespace-nowrap">
              {formatDate(comm.date)}
            </span>
            <span>
              <span className="inline-block px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                {comm.audience}
              </span>
            </span>
            <span className="text-sm text-foreground font-medium">
              {CHANNEL_LABELS[comm.channel] || comm.channel}
            </span>
            <span className="text-sm text-muted-foreground overflow-hidden text-ellipsis whitespace-nowrap">
              {truncateMessage(comm.message)}
            </span>
            <span>
              <span
                className={cn(
                  'inline-block px-2 py-0.5 rounded-full text-xs font-semibold text-center',
                  statusBadgeClasses[comm.status]
                )}
              >
                {STATUS_MAP[comm.status] || comm.status}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

LeapCommunicationPlan.propTypes = {
  communications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      date: PropTypes.string.isRequired,
      audience: PropTypes.string.isRequired,
      channel: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      status: PropTypes.oneOf(['draft', 'scheduled', 'sent', 'cancelled']).isRequired,
    })
  ),
};

LeapCommunicationPlan.defaultProps = {
  communications: [],
};

export default LeapCommunicationPlan;
