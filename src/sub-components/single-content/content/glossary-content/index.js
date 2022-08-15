import React, { useState } from "react";
import StyledGlossary from "./styled-glossary-content";
import Tag from "../../../../../components/tag";
import GlossarySelector from "../sub-components/glossary-selector";
import { GlossaryInfo } from "../../../../../static/data/alpha-glossary";
import Box from "../../../../../components/box";
import StyledHeading from "../../../../../components/heading";
import Text from "../../../../../components/text";
import Dictionary from "../sub-components/dictionary";
import NoteHelp from "../sub-components/note-help";

const GlossaryContent = ({ t, ...rest }) => {
  const [selected, setSelected] = useState("all");
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const filteredAlph = (alphabet.split("").map((y) => { return ((GlossaryInfo.filter((item) => (item.title.toLowerCase().startsWith(y)))).length !== 0) ? y : null })).filter(function (el) {
    return (el !== null );
  });
  const onClickHandler = (c) => {
    setSelected(c);
    console.log(selected);
  };

  return (
    <StyledGlossary>
      <GlossarySelector t={t} content={filteredAlph} onClickFunc={onClickHandler} />
      <div className="glossContent" selected={selected}>
        {filteredAlph.map((c) => {
          return (
            <Box className="glossLetter" id={"gloss_" + c + "_block"}>
              <StyledHeading
                fontSize={"25px"}
                fontWeight={"300"}
                textTransform={"uppercase"}
                id={"gc_" + c}
              >
                {c}
              </StyledHeading>
              <div>
                {GlossaryInfo.filter((item) => item.title.toLowerCase().startsWith(c)).map(
                  (item, index) => (
                    <Dictionary
                      key={index}
                      t={t}
                      title={item.title}
                      subtitle={item.subtitle}
                      definition={item.definition}
                    />
                  )
                )}
              </div>
            </Box>
          );
        })}
      </div>
      <NoteHelp t={t} label={t("The supported browsers are: Microsoft Internet Explorer version 8 or higher, Mozilla Firefox version 4 or higher, Google Chrome version 11 or higher, Apple Safari version 4 or higher or Opera version 11 or higher.")} />
    </StyledGlossary>
  );
};
export default GlossaryContent;
