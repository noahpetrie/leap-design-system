import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Close, ArrowRight, ArrowLeft, Checkmark } from '@carbon/react/icons';
import styles from './LeapOnboarding.module.scss';

const LeapOnboarding = ({
  open = false,
  headerTitle = 'Welcome to LeapChange!',
  steps = [],
  onClose,
  onComplete,
  ...rest
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  if (!open || steps.length === 0) return null;

  const isFirst = currentStep === 0;
  const isLast = currentStep === steps.length - 1;
  const step = steps[currentStep];

  const handleNext = () => {
    if (isLast) {
      onComplete && onComplete();
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (!isFirst) setCurrentStep(currentStep - 1);
  };

  return (
    <div className={styles['onboarding-overlay']} {...rest}>
      <div className={styles['onboarding-modal']}>
        <div className={styles['onboarding-header']}>
          <span className={styles['onboarding-header-title']}>{headerTitle}</span>
          <button className={styles['onboarding-close']} onClick={onClose} aria-label="Close">
            <Close size={20} />
          </button>
        </div>

        <div className={styles['onboarding-body']}>
          <div className={styles['onboarding-content']}>
            {step.illustration && (
              <div className={styles['onboarding-illustration']}>
                {step.illustration}
              </div>
            )}
            <div className={styles['onboarding-text']}>
              <h2 className={styles['onboarding-step-title']}>{step.title}</h2>
              <p className={styles['onboarding-step-description']}>{step.description}</p>
              {step.content && (
                <div className={styles['onboarding-step-content']}>{step.content}</div>
              )}
            </div>
          </div>
        </div>

        <div className={styles['onboarding-footer']}>
          <div className={styles['onboarding-progress']}>
            {steps.map((_, i) => (
              <div
                key={i}
                className={`${styles['onboarding-dot']} ${i === currentStep ? styles['onboarding-dot--active'] : ''} ${i < currentStep ? styles['onboarding-dot--complete'] : ''}`}
              />
            ))}
          </div>
          <div className={styles['onboarding-actions']}>
            {!isFirst && (
              <button className={styles['onboarding-btn-secondary']} onClick={handleBack}>
                <ArrowLeft size={16} />
                Back
              </button>
            )}
            <button className={styles['onboarding-btn-primary']} onClick={handleNext}>
              {isLast ? (
                <>
                  Get Started
                  <Checkmark size={16} />
                </>
              ) : (
                <>
                  Next
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

LeapOnboarding.propTypes = {
  open: PropTypes.bool,
  headerTitle: PropTypes.string,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      illustration: PropTypes.node,
      content: PropTypes.node,
    })
  ).isRequired,
  onClose: PropTypes.func,
  onComplete: PropTypes.func,
};

export default LeapOnboarding;
