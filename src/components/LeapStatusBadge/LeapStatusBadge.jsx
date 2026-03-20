import React from 'react';
import PropTypes from 'prop-types';
import { Tag } from '@carbon/react';
import {
  CheckmarkFilled,
  CloseFilled,
  Pending,
  ErrorFilled,
  CircleFilled,
} from '@carbon/icons-react';

const statusConfig = {
  approved: { label: 'Approved', tagType: 'green', Icon: CheckmarkFilled },
  denied: { label: 'Denied', tagType: 'red', Icon: CloseFilled },
  pending: { label: 'Pending', tagType: 'warm-gray', Icon: Pending },
  cancelled: { label: 'Cancelled', tagType: 'cool-gray', Icon: ErrorFilled },
  active: { label: 'Active', tagType: 'teal', Icon: CircleFilled },
};

const LeapStatusBadge = ({ status, size = 'md', ...rest }) => {
  const config = statusConfig[status] || statusConfig.pending;
  const { Icon } = config;

  return (
    <Tag type={config.tagType} size={size === 'sm' ? 'sm' : 'md'} {...rest}>
      <Icon size={size === 'sm' ? 10 : 12} style={{ marginRight: '4px' }} />
      {config.label}
    </Tag>
  );
};

LeapStatusBadge.propTypes = {
  status: PropTypes.oneOf(['approved', 'denied', 'pending', 'cancelled', 'active']).isRequired,
  size: PropTypes.oneOf(['sm', 'md']),
};

export default LeapStatusBadge;
