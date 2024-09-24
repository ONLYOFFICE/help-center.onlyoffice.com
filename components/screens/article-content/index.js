import StyledArticleContent from "./styled-article-content";
import StyledRawHtml from "../common/raw-html/styled-raw-html";
import { useState, useEffect, useRef } from "react";
import getTagsArticle from "@lib/strapi/getTagsArticle";
import LeftMenu from "@components/screens/common/left-menu";
import StyledWrapperContent from "@components/screens/common/wrapper-content/styled-wrapper-content";
import ReactHtmlParser from "react-html-parser";
import Heading from "@components/common/heading";
import Breadcrumbs from "@components/screens/common/breadcrumbs";
import Tag from "@components/common/tag";
import { tableBuilder } from "@utils/helpers/TableBuilder/table-builder";
import Tooltip from "@components/common/tooltip";
import ImagePopup from "./sub-components/image-popup";
import DownloadArea from "./sub-components/download-area";
import ConnectorsVideo from "./sub-components/connectors-video";
import ArticlePopup from "../common/article-popup";
import Cookies from "universal-cookie";
import ScrollToTopButton from "@components/screens/common/scroll-to-top-button";
import { handleFaqAccordionClick, handleImagePopupClick, handleTogglerClick, handleShortcutToggleClick } from "@utils/handle-click-functions";
import { extractHeadings, handleArticleScroll } from "@utils/scroll-highlight-functions";

const ArticleContent = ({
  t,
  locale,
  categoryName,
  categoryUrl,
  level2CategoryName,
  level2CategoryUrl,
  level3CategoryName,
  level3CategoryUrl,
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

  const [modalActive, setModalActive] = useState(false);
  const [imageModalActive, setImageModalActive] = useState(false);
  const [bigPhotoSrc, setBigPhotoSrc] = useState(null);
  const [headings, setHeadings] = useState([]);
  const [tagName, setTagName] = useState();
  const [tagItems, setTagItems] = useState();
  const [hasMoreTags, setHasMoreTags] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [videoOffsetTrigger, setVideoOffsetTrigger] = useState(0);
  const cookies = new Cookies(null, { path: "/" });

  useEffect(() => {
    if (containerRef.current) {
      tableBuilder(containerRef.current, cookies);
    }

    setHeadings(extractHeadings(wrapperContentRef.current, pageDescription, "h4"));

    const getFullHeight = (element) => {
      if (!element) return 0;
      const offsetHeight = element.getBoundingClientRect().height;
      const style = window.getComputedStyle(element);
      return offsetHeight + parseFloat(style.marginTop) + parseFloat(style.marginBottom);
    };

    const breadcrumbsRefHeight = getFullHeight(breadcrumbsRef.current);
    const tagsRefHeight = getFullHeight(tagsRef.current);
    const headingRefHeight = getFullHeight(headingRef.current);
    const offsetTop = breadcrumbsRefHeight + tagsRefHeight + headingRefHeight + 8;

    const scrollHandler = () => {
      handleArticleScroll(true, wrapperContentRef.current, wrapperContentRef.current.offsetHeight, leftMenuRef.current, offsetTop, "h4", setShowButton);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [videoOffsetTrigger]);

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
            pageName={pageName}
          />
          <Heading ref={headingRef} className="wrapper-title" level={1}>{pageName}</Heading>
          {tags?.data.length > 0 &&
            <ul ref={tagsRef} className="tags">
              {tags?.data.map((item, index) => (
                <li key={index}>
                  <Tag onClick={() => handleTagModal(item.attributes.title)} name={item.attributes.title} />
                </li>
              ))}
            </ul>
          }
          <div ref={wrapperContentRef}>
            <StyledRawHtml onClick={handleClick} ref={containerRef}>{ReactHtmlParser(pageDescription)}</StyledRawHtml>
            {videos && videos.data.length > 0 &&
              <ConnectorsVideo t={t} videos={videos.data} setVideoOffsetTrigger={setVideoOffsetTrigger} />
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