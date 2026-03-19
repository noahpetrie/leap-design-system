import React, { useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

/**
 * LeapDialog sub-components
 */
export const DialogHeader = ({ className, children, ...rest }) => (
  <div className={cn('flex items-start justify-between p-6 pb-0', className)} {...rest}>
    {children}
  </div>
);

export const DialogBody = ({ className, children, ...rest }) => (
  <div className={cn('px-6 py-4 text-sm text-foreground', className)} {...rest}>
    {children}
  </div>
);

export const DialogFooter = ({ className, children, ...rest }) => (
  <div className={cn('flex items-center justify-end gap-3 p-6 pt-0', className)} {...rest}>
    {children}
  </div>
);

export const DialogTitle = ({ className, children, ...rest }) => (
  <h2 className={cn('text-lg font-semibold text-foreground', className)} {...rest}>
    {children}
  </h2>
);

export const DialogSubtitle = ({ className, children, ...rest }) => (
  <p className={cn('mt-1 text-sm text-muted-foreground', className)} {...rest}>
    {children}
  </p>
);

export const DialogControls = ({ className, children, ...rest }) => (
  <div className={cn('flex items-center gap-2', className)} {...rest}>
    {children}
  </div>
);

export const DialogCloseButton = ({ className, onClick, ...rest }) => (
  <button
    type="button"
    onClick={onClick}
    className={cn(
      'ml-auto inline-flex h-8 w-8 items-center justify-center rounded text-muted-foreground hover:bg-accent hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring',
      className
    )}
    aria-label="Close"
    {...rest}
  >
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M12 4.7L11.3 4 8 7.3 4.7 4 4 4.7 7.3 8 4 11.3l.7.7L8 8.7l3.3 3.3.7-.7L8.7 8z" />
    </svg>
  </button>
);

/**
 * LeapDialog -- A lightweight dialog built on the native HTML `<dialog>` element,
 * supporting both modal and non-modal modes with Leap brand theming.
 */
const LeapDialog = React.forwardRef(function LeapDialog(
  { className, children, open, modal = true, onClose, onCancel, onRequestClose, focusAfterCloseRef, role = 'dialog', ...rest },
  forwardedRef
) {
  const internalRef = useRef(null);
  const dialogRef = forwardedRef || internalRef;

  const handleClose = useCallback(() => {
    onClose?.();
    onRequestClose?.();
    if (focusAfterCloseRef?.current) {
      focusAfterCloseRef.current.focus();
    }
  }, [onClose, onRequestClose, focusAfterCloseRef]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open) {
      if (modal && !dialog.open) {
        dialog.showModal();
      } else if (!modal && !dialog.open) {
        dialog.show();
      }
    } else if (dialog.open) {
      dialog.close();
    }
  }, [open, modal, dialogRef]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleCancelEvent = (e) => {
      onCancel?.(e);
      handleClose();
    };

    dialog.addEventListener('cancel', handleCancelEvent);
    dialog.addEventListener('close', handleClose);

    return () => {
      dialog.removeEventListener('cancel', handleCancelEvent);
      dialog.removeEventListener('close', handleClose);
    };
  }, [dialogRef, onCancel, handleClose]);

  return (
    <dialog
      ref={dialogRef}
      role={role}
      className={cn(
        'rounded-lg border border-border bg-background p-0 shadow-lg backdrop:bg-black/50',
        'max-w-lg w-full',
        className
      )}
      {...rest}
    >
      {children}
    </dialog>
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
