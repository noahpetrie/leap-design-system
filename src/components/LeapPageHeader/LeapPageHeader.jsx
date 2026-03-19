import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb, BreadcrumbItem, Button } from '@carbon/react';
import styles from './LeapPageHeader.module.scss';

const LeapPageHeader = ({ title, subtitle, breadcrumbs = [], actions, ...rest }) => {
  return (
    <div className={styles['page-header']} {...rest}>
      {breadcrumbs.length > 0 && (
        <Breadcrumb className={styles['page-header-breadcrumb']}>
          {breadcrumbs.map((item, i) => (
            <BreadcrumbItem key={i} href={item.href} isCurrentPage={i === breadcrumbs.length - 1}>
              {item.label}
            </BreadcrumbItem>
          ))}
        </Breadcrumb>
      )}
      <div className={styles['page-header-row']}>
        <div>
          <h1 className={styles['page-header-title']}>{title}</h1>
          {subtitle && <p className={styles['page-header-subtitle']}>{subtitle}</p>}
        </div>
        {actions && <div className={styles['page-header-actions']}>{actions}</div>}
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
