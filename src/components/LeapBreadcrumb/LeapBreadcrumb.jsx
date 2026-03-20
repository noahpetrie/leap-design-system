import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb, BreadcrumbItem } from '@carbon/react';

const LeapBreadcrumb = ({ items = [], ...rest }) => {
  return (
    <div
      className="leap-breadcrumb"
      style={{
        '--cds-link-primary': '#0c8c5e',
        '--cds-link-primary-hover': '#0c8c5e',
      }}
      {...rest}
    >
      <Breadcrumb>
        {items.map((item, i) => (
          <BreadcrumbItem
            key={i}
            href={item.href}
            isCurrentPage={i === items.length - 1}
          >
            {item.label}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </div>
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
