import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from '@carbon/react';
import styles from './LeapModal.module.scss';

const LeapModal = ({
  open = false,
  modalHeading,
  primaryButtonText = 'Confirm',
  secondaryButtonText = 'Cancel',
  danger = false,
  children,
  onRequestClose,
  onRequestSubmit,
  ...rest
}) => {
  return (
    <div className={styles['leap-modal']}>
      <Modal
        open={open}
        modalHeading={modalHeading}
        primaryButtonText={primaryButtonText}
        secondaryButtonText={secondaryButtonText}
        danger={danger}
        onRequestClose={onRequestClose}
        onRequestSubmit={onRequestSubmit}
        {...rest}
      >
        {children}
      </Modal>
    </div>
  );
};

LeapModal.propTypes = {
  open: PropTypes.bool,
  modalHeading: PropTypes.string.isRequired,
  primaryButtonText: PropTypes.string,
  secondaryButtonText: PropTypes.string,
  danger: PropTypes.bool,
  children: PropTypes.node,
  onRequestClose: PropTypes.func,
  onRequestSubmit: PropTypes.func,
};

export default LeapModal;
