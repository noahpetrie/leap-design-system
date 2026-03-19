import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Tag } from '@carbon/react';
import { Close } from '@carbon/react/icons';
import styles from './LeapFilterBar.module.scss';

const LeapFilterBar = ({ filters = [], activeFilters = {}, onChange, onClear, ...rest }) => {
  return (
    <div className={styles['filter-bar']} {...rest}>
      <div className={styles['filter-bar-dropdowns']}>
        {filters.map((filter) => (
          <Dropdown
            key={filter.id}
            id={filter.id}
            titleText=""
            label={filter.label}
            items={filter.options.map((o) => ({ id: o, label: o }))}
            itemToString={(item) => (item ? item.label : '')}
            size="sm"
            onChange={({ selectedItem }) =>
              onChange && onChange(filter.id, selectedItem?.id)
            }
          />
        ))}
      </div>
      {Object.keys(activeFilters).length > 0 && (
        <div className={styles['filter-bar-tags']}>
          {Object.entries(activeFilters).map(([key, value]) => (
            <Tag
              key={key}
              type="cool-gray"
              size="sm"
              filter
              onClose={() => onClear && onClear(key)}
            >
              {key}: {value}
            </Tag>
          ))}
        </div>
      )}
    </div>
  );
};

LeapFilterBar.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  activeFilters: PropTypes.object,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
};

export default LeapFilterBar;
