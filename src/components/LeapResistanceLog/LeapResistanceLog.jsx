import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const SEVERITY_LABELS = {
  low: 'Low',
  medium: 'Medium',
  high: 'High',
};

const STATUS_LABELS = {
  identified: 'Identified',
  mitigating: 'Mitigating',
  resolved: 'Resolved',
};

const severityBorderColors = {
  low: 'border-l-[#0c8c5e]',
  medium: 'border-l-[#f1c21b]',
  high: 'border-l-[#da1e28]',
};

const severityBadge = {
  low: 'bg-[#0c8c5e]/15 text-[#0c8c5e]',
  medium: 'bg-[#f1c21b]/20 text-[#8e6a00]',
  high: 'bg-[#fff1f1] text-[#da1e28]',
};

const statusBadge = {
  identified: 'bg-[#e0e0e0] text-[#525252]',
  mitigating: 'bg-[#d0e2ff] text-[#0043ce]',
  resolved: 'bg-[#0c8c5e]/15 text-[#0c8c5e]',
};

const LeapResistanceLog = ({ entries }) => {
  const [expandedIds, setExpandedIds] = useState(new Set());

  const toggleExpand = (id) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  if (!entries || entries.length === 0) {
    return (
      <div className="rounded border border-[var(--cds-border-subtle,#e0e0e0)] p-4 text-[var(--cds-text-primary,#1a1a18)] font-['IBM_Plex_Sans',sans-serif]" style={{ backgroundColor: 'var(--cds-layer, #ffffff)' }}>
        <h3 className="text-[16px] font-semibold mb-4 text-[#1a1a18]">Resistance Log</h3>
        <p className="text-[14px] tracking-[0.16px] text-[#525252] text-center py-6">
          No resistance entries recorded.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded border border-[var(--cds-border-subtle,#e0e0e0)] p-4 text-[var(--cds-text-primary,#1a1a18)] font-['IBM_Plex_Sans',sans-serif]" style={{ backgroundColor: 'var(--cds-layer, #ffffff)' }}>
      <h3 className="text-[16px] font-semibold mb-4 text-[#1a1a18]">Resistance Log</h3>
      <div className="grid grid-cols-1 gap-4">
        {entries.map((entry) => {
          const isExpanded = expandedIds.has(entry.id);
          return (
            <div
              key={entry.id}
              className={cn(
                'bg-[#f4f4f4] border border-[#e0e0e0] rounded p-4 border-l-4',
                severityBorderColors[entry.severity]
              )}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={cn(
                    'inline-block px-2 py-0.5 rounded-full text-[12px] tracking-[0.32px] font-semibold',
                    severityBadge[entry.severity]
                  )}
                >
                  {SEVERITY_LABELS[entry.severity]}
                </span>
                <span
                  className={cn(
                    'inline-block px-2 py-0.5 rounded-full text-[12px] tracking-[0.32px] font-medium',
                    statusBadge[entry.status]
                  )}
                >
                  {STATUS_LABELS[entry.status]}
                </span>
              </div>
              <h4 className="text-[14px] tracking-[0.16px] font-semibold text-[#1a1a18] mb-1">{entry.source}</h4>
              <p className="text-[14px] tracking-[0.16px] text-[#525252] mb-2 leading-[1.5]">
                {entry.description}
              </p>
              {entry.mitigation && (
                <>
                  <button
                    type="button"
                    className="bg-transparent border-none p-0 cursor-pointer text-[12px] tracking-[0.32px] font-medium text-[#0c8c5e] hover:underline focus:outline-2 focus:outline-[#0c8c5e] focus:outline-offset-2 focus:rounded-sm"
                    onClick={() => toggleExpand(entry.id)}
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? '\u25BE Hide mitigation' : '\u25B8 Show mitigation'}
                  </button>
                  {isExpanded && (
                    <div className="mt-2 p-3 bg-[#f4f4f4] rounded">
                      <span className="text-[12px] tracking-[0.32px] font-semibold text-[#1a1a18] block mb-1">
                        Mitigation Plan
                      </span>
                      <p className="text-[14px] tracking-[0.16px] text-[#525252] m-0 leading-[1.5]">
                        {entry.mitigation}
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

LeapResistanceLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      source: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      severity: PropTypes.oneOf(['low', 'medium', 'high']).isRequired,
      status: PropTypes.oneOf(['identified', 'mitigating', 'resolved']).isRequired,
      mitigation: PropTypes.string,
    })
  ),
};

LeapResistanceLog.defaultProps = {
  entries: [],
};

export default LeapResistanceLog;
