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
  sent: 'bg-[#0c8c5e]/15 text-[#0c8c5e]',
  cancelled: 'bg-[#fff1f1] text-[#da1e28]',
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
      <div className="border border-[var(--cds-border-subtle,#e0e0e0)] rounded p-4 text-[var(--cds-text-primary,#1a1a18)] font-['IBM_Plex_Sans',sans-serif]" style={{ backgroundColor: 'var(--cds-layer, #ffffff)' }}>
        <h3 className="text-[16px] font-semibold mb-4 text-[#1a1a18]">Communication Plan</h3>
        <p className="text-sm leading-[1.125rem] tracking-[0.16px] text-[#525252] text-center py-6">
          No communications planned yet.
        </p>
      </div>
    );
  }

  return (
    <div className="border border-[var(--cds-border-subtle,#e0e0e0)] rounded p-4 text-[var(--cds-text-primary,#1a1a18)] font-['IBM_Plex_Sans',sans-serif]" style={{ backgroundColor: 'var(--cds-layer, #ffffff)' }}>
      <h3 className="text-[16px] font-semibold mb-4 text-[#1a1a18]">Communication Plan</h3>
      <div className="grid grid-cols-[100px_auto_80px_1fr_90px] gap-3 px-3 py-2 border-b-2 border-[#0c8c5e] text-xs leading-4 tracking-[0.32px] font-semibold text-[#1a1a18]">
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
            className="grid grid-cols-[100px_auto_80px_1fr_90px] gap-3 items-center px-3 py-3 border-b border-[#e0e0e0] transition-colors duration-150 hover:bg-[#e8e8e8]"
          >
            <span className="text-sm leading-[1.125rem] tracking-[0.16px] text-[#525252] whitespace-nowrap">
              {formatDate(comm.date)}
            </span>
            <span>
              <span className="inline-block px-2 py-0.5 rounded-full bg-[#0c8c5e]/[0.12] text-[#0c8c5e] text-xs leading-4 tracking-[0.32px] font-medium whitespace-nowrap">
                {comm.audience}
              </span>
            </span>
            <span className="text-sm leading-[1.125rem] tracking-[0.16px] text-[#1a1a18] font-medium">
              {CHANNEL_LABELS[comm.channel] || comm.channel}
            </span>
            <span className="text-sm leading-[1.125rem] tracking-[0.16px] text-[#525252] overflow-hidden text-ellipsis whitespace-nowrap">
              {comm.message}
            </span>
            <span>
              <span
                className={cn(
                  'inline-block px-2 py-0.5 rounded-full text-xs leading-4 tracking-[0.32px] font-semibold text-center whitespace-nowrap',
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
