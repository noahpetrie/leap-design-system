import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const RatingInput = ({ questionId, value, onChange }) => {
  const [hovered, setHovered] = useState(0);

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          className={cn(
            'border-none bg-transparent p-0.5 cursor-pointer transition-all duration-150',
            n <= (hovered || value) ? 'text-[#0c8c5e]' : 'text-[#e0e0e0]',
            'hover:scale-[1.15] hover:text-[#0c8c5e]'
          )}
          onMouseEnter={() => setHovered(n)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => onChange(questionId, n)}
          aria-label={`Rate ${n} of 5`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
          </svg>
        </button>
      ))}
      {value > 0 && (
        <span className="ml-2 text-[12px] tracking-[0.32px] text-[#525252]">
          {value}/5
        </span>
      )}
    </div>
  );
};

const TextInput = ({ questionId, value, onChange }) => (
  <textarea
    className="w-full resize-y rounded border border-[#e0e0e0] px-3 py-2 text-[14px] tracking-[0.16px] text-[#1a1a18] font-[inherit] transition-colors duration-150 placeholder:text-[#a8a8a8] focus:border-[#0c8c5e] focus:outline-none focus:shadow-[0_0_0_1px_#0c8c5e]"
    value={value || ''}
    onChange={(e) => onChange(questionId, e.target.value)}
    rows={4}
    placeholder="Enter your response..."
  />
);

const SelectInput = ({ questionId, options, value, onChange }) => (
  <div className="flex flex-col gap-2">
    {options.map((opt) => (
      <label key={opt} className="flex cursor-pointer items-center gap-2 py-1 text-[14px] tracking-[0.16px] text-[#1a1a18]">
        <input
          type="radio"
          name={questionId}
          value={opt}
          checked={value === opt}
          onChange={() => onChange(questionId, opt)}
          className="sr-only peer"
        />
        <span className="relative flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-full border-2 border-[#e0e0e0] transition-colors duration-150 peer-checked:border-[#0c8c5e] peer-focus:shadow-[0_0_0_2px_rgba(12,140,94,0.3)] after:absolute after:h-2 after:w-2 after:rounded-full after:bg-transparent after:transition-transform after:scale-0 peer-checked:after:scale-100 peer-checked:after:bg-[#0c8c5e]" />
        {opt}
      </label>
    ))}
  </div>
);

const LeapFeedbackSurvey = ({ questions, onSubmit }) => {
  const [answers, setAnswers] = useState({});

  const handleChange = useCallback((id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(answers);
    }
  };

  if (!questions || questions.length === 0) return null;

  return (
    <form
      className="max-w-[640px] rounded-lg border border-[var(--cds-border-subtle,#e0e0e0)] p-6"
      style={{ backgroundColor: 'var(--cds-layer, #ffffff)' }}
      onSubmit={handleSubmit}
    >
      {questions.map((q, idx) => (
        <fieldset
          key={q.id}
          className={cn(
            'border-none p-0 mb-6',
            idx === questions.length - 1 && 'mb-8'
          )}
        >
          <legend className="mb-3 block text-[14px] font-semibold tracking-[0.16px] text-[#1a1a18]">
            <span className="mr-1 font-bold text-[#0c8c5e]">
              {idx + 1}.
            </span>
            {q.text}
          </legend>

          {q.type === 'rating' && (
            <RatingInput
              questionId={q.id}
              value={answers[q.id] || 0}
              onChange={handleChange}
            />
          )}

          {q.type === 'text' && (
            <TextInput
              questionId={q.id}
              value={answers[q.id]}
              onChange={handleChange}
            />
          )}

          {q.type === 'select' && (
            <SelectInput
              questionId={q.id}
              options={q.options || []}
              value={answers[q.id]}
              onChange={handleChange}
            />
          )}
        </fieldset>
      ))}

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded bg-[#0c8c5e] px-6 py-2 text-[14px] font-semibold tracking-[0.16px] text-[#ffffff] transition-colors duration-150 hover:bg-[#096b48] active:bg-[#054a32] focus:outline-2 focus:outline-[#0c8c5e] focus:outline-offset-2"
      >
        Submit Feedback
      </button>
    </form>
  );
};

LeapFeedbackSurvey.propTypes = {
  /** Array of question objects */
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['rating', 'text', 'select']).isRequired,
      options: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
  /** Callback with answer map on submit */
  onSubmit: PropTypes.func,
};

export default LeapFeedbackSurvey;
