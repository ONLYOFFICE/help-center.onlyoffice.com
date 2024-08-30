import StyledSubCategoryContent from "./styled-subcategory-content";
import { useRef, useState, useEffect } from "react";
import LeftMenu from "@components/screens/common/left-menu";
import StyledWrapperContent from "@components/screens/common/wrapper-content/styled-wrapper-content";
import Heading from "@components/common/heading";
import InternalLink from "@components/common/internal-link";
import Breadcrumbs from "@components/screens/common/breadcrumbs";
import VideoBlock from "@components/screens/common/video-block";
import ReactHtmlParser from "react-html-parser";
import { handleFaqAccordionClick, handleChangelogClick } from "@components/screens/article-content/utils/handle-click-functions";
import { extractHeadings, handleArticleScroll } from "../article-content/utils/scroll-highlight-functions";

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
  const containerRef = useRef(null);
  const contentRef = useRef();
  const lastActiveSectionRef = useRef(null);
  const [activeSection, setActiveSection] = useState(null);
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    if (contentRef.current) {
      setHeadings(extractHeadings(contentRef.current.outerHTML, "h5"));
    }
  }, [contentRef]);

  useEffect(() => {
    const firstHeader = document.querySelector('.changelog-main-header');
    if (firstHeader) {
      firstHeader.click();
    }

    handleArticleScroll(setActiveSection, false, lastActiveSectionRef, "h5");
    const scrollHandler = (event) => handleArticleScroll(setActiveSection, false, lastActiveSectionRef, "h5");

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const hasNameField = pageItems.some(item => item.attributes.hasOwnProperty('name'));

  const handleClick = (event) => {
    handleFaqAccordionClick(event, containerRef.current);
    handleChangelogClick(event);
  };
  return (
    <StyledSubCategoryContent>
      <StyledWrapperContent>
        <LeftMenu
          t={t}
          pageName={pageName}
          isLevel4CategoryPage={true}
          headings={headings}
          activeSection={activeSection}
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

          <Heading level={3} className="subcat-heading">
            {pageIcon?.data &&
              <img src={pageIcon.data?.attributes.url} alt={pageName} />
            }
            {pageName}
          </Heading>
          {pageDescription &&
            <div onClick={handleClick} ref={containerRef}>{ReactHtmlParser(pageDescription)}</div>
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
                  {item.attributes[`article_${categorySlug === "docs" ? "docs" : `${categorySlug}s`}`].data.sort((a, b) => {
                    const aValue = a.attributes.name || a.attributes.title;
                    const bValue = b.attributes.name || b.attributes.title;
                    return aValue.localeCompare(bValue);
                  }).map((item, index) => (
                    <li key={index}>
                      <InternalLink href={item.attributes.url} label={item.attributes.title} />
                    </li>
                  )
                  )}
                </ul>
              </div>
            )
            )) : (<>
              {pageItems && pageItems.sort((a, b) => {
                const aValue = a.attributes.title;
                const bValue = b.attributes.title;
                return aValue.localeCompare(bValue);
              }).map((item, index) => (
                <div className="subcat-empty-div" key={index}>
                  <InternalLink href={item.attributes.url} label={item.attributes.title} />
                </div>
              )
              )}
            </>)}
          </div>
          {video?.data &&
            <VideoBlock t={t} video={video} />
          }
        </div>
      </StyledWrapperContent>
    </StyledSubCategoryContent>
  );
};

export default SubCategoryContent;