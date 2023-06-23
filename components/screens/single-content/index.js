import React, { useEffect, useState } from "react";
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
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    updateWindowWidth();
    window.addEventListener('resize', updateWindowWidth);
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  // menu

  const [activeItem, setActiveItem] = useState(null);

  const handleActiveItemChange = (item) => {
    setActiveItem(item);
  };

  return (
    <StyledSingleContent {...rest}>
     {windowWidth > 593 && <LeftMenu t={t} isCategory={isCategory} articles={articles} categories={categories} category={category} activeItem={activeItem} onActiveItemChange={handleActiveItemChange} />}
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
          onActiveItemChange={handleActiveItemChange}
        />
      )}
    </StyledSingleContent>
  );
};

export default SingleContent;
