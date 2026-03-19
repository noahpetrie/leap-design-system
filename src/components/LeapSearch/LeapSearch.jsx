import React from 'react';
import PropTypes from 'prop-types';
import { Search } from '@carbon/react';
import styles from './LeapSearch.module.scss';

const LeapSearch = ({
  placeholder = 'Search employees or requests...',
  size = 'md',
  labelText = 'Search',
  onChange,
  onClear,
  value,
  ...rest
}) => {
  return (
    <div className={styles['leap-search']}>
      <Search
        placeholder={placeholder}
        size={size}
        labelText={labelText}
        onChange={onChange}
        onClear={onClear}
        value={value}
        {...rest}
      />
    </div>
  );
};

LeapSearch.propTypes = {
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  labelText: PropTypes.string,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  value: PropTypes.string,
};

export default LeapSearch;
