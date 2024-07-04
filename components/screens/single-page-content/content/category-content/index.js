import Heading from "@components/common/heading";
import Text from "@components/common/text";
import ReactHtmlParser from "react-html-parser";
import StyledContent from "@components/screens/single-page-content/content/styled-content";
import Breadcrumbs from "@components/common/breadcrumbs";
import CategoryItem from "../sub-components/category-item";
import StyledSingleContent from "../../styled-single-content";
import LeftMenu from "@components/screens/single-page-content/sub-components/left-menu";

const CenterCategoryContent = ({ t, category, categorySlug }) => {
  return (
    <StyledSingleContent>
      <LeftMenu t={t} category={category} categorySlug={categorySlug} />

      <StyledContent className="wrapper">
        <Breadcrumbs t={t} category={category} />
        <Heading level={3} label={category.data?.[0].attributes?.name} />
        <Text>{ReactHtmlParser(category.data?.[0].attributes.description)}</Text>
        {category.data?.[0].attributes[`level_2_${categorySlug === "docs" ? "docs" : `${categorySlug}s`}`].data?.map((item, index) => (
          <CategoryItem data={item} categorySlug={categorySlug} key={index} />
        ))}
      </StyledContent>
    </StyledSingleContent>
  );
};

export default CenterCategoryContent;