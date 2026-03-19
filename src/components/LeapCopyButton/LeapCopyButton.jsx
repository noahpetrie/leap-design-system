import React, { useState, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { Copy, Checkmark } from '@carbon/react/icons';
import styles from './LeapCopyButton.module.scss';

const LeapCopyButton = ({ text, label = 'Copy', feedbackText = 'Copied!', feedbackTimeout = 2000, size = 'md', kind = 'ghost', onCopy }) => {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef(null);

  const handleClick = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }

    setCopied(true);
    onCopy?.(text);

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setCopied(false), feedbackTimeout);
  }, [text, feedbackTimeout, onCopy]);

  const sizeClass = styles[`leap-copy-button--${size}`] || '';
  const kindClass = styles[`leap-copy-button--${kind}`] || '';

  return (
    <button
      className={`${styles['leap-copy-button']} ${sizeClass} ${kindClass} ${copied ? styles['leap-copy-button--copied'] : ''}`}
      onClick={handleClick}
      type="button"
      aria-label={copied ? feedbackText : label}
      title={copied ? feedbackText : label}
    >
      {copied ? (
        <>
          <Checkmark size={size === 'sm' ? 14 : 16} />
          {kind !== 'icon-only' && <span className={styles['leap-copy-button__label']}>{feedbackText}</span>}
        </>
      ) : (
        <>
          <Copy size={size === 'sm' ? 14 : 16} />
          {kind !== 'icon-only' && <span className={styles['leap-copy-button__label']}>{label}</span>}
        </>
      )}
    </button>
  );
};

LeapCopyButton.propTypes = {
  text: PropTypes.string.isRequired,
  label: PropTypes.string,
  feedbackText: PropTypes.string,
  feedbackTimeout: PropTypes.number,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  kind: PropTypes.oneOf(['ghost', 'primary', 'icon-only']),
  onCopy: PropTypes.func,
};

export default LeapCopyButton;
