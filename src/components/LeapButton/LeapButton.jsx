import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@carbon/react';
import styles from './LeapButton.module.scss';

const LeapButton = ({ children, kind = 'primary', size = 'md', ...rest }) => {
  return (
    <div className={styles['leap-button']}>
      <Button kind={kind} size={size} {...rest}>
        {children}
      </Button>
    </div>
  );
};

LeapButton.propTypes = {
  children: PropTypes.node.isRequired,
  kind: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'ghost', 'danger']),
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', '2xl']),
  disabled: PropTypes.bool,
  renderIcon: PropTypes.elementType,
  onClick: PropTypes.func,
};

export default LeapButton;
