import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Close, ArrowRight, ArrowLeft, Checkmark } from '@carbon/icons-react';
import { cn } from '../../lib/utils';

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
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999]" {...rest}>
      <div className="bg-card rounded-lg w-[720px] max-w-[90vw] max-h-[85vh] flex flex-col shadow-[0_8px_32px_rgba(0,0,0,0.2)] overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 bg-foreground text-primary-foreground">
          <span className="text-base font-semibold">{headerTitle}</span>
          <button
            className="bg-transparent border-none text-white/70 cursor-pointer p-1 flex hover:text-white"
            onClick={onClose}
            aria-label="Close"
          >
            <Close size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-8">
          <div className="flex gap-8 items-start">
            {step.illustration && (
              <div className="flex-shrink-0 w-[200px] h-[200px] bg-primary/5 rounded-lg flex items-center justify-center text-primary [&_svg]:w-20 [&_svg]:h-20">
                {step.illustration}
              </div>
            )}
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-foreground m-0 mb-3">
                {step.title}
              </h2>
              <p className="text-base text-muted-foreground m-0 mb-4 leading-relaxed">
                {step.description}
              </p>
              {step.content && (
                <div className="mt-3">{step.content}</div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center px-6 py-4 border-t border-border">
          {/* Progress dots */}
          <div className="flex gap-2">
            {steps.map((_, i) => (
              <div
                key={i}
                className={cn(
                  'h-2 rounded-full transition-colors',
                  i === currentStep
                    ? 'w-6 bg-primary rounded'
                    : i < currentStep
                      ? 'w-2 bg-primary/30'
                      : 'w-2 bg-border'
                )}
              />
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex gap-2">
            {!isFirst && (
              <button
                className="inline-flex items-center gap-1 px-4 py-2 bg-transparent text-foreground border border-border rounded cursor-pointer text-sm transition-colors hover:bg-border"
                onClick={handleBack}
              >
                <ArrowLeft size={16} />
                Back
              </button>
            )}
            <button
              className="inline-flex items-center gap-1 px-4 py-2 bg-primary text-primary-foreground border-none rounded cursor-pointer font-semibold text-sm transition-colors hover:bg-primary/80"
              onClick={handleNext}
            >
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
