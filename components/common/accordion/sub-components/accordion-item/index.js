import { useRef, useState, useEffect } from "react";
import Heading from "@components/common/heading";
import StyledAccordionItem from "./styled-accordion-item";

const AccordionItem = ({
  heading,
  children,
  onClick,
  isExpanded,
  isMenu,
  ...rest
}) => {
  const content = useRef();
  const [active, setActive] = useState(false);

  useEffect(() => {
    isExpanded ? setActive(true) : setActive(false)
  }, [isExpanded]);

  return (
    <StyledAccordionItem className="accordion-item" {...rest}>
      <button className="accordion-btn" onClick={() => setActive(!active)}>
        <div className="accordion-icon">{!active ? "+" : "−"}</div>
        <Heading className="accordion-heading" level={4} label={heading} />
      </button>
      <div
        ref={content}
        style={{
          maxHeight: `${isMenu ? "fit-content" : (active ? `${content.current.scrollHeight}px` : "0px")}`,
        }}
        className="accordion-content"
      >
        <div className="accordion-text">{children}</div>
      </div>
    </StyledAccordionItem>
  );
};

export default AccordionItem;
