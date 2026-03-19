import React from 'react';
import PropTypes from 'prop-types';
import styles from './LeapAdoptionCurve.module.scss';

const DEFAULT_STAGES = [
  { label: 'Awareness', threshold: 20 },
  { label: 'Understanding', threshold: 40 },
  { label: 'Commitment', threshold: 60 },
  { label: 'Adoption', threshold: 80 },
  { label: 'Reinforcement', threshold: 100 },
];

const SVG_WIDTH = 640;
const SVG_HEIGHT = 340;
const PAD = { top: 40, right: 32, bottom: 64, left: 56 };
const W = SVG_WIDTH - PAD.left - PAD.right;
const H = SVG_HEIGHT - PAD.top - PAD.bottom;

/** Map a 0-100 percentage to an S-curve y value (logistic). */
const sCurve = (t) => 1 / (1 + Math.exp(-12 * (t - 0.5)));

const buildCurvePath = (steps = 100) => {
  const pts = [];
  for (let i = 0; i <= steps; i++) {
    const pct = i / steps;
    const x = PAD.left + pct * W;
    const y = PAD.top + H - sCurve(pct) * H;
    pts.push(`${i === 0 ? 'M' : 'L'}${x.toFixed(2)},${y.toFixed(2)}`);
  }
  return pts.join(' ');
};

const buildAreaPath = (steps = 100) => {
  const line = buildCurvePath(steps);
  const lastX = PAD.left + W;
  const firstX = PAD.left;
  const baseY = PAD.top + H;
  return `${line} L${lastX},${baseY} L${firstX},${baseY} Z`;
};

const LeapAdoptionCurve = ({
  currentPercentage = 50,
  stages = DEFAULT_STAGES,
}) => {
  const clampedPct = Math.max(0, Math.min(100, currentPercentage));
  const markerX = PAD.left + (clampedPct / 100) * W;
  const markerY = PAD.top + H - sCurve(clampedPct / 100) * H;

  const currentStage =
    [...stages].reverse().find((s) => clampedPct >= s.threshold) ||
    stages[0];

  return (
    <div className={styles['leap-adoption-curve']}>
      <div className={styles['leap-adoption-curve__header']}>
        <span className={styles['leap-adoption-curve__percentage']}>
          {clampedPct}%
        </span>
        <span className={styles['leap-adoption-curve__stage-label']}>
          {currentStage.label}
        </span>
      </div>

      <svg
        className={styles['leap-adoption-curve__svg']}
        viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
        role="img"
        aria-label={`Adoption curve at ${clampedPct} percent`}
      >
        {/* Grid lines */}
        {[0, 25, 50, 75, 100].map((tick) => {
          const y = PAD.top + H - (tick / 100) * H;
          return (
            <g key={`y-${tick}`}>
              <line
                x1={PAD.left}
                y1={y}
                x2={PAD.left + W}
                y2={y}
                className={styles['leap-adoption-curve__grid']}
              />
              <text
                x={PAD.left - 8}
                y={y + 4}
                className={styles['leap-adoption-curve__y-label']}
              >
                {tick}%
              </text>
            </g>
          );
        })}

        {/* Area fill */}
        <path
          d={buildAreaPath()}
          className={styles['leap-adoption-curve__area']}
        />

        {/* Curve line */}
        <path
          d={buildCurvePath()}
          className={styles['leap-adoption-curve__line']}
        />

        {/* Vertical dashed marker */}
        <line
          x1={markerX}
          y1={PAD.top}
          x2={markerX}
          y2={PAD.top + H}
          className={styles['leap-adoption-curve__marker']}
        />

        {/* Dot on curve */}
        <circle
          cx={markerX}
          cy={markerY}
          r={6}
          className={styles['leap-adoption-curve__dot']}
        />

        {/* Stage labels along bottom */}
        {stages.map((stage) => {
          const x = PAD.left + (stage.threshold / 100) * W;
          return (
            <g key={stage.label}>
              <line
                x1={x}
                y1={PAD.top + H}
                x2={x}
                y2={PAD.top + H + 8}
                className={styles['leap-adoption-curve__tick']}
              />
              <text
                x={x}
                y={PAD.top + H + 24}
                className={styles['leap-adoption-curve__x-label']}
              >
                {stage.label}
              </text>
              <text
                x={x}
                y={PAD.top + H + 40}
                className={styles['leap-adoption-curve__x-sub']}
              >
                {stage.threshold}%
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

LeapAdoptionCurve.propTypes = {
  /** Current adoption percentage (0-100) */
  currentPercentage: PropTypes.number.isRequired,
  /** Stage definitions with label and threshold */
  stages: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      threshold: PropTypes.number.isRequired,
    })
  ),
};

export default LeapAdoptionCurve;
