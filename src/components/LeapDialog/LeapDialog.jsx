import React from 'react';
import PropTypes from 'prop-types';
import { preview__Dialog as DialogModule } from '@carbon/react';

const {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogTitle,
  DialogSubtitle,
  DialogControls,
  DialogCloseButton,
} = DialogModule;

// Re-export sub-components for consumers
export { DialogHeader, DialogBody, DialogFooter, DialogTitle, DialogSubtitle, DialogControls, DialogCloseButton };

/**
 * LeapDialog — A lightweight dialog built on the native HTML `<dialog>` element,
 * supporting both modal and non-modal modes with Leap brand theming.
 */
const LeapDialog = React.forwardRef(function LeapDialog(
  { className, children, ...rest },
  ref
) {
  const classNames = ['leap-dialog-wrapper', className].filter(Boolean).join(' ');

  return (
    <div
      className={classNames}
      style={{
        '--cds-button-primary': '#0c8c5e',
        '--cds-button-primary-hover': '#096b48',
        '--cds-button-primary-active': '#054a32',
        '--cds-focus': '#0c8c5e',
        '--cds-interactive': '#0c8c5e',
      }}
    >
      <Dialog ref={ref} {...rest}>
        {children}
      </Dialog>
    </div>
  );
});

LeapDialog.propTypes = {
  /** Dialog content (use DialogHeader, DialogBody, DialogFooter) */
  children: PropTypes.node,
  /** Additional CSS class */
  className: PropTypes.string,
  /** Ref to return focus to after dialog closes */
  focusAfterCloseRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]),
  /** Whether the dialog is modal (blocks interaction behind) */
  modal: PropTypes.bool,
  /** Handler for dialog cancel events */
  onCancel: PropTypes.func,
  /** Handler for dialog close events */
  onClose: PropTypes.func,
  /** Handler for requesting the dialog to close */
  onRequestClose: PropTypes.func,
  /** Whether the dialog is open */
  open: PropTypes.bool,
  /** Role for accessibility */
  role: PropTypes.oneOf(['dialog', 'alertdialog']),
};

export default LeapDialog;
