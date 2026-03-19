import React from 'react';
import PropTypes from 'prop-types';
import { Toggletip, ToggletipButton, ToggletipContent } from '@carbon/react';
import { Information } from '@carbon/icons-react';
import styles from './LeapTooltip.module.scss';

const LeapTooltip = ({ label, description, align, children, ...rest }) => {
  return (
    <div className={styles['leap-tooltip']} {...rest}>
      <Toggletip align={align}>
        <ToggletipButton label={label}>
          {children || <Information />}
        </ToggletipButton>
        <ToggletipContent>
          <p>{description}</p>
        </ToggletipContent>
      </Toggletip>
    </div>
  );
};

LeapTooltip.propTypes = {
  label: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  align: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  children: PropTypes.node,
};

LeapTooltip.defaultProps = {
  align: 'top',
};

export default LeapTooltip;
