import React, { useEffect, useState } from "react";
import StyledSingleContent from "./styled-single-content";
import LeftMenu from "./left-menu";
import CenterArticleContent from "./content/article-content";
import CenterCategoryContent from "./content/category-content";

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
  ...rest
}) => {

  // left menu highlight
  const [activeItem, setActiveItem] = useState(null);
  const handleActiveItemChange = (item) => {
    setActiveItem(item);
  };

  const articleProps = {
    article,
    tags,
    isTagPage,
    videos,
    handleActiveItemChange,
    currentLanguage,
    children,
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
  };
  const categoryProps = {
    articles,
    handleActiveItemChange,
    currentLanguage,
    children,
    t,
    category,
    categories,
  };

  return (
    <StyledSingleContent {...rest}>
      <LeftMenu { ...menuProps} />
      {isCategory ? (
        <CenterCategoryContent { ...categoryProps} />
      ) : (
        <CenterArticleContent { ...articleProps} />
      )}
    </StyledSingleContent>
  );
};

export default SingleContent;
