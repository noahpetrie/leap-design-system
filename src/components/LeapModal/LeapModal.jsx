import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const LeapModal = ({
  open = false,
  modalHeading,
  primaryButtonText = 'Confirm',
  secondaryButtonText = 'Cancel',
  danger = false,
  children,
  onRequestClose,
  onRequestSubmit,
  ...rest
}) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onRequestClose?.();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onRequestClose]);

  if (!open) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onRequestClose?.();
  };

  return (
    <div
      className="fixed inset-0 z-[9000] flex items-center justify-center bg-black/60"
      onClick={handleOverlayClick}
      {...rest}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={modalHeading}
        className="bg-card rounded-lg shadow-xl w-[500px] max-w-[90vw] max-h-[85vh] flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground m-0">{modalHeading}</h2>
          <button
            type="button"
            className="text-muted-foreground hover:text-foreground bg-transparent border-none cursor-pointer p-1 text-xl leading-none"
            onClick={onRequestClose}
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-4 text-sm text-foreground">
          {children}
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-2 px-6 py-4 border-t border-border">
          <button
            type="button"
            className="px-4 py-2 text-sm rounded border border-border bg-transparent text-foreground cursor-pointer hover:bg-accent"
            onClick={onRequestClose}
          >
            {secondaryButtonText}
          </button>
          <button
            type="button"
            className={cn(
              'px-4 py-2 text-sm rounded border-none text-primary-foreground cursor-pointer font-medium',
              danger
                ? 'bg-destructive hover:bg-destructive/80'
                : 'bg-primary hover:bg-primary/80'
            )}
            onClick={onRequestSubmit}
          >
            {primaryButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};

LeapModal.propTypes = {
  open: PropTypes.bool,
  modalHeading: PropTypes.string.isRequired,
  primaryButtonText: PropTypes.string,
  secondaryButtonText: PropTypes.string,
  danger: PropTypes.bool,
  children: PropTypes.node,
  onRequestClose: PropTypes.func,
  onRequestSubmit: PropTypes.func,
};

export default LeapModal;
