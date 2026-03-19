import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './LeapFeedbackSurvey.module.scss';

const RatingInput = ({ questionId, value, onChange }) => {
  const [hovered, setHovered] = useState(0);

  return (
    <div className={styles['leap-feedback-survey__rating']}>
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          className={`${styles['leap-feedback-survey__star']} ${
            n <= (hovered || value) ? styles['leap-feedback-survey__star--active'] : ''
          }`}
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
        <span className={styles['leap-feedback-survey__rating-value']}>
          {value}/5
        </span>
      )}
    </div>
  );
};

const TextInput = ({ questionId, value, onChange }) => (
  <textarea
    className={styles['leap-feedback-survey__textarea']}
    value={value || ''}
    onChange={(e) => onChange(questionId, e.target.value)}
    rows={4}
    placeholder="Enter your response..."
  />
);

const SelectInput = ({ questionId, options, value, onChange }) => (
  <div className={styles['leap-feedback-survey__options']}>
    {options.map((opt) => (
      <label key={opt} className={styles['leap-feedback-survey__radio-label']}>
        <input
          type="radio"
          name={questionId}
          value={opt}
          checked={value === opt}
          onChange={() => onChange(questionId, opt)}
          className={styles['leap-feedback-survey__radio']}
        />
        <span className={styles['leap-feedback-survey__radio-indicator']} />
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
      className={styles['leap-feedback-survey']}
      onSubmit={handleSubmit}
    >
      {questions.map((q, idx) => (
        <fieldset
          key={q.id}
          className={styles['leap-feedback-survey__question']}
        >
          <legend className={styles['leap-feedback-survey__legend']}>
            <span className={styles['leap-feedback-survey__number']}>
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
        className={styles['leap-feedback-survey__submit']}
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
