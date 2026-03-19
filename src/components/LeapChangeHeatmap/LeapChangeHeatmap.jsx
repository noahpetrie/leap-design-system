import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const colorConfig = {
  'dark-green': { cell: 'bg-[#0c8c5e] text-white', swatch: 'bg-[#0c8c5e]' },
  'light-green': { cell: 'bg-[#58b890] text-[#1a1a18]', swatch: 'bg-[#58b890]' },
  yellow: { cell: 'bg-[#f1c21b] text-[#1a1a18]', swatch: 'bg-[#f1c21b]' },
  orange: { cell: 'bg-[#eb6200] text-white', swatch: 'bg-[#eb6200]' },
  red: { cell: 'bg-[#da1e28] text-white', swatch: 'bg-[#da1e28]' },
};

const getColorKey = (value) => {
  if (value >= 80) return 'dark-green';
  if (value >= 60) return 'light-green';
  if (value >= 40) return 'yellow';
  if (value >= 20) return 'orange';
  return 'red';
};

const LeapChangeHeatmap = ({ rows, columns, data }) => {
  if (!rows || !columns || !data) return null;

  return (
    <div className="bg-white border border-border rounded-lg p-4 max-w-[800px]">
      <div className="overflow-x-auto">
        <table className="w-full" style={{ borderCollapse: 'separate', borderSpacing: '3px' }}>
          <thead>
            <tr>
              <th className="bg-transparent" />
              {columns.map((col) => (
                <th key={col} className="text-xs font-semibold text-foreground text-center px-3 py-2 whitespace-nowrap">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIdx) => (
              <tr key={row}>
                <th className="text-xs font-semibold text-foreground text-left px-3 py-2 whitespace-nowrap">
                  {row}
                </th>
                {columns.map((col, colIdx) => {
                  const value = data[rowIdx]?.[colIdx] ?? 0;
                  const colorKey = getColorKey(value);
                  return (
                    <td
                      key={`${row}-${col}`}
                      className={cn(
                        'text-sm text-center p-2 rounded font-semibold min-w-[48px] tabular-nums',
                        colorConfig[colorKey].cell
                      )}
                      title={`${row} / ${col}: ${value}`}
                    >
                      {value}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex gap-4 mt-4 justify-center flex-wrap">
        {[
          { key: 'red', label: '0-19' },
          { key: 'orange', label: '20-39' },
          { key: 'yellow', label: '40-59' },
          { key: 'light-green', label: '60-79' },
          { key: 'dark-green', label: '80-100' },
        ].map(({ key, label }) => (
          <span key={key} className="text-xs font-medium flex items-center gap-1 text-muted-foreground">
            <span className={cn('inline-block w-3.5 h-3.5 rounded-sm', colorConfig[key].swatch)} />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
};

LeapChangeHeatmap.propTypes = {
  /** Department / team names shown as row headers */
  rows: PropTypes.arrayOf(PropTypes.string).isRequired,
  /** Metric names shown as column headers */
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  /** 2D number array [row][col] with values 0-100 */
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
};

export default LeapChangeHeatmap;
