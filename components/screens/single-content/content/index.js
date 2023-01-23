import React, { useState } from "react";
import StyledContent from "./styled-content";
import ReactHtmlParser from "react-html-parser";
import Tag from "@components/common/tag";
import ArticlePopup from "../article-popup";

const CenterContent = ({ t, articles, tags, children }) => {
  const isMain = articles.attributes.is_main;
  const articleTags = !isMain && articles.attributes.tags.data;
  const [modalActive, setModalActive] = useState(false);
  const [tag, setTag] = useState();
  const handlerSetModal = (active) => {
    setModalActive(!!active);
    setTag(active);
  };
  {
    !isMain &&
      articleTags.sort(function (a, b) {
        return a.attributes.title.toLowerCase() <
          b.attributes.title.toLowerCase()
          ? -1
          : 1;
      });
  }
  return (
    <StyledContent>
      <div className={!isMain ? "wrapper" : "wrapper main"}>
        {!isMain &&
          articleTags.map((item, index) => (
            <Tag
              key={index}
              t={t}
              type={"page"}
              label={item.attributes.title}
              className="tag"
              onClick={() => handlerSetModal(item.attributes.title)}
            />
          ))}
        {ReactHtmlParser(articles.attributes.content)}
      </div>
      {children}
      {!isMain && (
        <ArticlePopup
          t={t}
          active={modalActive}
          tag={tag}
          allTags={tags}
          setActive={setModalActive}
        />
      )}
    </StyledContent>
  );
};

export default CenterContent;
