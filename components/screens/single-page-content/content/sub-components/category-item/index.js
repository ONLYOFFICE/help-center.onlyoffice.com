import Heading from "@components/common/heading";
import Link from "@components/common/internal-link";
import StyledCategoryItem from "./styled-category-item";

const CategoryItem = ({ data, categorySlug }) => {
  return (
    <StyledCategoryItem>
      <Heading level={4}><Link href={data.attributes.url || ""}>{data.attributes.name}</Link></Heading>
      <ul className="subcategory">
        {data.attributes[`level_3_${categorySlug === "docs" ? "docs" : `${categorySlug}s`}`].data.map((item, index) => (
          <li className="sublink" key={index}><Link href={item.attributes.url || ""}>{item.attributes.name}</Link></li>
        ))}
      </ul>
    </StyledCategoryItem>
  );
};

export default CategoryItem;