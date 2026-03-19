import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronRight } from '@carbon/icons-react';
import { cn } from '../../lib/utils';

const LeapAccordionItem = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="border-b border-border">
      <button
        type="button"
        className="flex w-full items-center justify-between py-3 px-4 text-left text-sm font-semibold text-foreground hover:bg-accent transition-colors"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <ChevronRight
          className={cn(
            'h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200',
            isOpen && 'rotate-90',
          )}
        />
      </button>
      {isOpen && (
        <div className="px-4 pb-4 text-sm text-foreground">
          {children}
        </div>
      )}
    </div>
  );
};

const LeapAccordion = ({ items, ...rest }) => {
  const [openIndices, setOpenIndices] = useState(new Set());

  const handleToggle = (index) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className="rounded-lg border border-border" {...rest}>
      {items.map((item, index) => (
        <LeapAccordionItem
          key={index}
          title={item.title}
          isOpen={openIndices.has(index)}
          onToggle={() => handleToggle(index)}
        >
          {item.content}
        </LeapAccordionItem>
      ))}
    </div>
  );
};

LeapAccordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default LeapAccordion;
