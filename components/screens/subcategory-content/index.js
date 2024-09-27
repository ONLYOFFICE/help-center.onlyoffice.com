import StyledSubCategoryContent from "./styled-subcategory-content";
import { useRef, useState, useEffect } from "react";
import SubCategoryItem from "./sub-components/subcategory-item";
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
  categoryData,
  articleData,
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
  isLevel4
}) => {
  const leftMenuRef = useRef(null);
  const containerRef = useRef(null);
  const contentRef = useRef();
  const [headings, setHeadings] = useState([]);
  const [showButton, setShowButton] = useState(false);
  const [imageModalActive, setImageModalActive] = useState(false);
  const [bigPhotoSrc, setBigPhotoSrc] = useState(null);
  const sortItems = (a, b) => (a.attributes.position ?? Infinity) - (b.attributes.position ?? Infinity) || (a.attributes.name || a.attributes.title).localeCompare(b.attributes.name || b.attributes.title);

  useEffect(() => {
    const firstHeader = document.querySelector('.changelog-main-header');
    if (firstHeader) {
      firstHeader.click();
    }

    setHeadings(extractHeadings(contentRef.current, pageDescription, "h5"));

    const scrollHandler = () => {
      handleArticleScroll(false, contentRef.current, contentRef.current?.offsetHeight, leftMenuRef.current, document.querySelector("header").offsetHeight + 24, "h5", setShowButton);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [pageDescription]);

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
          <Heading className="wrapper-title subcategory-heading" level={1}>
            {pageIcon?.data &&
              <img src={pageIcon.data?.attributes.url} alt={pageName} />
            }
            {pageName}
          </Heading>
          {pageDescription &&
            <StyledRawHtml onClick={handleClick} ref={containerRef} className="subcategory-description">{ReactHtmlParser(pageDescription)}</StyledRawHtml>
          }
          <div ref={contentRef}>
            {isLevel4 ? (
              <>
                {articleData.length > 0 && (
                  <ul className="subcategory-articles">
                    {articleData.sort(sortItems).map((item, index) => (
                      <li key={index}>
                        <InternalLink href={item.attributes.url}>
                          {item.attributes.icon?.data?.attributes.url && (
                            <img src={item.attributes.icon?.data?.attributes.url} alt={item.attributes.title} />
                          )}
                          {item.attributes.title}
                        </InternalLink>
                      </li>
                    ))}
                  </ul>
                )}
                {categoryData.sort(sortItems).map((item, index) => (
                  <div id={`${item.attributes.name.replace(/ /g, "_").toLowerCase()}_block`} className="subcategory-block" key={index}>
                    <Heading className="subcategory-block-title" level={5} label={item.attributes.name} />
                    <ul className="subcategory-block-list">
                      {item.attributes[`article_${categorySlug === "docs" ? "docs" : `${categorySlug}s`}`].data.sort(sortItems).map((item, index) => (
                        <li key={index}>
                          <InternalLink href={item.attributes.url} label={item.attributes.title} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </>
            ) : categoryData.some(item => item.attributes.hasOwnProperty("name")) ? (
              categoryData.sort(sortItems).map((item, index) => (
                <SubCategoryItem
                  headingName={item.attributes.name}
                  headingIcon={item.attributes.icon?.data?.attributes.url || item.attributes.category_pic?.data?.attributes.url}
                  id={`${item.attributes.name.replace(/ /g, "_").toLowerCase()}_block`}
                  links={[
                    ...(item.attributes[`level_4_${categorySlug === "docs" ? "docs" : `${categorySlug}s`}`]?.data || []),
                    ...(item.attributes[`article_${categorySlug === "docs" ? "docs" : `${categorySlug}s`}`]?.data || [])
                  ]}
                  categorySlug={categorySlug}
                  sortItems={sortItems}
                  key={index}
                />
              ))
            ) : articleData.length !== 0 ? (
              <SubCategoryItem links={articleData} />
            ) : (<></>)}
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