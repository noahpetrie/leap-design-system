import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const LeapDataTable = ({ rows, headers, onRowClick, ...rest }) => {
  return (
    <div className="w-full" {...rest}>
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr>
            {headers.map((header) => (
              <th
                key={header.key}
                className="bg-card px-4 py-3 text-left text-xs font-semibold text-foreground"
              >
                {header.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.id}
              onClick={() => onRowClick && onRowClick(row)}
              className={cn(
                'border-b border-border',
                onRowClick && 'cursor-pointer hover:bg-accent'
              )}
            >
              {headers.map((header) => (
                <td
                  key={`${row.id}-${header.key}`}
                  className="px-4 py-3 text-foreground"
                >
                  {row[header.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

LeapDataTable.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  headers: PropTypes.arrayOf(
    PropTypes.shape({ key: PropTypes.string, header: PropTypes.string })
  ).isRequired,
  onRowClick: PropTypes.func,
};

export default LeapDataTable;
