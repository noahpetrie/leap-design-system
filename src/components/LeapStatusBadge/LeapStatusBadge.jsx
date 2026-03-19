import React from 'react';
import PropTypes from 'prop-types';
import {
  CheckmarkFilled,
  CloseFilled,
  Pending,
  ErrorFilled,
  CircleFilled,
} from '@carbon/icons-react';
import { cn } from '../../lib/utils';

const statusConfig = {
  approved: {
    label: 'Approved',
    Icon: CheckmarkFilled,
    classes: 'bg-green-100 text-green-800 border-green-300',
  },
  denied: {
    label: 'Denied',
    Icon: CloseFilled,
    classes: 'bg-red-100 text-red-800 border-red-300',
  },
  pending: {
    label: 'Pending',
    Icon: Pending,
    classes: 'bg-gray-100 text-gray-700 border-gray-300',
  },
  cancelled: {
    label: 'Cancelled',
    Icon: ErrorFilled,
    classes: 'bg-gray-100 text-gray-600 border-gray-300',
  },
  active: {
    label: 'Active',
    Icon: CircleFilled,
    classes: 'bg-teal-100 text-teal-800 border-teal-300',
  },
};

const LeapStatusBadge = ({ status, size = 'md', ...rest }) => {
  const config = statusConfig[status] || statusConfig.pending;
  const { Icon } = config;

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border font-medium',
        size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm',
        config.classes
      )}
      {...rest}
    >
      <Icon size={size === 'sm' ? 10 : 12} className="mr-1 shrink-0" />
      {config.label}
    </span>
  );
};

LeapStatusBadge.propTypes = {
  status: PropTypes.oneOf(['approved', 'denied', 'pending', 'cancelled', 'active']).isRequired,
  size: PropTypes.oneOf(['sm', 'md']),
};

export default LeapStatusBadge;
