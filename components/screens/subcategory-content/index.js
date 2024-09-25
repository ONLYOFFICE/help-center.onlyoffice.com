import StyledSubCategoryContent from "./styled-subcategory-content";
import { useRef, useState, useEffect } from "react";
import LeftMenu from "@components/screens/common/left-menu";
import StyledWrapperContent from "@components/screens/common/wrapper-content/styled-wrapper-content";
import Heading from "@components/common/heading";
import InternalLink from "@components/common/internal-link";
import Breadcrumbs from "@components/screens/common/breadcrumbs";
import VideoBlock from "@components/screens/common/video-block";
import ReactHtmlParser from "react-html-parser";
import ScrollToTopButton from "@components/screens/common/scroll-to-top-button";
import ImagePopup from "../article-content/sub-components/image-popup";
import StyledRawHtml from "../common/raw-html/styled-raw-html";
import { handleFaqAccordionClick, handleChangelogClick } from "@utils/handle-click-functions";
import { extractHeadings, handleArticleScroll } from "@utils/scroll-highlight-functions";
import { handleImagePopupClick } from "@utils/handle-click-functions";

const SubCategoryContent = ({
  t,
  pageName,
  pageIcon,
  pageItems,
  categorySlug,
  categoryName,
  categoryUrl,
  level2CategoryName,
  level2CategoryUrl,
  level3CategoryName,
  level3CategoryUrl,
  leftMenuMobile,
  setLeftMenuMobile,
  backBtnName,
  backBtnUrl,
  video,
  pageDescription,
  lvlArticles
}) => {
  const leftMenuRef = useRef(null);
  const containerRef = useRef(null);
  const contentRef = useRef();
  const [headings, setHeadings] = useState([]);
  const [showButton, setShowButton] = useState(false);
  const [imageModalActive, setImageModalActive] = useState(false);
  const [bigPhotoSrc, setBigPhotoSrc] = useState(null);

  useEffect(() => {
    const firstHeader = document.querySelector('.changelog-main-header');
    if (firstHeader) {
      firstHeader.click();
    }

    setHeadings(extractHeadings(contentRef.current, pageDescription, "h5"));

    const scrollHandler = () => {
      handleArticleScroll(false, contentRef.current, contentRef.current.offsetHeight, leftMenuRef.current, document.querySelector("header").offsetHeight + 24, "h5", setShowButton);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const hasNameField = pageItems.some(item => item.attributes.hasOwnProperty('name'));

  const handleClick = (event) => {
    handleFaqAccordionClick(event, containerRef.current);
    handleChangelogClick(event);
    handleImagePopupClick(event, setBigPhotoSrc, setImageModalActive);
  };

  return (
    <StyledSubCategoryContent>
      <StyledWrapperContent>
        <LeftMenu
          t={t}
          ref={leftMenuRef}
          pageName={pageName}
          isLevel4CategoryPage={true}
          headings={headings}
          leftMenuMobile={leftMenuMobile}
          setLeftMenuMobile={setLeftMenuMobile}
          backBtnName={backBtnName}
          backBtnUrl={backBtnUrl}
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
            pageName={pageName}
          />

          <Heading className="wrapper-title subcat-heading" level={1}>
            {pageIcon?.data &&
              <img src={pageIcon.data?.attributes.url} alt={pageName} />
            }
            {pageName}
          </Heading>
          {pageDescription &&
            <StyledRawHtml onClick={handleClick} ref={containerRef} className="subcat-description">{ReactHtmlParser(pageDescription)}</StyledRawHtml>
          }
          <div ref={contentRef}>
            {!pageItems && (lvlArticles && lvlArticles.sort((a, b) => {
              const aValue = a.attributes.title;
              const bValue = b.attributes.title;
              return aValue.localeCompare(bValue);
            }).map((item, index) => (
              <div id={`${item.attributes.title.replace(/ /g, "_").toLowerCase()}_block`} className="subcat-empty-div" key={index}>
                <InternalLink href={item.attributes.url} label={item.attributes.title} />
              </div>
            )
            ))}
            {hasNameField === true ? (pageItems && pageItems.sort((a, b) => {
              const aValue = a.attributes.name || a.attributes.title;
              const bValue = b.attributes.name || b.attributes.title;
              return aValue.localeCompare(bValue);
            }).map((item, index) => (
              <div id={`${item.attributes.name.replace(/ /g, "_").toLowerCase()}_block`} className="subcat-div" key={index}>
                <Heading level={5}>{item.attributes.name}</Heading>
                <ul className="classic-ul">
                  {item.attributes[`article_${categorySlug === "docs" ? "docs" : `${categorySlug}s`}`].data
                  .sort((a, b) => {
                    const aValue = a.attributes.name || a.attributes.title;
                    const bValue = b.attributes.name || b.attributes.title;
                    const aIsRemoving = aValue.toLowerCase().startsWith('removing');
                    const bIsRemoving = bValue.toLowerCase().startsWith('removing');
                    if (aIsRemoving && !bIsRemoving) {
                      return 1; 
                    } else if (!aIsRemoving && bIsRemoving) {
                      return -1; 
                    } else {
                      return aValue.localeCompare(bValue);
                    }
                  }).map((item, index) => (
                    <li key={index}>
                      <InternalLink href={item.attributes.url} label={item.attributes.title} />
                    </li>
                  ))}
                </ul>
              </div>
            )
            )) : (
              <>
                {pageItems && pageItems.sort((a, b) => {
                  const aValue = a.attributes.title;
                  const bValue = b.attributes.title;
                  return aValue.localeCompare(bValue);
                }).map((item, index) => (
                  <div className="subcat-empty-div" key={index}>
                    <InternalLink href={item.attributes.url} label={item.attributes.title} />
                  </div>
                ))}
              </>
            )}
          </div>
          {video?.data &&
            <VideoBlock t={t} video={video} />
          }
        </div>
        <ImagePopup
            t={t}
            image={bigPhotoSrc}
            active={imageModalActive}
            setActive={setImageModalActive}
          />
        <ScrollToTopButton showButton={showButton} />
      </StyledWrapperContent>
    </StyledSubCategoryContent>
  );
};

export default SubCategoryContent;