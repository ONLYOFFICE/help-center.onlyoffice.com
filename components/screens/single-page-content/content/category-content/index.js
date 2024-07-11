import Heading from "@components/common/heading";
import Text from "@components/common/text";
import ReactHtmlParser from "react-html-parser";
import StyledContent from "@components/screens/single-page-content/content/styled-content";
import Breadcrumbs from "@components/common/breadcrumbs";
import CategoryItem from "../sub-components/category-item";
import StyledSingleContent from "../../styled-single-content";
import LeftMenu from "@components/screens/single-page-content/sub-components/left-menu";

const CenterCategoryContent = ({
    t,
    categoryName,
    categoryUrl,
    level2CategoryName,
    level2CategoryUrl,
    pageName,
    pageDescription,
    pageItems,
    pageItemsLevel,
    categorySlug
  }) => {
  return (
    <StyledSingleContent>
      <LeftMenu
        t={t}
        pageName={pageName}
        pageItems={pageItems}
        pageItemsLevel={pageItemsLevel}
        categorySlug={categorySlug}
      />

      <StyledContent className="wrapper">
        <Breadcrumbs
          t={t}
          categoryName={categoryName}
          categoryUrl={categoryUrl}
          level2CategoryName={level2CategoryName}
          level2CategoryUrl={level2CategoryUrl}
          pageName={pageName}
        />
        <Heading level={3} label={pageName} />
        {pageDescription &&
          <Text>{ReactHtmlParser(pageDescription)}</Text>
        }
        {pageItems?.map((item, index) => (
          <CategoryItem data={item} pageItemsLevel={pageItemsLevel} categorySlug={categorySlug} key={index} />
        ))}
      </StyledContent>
    </StyledSingleContent>
  );
};

export default CenterCategoryContent;