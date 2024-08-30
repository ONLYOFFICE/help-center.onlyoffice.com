import { StyledArticleContent, RawHtmlStyle } from "./styled-article-content";
import { useState, useEffect, useRef } from "react";
import getTagsArticle from "@lib/strapi/getTagsArticle";
import LeftMenu from "@components/screens/common/left-menu";
import StyledWrapperContent from "@components/screens/common/wrapper-content/styled-wrapper-content";
import ReactHtmlParser from "react-html-parser";
import Heading from "@components/common/heading";
import Breadcrumbs from "@components/screens/common/breadcrumbs";
import { tableBuilder } from "./utils/table-builder";
import Tooltip from "@components/common/tooltip";
import ImagePopup from "./sub-components/image-popup";
import DownloadArea from "./sub-components/download-area";
import ConnectorsVideo from "./sub-components/connectors-video";
import ArticlePopup from "../common/article-popup";
import Cookies from "universal-cookie";
import ScrollToTopButton from "@components/screens/common/scroll-to-top-button";
import { handleFaqAccordionClick, handleImagePopupClick, handleTogglerClick, handleShortcutToggleClick } from "./utils/handle-click-functions";
import { extractHeadings, handleArticleScroll } from "./utils/scroll-highlight-functions";

const ArticleContent = ({
  t,
  locale,
  categoryName,
  categoryUrl,
  level2CategoryName,
  level2CategoryUrl,
  level3CategoryName,
  level3CategoryUrl,
  level4CategoryName,
  level4CategoryUrl,
  pageName,
  pageDescription,
  tags,
  videos,
  backBtnName,
  backBtnUrl,
  leftMenuMobile,
  setLeftMenuMobile
}) => {
  const containerRef = useRef(null);
  const lastActiveSectionRef = useRef(null);
  const [modalActive, setModalActive] = useState(false);
  const [imageModalActive, setImageModalActive] = useState(false);
  const [bigPhotoSrc, setBigPhotoSrc] = useState(null);
  const [headings, setHeadings] = useState([]);
  const [activeSection, setActiveSection] = useState(null);
  const [tagName, setTagName] = useState();
  const [tagItems, setTagItems] = useState();
  const [hasMoreTags, setHasMoreTags] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const cookies = new Cookies(null, { path: "/" });

  const handleTagModal = async (tagName) => {
    const data = await getTagsArticle(locale, tagName, 4, 1);

    const { articles, article_desktops, article_docs, article_docspaces, article_mobiles, article_workspaces } = data;
    const hasMoreTags = [articles, article_desktops, article_docs, article_docspaces, article_mobiles, article_workspaces].some(({ meta: { pagination } }) => pagination.pageCount > pagination.page);

    setHasMoreTags(hasMoreTags);
    setTagItems([
      ...articles?.data || [],
      ...article_desktops?.data || [],
      ...article_docs?.data || [],
      ...article_docspaces?.data || [],
      ...article_mobiles?.data || [],
      ...article_workspaces?.data || [],
    ]);
    setTagName(tagName);
    setModalActive(true);
  };

  useEffect(() => {
    if (containerRef.current) {
      tableBuilder(containerRef.current, cookies);
    }
    setHeadings(extractHeadings(pageDescription, "h4", videos, t));
    handleArticleScroll(setActiveSection, setShowButton, lastActiveSectionRef, "h4");
    const scrollHandler = (event) => handleArticleScroll(setActiveSection, setShowButton, lastActiveSectionRef, "h4");

    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const handleClick = (event) => {
    handleFaqAccordionClick(event, containerRef.current);
    handleImagePopupClick(event, setBigPhotoSrc, setImageModalActive);
    handleTogglerClick(event);
    handleShortcutToggleClick(event);
  };

  return (
    <StyledArticleContent>
      <StyledWrapperContent>
        <LeftMenu
          t={t}
          pageName={pageName}
          headings={headings}
          isArticle={true}
          activeSection={activeSection}
          backBtnName={backBtnName}
          backBtnUrl={backBtnUrl}
          leftMenuMobile={leftMenuMobile}
          setLeftMenuMobile={setLeftMenuMobile}
        />
        <div className="wrapper">
          <Breadcrumbs
            t={t}
            categoryName={categoryName}
            categoryUrl={categoryUrl}
            level2CategoryName={level2CategoryName}
            level2CategoryUrl={level2CategoryUrl}
            level3CategoryName={level3CategoryName}
            level3CategoryUrl={level3CategoryUrl}
            level4CategoryName={level4CategoryName}
            level4CategoryUrl={level4CategoryUrl}
            pageName={pageName}
          />
          <Heading level={3}>{pageName}</Heading>
          {tags?.data &&
            <div className="tags">
              {tags?.data.map((item, index) => (
                <div
                  onClick={() => handleTagModal(item.attributes.title)}
                  className="tag"
                  key={index}
                >
                  {item.attributes.title}
                </div>
              ))}
            </div>
          }
          <div>
            {videos && videos.data.length > 0 &&
              <ConnectorsVideo t={t} videos={videos.data} />
            }
            <RawHtmlStyle onClick={handleClick} ref={containerRef}>{ReactHtmlParser(pageDescription)}</RawHtmlStyle>
          </div>
          <DownloadArea className="download-area" t={t} />
          <ArticlePopup
            t={t}
            locale={locale}
            tagName={tagName}
            tagItems={tagItems}
            modalActive={modalActive}
            setModalActive={setModalActive}
            hasMoreTags={hasMoreTags}
            setHasMoreTags={setHasMoreTags}
            setTagItems={setTagItems}
          />
          <ImagePopup
            t={t}
            image={bigPhotoSrc}
            active={imageModalActive}
            setActive={setImageModalActive}
          />
          <Tooltip />
        </div>
      </StyledWrapperContent>
      <ScrollToTopButton showButton={showButton} />
    </StyledArticleContent>
  );
};

export default ArticleContent;