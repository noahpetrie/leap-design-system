import React from 'react';
import PropTypes from 'prop-types';

const LeapPageHeader = ({ title, subtitle, breadcrumbs = [], actions, ...rest }) => {
  return (
    <div className="pb-6 border-b border-border mb-6" {...rest}>
      {breadcrumbs.length > 0 && (
        <nav className="mb-3" aria-label="Breadcrumb">
          <ol className="flex items-center gap-1 list-none m-0 p-0 text-sm">
            {breadcrumbs.map((item, i) => {
              const isLast = i === breadcrumbs.length - 1;
              return (
                <li key={i} className="flex items-center gap-1">
                  {i > 0 && <span className="text-muted-foreground">/</span>}
                  {isLast ? (
                    <span className="text-muted-foreground" aria-current="page">
                      {item.label}
                    </span>
                  ) : (
                    <a
                      href={item.href}
                      className="text-primary hover:text-primary/80 no-underline hover:underline"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      )}
      <div className="flex justify-between items-start gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-foreground m-0">{title}</h1>
          {subtitle && (
            <p className="text-sm text-muted-foreground mt-1 mb-0">{subtitle}</p>
          )}
        </div>
        {actions && <div className="flex gap-2 flex-shrink-0">{actions}</div>}
      </div>
    </div>
  );
};

LeapPageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string.isRequired, href: PropTypes.string })
  ),
  actions: PropTypes.node,
};

export default LeapPageHeader;
