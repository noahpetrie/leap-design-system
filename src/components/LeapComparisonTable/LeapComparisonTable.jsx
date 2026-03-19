import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const LeapComparisonTable = ({ options, criteria }) => {
  if (!options || !criteria || options.length === 0 || criteria.length === 0) {
    return null;
  }

  return (
    <div className="bg-white border border-border rounded-lg p-4 max-w-[900px]">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-xs font-semibold text-left p-3 px-4 text-muted-foreground border-b-2 border-border whitespace-nowrap">
                Criteria
              </th>
              {options.map((opt) => (
                <th
                  key={opt.name}
                  className={cn(
                    'text-sm font-semibold text-center p-3 px-4 text-foreground border-b-2 border-border align-bottom min-w-[140px]',
                    opt.recommended && 'bg-primary/5 border-b-primary'
                  )}
                >
                  <span className="block">{opt.name}</span>
                  {opt.recommended && (
                    <span className="inline-block mt-1 px-2 py-px rounded-full bg-primary text-white text-xs font-semibold">
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
                className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-card'}
              >
                <td className="text-sm p-3 px-4 text-foreground font-semibold whitespace-nowrap border-r border-border">
                  {criterion}
                </td>
                {options.map((opt) => (
                  <td
                    key={`${opt.name}-${criterion}`}
                    className={cn(
                      'text-sm p-3 px-4 text-center text-muted-foreground',
                      opt.recommended && 'bg-primary/[0.04]'
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
