import React from 'react';
import PropTypes from 'prop-types';
import { Checkmark } from '@carbon/react/icons';
import styles from './LeapProgressIndicator.module.scss';

const LeapProgressIndicator = ({
  steps = [],
  currentIndex = 0,
  onChange,
  vertical = false,
  ...rest
}) => {
  const containerClass = vertical
    ? `${styles['progress-indicator']} ${styles['progress-indicator--vertical']}`
    : styles['progress-indicator'];

  return (
    <ol className={containerClass} {...rest}>
      {steps.map((step, i) => {
        const isComplete = i < currentIndex;
        const isCurrent = i === currentIndex;
        const isLast = i === steps.length - 1;

        let stepClass = styles['step--incomplete'];
        if (isComplete) stepClass = styles['step--complete'];
        if (isCurrent) stepClass = styles['step--current'];

        return (
          <li
            key={step.id}
            className={`${styles['step']} ${stepClass}`}
            aria-current={isCurrent ? 'step' : undefined}
          >
            <button
              type="button"
              className={styles['step__button']}
              onClick={() => onChange?.(i)}
              tabIndex={0}
            >
              <span className={styles['step__circle']}>
                {isComplete ? (
                  <Checkmark size={16} />
                ) : (
                  <span className={styles['step__number']}>{i + 1}</span>
                )}
              </span>
              <span className={styles['step__text']}>
                <span className={styles['step__label']}>{step.label}</span>
                {step.secondaryLabel && (
                  <span className={styles['step__secondary-label']}>
                    {step.secondaryLabel}
                  </span>
                )}
                {step.description && (
                  <span className={styles['step__description']}>
                    {step.description}
                  </span>
                )}
              </span>
            </button>
            {!isLast && <span className={styles['step__connector']} />}
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
