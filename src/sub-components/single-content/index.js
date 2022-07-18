import React, { useState } from "react";
import StyledSingleContent from "./styled-single-content";
import LeftMenu from "./left-menu";
import CenterContent from "./content";
import ArticlePopup from "./article-popup";
import Tag from "../../../components/tag";

const SingleContent = ({ t, ...rest }) => {
    const [modalActive, setModalActive] = useState(false);
    const [tag, setTag] = useState(null);
    const handlerSetModal = (e, active) => {
      setTag(e.value);
      setModalActive(active);
    };
    return (
        <StyledSingleContent>
            <LeftMenu t={t}  />
            <CenterContent t={t} />
            <Tag t={t} type={"page"} onClick={(e) => handlerSetModal(e, true)}>insert</Tag>
            <Tag t={t} type={"letter"} onClick={() => handlerSetModal(true)}>u</Tag>
            <Tag t={t} type={"list"} listType={"saas"} onClick={() => handlerSetModal(true)}>list</Tag>
            
            <ArticlePopup t={t} active={modalActive} setActive={setModalActive} tag={tag}  />
        </StyledSingleContent>
    )
}

export default SingleContent;
