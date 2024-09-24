import { useState, useEffect, useRef } from "react";
import StyledCategoryContent from "./styled-category-content";
import StyledRawHtml from "../common/raw-html/styled-raw-html";
import ReactHtmlParser from "react-html-parser";
import Cookies from "universal-cookie";
import { tableBuilder } from "@utils/helpers/TableBuilder/table-builder";
import getTagsArticle from "@lib/strapi/getTagsArticle";
import InternalLink from "@components/common/internal-link";
import Heading from "@components/common/heading";
import Tag from "@components/common/tag";
import CategoryItem from "./sub-components/category-item";
import LeftMenu from "@components/screens/common/left-menu";
import StyledWrapperContent from "@components/screens/common/wrapper-content/styled-wrapper-content";
import Breadcrumbs from "@components/screens/common/breadcrumbs";
import ScrollToTopButton from "@components/screens/common/scroll-to-top-button";
import ArticlePopup from "@components/screens/common/article-popup";

const CategoryContent = ({
  t,
  locale,
  categoryName,
  categoryUrl,
  level2CategoryName,
  level2CategoryUrl,
  pageName,
  pageDescription,
  pageItems,
  pageItemsLevel,
  categorySlug,
  leftMenuMobile,
  backBtnName,
  backBtnUrl,
  lvlArticles,
  tags
}) => {
  const descriptionRef = useRef(null);
  const tagsRef = useRef(null);
  const [showButton, setShowButton] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [tagName, setTagName] = useState();
  const [tagItems, setTagItems] = useState();
  const [hasMoreTags, setHasMoreTags] = useState(false);
  const cookies = new Cookies(null, { path: "/" });
  const sortPageItems = pageItems?.sort((a, b) =>
    (b.attributes.icon_small?.data?.attributes?.url ? 1 : 0) - (a.attributes.icon_small?.data?.attributes?.url ? 1 : 0) ||
    (a.attributes.position ?? Infinity) - (b.attributes.position ?? Infinity) || a.attributes.name.localeCompare(b.attributes.name));

  useEffect(() => {
    if (descriptionRef.current) {
      tableBuilder(descriptionRef.current, cookies);
    }

    const handleScroll = () => {
      if (window.innerHeight < descriptionRef.current.offsetHeight) {
        setShowButton(window.scrollY > window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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

  return (
    <StyledCategoryContent>
      <StyledWrapperContent>
        <LeftMenu
          t={t}
          pageName={pageName}
          pageItems={sortPageItems}
          pageItemsLevel={pageItemsLevel}
          categorySlug={categorySlug}
          leftMenuMobile={leftMenuMobile}
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
            pageName={pageName}
          />
          <Heading className="wrapper-title" level={1} label={pageName} />
          {tags?.data.length > 0 &&
            <ul ref={tagsRef} className="tags">
              {tags?.data.map((item, index) => (
                <li key={index}>
                  <Tag onClick={() => handleTagModal(item.attributes.title)} name={item.attributes.title} />
                </li>
              ))}
            </ul>
          }
          {pageDescription &&
            <StyledRawHtml ref={descriptionRef} className="wrapper-description">{ReactHtmlParser(pageDescription)}</StyledRawHtml>
          }
          {lvlArticles && lvlArticles.sort((a, b) => {
            const aValue = a.attributes.title;
            const bValue = b.attributes.title;
            return aValue.localeCompare(bValue);
          }).map((item, index) => (
            <div id={`${item.attributes.title.replace(/ /g, "_").toLowerCase()}_block`} className="subcat-empty-div" key={index}>
              <InternalLink href={item.attributes.url} label={item.attributes.title} />
            </div>
          ))}
          {sortPageItems?.map((item, index) => (
            <CategoryItem
              data={item}
              pageItemsLevel={pageItemsLevel}
              categorySlug={categorySlug}
              key={index}
            />
          ))}
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
        </div>
      </StyledWrapperContent>
      <ScrollToTopButton showButton={showButton} />
    </StyledCategoryContent>
  );
};

export default CategoryContent;