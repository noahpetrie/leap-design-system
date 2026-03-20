import React from 'react';
import PropTypes from 'prop-types';
import { Loading, InlineLoading } from '@carbon/react';

const LeapLoading = ({ active, withOverlay, small, description, status, ...rest }) => {
  if (status) {
    return (
      <div
        className="leap-loading"
        style={{
          '--cds-interactive': '#0c8c5e',
          '--cds-focus': '#0c8c5e',
        }}
        {...rest}
      >
        <InlineLoading status={status} description={description} />
      </div>
    );
  }

  return (
    <div
      className="leap-loading"
      style={{
        '--cds-interactive': '#0c8c5e',
        '--cds-focus': '#0c8c5e',
      }}
      {...rest}
    >
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
