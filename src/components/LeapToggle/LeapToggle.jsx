import React from 'react';
import PropTypes from 'prop-types';
import { Toggle } from '@carbon/react';

import styles from './LeapToggle.module.scss';

const LeapToggle = ({
  id,
  labelText,
  labelA = 'Off',
  labelB = 'On',
  size = 'md',
  disabled = false,
  toggled,
  defaultToggled = false,
  onToggle,
  hideLabel = false,
  ...rest
}) => {
  return (
    <div className={styles['leap-toggle']} {...rest}>
      <Toggle
        id={id}
        labelText={labelText}
        labelA={labelA}
        labelB={labelB}
        size={size}
        disabled={disabled}
        toggled={toggled}
        defaultToggled={defaultToggled}
        onToggle={onToggle}
        hideLabel={hideLabel}
        className={styles['leap-toggle-control']}
      />
    </div>
  );
};

LeapToggle.propTypes = {
  /** Unique identifier for the toggle */
  id: PropTypes.string.isRequired,
  /** Label text for the toggle */
  labelText: PropTypes.string.isRequired,
  /** Text for the off state */
  labelA: PropTypes.string,
  /** Text for the on state */
  labelB: PropTypes.string,
  /** Toggle size */
  size: PropTypes.oneOf(['sm', 'md']),
  /** Whether the toggle is disabled */
  disabled: PropTypes.bool,
  /** Controlled toggled state */
  toggled: PropTypes.bool,
  /** Default toggled state (uncontrolled) */
  defaultToggled: PropTypes.bool,
  /** Callback when toggled */
  onToggle: PropTypes.func,
  /** Whether to visually hide the label */
  hideLabel: PropTypes.bool,
};

export default LeapToggle;
