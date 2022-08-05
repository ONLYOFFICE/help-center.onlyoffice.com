import React, { useState } from "react";
import StyledGlossary from "./styled-glossary-content";
import Tag from "../../../../../components/tag";
import GlossarySelector from "../sub-components/glossary-selector";
import { GlossaryInfo } from "../../../../../static/data/alpha-glossary";
import Box from "../../../../../components/box";
import StyledHeading from "../../../../../components/heading";
import Text from "../../../../../components/text";
import Dictionary from "../sub-components/dictionary";

const GlossaryContent = ({ t, ...rest }) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const filteredAlph = (alphabet.split("").map((y) => { return ((GlossaryInfo.filter((item) => (item.title.toLowerCase().startsWith(y)))).length !== 0) ? y : null })).filter(function (el) {
    return (el != null );
  });

  return (
    <StyledGlossary>
      <GlossarySelector t={t} content={filteredAlph} />
      <div className="glossContent">
        {filteredAlph.map((c) => {
          return (
            <Box className="glossLetter" id={"box_" + c}>
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
    </StyledGlossary>
  );
};
export default GlossaryContent;
