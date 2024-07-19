import StyledCategoryItem from "./styled-category-item";
import Heading from "@components/common/heading";
import InternalLink from "@components/common/internal-link";

const CategoryItem = ({ data, pageItemsLevel, categorySlug }) => {
  return (
    <StyledCategoryItem>
      <Heading level={4}>
        {data.attributes.icon?.data?.attributes.url &&
          <img src={data.attributes.icon?.data?.attributes.url} alt={data.attributes.name} />
        }
        <InternalLink href={data.attributes.url} label={data.attributes.name} />
      </Heading>
      <ul className="subcategory">
        {data.attributes[`level_${pageItemsLevel}_${categorySlug === "docs" ? "docs" : `${categorySlug}s`}`].data.map((item, index) => (
          <li className="sublink" key={index}>
            <InternalLink href={item.attributes.url}>
              {item.attributes.icon?.data?.attributes.url &&
                <img src={item.attributes.icon?.data?.attributes.url} alt={item.attributes.name} />
              }
              {item.attributes.name}
            </InternalLink>
          </li>
        ))}
        {data.attributes[`article_${categorySlug === "docs" ? "docs" : `${categorySlug}s`}`]?.data.length > 0 && (
          data.attributes[`article_${categorySlug === "docs" ? "docs" : `${categorySlug}s`}`]?.data.map((item, index) => (
            <li className="sublink" key={index}>
              <InternalLink href={item.attributes.url} label={item.attributes.title} />
            </li>
          ))
        )}
      </ul>
    </StyledCategoryItem>
  );
};

export default CategoryItem;