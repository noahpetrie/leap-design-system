import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { ChevronRight, Document, Folder } from '@carbon/icons-react';
import { cn } from '../../lib/utils';

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

  const isSm = size === 'sm';

  return (
    <li role="treeitem" aria-expanded={hasChildren ? isExpanded : undefined} aria-selected={isSelected}>
      <button
        className={cn(
          'flex w-full items-center gap-1 border-none bg-transparent text-left text-foreground cursor-pointer transition-colors duration-100',
          isSm ? 'py-1 pr-2 text-xs font-medium' : 'py-1.5 pr-3 text-sm',
          !isSelected && !node.disabled && 'hover:bg-accent',
          isSelected && 'bg-primary/10 text-primary font-semibold',
          node.disabled && 'text-muted-foreground opacity-50 cursor-not-allowed',
          'focus-visible:outline-2 focus-visible:outline-primary focus-visible:-outline-offset-2'
        )}
        style={{ paddingLeft: `${level * 1.25 + 0.5}rem` }}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        disabled={node.disabled}
        tabIndex={0}
        type="button"
      >
        {hasChildren && (
          <span className={cn(
            'flex shrink-0 items-center text-muted-foreground transition-transform duration-150',
            isExpanded && 'rotate-90'
          )}>
            <ChevronRight size={16} />
          </span>
        )}
        {!hasChildren && <span className="inline-block w-4 shrink-0" />}
        <span className={cn('flex shrink-0 items-center', isSelected ? 'text-primary' : 'text-muted-foreground')}>
          <NodeIcon size={16} />
        </span>
        <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">{node.label}</span>
      </button>
      {hasChildren && isExpanded && (
        <ul role="group" className="m-0 list-none p-0">
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
    <ul role="tree" className="m-0 list-none p-0">
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
