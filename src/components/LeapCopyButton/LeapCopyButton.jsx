import React, { useState, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { Copy, Checkmark } from '@carbon/icons-react';
import { cn } from '../../lib/utils';

const kindClasses = {
  ghost: 'py-1.5 px-3 bg-transparent text-[#525252] hover:bg-[#e8e8e8] hover:text-[#161616]',
  primary: 'py-1.5 px-3 bg-[#0c8c5e] text-white hover:bg-[#096b48]',
  'icon-only': 'p-1.5 bg-transparent text-[#525252] hover:bg-[#e8e8e8] hover:text-[#161616]',
};

const sizeOverrides = {
  sm: 'pt-1 pb-1 text-xs leading-4 tracking-[0.32px] font-medium',
  md: '',
  lg: 'pt-2 pb-2',
};

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

  return (
    <button
      className={cn(
        'inline-flex items-center gap-1.5 border-none rounded cursor-pointer transition-[background,color] duration-150 text-sm leading-[1.125rem] tracking-[0.16px]',
        'focus-visible:outline-2 focus-visible:outline-[#0c8c5e] focus-visible:outline-offset-2',
        kindClasses[kind],
        sizeOverrides[size],
        copied && 'text-[#0c8c5e]',
        copied && kind === 'primary' && 'text-white'
      )}
      onClick={handleClick}
      type="button"
      aria-label={copied ? feedbackText : label}
      title={copied ? feedbackText : label}
    >
      {copied ? (
        <>
          <Checkmark size={size === 'sm' ? 14 : 16} />
          {kind !== 'icon-only' && <span className="whitespace-nowrap">{feedbackText}</span>}
        </>
      ) : (
        <>
          <Copy size={size === 'sm' ? 14 : 16} />
          {kind !== 'icon-only' && <span className="whitespace-nowrap">{label}</span>}
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
