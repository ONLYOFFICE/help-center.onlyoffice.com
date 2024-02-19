import React, { useState, useEffect } from "react";
import Box from "@components/common/box";
import GlossarySelector from "../glossary-selector";
import StyledAlphabetContainer from "./styled-alphabet-container";
import Dictionary from "../dictionary";
import Tag from "@components/common/tag";
import Heading from "@components/common/heading";

const AlphabetContainer = ({
  t,
  selectorContent,
  pageContent,
  isTagPage,
  onClickFunction,
  ...rest
}) => {
  const [prodAplh, setProdAlph] = useState(selectorContent);

  const onClickHandler = (c) => {
    if (c !== "all") {
      const letter = selectorContent.filter((it) => it === c);
      setProdAlph(letter);
    } else {
      setProdAlph(selectorContent);
    }
  };
  
  useEffect(() => {
    setProdAlph(selectorContent);
  }, [selectorContent]);

  const makeTagID = (text) => {
    const tagID = "tag_" + text.toLowerCase().replace(/[\s.'-]/g, "");
    return tagID;
  };

  return (
    <StyledAlphabetContainer isTagPage={isTagPage}>
      <GlossarySelector
        t={t}
        content={selectorContent}
        onClickFunc={onClickHandler}
      />
      <Box className="glossContent">
        {prodAplh.map((c, index) => {
          return (
            <Box key={index} className="glossLetter" id={"gloss_" + c + "_block"}>
              <Heading
                fontSize={"25px"}
                fontWeight={"300"}
                textTransform={"uppercase"}
                id={"gcID" + c.toUpperCase()}
              >
                {c}
              </Heading>
              {isTagPage ? (
                <ul className="glossTagsArea">
                  {pageContent?.filter((item) => item.attributes.title.toLowerCase().startsWith(c))
                    .map((item, index) => (
                      <Tag
                        key={index}
                        t={t}
                        type={"list"}
                        label={item.attributes.title}
                        className="tags"
                        onClick={() => onClickFunction(item.attributes.title)}
                        id={makeTagID(item.attributes.title)}
                      />
                    ))}
                </ul>
              ) : (
                <div>
                  {pageContent?.filter((item) => item.attributes.title.toLowerCase().startsWith(c))
                    .map((item, index) => (
                      <Dictionary
                        key={index}
                        t={t}
                        title={item.attributes.title}
                        subtitle={item.attributes.subtitle}
                        definition={item.attributes.definition}
                      />
                    ))}
                </div>
              )}
            </Box>
          );
        })}
      </Box>
    </StyledAlphabetContainer>
  );
};

export default AlphabetContainer;
