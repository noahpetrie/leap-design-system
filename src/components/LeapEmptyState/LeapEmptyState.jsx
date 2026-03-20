import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@carbon/react';
import { Calendar, Document, Search as SearchIcon } from '@carbon/icons-react';

const iconMap = {
  calendar: Calendar,
  document: Document,
  search: SearchIcon,
};

const LeapEmptyState = ({ title, description, icon = 'document', actionLabel, onAction, ...rest }) => {
  const Icon = iconMap[icon] || Document;

  return (
    <div
      className="empty-state"
      style={{
        '--cds-button-primary': '#0c8c5e',
        '--cds-button-primary-hover': '#096b48',
      }}
      {...rest}
    >
      <div className="empty-state-icon">
        <Icon size={48} />
      </div>
      <h3 className="empty-state-title">{title}</h3>
      {description && <p className="empty-state-description">{description}</p>}
      {actionLabel && onAction && (
        <Button kind="primary" size="sm" onClick={onAction} className="empty-state-action">
          {actionLabel}
        </Button>
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
