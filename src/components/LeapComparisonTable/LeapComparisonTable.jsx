import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const LeapComparisonTable = ({ options, criteria }) => {
  if (!options || !criteria || options.length === 0 || criteria.length === 0) {
    return null;
  }

  return (
    <div className="border border-[var(--cds-border-subtle,#e0e0e0)] rounded-lg p-4 max-w-[900px]" style={{ backgroundColor: 'var(--cds-layer, #ffffff)' }}>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-xs leading-4 tracking-[0.32px] font-semibold text-left p-3 px-4 text-[#525252] border-b-2 border-[var(--cds-border-subtle,#e0e0e0)] whitespace-nowrap">
                Criteria
              </th>
              {options.map((opt) => (
                <th
                  key={opt.name}
                  className={cn(
                    'text-sm leading-[1.125rem] tracking-[0.16px] font-semibold text-center p-3 px-4 text-[var(--cds-text-primary,#161616)] border-b-2 border-[var(--cds-border-subtle,#e0e0e0)] align-bottom min-w-[140px]',
                    opt.recommended && 'bg-[#0c8c5e]/[0.06] border-b-[#0c8c5e]'
                  )}
                >
                  <span className="block">{opt.name}</span>
                  {opt.recommended && (
                    <span className="inline-block mt-1 px-2 py-px rounded-full bg-[#0c8c5e] text-white text-xs leading-4 tracking-[0.32px] font-semibold">
                      Recommended
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {criteria.map((criterion, rowIdx) => (
              <tr
                key={criterion}
                style={rowIdx % 2 === 0 ? { backgroundColor: 'var(--cds-layer, #ffffff)' } : { backgroundColor: 'var(--cds-layer-02, #f4f4f4)' }}
              >
                <td className="text-sm leading-[1.125rem] tracking-[0.16px] p-3 px-4 text-[var(--cds-text-primary,#161616)] font-semibold whitespace-nowrap border-r border-[var(--cds-border-subtle,#e0e0e0)]">
                  {criterion}
                </td>
                {options.map((opt) => (
                  <td
                    key={`${opt.name}-${criterion}`}
                    className={cn(
                      'text-sm leading-[1.125rem] tracking-[0.16px] p-3 px-4 text-center text-[#525252]',
                      opt.recommended && 'bg-[#0c8c5e]/[0.04]'
                    )}
                  >
                    {opt.values[criterion] !== undefined
                      ? opt.values[criterion]
                      : '\u2014'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

LeapComparisonTable.propTypes = {
  /** Array of option objects with name, values map, and optional recommended flag */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      values: PropTypes.object.isRequired,
      recommended: PropTypes.bool,
    })
  ).isRequired,
  /** Array of criteria strings used as row labels */
  criteria: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default LeapComparisonTable;
