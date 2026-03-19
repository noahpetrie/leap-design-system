import React from 'react';
import PropTypes from 'prop-types';
import { Close } from '@carbon/icons-react';
import { cn } from '../../lib/utils';

const LeapFilterBar = ({ filters = [], activeFilters = {}, onChange, onClear, ...rest }) => {
  return (
    <div className="flex flex-col gap-2" {...rest}>
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <div key={filter.id} className="relative">
            <select
              id={filter.id}
              className="appearance-none rounded border border-border bg-muted px-3 py-1.5 pr-8 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              onChange={(e) => onChange && onChange(filter.id, e.target.value || undefined)}
              defaultValue=""
            >
              <option value="">{filter.label}</option>
              {filter.options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <svg
              className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-foreground"
              width="12"
              height="12"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path d="M8 11L3 6h10z" />
            </svg>
          </div>
        ))}
      </div>
      {Object.keys(activeFilters).length > 0 && (
        <div className="flex flex-wrap gap-1">
          {Object.entries(activeFilters).map(([key, value]) => (
            <span
              key={key}
              className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-0.5 text-xs text-foreground"
            >
              {key}: {value}
              {onClear && (
                <button
                  type="button"
                  onClick={() => onClear(key)}
                  className="inline-flex cursor-pointer items-center border-none bg-transparent p-0 text-muted-foreground hover:text-foreground"
                  aria-label={`Remove ${key} filter`}
                >
                  <Close size={12} />
                </button>
              )}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

LeapFilterBar.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  activeFilters: PropTypes.object,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
};

export default LeapFilterBar;
