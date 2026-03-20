import React from 'react';
import PropTypes from 'prop-types';

const NodeCard = ({ name, role }) => (
  <div className="flex flex-col items-center border-2 border-[#0c8c5e] rounded-lg px-4 py-2 min-w-[140px] text-center shadow-[0_1px_3px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-[0_2px_8px_rgba(0,0,0,0.12)]" style={{ backgroundColor: 'var(--cds-layer, #ffffff)' }}>
    <span className="text-[14px] font-semibold tracking-[0.16px] text-[var(--cds-text-primary,#161616)]">{name}</span>
    <span className="text-[12px] tracking-[0.32px] text-[#525252] mt-0.5">{role}</span>
  </div>
);

const OrgNode = ({ node, depth = 0 }) => {
  const hasChildren = node.children && node.children.length > 0;
  const maxDepth = 3;

  return (
    <div className="flex flex-col items-center">
      <NodeCard name={node.name} role={node.role} />

      {hasChildren && depth < maxDepth && (
        <div className="flex flex-col items-center w-full">
          {/* Connector down from parent */}
          <div className="w-0.5 h-6 bg-[#c6c6c0] mx-auto" />
          {/* Children row */}
          <div className="flex justify-center gap-4 relative">
            {node.children.map((child, idx) => (
              <div
                key={`${child.name}-${idx}`}
                className="flex flex-col items-center"
              >
                {/* Connector up to child */}
                <div className="w-0.5 h-6 bg-[#c6c6c0] mx-auto" />
                <OrgNode node={child} depth={depth + 1} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const LeapOrgChart = ({ data }) => {
  if (!data) return null;

  return (
    <div className="border border-[var(--cds-border-subtle,#e0e0e0)] rounded-lg p-6 overflow-x-auto" style={{ backgroundColor: 'var(--cds-layer, #ffffff)' }}>
      <OrgNode node={data} depth={0} />
    </div>
  );
};

const nodeShape = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

// Allow up to 3 levels of nesting
nodeShape.children = PropTypes.arrayOf(PropTypes.shape(nodeShape));

LeapOrgChart.propTypes = {
  /** Nested hierarchy data (max 3 levels deep) */
  data: PropTypes.shape(nodeShape).isRequired,
};

export default LeapOrgChart;
