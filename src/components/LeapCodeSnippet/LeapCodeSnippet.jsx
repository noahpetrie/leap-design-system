import React, { useState, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { Copy, Checkmark } from '@carbon/icons-react';
import { cn } from '../../lib/utils';

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
        className={cn(
          'font-mono text-sm leading-5 bg-[#e0e0e0] text-[#161616] px-1.5 py-px rounded whitespace-nowrap',
          className
        )}
        {...rest}
      >
        {children}
      </code>
    );
  }

  return (
    <div
      className={cn(
        'relative bg-[#262626] text-[#f4f4f4] rounded font-mono text-sm leading-5',
        type === 'single' && 'flex items-center min-h-[2.5rem] pl-4 pr-12',
        type === 'multi' && 'p-4 pr-12',
        className
      )}
      {...rest}
    >
      {language && (
        <div className="pt-2 px-4 text-xs text-[#a8a8a8] tracking-[0.02em]">{language}</div>
      )}
      <div
        className={cn(
          type === 'single' && 'overflow-x-auto whitespace-nowrap flex-1',
          type === 'multi' && 'flex'
        )}
        style={type === 'multi' && maxHeight ? { maxHeight, overflowY: 'auto' } : undefined}
      >
        {type === 'multi' && showLineNumbers && (
          <div className="flex flex-col pr-4 mr-4 border-r border-[#525252] text-[#6f6f6f] text-right select-none shrink-0" aria-hidden="true">
            {lines.map((_, i) => (
              <span key={i} className="leading-5">{i + 1}</span>
            ))}
          </div>
        )}
        <pre className="m-0 p-0 bg-transparent text-inherit font-inherit whitespace-pre flex-1 overflow-x-auto">
          <code>{children}</code>
        </pre>
      </div>
      {showCopy && (
        <button
          className={cn(
            'absolute top-2 right-2 flex items-center justify-center w-8 h-8 p-0 border-none rounded bg-transparent text-[#a8a8a8] cursor-pointer transition-[color,background-color] duration-150',
            'hover:bg-[#393939] hover:text-[#f4f4f4]',
            'focus:outline-2 focus:outline-[#0c8c5e] focus:outline-offset-[-2px]',
            copied && 'text-[#0c8c5e] hover:text-[#0c8c5e]'
          )}
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
