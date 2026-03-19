import React, { useState, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { Copy, Checkmark } from '@carbon/react/icons';
import styles from './LeapCodeSnippet.module.scss';

const LeapCodeSnippet = ({
  children,
  type = 'single',
  language,
  showCopy = true,
  showLineNumbers = false,
  maxHeight,
  className,
  ...rest
}) => {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef(null);

  const handleCopy = useCallback(async () => {
    const text = typeof children === 'string' ? children : '';
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
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setCopied(false), 2000);
  }, [children]);

  const lines = typeof children === 'string' ? children.split('\n') : [];

  if (type === 'inline') {
    return (
      <code
        className={`${styles['leap-code-snippet--inline']} ${className || ''}`}
        {...rest}
      >
        {children}
      </code>
    );
  }

  const classNames = [
    styles['leap-code-snippet'],
    styles[`leap-code-snippet--${type}`],
    className || '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames} {...rest}>
      {language && (
        <div className={styles['leap-code-snippet__language']}>{language}</div>
      )}
      <div
        className={styles['leap-code-snippet__body']}
        style={type === 'multi' && maxHeight ? { maxHeight, overflowY: 'auto' } : undefined}
      >
        {type === 'multi' && showLineNumbers && (
          <div className={styles['leap-code-snippet__line-numbers']} aria-hidden="true">
            {lines.map((_, i) => (
              <span key={i}>{i + 1}</span>
            ))}
          </div>
        )}
        <pre className={styles['leap-code-snippet__code']}>
          <code>{children}</code>
        </pre>
      </div>
      {showCopy && (
        <button
          className={`${styles['leap-code-snippet__copy']} ${copied ? styles['leap-code-snippet__copy--copied'] : ''}`}
          type="button"
          aria-label={copied ? 'Copied!' : 'Copy code'}
          title={copied ? 'Copied!' : 'Copy code'}
          onClick={handleCopy}
        >
          {copied ? <Checkmark size={16} /> : <Copy size={16} />}
        </button>
      )}
    </div>
  );
};

LeapCodeSnippet.propTypes = {
  /** The code string to display */
  children: PropTypes.string.isRequired,
  /** Display variant */
  type: PropTypes.oneOf(['inline', 'single', 'multi']),
  /** Language label displayed above the code block */
  language: PropTypes.string,
  /** Show the copy-to-clipboard button */
  showCopy: PropTypes.bool,
  /** Show line numbers (multi variant only) */
  showLineNumbers: PropTypes.bool,
  /** Max height for scrollable multi variant */
  maxHeight: PropTypes.string,
  /** Additional CSS class */
  className: PropTypes.string,
};

export default LeapCodeSnippet;
