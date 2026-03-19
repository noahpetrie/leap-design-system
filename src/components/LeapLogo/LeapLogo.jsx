import React from 'react';
import PropTypes from 'prop-types';
import styles from './LeapLogo.module.scss';

const LogoMark = ({ size, color }) => (
  <svg width={size} height={size} viewBox="0 0 182 167" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M41.2544 57.8018C32.3186 75.2578 32.8702 96.9106 44.568 114.352C56.2658 131.793 76.0898 140.519 95.6313 138.876C95.3985 139.037 95.1642 139.198 94.9279 139.356C72.5366 154.374 42.2103 148.397 27.1924 126.005C12.1745 103.614 18.1518 73.2879 40.5431 58.27C40.7794 58.1115 41.0165 57.9554 41.2544 57.8018Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M64.4222 42.2632C55.4862 59.7194 56.038 81.372 67.7357 98.813C79.4335 116.254 99.2573 124.981 118.799 123.338C118.566 123.499 118.332 123.659 118.096 123.818C95.7042 138.836 65.378 132.858 50.3601 110.467C35.3422 88.0756 41.3194 57.7495 63.7108 42.7314C63.9471 42.5729 64.1842 42.4169 64.4222 42.2632Z"
      fill={color}
    />
    <path
      d="M86.8785 27.1924C64.4873 42.2103 58.5099 72.5366 73.5279 94.9279C88.5458 117.319 118.872 123.296 141.263 108.279C163.655 93.2606 169.632 62.9343 154.614 40.5431C139.596 18.1518 109.27 12.1745 86.8785 27.1924Z"
      fill={color}
    />
  </svg>
);

const LogoWithBorder = ({ size, color }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_logo" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
      <path d="M100 0H0V100H100V0Z" fill="white" />
    </mask>
    <g mask="url(#mask0_logo)">
      <mask id="mask1_logo" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
        <path d="M100 0H0V100H100V0Z" fill="white" />
        <path d="M100 0H0V100H100V0Z" fill="white" />
      </mask>
      <g mask="url(#mask1_logo)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 3.125C12.9188 3.125 3.125 12.9188 3.125 25V75C3.125 87.081 12.9188 96.875 25 96.875H75C87.081 96.875 96.875 87.081 96.875 75V25C96.875 12.9188 87.081 3.125 75 3.125H25ZM0 25C0 11.1929 11.1929 0 25 0H75C88.807 0 100 11.1929 100 25V75C100 88.807 88.807 100 75 100H25C11.1929 100 0 88.807 0 75V25Z"
          fill={color}
        />
      </g>
    </g>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M27.7525 38.5859C23.7484 46.4078 23.9956 56.1103 29.2373 63.9256C34.479 71.7408 43.3621 75.6512 52.1186 74.9149C52.0142 74.9872 51.9093 75.059 51.8034 75.13C41.7699 81.8595 28.1809 79.1811 21.4514 69.1476C14.7219 59.1142 17.4003 45.5251 27.4338 38.7957C27.5397 38.7247 27.6459 38.6547 27.7525 38.5859Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M38.1339 31.623C34.1297 39.445 34.377 49.1475 39.6187 56.9627C44.8604 64.778 53.7434 68.6884 62.4999 67.952C62.3956 68.0243 62.2906 68.0961 62.1847 68.1671C52.1512 74.8967 38.5622 72.2182 31.8327 62.1848C25.1033 52.1513 27.7816 38.5623 37.8151 31.8328C37.921 31.7618 38.0273 31.6918 38.1339 31.623Z"
      fill={color}
    />
    <path
      d="M48.1965 24.8699C38.163 31.5994 35.4846 45.1884 42.2141 55.2219C48.9436 65.2553 62.5326 67.9337 72.5661 61.2043C82.5995 54.4748 85.2779 40.8857 78.5485 30.8523C71.819 20.8188 58.2299 18.1404 48.1965 24.8699Z"
      fill={color}
    />
  </svg>
);

const LeapLogo = ({ variant = 'mark', size = 48, color = '#0C8C5E', className }) => {
  return (
    <span className={`${styles['leap-logo']} ${className || ''}`} role="img" aria-label="Leap logo">
      {variant === 'bordered' ? (
        <LogoWithBorder size={size} color={color} />
      ) : (
        <LogoMark size={size} color={color} />
      )}
    </span>
  );
};

LeapLogo.propTypes = {
  variant: PropTypes.oneOf(['mark', 'bordered']),
  size: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
};

export default LeapLogo;
