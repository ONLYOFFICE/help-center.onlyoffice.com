import { useEffect } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import StyledTooltip from "./styled-tooltip";

const Tooltip = () => {
  useEffect(() => {
    const timer = setTimeout(async () => {
    const elements = document.querySelectorAll(".tdwttp");

    elements.forEach((el) => {
      const title = el.getAttribute("title");

      if (title) {
        el.setAttribute("data-tooltip-html", title);
        el.setAttribute("data-tooltip-id", "tables-tooltip");
        el.removeAttribute("title");
      }
    });
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <StyledTooltip>
      <ReactTooltip
        id="tables-tooltip"
        className="tooltip"
        place="bottom"
        noArrow={true}
        offset={15}
      />
    </StyledTooltip>
  );
};

export default Tooltip;
