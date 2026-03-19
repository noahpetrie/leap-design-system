import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@carbon/react';
import { Calendar, Document, Search as SearchIcon } from '@carbon/react/icons';
import styles from './LeapEmptyState.module.scss';

const iconMap = {
  calendar: Calendar,
  document: Document,
  search: SearchIcon,
};

const LeapEmptyState = ({ title, description, icon = 'document', actionLabel, onAction, ...rest }) => {
  const Icon = iconMap[icon] || Document;

  return (
    <div className={styles['empty-state']} {...rest}>
      <div className={styles['empty-state-icon']}>
        <Icon size={48} />
      </div>
      <h3 className={styles['empty-state-title']}>{title}</h3>
      {description && <p className={styles['empty-state-description']}>{description}</p>}
      {actionLabel && onAction && (
        <Button kind="primary" size="sm" onClick={onAction} className={styles['empty-state-action']}>
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
