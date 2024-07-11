import StyledSingleContent from "./styled-single-content";
import LeftMenu from "./sub-components/left-menu";
import CenterArticleContent from "./content/article-content";
import TagsContent from "./content/tags-content";
import VideoContent from "./content/video-content";

const SingleContent = ({
    t,
    currentLanguage,
    isArticle,
    categoryName,
    categoryUrl,
    level2CategoryName,
    level2CategoryUrl,
    pageName,
    pageDescription,
    tags,
    videos,
    data,
    isGlossaryPage,
    isTagPage,
    isVideoPage
  }) => {
  return (
    <StyledSingleContent>
      <LeftMenu
        t={t}
        isArticle={isArticle}
        pageName={pageName}
        pageDescription={pageDescription}
      />
      {isGlossaryPage || isTagPage ? (
        <TagsContent
          t={t}
          currentLanguage={currentLanguage}
          content={data}
          isTagPage={isTagPage}
        />
      ) : isVideoPage ? (
        <VideoContent
          t={t}
          content={data}
        />
      ) : (
        <CenterArticleContent
          t={t}
          currentLanguage={currentLanguage}
          categoryName={categoryName}
          categoryUrl={categoryUrl}
          level2CategoryName={level2CategoryName}
          level2CategoryUrl={level2CategoryUrl}
          pageName={pageName}
          pageDescription={pageDescription}
          tags={tags}
          videos={videos}
        />
      )}
    </StyledSingleContent>
  );
};

export default SingleContent;
