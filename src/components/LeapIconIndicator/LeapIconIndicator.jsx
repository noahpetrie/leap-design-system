import React from 'react';
import PropTypes from 'prop-types';
import {
  ErrorFilled,
  CheckmarkFilled,
  WarningAltFilled,
  WarningAltInvertedFilled,
  UndefinedFilled,
  InProgress,
  Incomplete,
  CircleDash,
  UnknownFilled,
  WarningSquareFilled,
  CheckmarkOutline,
  PendingFilled,
} from '@carbon/icons-react';
import { cn } from '../../lib/utils';

export const ICON_INDICATOR_KINDS = [
  'failed',
  'caution-major',
  'caution-minor',
  'undefined',
  'succeeded',
  'normal',
  'in-progress',
  'incomplete',
  'not-started',
  'pending',
  'unknown',
  'informative',
];

const iconTypes = {
  'failed': ErrorFilled,
  'caution-major': WarningAltInvertedFilled,
  'caution-minor': WarningAltFilled,
  'undefined': UndefinedFilled,
  'succeeded': CheckmarkFilled,
  'normal': CheckmarkOutline,
  'in-progress': InProgress,
  'incomplete': Incomplete,
  'not-started': CircleDash,
  'pending': PendingFilled,
  'unknown': UnknownFilled,
  'informative': WarningSquareFilled,
};

const kindColorMap = {
  'failed': 'fill-[#da1e28]',
  'caution-major': 'fill-[#eb6200]',
  'caution-minor': 'fill-[#f1c21b]',
  'undefined': 'fill-[#8a3ffc]',
  'succeeded': 'fill-[#24a148]',
  'normal': 'fill-[#4589ff]',
  'in-progress': 'fill-[#4589ff]',
  'incomplete': 'fill-[#4589ff]',
  'not-started': 'fill-[#a8a8a8]',
  'pending': 'fill-[#a8a8a8]',
  'unknown': 'fill-[#a8a8a8]',
  'informative': 'fill-[#4589ff]',
};

/**
 * LeapIconIndicator — Displays a status icon with a label,
 * used to communicate system or item status across the Leap platform.
 */
const LeapIconIndicator = React.forwardRef(function LeapIconIndicator(
  { className, kind, label, size = 16 },
  ref
) {
  const IconForKind = iconTypes[kind];
  if (!IconForKind) return null;

  return (
    <div
      className={cn(
        'flex items-center text-muted-foreground',
        size === 20 ? 'text-base' : 'text-sm',
        className
      )}
      ref={ref}
    >
      <IconForKind
        size={size}
        className={cn('self-center mr-2', kindColorMap[kind])}
      />
      {label}
    </div>
  );
});

LeapIconIndicator.propTypes = {
  className: PropTypes.string,
  /** Status kind determining the icon and color */
  kind: PropTypes.oneOf(ICON_INDICATOR_KINDS).isRequired,
  /** Text label displayed next to the icon */
  label: PropTypes.string.isRequired,
  /** Icon size in pixels */
  size: PropTypes.oneOf([16, 20]),
};

export default LeapIconIndicator;
