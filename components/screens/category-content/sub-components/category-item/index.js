import StyledCategoryItem from "./styled-category-item";
import { useRouter } from "next/router";
import Heading from "@components/common/heading";
import InternalLink from "@components/common/internal-link";

const CategoryItem = ({ data, leftMenuLevel, categorySlug }) => {
  const router = useRouter();
  const categorySlugMany = categorySlug === "docs" ? "docs" : `${categorySlug}s`;
  const icon = data.attributes.icon || data.attributes.category_pic;
  const levelLinks = data.attributes[`level_${leftMenuLevel}_${categorySlugMany}`]?.data || [];
  const articleLinks = data.attributes[`article_${categorySlugMany}`]?.data || [];


  const sortItems = (a, b) => (a.attributes.position ?? Infinity) - (b.attributes.position ?? Infinity) || (a.attributes.name || a.attributes.title).localeCompare(b.attributes.name || b.attributes.title);
  const sublinks = [
    ...levelLinks.filter(item => item.attributes.icon_small?.data?.attributes.url).sort(sortItems),
    ...levelLinks.filter(item => !item.attributes.icon_small?.data?.attributes.url).sort(sortItems),
    ...articleLinks.sort(sortItems)
  ];
  const topPositionSubLinks = sublinks.filter(item => item.attributes.position_top);
  const filteredSubLinks = sublinks.filter(item => !item.attributes.position_top);

  const checkTitleLength = !filteredSubLinks.some(item => {
    const title = item.attributes.title;
    return title && title.replace(/\s/g, "").length > 40;
  });

  const renderIcon = () => {
    if (icon?.data?.attributes.url) {
      return (
        <img
          style={{
            height: icon.data.attributes.height,
            width: icon.data.attributes.width
          }}
          src={icon.data.attributes.url}
          alt={data.attributes.name}
        />
      );
    }
  };

  return (
    <StyledCategoryItem className="category-item">
      <Heading className="category-item-title" level={4}>
        {data.attributes.url && data.attributes.url.split("#")[0] !== router.asPath ? (
          <InternalLink href={data.attributes.url}>
            {renderIcon()}
            {data.attributes.name}
          </InternalLink>
        ) : (
          <>
            {renderIcon()}
            {data.attributes.name}
          </>
        )}
      </Heading>
      {topPositionSubLinks.length > 0 && (
        <ul className="category-item-top-links">
          {topPositionSubLinks.map((item, index) => (
            <li key={index}>
              <InternalLink href={item.attributes.url}>
                {item.attributes.icon_small?.data?.attributes.url && (
                  <img src={item.attributes.icon_small.data.attributes.url} alt={item.attributes.name || item.attributes.title} />
                )}
                {item.attributes.name || item.attributes.title}
              </InternalLink>
            </li>
          ))}
        </ul>
      )}
      {data.attributes.subtitle && (
        <Heading className="category-item-subtitle" level={5} label={data.attributes.subtitle} />
      )}
      {filteredSubLinks.length > 0 && (
        <>
          {checkTitleLength && filteredSubLinks.length > 6 ? (
            <div className="category-item-wrapper">
              <ul className="category-item-list">
                {filteredSubLinks?.slice(0, Math.ceil(filteredSubLinks?.length / 2)).map((item, index) => (
                  <li key={index}>
                    <InternalLink href={item.attributes.url}>
                      {item.attributes.icon_small?.data?.attributes.url && (
                        <img src={item.attributes.icon_small.data.attributes.url} alt={item.attributes.name || item.attributes.title} />
                      )}
                      {item.attributes.name || item.attributes.title}
                    </InternalLink>
                  </li>
                ))}
              </ul>
              <ul className="category-item-list">
                {filteredSubLinks?.slice(Math.ceil(filteredSubLinks.length / 2)).map((item, index) => (
                  <li key={index}>
                    <InternalLink href={item.attributes.url}>
                      {item.attributes.icon_small?.data?.attributes.url && (
                        <img src={item.attributes.icon_small.data.attributes.url} alt={item.attributes.name || item.attributes.title} />
                      )}
                      {item.attributes.name || item.attributes.title}
                    </InternalLink>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <ul className="category-item-list">
              {filteredSubLinks.map((item, index) => (
                <li key={index}>
                  <InternalLink href={item.attributes.url}>
                    {item.attributes.icon_small?.data?.attributes.url && (
                      <img src={item.attributes.icon_small.data.attributes.url} alt={item.attributes.name || item.attributes.title} />
                    )}
                    {item.attributes.name || item.attributes.title}
                  </InternalLink>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </StyledCategoryItem>
  );
};

export default CategoryItem;