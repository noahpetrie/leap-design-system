import React from 'react';
import PropTypes from 'prop-types';
import { unstable__ChatButton as CarbonChatButton } from '@carbon/react';
import './LeapChatButton.scss';

/**
 * LeapChatButton — A chat-optimized button with quick-action support,
 * themed with Leap brand colors on top of Carbon's ChatButton.
 */
const LeapChatButton = React.forwardRef(function LeapChatButton(
  { className, children, ...rest },
  ref
) {
  const classNames = ['leap-chat-btn-wrapper', className].filter(Boolean).join(' ');

  return (
    <span className={classNames}>
      <CarbonChatButton ref={ref} {...rest}>
        {children}
      </CarbonChatButton>
    </span>
  );
});

LeapChatButton.propTypes = {
  /** Button content */
  children: PropTypes.node,
  /** Additional CSS class */
  className: PropTypes.string,
  /** Whether the button is disabled */
  disabled: PropTypes.bool,
  /** Render as a quick-action button (compact, ghost style) */
  isQuickAction: PropTypes.bool,
  /** Whether the quick-action button is in a selected state */
  isSelected: PropTypes.bool,
  /** Button variant */
  kind: PropTypes.oneOf(['primary', 'secondary', 'danger', 'ghost', 'tertiary']),
  /** Icon component to render */
  renderIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /** Button size */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default LeapChatButton;
