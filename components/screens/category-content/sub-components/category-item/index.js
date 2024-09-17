import StyledCategoryItem from "./styled-category-item";
import Heading from "@components/common/heading";
import InternalLink from "@components/common/internal-link";

const CategoryItem = ({ data, pageItemsLevel, categorySlug }) => {
  const categorySlugMany = categorySlug === "docs" ? "docs" : `${categorySlug}s`;
  const icon = data.attributes.icon || data.attributes.category_pic;

  const sublinks = [
    ...(data.attributes[`level_${pageItemsLevel}_${categorySlugMany}`]?.data || []),
    ...(data.attributes[`article_${categorySlugMany}`]?.data || [])
  ].sort((a, b) => {
    const aValue = a.attributes.name || a.attributes.title;
    const bValue = b.attributes.name || b.attributes.title;
    return aValue.localeCompare(bValue);
  });

  return (
    <StyledCategoryItem>
      <Heading level={4}>
        {icon && icon.data?.attributes.url &&
          <img src={icon.data?.attributes.url} alt={data.attributes.name} />
        }
        {data.attributes.url ? (
          <InternalLink href={data.attributes.url} label={data.attributes.name} />
        ) : (
          data.attributes.name
        )}
      </Heading>
      <ul className="subcategory">
        {sublinks.map((item, index) => (
          <li className="sublink" key={index}>
            <InternalLink href={item.attributes.url}>
              {item.attributes.icon_small?.data?.attributes.url && (
                <img src={item.attributes.icon_small.data.attributes.url} alt={item.attributes.name} />
              )}
              {item.attributes.name || item.attributes.title}
            </InternalLink>
          </li>
        ))}
      </ul>
    </StyledCategoryItem>
  );
};

export default CategoryItem;