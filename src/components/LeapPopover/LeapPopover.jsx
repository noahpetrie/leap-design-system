import React, { useState, useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './LeapPopover.module.scss';

const LeapPopover = ({
  children,
  content,
  align = 'bottom',
  open: controlledOpen,
  defaultOpen = false,
  onOpen,
  onClose,
  trigger = 'click',
  closeOnClickOutside = true,
}) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : uncontrolledOpen;

  const triggerRef = useRef(null);
  const popoverRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  const show = useCallback(() => {
    if (!isControlled) setUncontrolledOpen(true);
    if (onOpen) onOpen();
  }, [isControlled, onOpen]);

  const hide = useCallback(() => {
    if (!isControlled) setUncontrolledOpen(false);
    if (onClose) onClose();
  }, [isControlled, onClose]);

  const toggle = useCallback(() => {
    if (isOpen) {
      hide();
    } else {
      show();
    }
  }, [isOpen, show, hide]);

  // Click outside
  useEffect(() => {
    if (!isOpen || !closeOnClickOutside) return;

    const handleClickOutside = (e) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target)
      ) {
        hide();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, closeOnClickOutside, hide]);

  // Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') hide();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, hide]);

  // Positioning
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (!isOpen || !triggerRef.current) return;

    const rect = triggerRef.current.getBoundingClientRect();
    const pos = {};

    switch (align) {
      case 'top':
        pos.top = rect.top - 8;
        pos.left = rect.left + rect.width / 2;
        break;
      case 'bottom':
        pos.top = rect.bottom + 8;
        pos.left = rect.left + rect.width / 2;
        break;
      case 'left':
        pos.top = rect.top + rect.height / 2;
        pos.left = rect.left - 8;
        break;
      case 'right':
        pos.top = rect.top + rect.height / 2;
        pos.left = rect.right + 8;
        break;
      default:
        pos.top = rect.bottom + 8;
        pos.left = rect.left + rect.width / 2;
    }

    setPosition(pos);
  }, [isOpen, align]);

  // Trigger event handlers
  const triggerProps = {};

  if (trigger === 'click') {
    triggerProps.onClick = toggle;
  } else if (trigger === 'hover') {
    triggerProps.onMouseEnter = () => {
      clearTimeout(hoverTimeoutRef.current);
      show();
    };
    triggerProps.onMouseLeave = () => {
      hoverTimeoutRef.current = setTimeout(hide, 150);
    };
  }

  const popoverHoverProps =
    trigger === 'hover'
      ? {
          onMouseEnter: () => clearTimeout(hoverTimeoutRef.current),
          onMouseLeave: () => {
            hoverTimeoutRef.current = setTimeout(hide, 150);
          },
        }
      : {};

  const alignClass = styles[`leap-popover__content--${align}`] || '';

  return (
    <div className={styles['leap-popover']}>
      <div
        ref={triggerRef}
        className={styles['leap-popover__trigger']}
        {...triggerProps}
      >
        {children}
      </div>
      {isOpen && (
        <div
          ref={popoverRef}
          className={`${styles['leap-popover__content']} ${alignClass}`}
          style={{ top: position.top, left: position.left }}
          role="dialog"
          {...popoverHoverProps}
        >
          <div className={styles['leap-popover__caret']} />
          <div className={styles['leap-popover__body']}>{content}</div>
        </div>
      )}
    </div>
  );
};

LeapPopover.propTypes = {
  /** Trigger element that the popover anchors to */
  children: PropTypes.node.isRequired,
  /** Content rendered inside the popover body */
  content: PropTypes.node.isRequired,
  /** Preferred alignment relative to the trigger */
  align: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  /** Controlled open state */
  open: PropTypes.bool,
  /** Initial open state for uncontrolled usage */
  defaultOpen: PropTypes.bool,
  /** Callback when popover opens */
  onOpen: PropTypes.func,
  /** Callback when popover closes */
  onClose: PropTypes.func,
  /** Interaction that opens the popover */
  trigger: PropTypes.oneOf(['click', 'hover']),
  /** Whether clicking outside closes the popover */
  closeOnClickOutside: PropTypes.bool,
};

export default LeapPopover;
