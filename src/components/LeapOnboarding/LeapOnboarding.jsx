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
      <div className="bg-[#f4f4f4] rounded-lg w-[720px] max-w-[90vw] max-h-[85vh] flex flex-col shadow-[0_8px_32px_rgba(0,0,0,0.2)] overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 bg-[#1a1a18] text-white">
          <span className="text-[16px] font-semibold tracking-[0.16px]">{headerTitle}</span>
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
              <div className="flex-shrink-0 w-[200px] h-[200px] bg-[#f0faf5] rounded-lg flex items-center justify-center text-[#0c8c5e] [&_svg]:w-20 [&_svg]:h-20">
                {step.illustration}
              </div>
            )}
            <div className="flex-1">
              <h2 className="text-[28px] font-semibold text-[#161616] m-0 mb-4">
                {step.title}
              </h2>
              <p className="text-[16px] tracking-[0.16px] text-[#525252] m-0 mb-4 leading-relaxed">
                {step.description}
              </p>
              {step.content && (
                <div className="mt-4">{step.content}</div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center px-6 py-4 border-t border-[#e0e0e0]">
          {/* Progress dots */}
          <div className="flex gap-2">
            {steps.map((_, i) => (
              <div
                key={i}
                className={cn(
                  'h-2 rounded-full transition-colors',
                  i === currentStep
                    ? 'w-6 bg-[#0c8c5e] rounded'
                    : i < currentStep
                      ? 'w-2 bg-[#c6e8d9]'
                      : 'w-2 bg-[#e0e0e0]'
                )}
              />
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex gap-2">
            {!isFirst && (
              <button
                className="inline-flex items-center gap-1 px-4 py-2 bg-transparent text-[#161616] border border-[#e0e0e0] rounded cursor-pointer text-[14px] tracking-[0.16px] transition-colors hover:bg-[#e0e0e0]"
                onClick={handleBack}
              >
                <ArrowLeft size={16} />
                Back
              </button>
            )}
            <button
              className="inline-flex items-center gap-1 px-4 py-2 bg-[#0c8c5e] text-white border-none rounded cursor-pointer font-semibold text-[14px] tracking-[0.16px] transition-colors hover:bg-[#096b48]"
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
