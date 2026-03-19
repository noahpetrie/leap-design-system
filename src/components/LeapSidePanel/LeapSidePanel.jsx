import React from 'react';
import PropTypes from 'prop-types';
import { Close } from '@carbon/react/icons';
import styles from './LeapSidePanel.module.scss';

const LeapSidePanel = ({ open = false, title, children, onClose, ...rest }) => {
  if (!open) return null;

  return (
    <>
      <div className={styles['side-panel-overlay']} onClick={onClose} />
      <div className={styles['side-panel']} {...rest}>
        <div className={styles['side-panel-header']}>
          <span className={styles['side-panel-title']}>{title}</span>
          <button className={styles['side-panel-close']} onClick={onClose} aria-label="Close panel">
            <Close size={20} />
          </button>
        </div>
        <div className={styles['side-panel-body']}>
          {children}
        </div>
      </div>
    </>
  );
};

LeapSidePanel.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  onClose: PropTypes.func,
};

export default LeapSidePanel;
