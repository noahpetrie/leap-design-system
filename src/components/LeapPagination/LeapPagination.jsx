import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from '@carbon/react';
import styles from './LeapPagination.module.scss';

const LeapPagination = ({ totalItems, pageSize, pageSizes, onChange, ...rest }) => {
  return (
    <div className={styles['leap-pagination']} {...rest}>
      <Pagination
        totalItems={totalItems}
        pageSize={pageSize}
        pageSizes={pageSizes}
        onChange={onChange}
      />
    </div>
  );
};

LeapPagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  pageSize: PropTypes.number,
  pageSizes: PropTypes.arrayOf(PropTypes.number),
  onChange: PropTypes.func,
};

LeapPagination.defaultProps = {
  pageSize: 10,
  pageSizes: [10, 25, 50],
};

export default LeapPagination;
