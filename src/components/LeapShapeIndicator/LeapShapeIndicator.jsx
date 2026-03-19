import React from 'react';
import PropTypes from 'prop-types';
import {
  Critical,
  CriticalSeverity,
  DiamondFill,
  LowSeverity,
  Caution,
  CircleFill,
  CircleStroke,
} from '@carbon/react/icons';
import styles from './LeapShapeIndicator.module.scss';

export const SHAPE_INDICATOR_KINDS = [
  'failed',
  'critical',
  'high',
  'medium',
  'low',
  'cautious',
  'undefined',
  'stable',
  'informative',
  'incomplete',
  'draft',
];

/* Custom incomplete icon (half-filled circle) */
const IncompleteIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" aria-hidden="true" {...props}>
    <path fill="#fff" fillOpacity={0.01} d="M0 0h16v16H0z" style={{ mixBlendMode: 'multiply' }} />
    <path fill="#161616" d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2Zm0 2a4.004 4.004 0 0 1 4 4H4a4.004 4.004 0 0 1 4-4Z" />
  </svg>
);

const shapeTypes = {
  'failed': Critical,
  'critical': CriticalSeverity,
  'high': Caution,
  'medium': DiamondFill,
  'low': LowSeverity,
  'cautious': Caution,
  'undefined': DiamondFill,
  'stable': CircleFill,
  'informative': LowSeverity,
  'incomplete': IncompleteIcon,
  'draft': CircleStroke,
};

/**
 * LeapShapeIndicator — Displays a severity/status shape with a label,
 * using distinct geometric shapes to convey priority levels.
 */
const LeapShapeIndicator = React.forwardRef(function LeapShapeIndicator(
  { className, kind, label, textSize = 12 },
  ref
) {
  const ShapeForKind = shapeTypes[kind];
  if (!ShapeForKind) return null;

  const classNames = [
    styles['leap-shape-indicator'],
    textSize === 14 ? styles['leap-shape-indicator--14'] : '',
    className || '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames} ref={ref}>
      <ShapeForKind
        size={16}
        className={styles[`leap-shape-indicator--${kind}`]}
      />
      {label}
    </div>
  );
});

LeapShapeIndicator.propTypes = {
  className: PropTypes.string,
  /** Severity/status kind determining the shape and color */
  kind: PropTypes.oneOf(SHAPE_INDICATOR_KINDS).isRequired,
  /** Text label displayed next to the shape */
  label: PropTypes.string.isRequired,
  /** Text size variant */
  textSize: PropTypes.oneOf([12, 14]),
};

export default LeapShapeIndicator;
