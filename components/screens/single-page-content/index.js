import React, { useState } from "react";
import StyledSingleContent from "./styled-single-content";
import LeftMenu from "./sub-components/left-menu";
import CenterArticleContent from "./content/article-content";
import TagsContent from "./content/tags-content";
import VideoContent from "./content/video-content";

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
  content,
  isVideoPage,
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
      {article ? <CenterArticleContent {...articleProps} /> : isVideoPage ? <VideoContent content={content} t={t} /> : <TagsContent isTagPage={isTagPage} content={content} t={t} currentLanguage={currentLanguage} />}
    </StyledSingleContent>
  );
};

export default SingleContent;
