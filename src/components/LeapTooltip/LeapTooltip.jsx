import React, { useState, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Information } from '@carbon/icons-react';
import { cn } from '../../lib/utils';

const LeapTooltip = ({ label, description, align = 'top', children, ...rest }) => {
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
      case 'bottom':
        top = trigger.bottom + gap;
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
      case 'top':
      default:
        top = trigger.top - tooltip.height - gap;
        left = trigger.left + trigger.width / 2 - tooltip.width / 2;
        break;
    }

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

  return (
    <span className="inline-flex" {...rest}>
      <button
        ref={triggerRef}
        type="button"
        className="inline-flex items-center border-none bg-transparent p-0 text-muted-foreground hover:text-primary cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
        aria-label={label}
        onClick={() => setOpen((prev) => !prev)}
        onBlur={() => setOpen(false)}
      >
        {children || <Information size={16} />}
      </button>
      {open && (
        <div
          ref={tooltipRef}
          className="fixed z-[9999] max-w-[16rem] rounded-sm bg-foreground px-3 py-2 text-sm text-primary-foreground shadow-md pointer-events-none"
          style={{ top: position.top, left: position.left }}
          role="tooltip"
        >
          <p className="m-0">{description}</p>
        </div>
      )}
    </span>
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
