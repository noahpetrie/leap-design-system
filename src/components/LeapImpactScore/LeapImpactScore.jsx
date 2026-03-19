import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const SIZE_MAP = {
  sm: { dimension: 80, strokeWidth: 6, fontSize: '1rem' },
  md: { dimension: 128, strokeWidth: 8, fontSize: '1.5rem' },
  lg: { dimension: 180, strokeWidth: 10, fontSize: '2rem' },
};

const SCORE_COLORS = {
  high: '#0c8c5e',
  medium: '#f1c21b',
  low: '#da1e28',
};

const getScoreColor = (score) => {
  if (score >= 70) return 'high';
  if (score >= 40) return 'medium';
  return 'low';
};

const AI_BADGE_SIZE = {
  sm: { badge: 'w-4 h-4', svg: 'w-2 h-2' },
  md: { badge: 'w-5 h-5', svg: 'w-2.5 h-2.5' },
  lg: { badge: 'w-6 h-6', svg: 'w-3 h-3' },
};

const LeapImpactScore = ({ score = 0, label, size = 'md', showAI = false }) => {
  const { dimension, strokeWidth, fontSize } = SIZE_MAP[size] || SIZE_MAP.md;
  const radius = (dimension - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const clampedScore = Math.max(0, Math.min(100, score));
  const offset = circumference - (clampedScore / 100) * circumference;
  const color = getScoreColor(clampedScore);
  const badgeSize = AI_BADGE_SIZE[size] || AI_BADGE_SIZE.md;

  return (
    <div className="inline-flex flex-col items-center gap-2">
      <div className="relative inline-flex items-center justify-center">
        <svg
          width={dimension}
          height={dimension}
          viewBox={`0 0 ${dimension} ${dimension}`}
          aria-label={`Impact score: ${clampedScore} out of 100`}
          role="img"
        >
          <circle
            className="stroke-border"
            cx={dimension / 2}
            cy={dimension / 2}
            r={radius}
            fill="none"
            strokeWidth={strokeWidth}
          />
          <circle
            cx={dimension / 2}
            cy={dimension / 2}
            r={radius}
            fill="none"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            transform={`rotate(-90 ${dimension / 2} ${dimension / 2})`}
            style={{ stroke: SCORE_COLORS[color], transition: 'stroke-dashoffset 0.6s ease' }}
          />
        </svg>
        <div
          className="absolute inset-0 flex items-center justify-center font-semibold text-foreground tabular-nums"
          style={{ fontSize }}
        >
          {clampedScore}
        </div>
        {showAI && (
          <div
            className={cn(
              'absolute top-0 right-0 rounded-full bg-primary text-white flex items-center justify-center shadow-sm',
              badgeSize.badge,
            )}
            title="AI-generated score"
          >
            <svg
              className={badgeSize.svg}
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M8 1l1.796 4.858L15 7.5l-4.02 3.264L12.236 16 8 12.88 3.764 16l1.256-5.236L1 7.5l5.204-1.642L8 1z"
                fill="currentColor"
              />
            </svg>
          </div>
        )}
      </div>
      {label && <span className="text-xs font-medium text-muted-foreground text-center">{label}</span>}
    </div>
  );
};

LeapImpactScore.propTypes = {
  score: PropTypes.number,
  label: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  showAI: PropTypes.bool,
};

export default LeapImpactScore;
