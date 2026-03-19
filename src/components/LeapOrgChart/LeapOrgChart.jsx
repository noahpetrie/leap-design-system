import React from 'react';
import PropTypes from 'prop-types';
import styles from './LeapOrgChart.module.scss';

const NodeCard = ({ name, role }) => (
  <div className={styles['leap-org-chart__card']}>
    <span className={styles['leap-org-chart__name']}>{name}</span>
    <span className={styles['leap-org-chart__role']}>{role}</span>
  </div>
);

const OrgNode = ({ node, depth = 0 }) => {
  const hasChildren = node.children && node.children.length > 0;
  const maxDepth = 3;

  return (
    <div className={styles['leap-org-chart__node']}>
      <NodeCard name={node.name} role={node.role} />

      {hasChildren && depth < maxDepth && (
        <div className={styles['leap-org-chart__children-wrapper']}>
          <div className={styles['leap-org-chart__connector-down']} />
          <div className={styles['leap-org-chart__children']}>
            {node.children.map((child, idx) => (
              <div
                key={`${child.name}-${idx}`}
                className={styles['leap-org-chart__child']}
              >
                <div className={styles['leap-org-chart__connector-up']} />
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
    <div className={styles['leap-org-chart']}>
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
