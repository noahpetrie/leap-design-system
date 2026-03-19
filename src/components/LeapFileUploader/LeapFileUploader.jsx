import React, { useState, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Upload, Close } from '@carbon/react/icons';
import styles from './LeapFileUploader.module.scss';

const LeapFileUploader = ({
  accept,
  multiple = false,
  maxSize,
  label = 'Drag and drop files here or click to upload',
  description,
  onChange,
  disabled = false,
  ...rest
}) => {
  const [files, setFiles] = useState([]);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef(null);

  const handleFiles = useCallback(
    (incoming) => {
      let accepted = Array.from(incoming);

      if (accept) {
        const extensions = accept.split(',').map((ext) => ext.trim().toLowerCase());
        accepted = accepted.filter((file) =>
          extensions.some((ext) => file.name.toLowerCase().endsWith(ext))
        );
      }

      if (maxSize) {
        accepted = accepted.filter((file) => file.size <= maxSize);
      }

      const next = multiple ? [...files, ...accepted] : accepted.slice(0, 1);
      setFiles(next);
      onChange?.(next);
    },
    [accept, maxSize, multiple, files, onChange]
  );

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      setDragOver(false);
      if (disabled) return;
      handleFiles(e.dataTransfer.files);
    },
    [disabled, handleFiles]
  );

  const handleDragOver = useCallback(
    (e) => {
      e.preventDefault();
      if (!disabled) setDragOver(true);
    },
    [disabled]
  );

  const handleDragLeave = useCallback(() => {
    setDragOver(false);
  }, []);

  const handleClick = () => {
    if (!disabled) inputRef.current?.click();
  };

  const handleInputChange = (e) => {
    handleFiles(e.target.files);
    e.target.value = '';
  };

  const handleRemove = (index) => {
    const next = files.filter((_, i) => i !== index);
    setFiles(next);
    onChange?.(next);
  };

  const dropZoneClass = [
    styles['drop-zone'],
    dragOver && styles['drop-zone--drag-over'],
    disabled && styles['drop-zone--disabled'],
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={styles['file-uploader']} {...rest}>
      <div
        className={dropZoneClass}
        role="button"
        tabIndex={disabled ? -1 : 0}
        onClick={handleClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') handleClick();
        }}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <Upload size={24} className={styles['drop-zone-icon']} />
        <p className={styles['drop-zone-label']}>{label}</p>
        {description && <p className={styles['drop-zone-description']}>{description}</p>}
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          onChange={handleInputChange}
          className={styles['file-input']}
          tabIndex={-1}
        />
      </div>

      {files.length > 0 && (
        <ul className={styles['file-list']}>
          {files.map((file, index) => (
            <li key={`${file.name}-${index}`} className={styles['file-list-item']}>
              <span className={styles['file-list-name']}>{file.name}</span>
              <button
                type="button"
                className={styles['file-list-remove']}
                onClick={() => handleRemove(index)}
                aria-label={`Remove ${file.name}`}
              >
                <Close size={16} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

LeapFileUploader.propTypes = {
  accept: PropTypes.string,
  multiple: PropTypes.bool,
  maxSize: PropTypes.number,
  label: PropTypes.string,
  description: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

export default LeapFileUploader;
