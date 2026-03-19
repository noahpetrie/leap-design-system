import React from 'react';
import PropTypes from 'prop-types';
import {
  Toggletip,
  ToggletipButton,
  ToggletipContent,
  ToggletipActions,
  IconButton,
} from '@carbon/react';
import { Undo } from '@carbon/react/icons';
import styles from './LeapAILabel.module.scss';

/**
 * LeapAILabelContent — Renders the popover body content for LeapAILabel.
 */
export const LeapAILabelContent = ({ className, children }) => {
  return (
    <ToggletipContent
      className={[styles['leap-ai-label-content'], className].filter(Boolean).join(' ')}>
      {children}
    </ToggletipContent>
  );
};

LeapAILabelContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

/**
 * LeapAILabelActions — Renders the popover toolbar/actions for LeapAILabel.
 */
export const LeapAILabelActions = ({ className, children }) => {
  return (
    <ToggletipActions
      className={[styles['leap-ai-label-actions'], className].filter(Boolean).join(' ')}>
      {children}
    </ToggletipActions>
  );
};

LeapAILabelActions.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

/**
 * LeapAILabel — An AI indicator badge with a toggletip popover,
 * used to mark AI-generated or AI-assisted content in the Leap platform.
 */
const LeapAILabel = React.forwardRef(function LeapAILabel(
  {
    aiText = 'AI',
    textLabel,
    align,
    autoAlign = true,
    children,
    className,
    kind = 'default',
    onRevertClick,
    revertActive,
    revertLabel = 'Revert to AI input',
    size = 'xs',
    ...rest
  },
  ref
) {
  const wrapperClasses = [
    styles['leap-ai-label'],
    revertActive ? styles['leap-ai-label--revert'] : '',
    className || '',
  ]
    .filter(Boolean)
    .join(' ');

  const buttonClasses = [
    styles['leap-ai-label__button'],
    styles[`leap-ai-label__button--${size}`],
    styles[`leap-ai-label__button--${kind}`],
    kind === 'inline' && textLabel ? styles['leap-ai-label__button--inline-with-content'] : '',
  ]
    .filter(Boolean)
    .join(' ');

  const ariaLabelText = !textLabel
    ? `${aiText} Show information`
    : `${aiText} ${textLabel}`;

  return (
    <div className={wrapperClasses} ref={ref}>
      {revertActive ? (
        <IconButton
          onClick={onRevertClick}
          kind="ghost"
          size="sm"
          label={revertLabel}
          {...rest}>
          <Undo />
        </IconButton>
      ) : (
        <Toggletip align={align} autoAlign={autoAlign} {...rest}>
          <ToggletipButton className={buttonClasses} label={kind === 'inline' ? '' : ariaLabelText}>
            <span className={styles['leap-ai-label__text']}>{aiText}</span>
            {kind === 'inline' && textLabel && (
              <span className={styles['leap-ai-label__additional-text']}>{textLabel}</span>
            )}
          </ToggletipButton>
          {children}
        </Toggletip>
      )}
    </div>
  );
});

LeapAILabel.propTypes = {
  /** Text shown on the AI badge */
  aiText: PropTypes.string,
  /** Popover alignment relative to the trigger */
  align: PropTypes.oneOf([
    'top', 'top-start', 'top-end',
    'bottom', 'bottom-start', 'bottom-end',
    'left', 'left-start', 'left-end',
    'right', 'right-start', 'right-end',
  ]),
  /** Auto-align popover if not visible */
  autoAlign: PropTypes.bool,
  /** Popover body content (use LeapAILabelContent and LeapAILabelActions) */
  children: PropTypes.node,
  /** Additional CSS class */
  className: PropTypes.string,
  /** Label style: default badge or inline text */
  kind: PropTypes.oneOf(['default', 'inline']),
  /** Callback when the revert button is clicked */
  onRevertClick: PropTypes.func,
  /** Show the revert/undo button instead of the AI badge */
  revertActive: PropTypes.bool,
  /** Tooltip text for the revert button */
  revertLabel: PropTypes.string,
  /** Badge size */
  size: PropTypes.oneOf(['mini', '2xs', 'xs', 'sm', 'md', 'lg', 'xl']),
  /** Additional inline text next to the AI label */
  textLabel: PropTypes.string,
};

export default LeapAILabel;
