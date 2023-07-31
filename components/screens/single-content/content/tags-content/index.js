import React, { useState } from "react";
import ArticlePopup from "../../article-popup";
import AlphabetContainer from "../sub-components/aplhabet-container";
import Text from "@components/common/text";
import StyledContent from "../styled-content";

const TagsContent = ({ t, content, isTagPage, ...rest }) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const [modalActive, setModalActive] = useState(false);
  const [tag, setTag] = useState();
  const handlerSetModal = (active) => {
    setModalActive(active);
    setTag(active);
  };

  content?.sort(function (a, b) {
    return a.attributes.title.toLowerCase() < b.attributes.title.toLowerCase() ? -1 : 1;
  });

  const filteredAlph = (alphabet.split("").map((y) => { return ((content?.filter((item) => (item.attributes.title.toLowerCase().startsWith(y)))).length !== 0) ? y : null })).filter(function (el) {
    return (el !== null);
  });

  return (
    <StyledContent className="wrapper">
        {isTagPage ?
          <>
            <AlphabetContainer t={t} selectorContent={filteredAlph} pageContent={content} isTagPage={isTagPage} onClickFunction={handlerSetModal} />
            <ArticlePopup t={t} active={modalActive} tag={tag} allTags={content} setActive={setModalActive} />
          </>
          :
          <>
            <Text padding={"10px 0"}>{t("Here are the base terms which are used in the online office interface and documentation.")}</Text>
            <AlphabetContainer t={t} selectorContent={filteredAlph} pageContent={content} isTagPage={isTagPage} />
          </>}
    </StyledContent>
  );
};


export default TagsContent;
