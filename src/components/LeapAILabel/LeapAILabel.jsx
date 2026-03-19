import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './LeapAILabel.module.scss';

const LeapAILabel = ({
  size = 'md',
  variant = 'pill',
  confidence,
  model,
  explanation,
  ...rest
}) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setPopoverOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <span className={styles['ai-label-wrapper']} ref={ref} {...rest}>
      <button
        className={`${styles['ai-label']} ${styles[`ai-label--${size}`]} ${styles[`ai-label--${variant}`]}`}
        onClick={() => explanation && setPopoverOpen(!popoverOpen)}
        aria-label="AI generated"
        type="button"
      >
        <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" className={styles['ai-label-icon']}>
          <path d="M8 1l1.85 4.15L14 7l-4.15 1.85L8 13l-1.85-4.15L2 7l4.15-1.85L8 1z" />
        </svg>
        <span className={styles['ai-label-text']}>AI</span>
      </button>
      {popoverOpen && explanation && (
        <div className={styles['ai-label-popover']}>
          <div className={styles['ai-label-popover-header']}>
            <span>AI Explainability</span>
            <button
              className={styles['ai-label-popover-close']}
              onClick={() => setPopoverOpen(false)}
              aria-label="Close"
            >
              &times;
            </button>
          </div>
          <div className={styles['ai-label-popover-body']}>
            <p className={styles['ai-label-popover-text']}>{explanation}</p>
            {confidence !== undefined && (
              <div className={styles['ai-label-popover-meta']}>
                <span>Confidence: {confidence}%</span>
              </div>
            )}
            {model && (
              <div className={styles['ai-label-popover-meta']}>
                <span>Model: {model}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </span>
  );
};

LeapAILabel.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  variant: PropTypes.oneOf(['pill', 'inline']),
  confidence: PropTypes.number,
  model: PropTypes.string,
  explanation: PropTypes.string,
};

export default LeapAILabel;
