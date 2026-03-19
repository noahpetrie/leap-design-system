import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const LeapPagination = ({ totalItems, pageSize = 10, pageSizes = [10, 25, 50], onChange, ...rest }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageSize, setCurrentPageSize] = useState(pageSize);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(totalItems / currentPageSize)),
    [totalItems, currentPageSize]
  );

  const handlePageChange = (newPage) => {
    const clampedPage = Math.max(1, Math.min(newPage, totalPages));
    setCurrentPage(clampedPage);
    onChange?.({ page: clampedPage, pageSize: currentPageSize });
  };

  const handlePageSizeChange = (e) => {
    const newSize = parseInt(e.target.value, 10);
    setCurrentPageSize(newSize);
    setCurrentPage(1);
    onChange?.({ page: 1, pageSize: newSize });
  };

  const startItem = (currentPage - 1) * currentPageSize + 1;
  const endItem = Math.min(currentPage * currentPageSize, totalItems);

  return (
    <div
      className="flex items-center justify-between gap-4 py-3 text-sm text-muted-foreground"
      {...rest}
    >
      <div className="flex items-center gap-2">
        <span>Items per page:</span>
        <select
          className="bg-muted border border-border rounded px-2 py-1 text-sm text-foreground outline-none focus:ring-1 focus:ring-ring"
          value={currentPageSize}
          onChange={handlePageSizeChange}
        >
          {pageSizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      <span>
        {startItem}&ndash;{endItem} of {totalItems} items
      </span>

      <div className="flex items-center gap-1">
        <button
          type="button"
          className={cn(
            'px-3 py-1 border border-border rounded bg-transparent text-foreground cursor-pointer text-sm',
            'hover:bg-accent',
            'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent'
          )}
          disabled={currentPage <= 1}
          onClick={() => handlePageChange(currentPage - 1)}
          aria-label="Previous page"
        >
          &lsaquo;
        </button>
        <span className="px-2 text-foreground">
          {currentPage} / {totalPages}
        </span>
        <button
          type="button"
          className={cn(
            'px-3 py-1 border border-border rounded bg-transparent text-foreground cursor-pointer text-sm',
            'hover:bg-accent',
            'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent'
          )}
          disabled={currentPage >= totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          aria-label="Next page"
        >
          &rsaquo;
        </button>
      </div>
    </div>
  );
};

LeapPagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  pageSize: PropTypes.number,
  pageSizes: PropTypes.arrayOf(PropTypes.number),
  onChange: PropTypes.func,
};

export default LeapPagination;
