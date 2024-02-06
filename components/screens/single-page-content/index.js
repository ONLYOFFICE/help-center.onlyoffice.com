import React, { useEffect, useState } from "react";
import StyledSingleContent from "./styled-single-content";
import LeftMenu from "./sub-components/left-menu";
import CenterArticleContent from "./content/article-content";

const SingleContent = ({
  t,
  article,
  articles,
  children,
  tags,
  category,
  categories,
  isCategory,
  isTagPage,
  videos,
  currentLanguage,
  pagepath,
  ...rest
}) => {

  // left menu highlight
  const [activeItem, setActiveItem] = useState(null);
  const handleActiveItemChange = (item) => {
    setActiveItem(item);
  };

  const isArticle = true;

  const articleProps = {
    article,
    category,
    categories,
    tags,
    isTagPage,
    videos,
    handleActiveItemChange,
    currentLanguage,
    children,
    pagepath,
    t,
  };
  const menuProps = {
    article,
    articles,
    categories,
    isCategory,
    category,
    handleActiveItemChange,
    currentLanguage,
    children,
    t,
    activeItem,
    isArticle
  };

  return (
    <StyledSingleContent {...rest}>
      <LeftMenu {...menuProps} />
      <CenterArticleContent {...articleProps} />
    </StyledSingleContent>
  );
};

export default SingleContent;
