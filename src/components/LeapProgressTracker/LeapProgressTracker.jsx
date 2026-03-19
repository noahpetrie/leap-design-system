import React from 'react';
import PropTypes from 'prop-types';
import { CheckmarkFilled } from '@carbon/react/icons';
import styles from './LeapProgressTracker.module.scss';

const LeapProgressTracker = ({ steps = [], currentStep = 0, ...rest }) => {
  return (
    <div className={styles['tracker']} {...rest}>
      {steps.map((step, i) => {
        const isComplete = i < currentStep;
        const isCurrent = i === currentStep;
        let statusClass = styles['tracker-step--upcoming'];
        if (isComplete) statusClass = styles['tracker-step--complete'];
        if (isCurrent) statusClass = styles['tracker-step--current'];

        return (
          <div key={i} className={`${styles['tracker-step']} ${statusClass}`}>
            <div className={styles['tracker-indicator']}>
              {isComplete ? (
                <CheckmarkFilled size={20} />
              ) : (
                <span className={styles['tracker-number']}>{i + 1}</span>
              )}
            </div>
            {i < steps.length - 1 && <div className={styles['tracker-connector']} />}
            <div className={styles['tracker-label']}>{step}</div>
          </div>
        );
      })}
    </div>
  );
};

LeapProgressTracker.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentStep: PropTypes.number,
};

export default LeapProgressTracker;
