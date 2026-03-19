import React from 'react';
import PropTypes from 'prop-types';

const NodeCard = ({ name, role }) => (
  <div className="flex flex-col items-center bg-white border-2 border-primary rounded-lg px-4 py-2 min-w-[140px] text-center shadow-sm transition-shadow hover:shadow-md">
    <span className="text-sm font-semibold text-foreground">{name}</span>
    <span className="text-xs font-medium text-muted-foreground mt-0.5">{role}</span>
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
    <div className="bg-white border border-border rounded-lg p-6 overflow-x-auto">
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
