import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const LIKELIHOOD_LABELS = ['Rare', 'Unlikely', 'Possible', 'Likely', 'Almost Certain'];
const IMPACT_LABELS = ['Negligible', 'Minor', 'Moderate', 'Major', 'Severe'];

const getCellColor = (likelihood, impact) => {
  const score = likelihood * impact;
  if (score >= 15) return 'high';
  if (score >= 7) return 'medium';
  return 'low';
};

const cellBgColors = {
  low: 'bg-[#0c8c5e]/[0.18]',
  medium: 'bg-[#f1c21b]/25',
  high: 'bg-[#da1e28]/[0.22]',
};

const LeapRiskMatrix = ({ risks = [], onRiskClick }) => {
  const getRisksForCell = (likelihood, impact) =>
    risks.filter((r) => r.likelihood === likelihood && r.impact === impact);

  return (
    <div className="flex items-stretch gap-2">
      <div className="flex items-center justify-center" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
        <span className="text-[14px] tracking-[0.02em] font-semibold text-[#1a1a18]">Likelihood</span>
      </div>
      <div className="grid grid-cols-[auto_1fr] grid-rows-[1fr_auto_auto] flex-1">
        {/* Y-axis labels */}
        <div className="row-start-1 col-start-1 flex flex-col">
          {[...LIKELIHOOD_LABELS].reverse().map((label) => (
            <div key={label} className="flex-1 flex items-center justify-end pr-2 text-[12px] tracking-[0.32px] text-[#525252] min-h-[3.5rem]">
              {label}
            </div>
          ))}
        </div>

        {/* Grid cells */}
        <div className="row-start-1 col-start-2 grid grid-cols-5 grid-rows-5 gap-[2px] border border-[#e0e0e0] rounded overflow-hidden">
          {[5, 4, 3, 2, 1].map((likelihood) =>
            [1, 2, 3, 4, 5].map((impact) => {
              const cellRisks = getRisksForCell(likelihood, impact);
              const color = getCellColor(likelihood, impact);
              return (
                <div
                  key={`${likelihood}-${impact}`}
                  className={cn(
                    'relative flex flex-col items-center justify-center min-h-[3.5rem] min-w-[3.5rem] p-1 transition-opacity hover:opacity-85',
                    cellBgColors[color]
                  )}
                  title={`Likelihood: ${likelihood}, Impact: ${impact}, Score: ${likelihood * impact}`}
                >
                  <span className="text-[0.625rem] text-[#525252] opacity-60">
                    {likelihood * impact}
                  </span>
                  {cellRisks.length > 0 && (
                    <div className="flex flex-wrap gap-[3px] justify-center mt-0.5">
                      {cellRisks.map((risk) => (
                        <button
                          key={risk.id}
                          className="w-3 h-3 rounded-full bg-[#1a1a18] border-2 border-white cursor-pointer p-0 transition-transform hover:scale-[1.3] hover:shadow-[0_0_0_2px_#0c8c5e] focus:outline-2 focus:outline-[#0c8c5e] focus:outline-offset-1"
                          onClick={() => onRiskClick && onRiskClick(risk)}
                          title={risk.label}
                          type="button"
                          aria-label={`Risk: ${risk.label}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* X-axis labels */}
        <div className="row-start-2 col-start-2 flex">
          {IMPACT_LABELS.map((label) => (
            <div key={label} className="flex-1 text-center pt-1 text-[12px] tracking-[0.32px] text-[#525252]">
              {label}
            </div>
          ))}
        </div>

        {/* X-axis title */}
        <div className="row-start-3 col-start-2 text-center pt-1">
          <span className="text-[14px] tracking-[0.02em] font-semibold text-[#1a1a18]">Impact</span>
        </div>
      </div>
    </div>
  );
};

LeapRiskMatrix.propTypes = {
  risks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
      likelihood: PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
      impact: PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
    })
  ),
  onRiskClick: PropTypes.func,
};

export default LeapRiskMatrix;
