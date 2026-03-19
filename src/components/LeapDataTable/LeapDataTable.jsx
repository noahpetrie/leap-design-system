import React from 'react';
import PropTypes from 'prop-types';
import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from '@carbon/react';
import styles from './LeapDataTable.module.scss';

const LeapDataTable = ({ rows, headers, onRowClick, ...rest }) => {
  return (
    <div className={styles['leap-data-table']} {...rest}>
      <DataTable rows={rows} headers={headers}>
        {({ rows: tableRows, headers: tableHeaders, getTableProps, getHeaderProps, getRowProps }) => (
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>
                {tableHeaders.map((header) => (
                  <TableHeader key={header.key} {...getHeaderProps({ header })}>
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableRows.map((row) => (
                <TableRow
                  key={row.id}
                  {...getRowProps({ row })}
                  onClick={() => onRowClick && onRowClick(row)}
                  className={onRowClick ? styles['leap-data-table-row--clickable'] : ''}
                >
                  {row.cells.map((cell) => (
                    <TableCell key={cell.id}>{cell.value}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </DataTable>
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
