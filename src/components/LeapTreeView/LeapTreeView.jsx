import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { ChevronRight, Document, Folder } from '@carbon/react/icons';
import styles from './LeapTreeView.module.scss';

const TreeNode = ({ node, level = 0, selectedId, onSelect, expandedIds, onToggle, size }) => {
  const hasChildren = node.children && node.children.length > 0;
  const isExpanded = expandedIds.has(node.id);
  const isSelected = selectedId === node.id;
  const NodeIcon = node.icon || (hasChildren ? Folder : Document);

  const handleClick = () => {
    onSelect?.(node.id, node);
    if (hasChildren) onToggle(node.id);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    } else if (e.key === 'ArrowRight' && hasChildren && !isExpanded) {
      e.preventDefault();
      onToggle(node.id);
    } else if (e.key === 'ArrowLeft' && hasChildren && isExpanded) {
      e.preventDefault();
      onToggle(node.id);
    }
  };

  return (
    <li role="treeitem" aria-expanded={hasChildren ? isExpanded : undefined} aria-selected={isSelected}>
      <button
        className={`${styles['leap-tree-view__node']} ${styles[`leap-tree-view__node--${size}`]} ${
          isSelected ? styles['leap-tree-view__node--selected'] : ''
        } ${node.disabled ? styles['leap-tree-view__node--disabled'] : ''}`}
        style={{ paddingLeft: `${level * 1.25 + 0.5}rem` }}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        disabled={node.disabled}
        tabIndex={0}
        type="button"
      >
        {hasChildren && (
          <span className={`${styles['leap-tree-view__chevron']} ${isExpanded ? styles['leap-tree-view__chevron--expanded'] : ''}`}>
            <ChevronRight size={16} />
          </span>
        )}
        {!hasChildren && <span className={styles['leap-tree-view__chevron-spacer']} />}
        <span className={styles['leap-tree-view__icon']}>
          <NodeIcon size={16} />
        </span>
        <span className={styles['leap-tree-view__label']}>{node.label}</span>
      </button>
      {hasChildren && isExpanded && (
        <ul role="group" className={styles['leap-tree-view__group']}>
          {node.children.map((child) => (
            <TreeNode
              key={child.id}
              node={child}
              level={level + 1}
              selectedId={selectedId}
              onSelect={onSelect}
              expandedIds={expandedIds}
              onToggle={onToggle}
              size={size}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

const LeapTreeView = ({ nodes = [], size = 'md', onSelect, defaultExpanded = [] }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [expandedIds, setExpandedIds] = useState(new Set(defaultExpanded));

  const handleSelect = useCallback(
    (id, node) => {
      setSelectedId(id);
      onSelect?.(id, node);
    },
    [onSelect]
  );

  const handleToggle = useCallback((id) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  return (
    <ul role="tree" className={`${styles['leap-tree-view']} ${styles[`leap-tree-view--${size}`]}`}>
      {nodes.map((node) => (
        <TreeNode
          key={node.id}
          node={node}
          selectedId={selectedId}
          onSelect={handleSelect}
          expandedIds={expandedIds}
          onToggle={handleToggle}
          size={size}
        />
      ))}
    </ul>
  );
};

const nodeShape = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  disabled: PropTypes.bool,
};
nodeShape.children = PropTypes.arrayOf(PropTypes.shape(nodeShape));

LeapTreeView.propTypes = {
  nodes: PropTypes.arrayOf(PropTypes.shape(nodeShape)).isRequired,
  size: PropTypes.oneOf(['sm', 'md']),
  onSelect: PropTypes.func,
  defaultExpanded: PropTypes.arrayOf(PropTypes.string),
};

export default LeapTreeView;
