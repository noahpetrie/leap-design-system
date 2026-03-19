import React, { useState, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './LeapTooltipDefinition.module.scss';

const LeapTooltipDefinition = ({ children, definition, align = 'bottom', openOnHover = true }) => {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef(null);
  const tooltipRef = useRef(null);

  const updatePosition = useCallback(() => {
    if (!triggerRef.current || !tooltipRef.current) return;
    const trigger = triggerRef.current.getBoundingClientRect();
    const tooltip = tooltipRef.current.getBoundingClientRect();
    const gap = 8;

    let top, left;

    switch (align) {
      case 'top':
        top = trigger.top - tooltip.height - gap;
        left = trigger.left + trigger.width / 2 - tooltip.width / 2;
        break;
      case 'left':
        top = trigger.top + trigger.height / 2 - tooltip.height / 2;
        left = trigger.left - tooltip.width - gap;
        break;
      case 'right':
        top = trigger.top + trigger.height / 2 - tooltip.height / 2;
        left = trigger.right + gap;
        break;
      case 'bottom':
      default:
        top = trigger.bottom + gap;
        left = trigger.left + trigger.width / 2 - tooltip.width / 2;
        break;
    }

    // Clamp to viewport
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    if (left + tooltip.width > vw - 4) left = vw - tooltip.width - 4;
    if (left < 4) left = 4;
    if (top + tooltip.height > vh - 4) top = vh - tooltip.height - 4;
    if (top < 4) top = 4;

    setPosition({ top, left });
  }, [align]);

  useEffect(() => {
    if (open) updatePosition();
  }, [open, updatePosition]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const hoverProps = openOnHover
    ? { onMouseEnter: handleOpen, onMouseLeave: handleClose }
    : {};

  return (
    <>
      <button
        ref={triggerRef}
        className={styles['leap-tooltip-definition']}
        type="button"
        aria-describedby={open ? 'leap-tooltip-definition-popup' : undefined}
        onFocus={handleOpen}
        onBlur={handleClose}
        onClick={() => setOpen((prev) => !prev)}
        {...hoverProps}
      >
        {children}
      </button>
      {open && (
        <div
          ref={tooltipRef}
          id="leap-tooltip-definition-popup"
          className={`${styles['leap-tooltip-definition__tooltip']} ${styles[`leap-tooltip-definition__tooltip--${align}`]}`}
          style={{ top: position.top, left: position.left }}
          role="tooltip"
        >
          <span className={styles['leap-tooltip-definition__caret']} />
          {definition}
        </div>
      )}
    </>
  );
};

LeapTooltipDefinition.propTypes = {
  children: PropTypes.node.isRequired,
  definition: PropTypes.node.isRequired,
  align: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  openOnHover: PropTypes.bool,
};

export default LeapTooltipDefinition;
