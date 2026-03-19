import React from 'react';
import PropTypes from 'prop-types';
import { Checkmark } from '@carbon/icons-react';
import { cn } from '../../lib/utils';

const LeapProgressIndicator = ({
  steps = [],
  currentIndex = 0,
  onChange,
  vertical = false,
  ...rest
}) => {
  return (
    <ol
      className={cn(
        'flex list-none m-0 p-0',
        vertical ? 'flex-col items-start' : 'items-start'
      )}
      {...rest}
    >
      {steps.map((step, i) => {
        const isComplete = i < currentIndex;
        const isCurrent = i === currentIndex;
        const isLast = i === steps.length - 1;

        return (
          <li
            key={step.id}
            className={cn(
              'relative',
              vertical
                ? 'flex flex-row items-start pb-4'
                : 'flex flex-col items-center flex-1'
            )}
            aria-current={isCurrent ? 'step' : undefined}
          >
            <button
              type="button"
              className={cn(
                'flex bg-transparent border-none cursor-pointer p-0',
                'focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2 focus-visible:rounded',
                vertical ? 'flex-row items-start gap-3' : 'flex-col items-center gap-2'
              )}
              onClick={() => onChange?.(i)}
              tabIndex={0}
            >
              {/* Circle */}
              <span
                className={cn(
                  'w-8 h-8 rounded-full flex items-center justify-center z-[1] flex-shrink-0',
                  isComplete && 'bg-primary text-primary-foreground',
                  isCurrent && 'bg-primary text-primary-foreground shadow-[0_0_0_4px_rgba(12,140,94,0.2)]',
                  !isComplete && !isCurrent && 'bg-border text-muted-foreground'
                )}
              >
                {isComplete ? (
                  <Checkmark size={16} />
                ) : (
                  <span className="text-xs font-semibold">{i + 1}</span>
                )}
              </span>

              {/* Text */}
              <span
                className={cn(
                  'flex flex-col',
                  vertical ? 'items-start text-left pt-1' : 'items-center text-center'
                )}
              >
                <span
                  className={cn(
                    'text-xs font-medium whitespace-nowrap',
                    isCurrent ? 'text-foreground font-semibold' : 'text-muted-foreground'
                  )}
                >
                  {step.label}
                </span>
                {step.secondaryLabel && (
                  <span className="text-xs text-muted-foreground">
                    {step.secondaryLabel}
                  </span>
                )}
                {step.description && (
                  <span
                    className={cn(
                      'text-xs text-muted-foreground mt-1 whitespace-normal',
                      !vertical && 'max-w-[160px]'
                    )}
                  >
                    {step.description}
                  </span>
                )}
              </span>
            </button>

            {/* Connector */}
            {!isLast && (
              <span
                className={cn(
                  vertical
                    ? 'absolute top-8 left-[15px] w-0.5 h-[calc(100%-16px)] min-h-4'
                    : 'absolute top-4 left-[calc(50%+16px)] right-[calc(-50%+16px)] h-0.5',
                  isComplete ? 'bg-primary' : 'bg-border'
                )}
              />
            )}
          </li>
        );
      })}
    </ol>
  );
};

LeapProgressIndicator.propTypes = {
  /** Array of step objects */
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
      description: PropTypes.string,
      secondaryLabel: PropTypes.string,
    })
  ).isRequired,
  /** Zero-based index of the current active step */
  currentIndex: PropTypes.number,
  /** Callback fired when a step is clicked, receives the step index */
  onChange: PropTypes.func,
  /** Display steps vertically instead of horizontally */
  vertical: PropTypes.bool,
};

export default LeapProgressIndicator;
