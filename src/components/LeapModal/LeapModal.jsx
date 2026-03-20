import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from '@carbon/react';

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
    <div style={{ '--cds-button-primary': '#0c8c5e', '--cds-button-primary-hover': '#096b48', '--cds-focus': '#0c8c5e' }}>
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
