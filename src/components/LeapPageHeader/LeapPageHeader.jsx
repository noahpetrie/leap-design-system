import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb, BreadcrumbItem, Button } from '@carbon/react';

const LeapPageHeader = ({ title, subtitle, breadcrumbs = [], actions, ...rest }) => {
  return (
    <div
      className="page-header"
      style={{
        '--cds-link-primary': '#0c8c5e',
      }}
      {...rest}
    >
      {breadcrumbs.length > 0 && (
        <Breadcrumb className="page-header-breadcrumb">
          {breadcrumbs.map((item, i) => (
            <BreadcrumbItem key={i} href={item.href} isCurrentPage={i === breadcrumbs.length - 1}>
              {item.label}
            </BreadcrumbItem>
          ))}
        </Breadcrumb>
      )}
      <div className="page-header-row">
        <div>
          <h1 className="page-header-title">{title}</h1>
          {subtitle && <p className="page-header-subtitle">{subtitle}</p>}
        </div>
        {actions && <div className="page-header-actions">{actions}</div>}
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
