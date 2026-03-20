import React from 'react';
import PropTypes from 'prop-types';
import { Accordion, AccordionItem } from '@carbon/react';

const LeapAccordion = ({ items, ...rest }) => {
  return (
    <div style={{ '--cds-interactive': '#0c8c5e', '--cds-focus': '#0c8c5e' }} {...rest}>
      <Accordion>
        {items.map((item, index) => (
          <AccordionItem key={index} title={item.title}>
            {item.content}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

LeapAccordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default LeapAccordion;
