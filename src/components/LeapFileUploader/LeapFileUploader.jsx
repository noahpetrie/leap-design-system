import React, { useState, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Upload, Close } from '@carbon/icons-react';
import { cn } from '../../lib/utils';

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

  return (
    <div className="flex flex-col gap-4" {...rest}>
      <div
        className={cn(
          'flex flex-col items-center justify-center gap-2 rounded border-2 border-dashed border-border bg-card p-8 cursor-pointer transition-colors duration-150',
          'hover:border-primary',
          'focus:outline-2 focus:outline-primary focus:outline-offset-2',
          dragOver && 'border-primary bg-primary/10',
          disabled && 'opacity-50 cursor-not-allowed hover:border-border'
        )}
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
        <Upload size={24} className="text-primary" />
        <p className="m-0 text-sm text-foreground">{label}</p>
        {description && <p className="m-0 text-xs text-muted-foreground">{description}</p>}
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          onChange={handleInputChange}
          className="hidden"
          tabIndex={-1}
        />
      </div>

      {files.length > 0 && (
        <ul className="m-0 flex list-none flex-col gap-2 p-0">
          {files.map((file, index) => (
            <li key={`${file.name}-${index}`} className="flex items-center justify-between rounded border border-border bg-card px-3 py-2">
              <span className="truncate text-sm text-foreground">{file.name}</span>
              <button
                type="button"
                className="flex flex-shrink-0 items-center justify-center rounded border-none bg-transparent p-1 text-muted-foreground cursor-pointer hover:bg-accent hover:text-foreground focus:outline-2 focus:outline-primary focus:outline-offset-1"
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
