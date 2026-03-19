import React from 'react';
import PropTypes from 'prop-types';
import { Loading, InlineLoading } from '@carbon/react';
import styles from './LeapLoading.module.scss';

const LeapLoading = ({ active, withOverlay, small, description, status, ...rest }) => {
  if (status) {
    return (
      <div className={styles['leap-loading']} {...rest}>
        <InlineLoading status={status} description={description} />
      </div>
    );
  }

  return (
    <div className={styles['leap-loading']} {...rest}>
      <Loading active={active} withOverlay={withOverlay} small={small} description={description} />
    </div>
  );
};

LeapLoading.propTypes = {
  active: PropTypes.bool,
  withOverlay: PropTypes.bool,
  small: PropTypes.bool,
  description: PropTypes.string,
  status: PropTypes.oneOf(['active', 'finished', 'error']),
};

LeapLoading.defaultProps = {
  active: true,
  withOverlay: false,
  small: false,
  description: 'Loading...',
};

export default LeapLoading;
