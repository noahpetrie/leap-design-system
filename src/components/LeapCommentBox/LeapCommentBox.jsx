import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextArea, Button } from '@carbon/react';
import { Send } from '@carbon/react/icons';
import styles from './LeapCommentBox.module.scss';

const LeapCommentBox = ({ comments = [], onSubmit, ...rest }) => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (text.trim() && onSubmit) {
      onSubmit(text.trim());
      setText('');
    }
  };

  return (
    <div className={styles['comment-box']} {...rest}>
      {comments.length > 0 && (
        <div className={styles['comment-box-list']}>
          {comments.map((c, i) => (
            <div key={i} className={styles['comment-box-item']}>
              <div className={styles['comment-box-item-header']}>
                <span className={styles['comment-box-author']}>{c.author}</span>
                <span className={styles['comment-box-time']}>{c.timestamp}</span>
              </div>
              <p className={styles['comment-box-text']}>{c.text}</p>
            </div>
          ))}
        </div>
      )}
      <div className={styles['comment-box-input']}>
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
