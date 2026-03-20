import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const getInitials = (name) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

const LeapEmployeeCard = ({
  name,
  role,
  department,
  avatarUrl,
  leaveBalance,
  ...rest
}) => {
  return (
    <div className="flex items-center gap-4 rounded border border-[#e0e0e0] bg-[#f4f4f4] p-4" {...rest}>
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#f0faf5] text-[14px] font-semibold tracking-[0.16px] text-[#0c8c5e]">
        {avatarUrl ? (
          <img src={avatarUrl} alt={name} className="h-full w-full object-cover" />
        ) : (
          <span>{getInitials(name)}</span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-0.5">
        <span className="text-[14px] font-semibold tracking-[0.16px] text-[#161616]">{name}</span>
        <span className="text-[14px] tracking-[0.16px] text-[#525252]">{role}</span>
        {department && (
          <span className="text-[12px] tracking-[0.32px] text-[#525252]">
            {department}
          </span>
        )}
      </div>
      {leaveBalance !== undefined && (
        <div className="flex flex-shrink-0 flex-col items-center">
          <span className="text-[16px] font-semibold text-[#0c8c5e]">
            {leaveBalance}
          </span>
          <span className="text-[12px] tracking-[0.32px] text-[#525252]">
            days left
          </span>
        </div>
      )}
    </div>
  );
};

LeapEmployeeCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  department: PropTypes.string,
  avatarUrl: PropTypes.string,
  leaveBalance: PropTypes.number,
};

export default LeapEmployeeCard;
