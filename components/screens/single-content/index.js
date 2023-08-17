import React, { useEffect, useState } from "react";
import StyledSingleContent from "./styled-single-content";
import LeftMenu from "./left-menu";
import CenterArticleContent from "./content/article-content";
import CenterCategoryContent from "./content/category-content";

const SingleContent = ({
  t,
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
  return (
    <StyledSingleContent {...rest}>
      <LeftMenu currentLanguage={currentLanguage} t={t} isCategory={isCategory} articles={articles} categories={categories} category={category} activeItem={activeItem} onActiveItemChange={handleActiveItemChange} />
      {isCategory ? (
        <CenterCategoryContent currentLanguage={currentLanguage} t={t} articles={articles} children={children} categories={categories} category={category} />
      ) : (
        <CenterArticleContent
          t={t}
          articles={articles}
          children={children}
          tags={tags}
          isTagPage={isTagPage}
          videos={videos}
          onActiveItemChange={handleActiveItemChange}
        />
      )}
    </StyledSingleContent>
  );
};

export default SingleContent;
