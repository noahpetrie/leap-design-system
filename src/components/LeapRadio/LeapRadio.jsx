import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const LeapRadio = ({ legendText, name, options = [], defaultSelected, onChange, orientation = 'vertical', ...rest }) => {
  const [selected, setSelected] = useState(defaultSelected || '');

  const handleChange = (value) => {
    setSelected(value);
    if (onChange) onChange(value);
  };

  return (
    <fieldset className="flex flex-col gap-2" {...rest}>
      <legend className="text-sm font-medium text-foreground mb-2">{legendText}</legend>
      <div className={cn('flex gap-3', orientation === 'horizontal' ? 'flex-row flex-wrap' : 'flex-col')}>
        {options.map((opt) => (
          <label
            key={opt.value}
            className="flex items-center gap-2 cursor-pointer text-sm text-foreground"
          >
            <span className="relative flex items-center justify-center">
              <input
                type="radio"
                name={name}
                id={`${name}-${opt.value}`}
                value={opt.value}
                checked={selected === opt.value}
                onChange={() => handleChange(opt.value)}
                className="peer sr-only"
              />
              <span className="h-[18px] w-[18px] rounded-full border-2 border-border peer-checked:border-primary peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-1 transition-colors" />
              <span className="absolute h-2 w-2 rounded-full bg-primary scale-0 peer-checked:scale-100 transition-transform" />
            </span>
            {opt.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
};

LeapRadio.propTypes = {
  legendText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })).isRequired,
  defaultSelected: PropTypes.string,
  onChange: PropTypes.func,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
};

export default LeapRadio;
