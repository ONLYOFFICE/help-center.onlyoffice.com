import React, { useState } from "react";
import StyledGlossarySelector from "./styled-glossary-selector";
import GlossarySelect from "@components/common/glossary-select";

const GlossarySelector = ({ t, content, onClickFunc, ...rest }) => {
  const [active, setActive] = useState("all");
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const onClickGloss = (c) => {
    setActive(c);
    onClickFunc(c);
  };
  return (
    <StyledGlossarySelector>
      <GlossarySelect t={t} label={"All"} id={"all"} active={active === "all"} onClick={() => onClickGloss("all")} />
      {alphabet.split("").map((y) => {
        const found = content.find(a => a === y);
        return (
          <GlossarySelect t={t} label={(found === undefined) ? y : found} id={(found === undefined) ? y : found} active={active === found} isDisabled={ (found === undefined) ? true : false} onClick={() => (!(found === undefined) ? onClickGloss(found) : () => undefined)} /> )
      })}
    </StyledGlossarySelector>
  );
};
export default GlossarySelector;
