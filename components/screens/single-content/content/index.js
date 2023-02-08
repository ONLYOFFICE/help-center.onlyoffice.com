import React, { useState } from "react";
import StyledContent from "./styled-content";
import ReactHtmlParser from "react-html-parser";
import Tag from "@components/common/tag";
import ArticlePopup from "../article-popup";
import ArticleContent from "./article-content";
import TagsContent from "./tags-content";

const CenterContent = ({ t, articles, tags, children, isArticle, isTagPage }) => {
  return (
    <StyledContent>
      {isArticle ?
        <ArticleContent
          t={t}
          articles={articles}
          tags={tags}
          children={children}
        />
        :
        <TagsContent t={t} isTagPage={isTagPage} content={tags} />
      }
    </StyledContent>
  );
};

export default CenterContent;
