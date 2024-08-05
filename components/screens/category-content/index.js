import StyledCategoryContent from "./styled-category-content";
import LeftMenu from "@components/screens/common/left-menu";
import StyledWrapperContent from "@components/screens/common/wrapper-content/styled-wrapper-content";
import Breadcrumbs from "@components/screens/common/breadcrumbs";
import Heading from "@components/common/heading";
import Text from "@components/common/text";
import ReactHtmlParser from "react-html-parser";
import CategoryItem from "./sub-components/category-item";

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
    backBtnUrl
  }) => {
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
            <Text>{ReactHtmlParser(pageDescription)}</Text>
          }
          {pageItems?.sort((a, b) => a.attributes.name.localeCompare(b.attributes.name)).map((item, index) => (
            <CategoryItem
              data={item}
              pageItemsLevel={pageItemsLevel}
              categorySlug={categorySlug}
              key={index}
            />
          ))}
        </div>
      </StyledWrapperContent>
    </StyledCategoryContent>
  );
};

export default CategoryContent;