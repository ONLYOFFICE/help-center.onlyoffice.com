import React, { useState } from "react";
import StyledSingleContent from "./styled-single-content";
import LeftMenu from "./sub-components/left-menu";
import CenterArticleContent from "./content/article-content";

const SingleContent = ({
  t,
  article,
  children,
  tags,
  category,
  categories,
  isCategory,
  isTagPage,
  videos,
  currentLanguage,
  pagePath,
  ...rest
}) => {

  // left menu highlight
  const [activeItem, setActiveItem] = useState(null);
  const handleActiveItemChange = (item) => {
    setActiveItem(item);
  };

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
    pagePath,
    t,
  };
  const menuProps = {
    article,
    categories,
    isCategory,
    category,
    handleActiveItemChange,
    currentLanguage,
    children,
    t,
    activeItem
  };

  return (
    <StyledSingleContent {...rest}>
      <LeftMenu {...menuProps} isArticle={true} />
      <CenterArticleContent {...articleProps} />
    </StyledSingleContent>
  );
};

export default SingleContent;
