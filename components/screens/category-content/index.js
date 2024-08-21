import { useState, useEffect } from "react";
import StyledCategoryContent from "./styled-category-content";
import LeftMenu from "@components/screens/common/left-menu";
import StyledWrapperContent from "@components/screens/common/wrapper-content/styled-wrapper-content";
import Breadcrumbs from "@components/screens/common/breadcrumbs";
import Heading from "@components/common/heading";
import Text from "@components/common/text";
import ReactHtmlParser from "react-html-parser";
import CategoryItem from "./sub-components/category-item";
import ScrollToTopButton from "@components/screens/common/scroll-to-top-button";
import InternalLink from "@components/common/internal-link";

const CategoryContent = ({
  t,
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
  lvlArticles
}) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.innerHeight * 2;
      setShowButton(window.scrollY > scrollHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledCategoryContent>
      <StyledWrapperContent>
        <LeftMenu
          t={t}
          pageName={pageName}
          pageItems={pageItems}
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
          <Heading className="wrapper-title" level={3} label={pageName} />
          {pageDescription &&
            <Text className="wrapper-description">{ReactHtmlParser(pageDescription)}</Text>
          }
          {lvlArticles && lvlArticles.sort((a, b) => {
            const aValue = a.attributes.title;
            const bValue = b.attributes.title;
            return aValue.localeCompare(bValue);
          }).map((item, index) => (
            <div id={`${item.attributes.title.replace(/ /g, "_").toLowerCase()}_block`} className="subcat-empty-div" key={index}>
              <InternalLink href={item.attributes.url} label={item.attributes.title} />
            </div>
          )
          )}
          {pageItems?.sort((a, b) => {
            const aValue = a.attributes.name || a.attributes.title;
            const bValue = b.attributes.name || b.attributes.title;
            return aValue.localeCompare(bValue);
          }).map((item, index) => (
            <CategoryItem
              data={item}
              pageItemsLevel={pageItemsLevel}
              categorySlug={categorySlug}
              key={index}
            />
          )
          )}
        </div>
      </StyledWrapperContent>
      <ScrollToTopButton showButton={showButton} />
    </StyledCategoryContent>
  );
};

export default CategoryContent;