import { useRef, useState } from "react";
import Heading from "@components/common/heading";
import StyledAccordionItem from "./styled-accordion-item";

const AccordionItem = ({
  heading,
  children,
  isCollapsed,
  onClick,
  isMenu,
  isMobMenu,
  ...rest
}) => {
  const content = useRef();
  const [active, setActive] = useState(false);
  return (
    <StyledAccordionItem {...rest}>
      <div className="accordion" onClick={() => setActive(!active)}>
        <div className="accordion-icon">{!isMobMenu && (!active ? "+" : "−")}</div>
        <Heading className="accordion-heading" level={4} label={heading} />
      </div>
      <div
        ref={content}
        style={{
          maxHeight: `${isMenu && !isMobMenu ? "fit-content" : (active ? `${content.current.scrollHeight}px` : "0px")}`,
        }}
        className="accordion-content"
      >
        <div className="accordion-text">{children}</div>
      </div>
    </StyledAccordionItem>
  );
};

export default AccordionItem;
