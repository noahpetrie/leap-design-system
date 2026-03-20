import React from 'react';
import PropTypes from 'prop-types';

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
    <div className="border border-[var(--cds-border-subtle,#e0e0e0)] rounded-[8px] p-[1rem] max-w-[720px]" style={{ backgroundColor: 'var(--cds-layer, #ffffff)' }}>
      <div className="flex items-baseline gap-[0.5rem] mb-[1rem]">
        <span className="text-[1.75rem] leading-[2.25rem] font-bold text-[#0c8c5e] tabular-nums">
          {clampedPct}%
        </span>
        <span className="text-[0.875rem] leading-[1.125rem] tracking-[0.08em] text-[#525252] uppercase">
          {currentStage.label}
        </span>
      </div>

      <svg
        className="w-full h-auto"
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
                stroke="#e0e0e0"
                strokeWidth={1}
              />
              <text
                x={PAD.left - 8}
                y={y + 4}
                className="text-[0.75rem] leading-[1rem] tracking-[0.32px]"
                fill="#525252"
                textAnchor="end"
                dominantBaseline="middle"
              >
                {tick}%
              </text>
            </g>
          );
        })}

        {/* Area fill */}
        <path
          d={buildAreaPath()}
          fill="rgba(12, 140, 94, 0.12)"
        />

        {/* Curve line */}
        <path
          d={buildCurvePath()}
          fill="none"
          stroke="#0c8c5e"
          strokeWidth={2.5}
          strokeLinejoin="round"
        />

        {/* Vertical dashed marker */}
        <line
          x1={markerX}
          y1={PAD.top}
          x2={markerX}
          y2={PAD.top + H}
          stroke="#1a1a18"
          strokeWidth={1.5}
          strokeDasharray="6 4"
        />

        {/* Dot on curve */}
        <circle
          cx={markerX}
          cy={markerY}
          r={6}
          fill="#0c8c5e"
          stroke="white"
          strokeWidth={2}
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
                stroke="#525252"
                strokeWidth={1}
              />
              <text
                x={x}
                y={PAD.top + H + 24}
                className="text-[0.75rem] leading-[1rem] tracking-[0.32px] font-semibold"
                fill="#1a1a18"
                textAnchor="middle"
              >
                {stage.label}
              </text>
              <text
                x={x}
                y={PAD.top + H + 40}
                className="text-[0.75rem] leading-[1rem] tracking-[0.32px]"
                fill="#525252"
                textAnchor="middle"
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
