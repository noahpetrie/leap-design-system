import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const SPINNER_SIZES = {
  small: 'w-4 h-4 border-2',
  default: 'w-8 h-8 border-[3px]',
};

const STATUS_MESSAGES = {
  active: null,
  finished: 'Done!',
  error: 'Error',
};

/**
 * LeapLoading — A loading spinner / inline loading indicator.
 * Standalone replacement for Carbon's Loading / InlineLoading.
 */
const LeapLoading = ({
  active = true,
  withOverlay = false,
  small = false,
  description = 'Loading...',
  status,
  ...rest
}) => {
  // Inline loading variant (when status is provided)
  if (status) {
    return (
      <div className="inline-flex items-center gap-2 text-sm text-muted-foreground" {...rest}>
        {status === 'active' && (
          <span
            className="inline-block w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"
            role="status"
          />
        )}
        {status === 'finished' && (
          <svg className="w-4 h-4 text-primary" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path d="M6.5 12.5l-4-4 1.4-1.4 2.6 2.6 5.6-5.6 1.4 1.4z" />
          </svg>
        )}
        {status === 'error' && (
          <svg className="w-4 h-4 text-destructive" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm-.75 3.5h1.5v5h-1.5v-5zm.75 8a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        )}
        <span>{STATUS_MESSAGES[status] || description}</span>
      </div>
    );
  }

  if (!active) return null;

  const spinner = (
    <span
      className={cn(
        'inline-block border-primary border-t-transparent rounded-full animate-spin',
        small ? SPINNER_SIZES.small : SPINNER_SIZES.default,
      )}
      role="status"
      aria-label={description}
    />
  );

  if (withOverlay) {
    return (
      <div
        className="fixed inset-0 z-[9000] flex items-center justify-center bg-background/60"
        {...rest}
      >
        {spinner}
      </div>
    );
  }

  return (
    <div className="inline-flex items-center justify-center" {...rest}>
      {spinner}
    </div>
  );
};

LeapLoading.propTypes = {
  active: PropTypes.bool,
  withOverlay: PropTypes.bool,
  small: PropTypes.bool,
  description: PropTypes.string,
  status: PropTypes.oneOf(['active', 'finished', 'error']),
};

LeapLoading.defaultProps = {
  active: true,
  withOverlay: false,
  small: false,
  description: 'Loading...',
};

export default LeapLoading;
