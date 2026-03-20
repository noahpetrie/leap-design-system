import React from 'react';
import PropTypes from 'prop-types';
import {
  Toggletip,
  ToggletipButton,
  ToggletipContent,
  ToggletipActions,
  IconButton,
} from '@carbon/react';
import { Undo } from '@carbon/icons-react';

/* Size styles matching the original SCSS (Carbon spacing tokens) */
const sizeStyles = {
  mini:  { padding: '0 0.25rem', borderRadius: '6px', fontSize: '0.625rem', lineHeight: '1rem' },
  '2xs': { padding: '0.125rem 0.25rem', borderRadius: '8px', fontSize: '0.6875rem', lineHeight: '1rem' },
  xs:    { padding: '0.125rem 0.5rem', borderRadius: '10px', fontSize: '0.75rem' },
  sm:    { padding: '0.25rem 0.5rem', borderRadius: '12px' },
  md:    { padding: '0.25rem 1rem', borderRadius: '14px', fontSize: '0.875rem' },
  lg:    { padding: '0.5rem 1rem', borderRadius: '16px', fontSize: '0.875rem' },
  xl:    { padding: '0.5rem 1rem', borderRadius: '18px', fontSize: '0.875rem', fontWeight: 600 },
};

const baseButtonStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.25rem',
  border: 'none',
  cursor: 'pointer',
  background: 'linear-gradient(135deg, #0c8c5e, #096b48)',
  color: '#ffffff',
  fontWeight: 600,
  letterSpacing: '0.02em',
  transition: 'box-shadow 0.15s ease, transform 0.1s ease',
};

const inlineButtonStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.25rem',
  background: 'none',
  border: 'none',
  borderBottom: '1px dashed #0c8c5e',
  borderRadius: 0,
  color: '#0c8c5e',
  fontWeight: 600,
  padding: 0,
  cursor: 'pointer',
  letterSpacing: '0.02em',
};

/**
 * LeapAILabelContent — Renders the popover body content for LeapAILabel.
 */
export const LeapAILabelContent = ({ className, children }) => {
  return (
    <ToggletipContent
      className={className}
      style={{ padding: '1rem', fontSize: '0.875rem', maxWidth: '320px' }}>
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
      className={className}
      style={{ display: 'flex', gap: '0.5rem', padding: '0.5rem 1rem', borderTop: '1px solid #e0e0e0' }}>
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
  const buttonStyle = kind === 'inline'
    ? inlineButtonStyle
    : { ...baseButtonStyle, ...sizeStyles[size] };

  const ariaLabelText = !textLabel
    ? `${aiText} Show information`
    : `${aiText} ${textLabel}`;

  return (
    <div
      className={className}
      ref={ref}
      style={{ display: 'inline-flex', alignItems: 'center', ...(revertActive ? { color: '#0c8c5e' } : {}) }}
    >
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
          <ToggletipButton style={buttonStyle} label={kind === 'inline' ? '' : ariaLabelText}>
            <span>{aiText}</span>
            {kind === 'inline' && textLabel && (
              <span style={{ opacity: 0.85, fontSize: '0.75rem' }}>{textLabel}</span>
            )}
          </ToggletipButton>
          {children}
        </Toggletip>
      )}
    </div>
  );
});

LeapAILabel.propTypes = {
  aiText: PropTypes.string,
  align: PropTypes.oneOf([
    'top', 'top-start', 'top-end',
    'bottom', 'bottom-start', 'bottom-end',
    'left', 'left-start', 'left-end',
    'right', 'right-start', 'right-end',
  ]),
  autoAlign: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  kind: PropTypes.oneOf(['default', 'inline']),
  onRevertClick: PropTypes.func,
  revertActive: PropTypes.bool,
  revertLabel: PropTypes.string,
  size: PropTypes.oneOf(['mini', '2xs', 'xs', 'sm', 'md', 'lg', 'xl']),
  textLabel: PropTypes.string,
};

export default LeapAILabel;
