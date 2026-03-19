import React, { useState, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const caretPositionMap = {
  top: 'bottom-[-4px] left-1/2 -translate-x-1/2 rotate-45',
  bottom: 'top-[-4px] left-1/2 -translate-x-1/2 rotate-45',
  left: 'right-[-4px] top-1/2 -translate-y-1/2 rotate-45',
  right: 'left-[-4px] top-1/2 -translate-y-1/2 rotate-45',
};

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
        className="inline border-none bg-transparent p-0 text-sm text-foreground border-b border-dotted border-b-foreground cursor-help leading-relaxed hover:border-b-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 focus-visible:rounded-sm"
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
          className="fixed z-[9999] max-w-[16rem] rounded-sm bg-foreground px-3 py-2 text-sm leading-snug text-primary-foreground shadow-md pointer-events-none"
          style={{ top: position.top, left: position.left }}
          role="tooltip"
        >
          <span
            className={cn(
              'absolute h-2 w-2 bg-foreground',
              caretPositionMap[align] || caretPositionMap.bottom
            )}
          />
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
