import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const getInitials = (name) =>
  name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2);

const LeapTeamOverview = ({ members = [], title = "Team today", ...rest }) => {
  const onLeave = members.filter((m) => m.onLeave);
  const available = members.filter((m) => !m.onLeave);

  return (
    <div className="rounded border border-[#e0e0e0] bg-[#f4f4f4] p-4" {...rest}>
      <div className="flex items-baseline justify-between mb-4">
        <span className="text-base font-semibold text-[#161616]">{title}</span>
        <span className="text-[12px] tracking-[0.32px] text-[#525252]">
          {available.length}/{members.length} available
        </span>
      </div>
      {onLeave.length > 0 && (
        <div className="mb-3">
          <span className="block text-[12px] tracking-[0.32px] text-[#525252] mb-2">On leave</span>
          <div className="flex flex-wrap gap-2">
            {onLeave.map((m, i) => (
              <div
                key={i}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff1f1] text-[12px] font-semibold text-[#da1e28] opacity-80 cursor-default"
                title={`${m.name} — ${m.leaveType || 'Leave'}`}
              >
                {getInitials(m.name)}
              </div>
            ))}
          </div>
        </div>
      )}
      <div>
        <span className="block text-[12px] tracking-[0.32px] text-[#525252] mb-2">Available</span>
        <div className="flex flex-wrap gap-2">
          {available.map((m, i) => (
            <div
              key={i}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f0faf5] text-[12px] font-semibold text-[#0c8c5e] cursor-default"
              title={m.name}
            >
              {getInitials(m.name)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

LeapTeamOverview.propTypes = {
  title: PropTypes.string,
  members: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      onLeave: PropTypes.bool,
      leaveType: PropTypes.string,
    })
  ).isRequired,
};

export default LeapTeamOverview;
