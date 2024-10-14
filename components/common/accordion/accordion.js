import PropTypes from "prop-types";
import StyledAccordion from "./styled-accordion";
import AccordionItem from "./sub-components/accordion-item";

const Accordion = ({ children, level, isMain }) => {
  const items = children.filter(item => item.type.name === "AccordionItem");
  return (
    <StyledAccordion className="accordion__section">
      {items.map(({ props }, index) => (
        <AccordionItem
          key={index}
          heading={props.heading}
          level={level}
          isMain={isMain}
        >
          {props.children}
        </AccordionItem>
      ))}
    </StyledAccordion>
  );
};

Accordion.propTypes = {
  /** Accepts CSS style */
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /** Tab index */
  tabIndex: PropTypes.number,
  /** Accepts id */
  id: PropTypes.string,
  /** Accepts class */
  className: PropTypes.string,
};

Accordion.defaultProps = {
  level: 4,
};

export default Accordion;
