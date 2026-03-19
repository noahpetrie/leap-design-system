import React from 'react';
import PropTypes from 'prop-types';

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
    <div className="flex items-center gap-4 rounded border border-border bg-card p-4" {...rest}>
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary/10 text-sm font-semibold text-primary">
        {avatarUrl ? (
          <img src={avatarUrl} alt={name} className="h-full w-full object-cover" />
        ) : (
          <span>{getInitials(name)}</span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-0.5">
        <span className="text-sm font-semibold text-foreground">{name}</span>
        <span className="text-sm text-muted-foreground">{role}</span>
        {department && (
          <span className="text-xs font-medium text-muted-foreground">
            {department}
          </span>
        )}
      </div>
      {leaveBalance !== undefined && (
        <div className="flex flex-shrink-0 flex-col items-center">
          <span className="text-base font-semibold text-primary">
            {leaveBalance}
          </span>
          <span className="text-xs font-medium text-muted-foreground">
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
