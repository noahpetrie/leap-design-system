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
} from '@carbon/icons-react';
import { cn } from '../../lib/utils';

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

const kindColorStyles = {
  failed: { fill: '#da1e28' },
  critical: { fill: '#da1e28' },
  high: { fill: '#da1e28' },
  medium: { fill: '#eb6200' },
  low: { fill: '#f1c21b' },
  cautious: { fill: '#f1c21b' },
  undefined: { fill: '#8a3ffc' },
  stable: { fill: '#24a148' },
  informative: { fill: '#4589ff' },
  incomplete: { fill: '#4589ff' },
  draft: { fill: '#a8a8a8' },
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

  return (
    <div
      className={cn(
        'flex items-center text-muted-foreground',
        textSize === 14 ? 'text-sm' : 'text-xs',
        className
      )}
      ref={ref}
    >
      <ShapeForKind
        size={16}
        className="self-center mr-2"
        style={kindColorStyles[kind]}
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
