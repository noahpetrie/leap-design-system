import React from 'react';
import PropTypes from 'prop-types';
import { Calendar, Document, Search as SearchIcon } from '@carbon/icons-react';

const iconMap = {
  calendar: Calendar,
  document: Document,
  search: SearchIcon,
};

const LeapEmptyState = ({ title, description, icon = 'document', actionLabel, onAction, ...rest }) => {
  const Icon = iconMap[icon] || Document;

  return (
    <div className="flex flex-col items-center justify-center p-12 text-center" {...rest}>
      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon size={48} />
      </div>
      <h3 className="mb-2 text-base font-semibold text-foreground">{title}</h3>
      {description && (
        <p className="mb-4 max-w-[400px] text-sm text-muted-foreground">{description}</p>
      )}
      {actionLabel && onAction && (
        <button
          type="button"
          onClick={onAction}
          className="mt-2 inline-flex items-center rounded bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
};

LeapEmptyState.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  icon: PropTypes.oneOf(['calendar', 'document', 'search']),
  actionLabel: PropTypes.string,
  onAction: PropTypes.func,
};

export default LeapEmptyState;
