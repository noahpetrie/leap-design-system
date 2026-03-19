import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const getInitials = (name) =>
  name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

const sizeMap = {
  sm: 24,
  md: 40,
  lg: 64,
  xl: 96,
};

const initialsFontSize = {
  sm: 'text-[10px]',
  md: 'text-sm',
  lg: 'text-[22px]',
  xl: 'text-[32px]',
};

const statusDotSize = {
  sm: 'w-2 h-2',
  md: 'w-2.5 h-2.5',
  lg: 'w-3.5 h-3.5',
  xl: 'w-[18px] h-[18px]',
};

const statusColors = {
  online: 'bg-[#24a148]',
  away: 'bg-[#f1c21b]',
  busy: 'bg-[#da1e28]',
  offline: 'bg-[#8d8d8d]',
};

const LeapAvatar = ({
  name,
  src,
  size = 'md',
  status,
  ...rest
}) => {
  const px = sizeMap[size] || sizeMap.md;

  return (
    <div
      className="relative rounded-full bg-[#f0faf5] text-primary inline-flex items-center justify-center shrink-0 overflow-visible"
      style={{ width: px, height: px }}
      title={name}
      {...rest}
    >
      {src ? (
        <img className="w-full h-full rounded-full object-cover" src={src} alt={name} />
      ) : (
        <span className={cn('font-semibold select-none', initialsFontSize[size])}>
          {getInitials(name)}
        </span>
      )}
      {status && (
        <span
          className={cn(
            'absolute bottom-0 right-0 rounded-full border-2 border-background',
            statusDotSize[size],
            statusColors[status],
          )}
        />
      )}
    </div>
  );
};

LeapAvatar.propTypes = {
  /** Full name — used for initials fallback and title */
  name: PropTypes.string.isRequired,
  /** Image URL — falls back to initials if not provided */
  src: PropTypes.string,
  /** Avatar size */
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  /** Online status indicator */
  status: PropTypes.oneOf(['online', 'away', 'busy', 'offline']),
};

export default LeapAvatar;
