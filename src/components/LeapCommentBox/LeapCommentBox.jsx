import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Send } from '@carbon/icons-react';
import { cn } from '../../lib/utils';

const LeapCommentBox = ({ comments = [], onSubmit, ...rest }) => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (text.trim() && onSubmit) {
      onSubmit(text.trim());
      setText('');
    }
  };

  return (
    <div className="border border-border rounded bg-card p-4" {...rest}>
      {comments.length > 0 && (
        <div className="mb-4">
          {comments.map((c, i) => (
            <div key={i} className="pb-3 mb-3 border-b border-border last:border-b-0 last:mb-0">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-semibold text-foreground">{c.author}</span>
                <span className="text-xs font-medium text-muted-foreground">{c.timestamp}</span>
              </div>
              <p className="text-sm text-muted-foreground m-0">{c.text}</p>
            </div>
          ))}
        </div>
      )}
      <div className="flex gap-2 items-end">
        <textarea
          id="comment-input"
          placeholder="Add a comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={2}
          className={cn(
            'flex-1 resize-none rounded border border-border bg-muted p-2 text-sm text-foreground',
            'placeholder:text-muted-foreground',
            'focus:outline-2 focus:outline-primary focus:outline-offset-[-2px]'
          )}
        />
        <button
          type="button"
          aria-label="Send"
          title="Send"
          onClick={handleSubmit}
          disabled={!text.trim()}
          className={cn(
            'inline-flex items-center justify-center w-8 h-8 rounded bg-primary text-primary-foreground',
            'hover:bg-primary/80 transition-colors duration-150',
            'focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2',
            'disabled:opacity-50 disabled:cursor-not-allowed'
          )}
        >
          <Send size={16} />
        </button>
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
