import React from 'react';
import PropTypes from 'prop-types';
import { Tag } from '@carbon/react';

const LeapTag = ({ children, type, size, filter, onClose, ...rest }) => {
  return (
    <div
      className="leap-tag"
      style={{
        '--cds-interactive': '#0c8c5e',
        '--cds-focus': '#0c8c5e',
      }}
      {...rest}
    >
      <Tag type={type} size={size} filter={filter} onClose={onClose}>
        {children}
      </Tag>
    </div>
  );
};

LeapTag.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['green', 'red', 'blue', 'warm-gray', 'cool-gray', 'purple', 'teal', 'cyan']),
  size: PropTypes.oneOf(['sm', 'md']),
  filter: PropTypes.bool,
  onClose: PropTypes.func,
};

export default LeapTag;
