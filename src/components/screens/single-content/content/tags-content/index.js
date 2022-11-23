import React, { useState } from "react";
import ArticlePopup from "../../article-popup";
import { TagsInfo } from "@static/data/alpha-tags";
import AlphabetContainer from "../sub-components/aplhabet-container";
import NoteHelp from "../sub-components/note-help";

const TagsContent = ({ t, ...rest }) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const [modalActive, setModalActive] = useState(false);
  const [tag, setTag] = useState();
  const handlerSetModal = (active) => {
    setModalActive(active);
    setTag(active);
    //console.log(tag);
  };

  TagsInfo.sort(function (a, b) {
    return a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1;
  });

  const filteredAlph = (alphabet.split("").map((y) => { return ((TagsInfo.filter((item) => (item.title.toLowerCase().startsWith(y)))).length !== 0) ? y : null })).filter(function (el) {
    return (el !== null );
  });
  
  return (
    <>
      <AlphabetContainer selectorContent={filteredAlph} pageContent={TagsInfo} isTagPage={true} onClickFunction={handlerSetModal} />
      <NoteHelp className="nh_notice" t={t} label={t("The supported browsers are: Microsoft Internet Explorer version 8 or higher, Mozilla Firefox version 4 or higher, Google Chrome version 11 or higher, Apple Safari version 4 or higher or Opera version 11 or higher.")} />
      <ArticlePopup t={t} active={modalActive} tag={tag} setActive={setModalActive} />
    </>
  );
};
export default TagsContent;
