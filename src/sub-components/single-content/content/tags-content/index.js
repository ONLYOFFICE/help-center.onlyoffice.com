import React, { useState } from "react";
import StyledTags from "./styled-tags-content";
import ArticlePopup from "../../article-popup";
import Tag from "../../../../../components/tag";
import GlossarySelector from "../sub-components/glossary-selector";
import { TagsInfo } from "../../../../../static/data/alpha-tags";
import Box from "../../../../../components/box";
import StyledHeading from "../../../../../components/heading";

const TagsContent = ({ t, ...rest }) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const [values, setValues] = useState(TagsInfo);
  const [modalActive, setModalActive] = useState(false);
  const [tag, setTag] = useState(null);
  const handlerSetModal = (active) => {
    setModalActive(active);
  };

  const makeTagID = (text) => {
    const tagID = "tag_" + text.toLowerCase().replace(/[\s.'-]/g, "");
    return tagID;
  };

  TagsInfo.sort(function (a, b) {
    return a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1;
  });

  const filteredAlph = (alphabet.split("").map((y) => { return ((TagsInfo.filter((item) => (item.title.toLowerCase().startsWith(y)))).length !== 0) ? y : null })).filter(function (el) {
    return (el != null );
  });
  
  return (
    <StyledTags>
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
              <ul className="glossTagsArea">
                {TagsInfo.filter((item) =>
                  item.title.toLowerCase().startsWith(c)
                ).map((item, index) => (
                  <Tag
                    key={index}
                    t={t}
                    type={"list"}
                    label={item.title}
                    className="tags"
                    onClick={() => handlerSetModal(true)}
                    id={makeTagID(item.title)}
                  />
                ))}
              </ul>
            </Box>
          );
        })}
      </div>
      <ArticlePopup t={t} active={modalActive} setActive={setModalActive} />
    </StyledTags>
  );
};
export default TagsContent;
