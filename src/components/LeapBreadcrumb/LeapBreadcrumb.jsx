import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb, BreadcrumbItem } from '@carbon/react';
import styles from './LeapBreadcrumb.module.scss';

const LeapBreadcrumb = ({ items = [], ...rest }) => {
  return (
    <div className={styles['leap-breadcrumb']} {...rest}>
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
