import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const QUADRANTS = {
  'high-low': { label: 'Keep Satisfied', row: 0, col: 0 },
  'high-high': { label: 'Manage Closely', row: 0, col: 1 },
  'low-low': { label: 'Monitor', row: 1, col: 0 },
  'low-high': { label: 'Keep Informed', row: 1, col: 1 },
};

const SENTIMENT_COLORS = {
  positive: 'positive',
  neutral: 'neutral',
  negative: 'negative',
};

const quadrantBg = {
  'high-low': 'bg-[rgba(241,194,27,0.08)]',
  'high-high': 'bg-[rgba(12,140,94,0.08)]',
  'low-low': 'bg-[rgba(141,141,141,0.06)]',
  'low-high': 'bg-[rgba(0,67,206,0.06)]',
};

const dotColors = {
  positive: 'bg-[#0c8c5e]',
  neutral: 'bg-[#8d8d8d]',
  negative: 'bg-[#da1e28]',
};

const LeapStakeholderMap = ({ stakeholders = [] }) => {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const getQuadrantKey = (influence, interest) => `${influence}-${interest}`;

  const quadrantStakeholders = (influence, interest) =>
    stakeholders.filter(
      (s) => s.influence === influence && s.interest === interest
    );

  return (
    <div className="flex flex-col gap-3">
      {/* Hidden y-label (matches original which has display:none) */}
      <div className="grid grid-cols-[auto_1fr] grid-rows-[1fr_auto_auto]">
        {/* Y-axis */}
        <div className="row-start-1 col-start-1 flex flex-col justify-between items-center pr-2 relative">
          <span className="text-[12px] tracking-[0.32px] text-[#525252]">High</span>
          <span className="text-[12px] tracking-[0.32px] text-[#525252]">Low</span>
        </div>

        {/* Grid */}
        <div className="row-start-1 col-start-2 grid grid-cols-2 grid-rows-2 gap-[2px] border border-[#e0e0e0] rounded overflow-hidden min-h-[20rem]">
          {[
            { influence: 'high', interest: 'low' },
            { influence: 'high', interest: 'high' },
            { influence: 'low', interest: 'low' },
            { influence: 'low', interest: 'high' },
          ].map(({ influence, interest }) => {
            const key = getQuadrantKey(influence, interest);
            const quadrant = QUADRANTS[key];
            const members = quadrantStakeholders(influence, interest);

            return (
              <div
                key={key}
                className={cn(
                  'flex flex-col p-3 min-h-[10rem] relative',
                  quadrantBg[key]
                )}
              >
                <span className="text-[14px] font-semibold tracking-[0.16px] text-[#161616] mb-2">
                  {quadrant.label}
                </span>
                <div className="flex flex-wrap gap-2 items-start">
                  {members.map((stakeholder) => (
                    <div
                      key={stakeholder.name}
                      className="relative inline-flex"
                      onMouseEnter={() => setActiveTooltip(stakeholder.name)}
                      onMouseLeave={() => setActiveTooltip(null)}
                      onFocus={() => setActiveTooltip(stakeholder.name)}
                      onBlur={() => setActiveTooltip(null)}
                    >
                      <div
                        className={cn(
                          'w-4 h-4 rounded-full border-2 border-white cursor-default transition-transform shadow-[0_1px_3px_rgba(0,0,0,0.12)] hover:scale-125 focus:scale-125 focus:outline-none',
                          dotColors[stakeholder.sentiment || 'neutral']
                        )}
                        role="img"
                        aria-label={`${stakeholder.name}: ${stakeholder.sentiment} sentiment`}
                        tabIndex={0}
                      />
                      {activeTooltip === stakeholder.name && (
                        <div className="absolute bottom-[calc(100%+6px)] left-1/2 -translate-x-1/2 bg-[#1a1a18] text-white text-[12px] tracking-[0.32px] px-2 py-1 rounded whitespace-nowrap z-10 pointer-events-none after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-[#1a1a18]">
                          {stakeholder.name}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* X-axis */}
        <div className="row-start-2 col-start-2 flex justify-between pt-1">
          <span className="text-[12px] tracking-[0.32px] text-[#525252]">Low</span>
          <span className="text-[12px] tracking-[0.32px] text-[#525252]">High</span>
        </div>

        {/* X-label */}
        <div className="row-start-3 col-start-2 text-center pt-1">
          <span className="text-[14px] font-semibold tracking-[0.16px] text-[#1a1a18]">Interest</span>
        </div>
      </div>

      {/* Legend */}
      <div className="flex gap-4 justify-center">
        <div className="flex items-center gap-1">
          <span className={cn('w-2.5 h-2.5 rounded-full inline-block', dotColors.positive)} />
          <span className="text-[12px] tracking-[0.32px] text-[#525252]">Positive</span>
        </div>
        <div className="flex items-center gap-1">
          <span className={cn('w-2.5 h-2.5 rounded-full inline-block', dotColors.neutral)} />
          <span className="text-[12px] tracking-[0.32px] text-[#525252]">Neutral</span>
        </div>
        <div className="flex items-center gap-1">
          <span className={cn('w-2.5 h-2.5 rounded-full inline-block', dotColors.negative)} />
          <span className="text-[12px] tracking-[0.32px] text-[#525252]">Negative</span>
        </div>
      </div>
    </div>
  );
};

LeapStakeholderMap.propTypes = {
  stakeholders: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      influence: PropTypes.oneOf(['high', 'low']).isRequired,
      interest: PropTypes.oneOf(['high', 'low']).isRequired,
      sentiment: PropTypes.oneOf(['positive', 'neutral', 'negative']),
    })
  ),
};

export default LeapStakeholderMap;
