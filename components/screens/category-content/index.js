import React, { useEffect, useState } from "react";
import StyledSingleContent from "./styled-single-content";
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
      <CenterCategoryContent { ...categoryProps} />
    </StyledSingleContent>
  );
};

export default SingleContent;