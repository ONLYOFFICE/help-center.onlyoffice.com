import StyledSubCategoryContent from "./styled-subcategory-content";
import { useRef, useState, useEffect } from "react";
import getTagsArticle from "@lib/strapi/getTagsArticle";
import SubCategoryItem from "./sub-components/subcategory-item";
import LeftMenu from "@components/screens/common/left-menu";
import StyledWrapperContent from "@components/screens/common/wrapper-content/styled-wrapper-content";
import Heading from "@components/common/heading";
import Tag from "@components/common/tag";
import InternalLink from "@components/common/internal-link";
import Breadcrumbs from "@components/screens/common/breadcrumbs";
import VideoBlock from "@components/screens/common/video-block";
import ArticlePopup from "@components/screens/common/article-popup";
import ReactHtmlParser from "react-html-parser";
import ScrollToTopButton from "@components/screens/common/scroll-to-top-button";
import ImagePopup from "@components/screens/article-content/sub-components/image-popup";
import StyledRawHtml from "@components/screens/common/raw-html/styled-raw-html";
import { handleFaqAccordionClick, handleChangelogClick } from "@utils/handle-click-functions";
import { handleImagePopupClick } from "@utils/handle-click-functions";

const SubCategoryContent = ({
  t,
  locale,
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
  leftMenuIsOpen,
  setLeftMenuIsOpen,
  video,
  pageDescription,
  isLevel4,
  leftMenuData,
  tags
}) => {
  const leftMenuRef = useRef(null);
  const containerRef = useRef(null);
  const contentRef = useRef();
  const tagsRef = useRef(null);
  const [showButton, setShowButton] = useState(false);
  const [imageModalActive, setImageModalActive] = useState(false);
  const [bigPhotoSrc, setBigPhotoSrc] = useState(null);
  const [modalActive, setModalActive] = useState(false);
  const [tagName, setTagName] = useState();
  const [tagItems, setTagItems] = useState();
  const [hasMoreTags, setHasMoreTags] = useState(false);
  const sortItems = (a, b) => (a.attributes.position ?? Infinity) - (b.attributes.position ?? Infinity) || (a.attributes.name || a.attributes.title).localeCompare(b.attributes.name || b.attributes.title);

  useEffect(() => {
    const firstHeader = document.querySelector('.changelog-main-header');
    if (firstHeader) {
      firstHeader.click();
    }

    const scrollHandler = () => {
      if (window.innerHeight < contentRef.current?.offsetHeight) {
        setShowButton(window.scrollY > window.innerHeight);
      }
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

  return (
    <StyledSubCategoryContent>
      <StyledWrapperContent>
        <LeftMenu
          t={t}
          ref={leftMenuRef}
          leftMenuData={leftMenuData}
          leftMenuIsOpen={leftMenuIsOpen}
          setLeftMenuIsOpen={setLeftMenuIsOpen}
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
          {tags?.data?.length > 0 &&
            <ul ref={tagsRef} className="tags">
              {tags?.data.map((item, index) => (
                <li key={index}>
                  <Tag onClick={() => handleTagModal(item.attributes.title)} name={item.attributes.title} />
                </li>
              ))}
            </ul>
          }
          {pageDescription &&
            <StyledRawHtml onClick={handleClick} ref={containerRef} className="subcategory-description">{ReactHtmlParser(pageDescription)}</StyledRawHtml>
          }
          <div ref={contentRef}>
            {(isLevel4 || (categoryData?.length > 0 && articleData?.length > 0)) ? (
              <>
                {categoryData?.length > 0 ? (
                  articleData?.length > 0 && (
                    <ul className="subcategory-articles">
                      {articleData.sort(sortItems).map((item, index) => (
                        <li key={index}>
                          <InternalLink href={item.attributes.url}>
                            {item.attributes.icon?.data?.attributes.url && (
                              <img src={item.attributes.icon?.data?.attributes.url} alt={item.attributes.level_4_title || item.attributes.title} />
                            )}
                            {item.attributes.level_4_title || item.attributes.title}
                          </InternalLink>
                        </li>
                      ))}
                    </ul>
                  )
                ) : (
                  <SubCategoryItem links={articleData} />
                )}
                {categoryData?.sort(sortItems).map((item, index) => (
                  <div id={`${item.attributes.name.replace(/ /g, "_").toLowerCase()}_block`} className="subcategory-block" key={index}>
                    <Heading className="subcategory-block-title" level={5}>
                      {item.attributes.icon?.data?.attributes.url && (
                        <img src={item.attributes.icon.data.attributes.url} alt={item.attributes.level_4_title || item.attributes.name} />
                      )}
                      {item.attributes.name}
                    </Heading>
                    <ul className="subcategory-block-list">
                      {item.attributes[`article_${categorySlug === "docs" ? "docs" : `${categorySlug}s`}`]?.data.sort(sortItems).map((item, index) => (
                        <li key={index}>
                          <InternalLink href={item.attributes.url} label={item.attributes.title} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </>
            ) : categoryData?.some(item => item.attributes.hasOwnProperty("name")) ? (
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
            ) : articleData?.length > 0 ? (
              <SubCategoryItem links={articleData} />
            ) : (
              <></>
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
        <ScrollToTopButton showButton={showButton} />
      </StyledWrapperContent>
    </StyledSubCategoryContent>
  );
};

export default SubCategoryContent;