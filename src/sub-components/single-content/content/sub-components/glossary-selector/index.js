import React, { useState } from "react";
import StyledGlossarySelector from "./styled-glossary-selector";
import GlossarySelect from "../../../../../../components/glossary-select";

import Box from "../../../../../../components/box";

const GlossarySelector = ({ t, content, ...rest }) => {
  const [active, setActive] = useState("all");
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alp = content;
  //const filteredAlph = (alphabet.split("").map((y) => { return (alp.filter((item) => (item !== y) ? y.isDisabled : null ))}));
  const onClickGloss = (c) => {
    //console.log(c);
    setActive(c);
  };
  //console.log(alp, filteredAlph);
  // isDisabled={c.isDisabled}
  return (
    <StyledGlossarySelector>
      <GlossarySelect t={t} label={"All"} id={"all"} active={active === "All"} onClick={() => onClickGloss("all")} />
      {/* {alphabet.split("").map((y) => {
        return (
           <span>
          {alp.map((c) => {
            if (y === c) {
              return (
                <GlossarySelect t={t} label={y} id={y} active={active === y} isDisabled={false} onClick={() => onClickGloss(y)} />
              )
            } else {
              return (
                <GlossarySelect t={t} label={y} id={y} active={active === y} isDisabled={true} onClick={() => onClickGloss(y)} />
              )
            }
          })}
        </span> )
      })} */}
      {alp.map((y) => {
        return (
           <span>
          {alphabet.split("").map((c) => {
            if (y === c) {
              return (
                <GlossarySelect t={t} label={y} id={y} active={active === y} isDisabled={false} onClick={() => onClickGloss(y)} />
              )
            } else {
              return (
                <GlossarySelect t={t} label={y} id={y} active={active === y} isDisabled={true} onClick={() => onClickGloss(y)} />
              )
            }
          })}
        </span> )
      })}
       {/* {alphabet.split("").map((y) => {
        return (
           <span>
          {alp.map((c) => {
              return (
                <GlossarySelect t={t} label={y} id={y} active={active === y} isDisabled={(y === c) ? false : true } onClick={() => onClickGloss(y)} />
              )
          })}
        </span> )
      })} */}
      {/* {alphabet.split("").map((y) => {
       return (
        alp.filter((c) => c.includes(y).map((it) => {
        return (
<GlossarySelect t={t} label={y} id={y} active={active === y} isDisabled={(y === c) ? false : true} onClick={() => onClickGloss(y)} />
        )}
        )
       ))
     })} */}
      {/* {(alphabet.split("").map((y) => { return (alp.filter((item) => <GlossarySelect t={t} label={item} id={item} active={active === y} isDisabled={(y === item) ? false : true } onClick={() => onClickGloss(item)} /> ))}))} */}
    </StyledGlossarySelector>
  );
};
export default GlossarySelector;
