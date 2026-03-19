import React from 'react';
import PropTypes from 'prop-types';
import { Close } from '@carbon/icons-react';
import { cn } from '../../lib/utils';

const colorMap = {
  green: 'bg-green-100 text-green-800 border-green-300',
  red: 'bg-red-100 text-red-800 border-red-300',
  blue: 'bg-blue-100 text-blue-800 border-blue-300',
  'warm-gray': 'bg-gray-100 text-gray-700 border-gray-300',
  'cool-gray': 'bg-gray-100 text-gray-600 border-gray-300',
  purple: 'bg-purple-100 text-purple-800 border-purple-300',
  teal: 'bg-teal-100 text-teal-800 border-teal-300',
  cyan: 'bg-cyan-100 text-cyan-800 border-cyan-300',
};

const LeapTag = ({ children, type = 'cool-gray', size, filter, onClose, ...rest }) => {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border font-medium',
        size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm',
        colorMap[type] || colorMap['cool-gray']
      )}
      {...rest}
    >
      {children}
      {filter && onClose && (
        <button
          type="button"
          className="ml-1 inline-flex items-center rounded-full p-0.5 hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          onClick={onClose}
          aria-label="Remove"
        >
          <Close size={12} />
        </button>
      )}
    </span>
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
