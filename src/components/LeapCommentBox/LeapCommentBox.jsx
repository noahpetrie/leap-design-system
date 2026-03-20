import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextArea, Button } from '@carbon/react';
import { Send } from '@carbon/icons-react';

const LeapCommentBox = ({ comments = [], onSubmit, ...rest }) => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (text.trim() && onSubmit) {
      onSubmit(text.trim());
      setText('');
    }
  };

  return (
    <div
      className="border border-[#e0e0e0] rounded-[4px] bg-[#f4f4f4] p-[1rem]"
      style={{
        '--cds-button-primary': '#0c8c5e',
        '--cds-button-primary-hover': '#096b48',
        '--cds-focus': '#0c8c5e',
      }}
      {...rest}
    >
      {comments.length > 0 && (
        <div className="mb-[1rem]">
          {comments.map((c, i) => (
            <div
              key={i}
              className={[
                'pb-[0.75rem] mb-[0.75rem]',
                i !== comments.length - 1 ? 'border-b border-[#e0e0e0]' : '',
              ].join(' ')}
            >
              <div className="flex justify-between mb-[0.25rem]">
                <span className="text-[0.875rem] leading-[1.125rem] tracking-[0.16px] font-semibold text-[#161616]">
                  {c.author}
                </span>
                <span className="text-[0.75rem] leading-[1rem] tracking-[0.32px] text-[#525252]">
                  {c.timestamp}
                </span>
              </div>
              <p className="text-[0.875rem] leading-[1.125rem] tracking-[0.16px] text-[#525252] m-0">
                {c.text}
              </p>
            </div>
          ))}
        </div>
      )}
      <div className="flex gap-[0.5rem] items-end">
        <TextArea
          id="comment-input"
          labelText=""
          placeholder="Add a comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={2}
        />
        <Button
          kind="primary"
          size="sm"
          renderIcon={Send}
          hasIconOnly
          iconDescription="Send"
          onClick={handleSubmit}
          disabled={!text.trim()}
        />
      </div>
    </div>
  );
};

LeapCommentBox.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      timestamp: PropTypes.string,
    })
  ),
  onSubmit: PropTypes.func,
};

export default LeapCommentBox;
