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
  setLeftMenuMobile,
  subCategoryName,
  subCategoryUrl
}) => {
  const containerRef = useRef(null);
  const wrapperContentRef = useRef(null);
  const leftMenuRef = useRef(null);
  const breadcrumbsRef = useRef(null);
  const headingRef = useRef(null);
  const tagsRef = useRef(null);
  const videosRef = useRef(null);

  const [modalActive, setModalActive] = useState(false);
  const [imageModalActive, setImageModalActive] = useState(false);
  const [bigPhotoSrc, setBigPhotoSrc] = useState(null);
  const [headings, setHeadings] = useState([]);
  const [tagName, setTagName] = useState();
  const [tagItems, setTagItems] = useState();
  const [hasMoreTags, setHasMoreTags] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const cookies = new Cookies(null, { path: "/" });

  useEffect(() => {
    if (containerRef.current) {
      tableBuilder(containerRef.current, cookies);
    }

    setHeadings(extractHeadings(wrapperContentRef.current, pageDescription, "h4"));

    function getFullHeight(element) {
      if (!element) {
        return 0;
      }

      const offsetHeight = element.getBoundingClientRect().height;
      const style = window.getComputedStyle(element);
      return offsetHeight + parseFloat(style.marginTop) + parseFloat(style.marginBottom);
    }

    const breadcrumbsRefHeight = getFullHeight(breadcrumbsRef.current);
    const tagsRefHeight = getFullHeight(tagsRef.current);
    const headingRefHeight = getFullHeight(headingRef.current);
    const videosRefHeight = getFullHeight(videosRef.current);
    const offsetTop = breadcrumbsRefHeight + tagsRefHeight + headingRefHeight + videosRefHeight + 32 + 24;

    const scrollHandler = () => {
      handleArticleScroll(true, wrapperContentRef.current, leftMenuRef.current, offsetTop, "h4", setShowButton);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

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
          ref={leftMenuRef}
          pageName={pageName}
          headings={headings}
          isArticle={true}
          backBtnName={backBtnName}
          backBtnUrl={backBtnUrl}
          leftMenuMobile={leftMenuMobile}
          setLeftMenuMobile={setLeftMenuMobile}
        />
        <div className="wrapper">
          <Breadcrumbs
            t={t}
            ref={breadcrumbsRef}
            categoryName={categoryName}
            categoryUrl={categoryUrl}
            subCategoryName={subCategoryName}
            subCategoryUrl={subCategoryUrl}
            level2CategoryName={level2CategoryName}
            level2CategoryUrl={level2CategoryUrl}
            level3CategoryName={level3CategoryName}
            level3CategoryUrl={level3CategoryUrl}
            level4CategoryName={level4CategoryName}
            level4CategoryUrl={level4CategoryUrl}
            pageName={pageName}
          />
          <Heading ref={headingRef} level={3}>{pageName}</Heading>
          {tags?.data &&
            <div ref={tagsRef} className="tags">
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
          <div ref={wrapperContentRef}>
            <RawHtmlStyle onClick={handleClick} ref={containerRef}>{ReactHtmlParser(pageDescription)}</RawHtmlStyle>
            {videos && videos.data.length > 0 &&
              <ConnectorsVideo t={t} ref={videosRef} videos={videos.data} />
            }
          </div>
          <DownloadArea className="download-area" slug={categoryName} subcat={subCategoryName} t={t} />
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