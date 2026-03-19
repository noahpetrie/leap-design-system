import React from 'react';
import PropTypes from 'prop-types';
import styles from './LeapCard.module.scss';

const LeapCard = ({
  variant = 'default',
  title,
  subtitle,
  children,
  onClick,
  aiLabel,
  ...rest
}) => {
  const isClickable = !!onClick;
  const Tag = isClickable ? 'button' : 'div';

  return (
    <Tag
      className={`${styles['card']} ${styles[`card--${variant}`]} ${isClickable ? styles['card--clickable'] : ''}`}
      onClick={onClick}
      type={isClickable ? 'button' : undefined}
      {...rest}
    >
      {(title || aiLabel) && (
        <div className={styles['card-header']}>
          <div>
            {title && <span className={styles['card-title']}>{title}</span>}
            {subtitle && <span className={styles['card-subtitle']}>{subtitle}</span>}
          </div>
          {aiLabel && <div className={styles['card-ai']}>{aiLabel}</div>}
        </div>
      )}
      <div className={styles['card-body']}>{children}</div>
    </Tag>
  );
};

LeapCard.propTypes = {
  variant: PropTypes.oneOf(['default', 'raised', 'ai', 'danger', 'metric']),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  aiLabel: PropTypes.node,
};

export default LeapCard;
