import React from 'react';
import PropTypes from 'prop-types';
import styles from './LeapTeamOverview.module.scss';

const getInitials = (name) =>
  name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2);

const LeapTeamOverview = ({ members = [], title = "Team today", ...rest }) => {
  const onLeave = members.filter((m) => m.onLeave);
  const available = members.filter((m) => !m.onLeave);

  return (
    <div className={styles['team-overview']} {...rest}>
      <div className={styles['team-overview-header']}>
        <span className={styles['team-overview-title']}>{title}</span>
        <span className={styles['team-overview-count']}>
          {available.length}/{members.length} available
        </span>
      </div>
      {onLeave.length > 0 && (
        <div className={styles['team-overview-section']}>
          <span className={styles['team-overview-section-label']}>On leave</span>
          <div className={styles['team-overview-avatars']}>
            {onLeave.map((m, i) => (
              <div key={i} className={`${styles['team-overview-avatar']} ${styles['team-overview-avatar--leave']}`} title={`${m.name} — ${m.leaveType || 'Leave'}`}>
                {getInitials(m.name)}
              </div>
            ))}
          </div>
        </div>
      )}
      <div className={styles['team-overview-section']}>
        <span className={styles['team-overview-section-label']}>Available</span>
        <div className={styles['team-overview-avatars']}>
          {available.map((m, i) => (
            <div key={i} className={styles['team-overview-avatar']} title={m.name}>
              {getInitials(m.name)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

LeapTeamOverview.propTypes = {
  title: PropTypes.string,
  members: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      onLeave: PropTypes.bool,
      leaveType: PropTypes.string,
    })
  ).isRequired,
};

export default LeapTeamOverview;
