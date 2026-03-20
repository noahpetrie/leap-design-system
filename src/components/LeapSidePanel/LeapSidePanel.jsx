import React from 'react';
import PropTypes from 'prop-types';
import { Close } from '@carbon/icons-react';
import { cn } from '../../lib/utils';

const LeapSidePanel = ({ open = false, title, children, onClose, ...rest }) => {
  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-[8999]"
        onClick={onClose}
      />
      <div
        className="fixed top-0 right-0 w-[400px] max-w-[90vw] h-screen bg-[#f4f4f4] border-l border-[#e0e0e0] z-[9000] flex flex-col shadow-[-4px_0_12px_rgba(0,0,0,0.1)]"
        {...rest}
      >
        <div className="flex justify-between items-center p-4 border-b border-[#e0e0e0]">
          <span className="text-base font-semibold text-[#161616]">{title}</span>
          <button
            className="bg-transparent border-none text-[#525252] cursor-pointer p-1 flex items-center hover:text-[#161616] transition-colors"
            onClick={onClose}
            aria-label="Close panel"
          >
            <Close size={20} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
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
