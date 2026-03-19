import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@carbon/react';
import styles from './LeapTabs.module.scss';

const LeapTabs = ({ tabs, ...rest }) => {
  return (
    <div className={styles['leap-tabs']} {...rest}>
      <Tabs>
        <TabList aria-label="List of tabs">
          {tabs.map((tab, index) => (
            <Tab key={index}>{tab.label}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {tabs.map((tab, index) => (
            <TabPanel key={index}>{tab.content}</TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </div>
  );
};

LeapTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default LeapTabs;
