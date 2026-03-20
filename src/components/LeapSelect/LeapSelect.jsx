import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '@carbon/react';

const LeapSelect = ({ id, titleText, label = 'Choose an option', items = [], onChange, size = 'md', disabled, ...rest }) => {
  const dropdownItems = items.map((item) => typeof item === 'string' ? { id: item, label: item } : item);

  return (
    <div style={{ '--cds-focus': '#0c8c5e', '--cds-interactive': '#0c8c5e' }} {...rest}>
      <Dropdown
        id={id}
        titleText={titleText}
        label={label}
        items={dropdownItems}
        itemToString={(item) => (item ? item.label : '')}
        onChange={({ selectedItem }) => onChange && onChange(selectedItem)}
        size={size}
        disabled={disabled}
      />
    </div>
  );
};

LeapSelect.propTypes = {
  id: PropTypes.string.isRequired,
  titleText: PropTypes.string,
  label: PropTypes.string,
  items: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
};

export default LeapSelect;
