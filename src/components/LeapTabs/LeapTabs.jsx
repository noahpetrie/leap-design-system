import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const LeapTabs = ({ tabs, ...rest }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div {...rest}>
      <div className="flex border-b border-border" role="tablist" aria-label="List of tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            role="tab"
            type="button"
            aria-selected={activeIndex === index}
            className={cn(
              'px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-px',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
              activeIndex === index
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
            )}
            onClick={() => setActiveIndex(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="pt-4" role="tabpanel">
        {tabs[activeIndex]?.content}
      </div>
    </div>
  );
};

LeapTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default LeapTabs;
