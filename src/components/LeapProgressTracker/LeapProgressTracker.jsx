import React from 'react';
import PropTypes from 'prop-types';
import { CheckmarkFilled } from '@carbon/icons-react';
import { cn } from '../../lib/utils';

const LeapProgressTracker = ({ steps = [], currentStep = 0, ...rest }) => {
  return (
    <div className="flex items-start" {...rest}>
      {steps.map((step, i) => {
        const isComplete = i < currentStep;
        const isCurrent = i === currentStep;

        return (
          <div key={i} className="flex flex-col items-center relative flex-1">
            {/* Indicator circle */}
            <div
              className={cn(
                'w-8 h-8 rounded-full flex items-center justify-center z-[1]',
                isComplete && 'bg-[#0c8c5e] text-white',
                isCurrent && 'bg-[#e6f4ee] border-2 border-[#0c8c5e] text-[#0c8c5e]',
                !isComplete && !isCurrent && 'bg-[#e0e0e0] text-[#525252]'
              )}
            >
              {isComplete ? (
                <CheckmarkFilled size={20} />
              ) : (
                <span className="text-xs font-semibold">{i + 1}</span>
              )}
            </div>

            {/* Connector line */}
            {i < steps.length - 1 && (
              <div
                className={cn(
                  'absolute top-4 left-[calc(50%+16px)] right-[calc(-50%+16px)] h-0.5',
                  isComplete ? 'bg-[#0c8c5e]' : 'bg-[#e0e0e0]'
                )}
              />
            )}

            {/* Label */}
            <div
              className={cn(
                'text-[12px] tracking-[0.32px] mt-2 text-center whitespace-nowrap',
                isCurrent ? 'text-[#161616] font-semibold' : 'text-[#525252]'
              )}
            >
              {step}
            </div>
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
