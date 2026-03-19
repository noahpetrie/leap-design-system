import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const LeapBreadcrumb = ({ items = [], ...rest }) => {
  return (
    <nav aria-label="Breadcrumb" {...rest}>
      <ol className="flex items-center gap-1 text-sm">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-1">
              {i > 0 && (
                <span className="text-muted-foreground">/</span>
              )}
              {isLast ? (
                <span className="text-muted-foreground" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href}
                  className="text-primary hover:text-primary/80 hover:underline"
                >
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

LeapBreadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
    })
  ).isRequired,
};

export default LeapBreadcrumb;
