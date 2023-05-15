import React from "react";
import StyledSingleContent from "./styled-single-content";
import LeftMenu from "./left-menu";
import CenterContent from "./content";
import CenterCategoryContent from "./category-content";

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
  ...rest
}) => {
  return (
    <StyledSingleContent {...rest}>
      <LeftMenu t={t} isCategory={isCategory} articles={articles} categories={categories} category={category} />
      {isCategory ? (
        <CenterCategoryContent t={t} articles={articles} children={children} categories={categories} category={category} />
      ) : (
        <CenterContent
          t={t}
          articles={articles}
          children={children}
          tags={tags}
          isTagPage={isTagPage}
          videos={videos}
        />
      )}
    </StyledSingleContent>
  );
};

export default SingleContent;
