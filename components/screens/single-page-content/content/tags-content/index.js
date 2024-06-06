import React, { useState } from "react";
import ArticlePopup from "../../pop-ups/article-popup";
import AlphabetContainer from "../sub-components/aplhabet-container";
import Text from "@components/common/text";
import StyledContent from "../styled-content";

const TagsContent = ({ t, content, isTagPage, currentLanguage, ...rest }) => {
  const [modalActive, setModalActive] = useState(false);
  const alphabet = t("Alphabet");
  const [tag, setTag] = useState();
  const handlerSetModal = (active) => {
    setModalActive(active);
    setTag(active);
  };

  const filteredAlph = (alphabet.split("").map((y) => { return ((content?.filter((item) => (item.attributes.title.toLowerCase().startsWith(y)))).length !== 0) ? y : null })).filter(function (el) {
    return (el !== null);
  });

  return (
    <StyledContent className="wrapper">
      {isTagPage ?
        <>
          <AlphabetContainer t={t} selectorContent={filteredAlph} pageContent={content} isTagPage={isTagPage} onClickFunction={handlerSetModal} />
          <ArticlePopup t={t} active={modalActive} tag={tag} allTags={content} setActive={setModalActive} language={currentLanguage} />
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
