import { useState } from "react";
import StyledGlossarySelector from "./styled-glossary-selector";

const GlossarySelector = ({ t, selectorContent, onClickFunc }) => {
  const [active, setActive] = useState("all");

  const onClickHandler = (item) => {
    setActive(item);
    onClickFunc(item);
  };

  return (
    <StyledGlossarySelector>
      <button
        onClick={() => onClickHandler("all")}
        className={`glossary-select ${active === "all" ? "active" : ""}`}
      >
        {t("All")}
      </button>

      {t("Alphabet").split("").map((item, index) => {
        const found = selectorContent.find(a => a === item);

        return (
          <button
            onClick={() => !(found === undefined) && onClickHandler(found)}
            className={`glossary-select ${active === found ? "active" : ""}`}
            disabled={found === undefined ? true : false}
            key={index}
          >
            {(found === undefined) ? item : found}
          </button>
        )
      })}
    </StyledGlossarySelector>
  );
};
export default GlossarySelector;