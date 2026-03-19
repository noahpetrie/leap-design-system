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
} from '@carbon/react/icons';
import styles from './LeapIconIndicator.module.scss';

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

  const classNames = [
    styles['leap-icon-indicator'],
    size === 20 ? styles['leap-icon-indicator--20'] : '',
    className || '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames} ref={ref}>
      <IconForKind
        size={size}
        className={styles[`leap-icon-indicator--${kind}`]}
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
