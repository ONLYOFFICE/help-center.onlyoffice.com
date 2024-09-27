import StyledSubCategoryItem from "./styled-subcategory-item";
import Heading from "@components/common/heading";
import InternalLink from "@components/common/internal-link";

const SubCategoryItem = ({ categorySlug, sortItems, id, headingName, headingIcon, links, ...rest }) => {
  const checkTitleLength = !links.some(item => {
    const title = item.attributes.title;
    return title && title.replace(/\s/g, "").length > 40;
  });

  return (
    <StyledSubCategoryItem id={id} className="subcategory-item" {...rest}>
      {headingName && (
        <Heading className="subcategory-item-title" level={5}>
          {headingIcon && (
            <img src={headingIcon} alt={headingName} />
          )}
          {headingName}
        </Heading>
      )}
      {links.length > 0 && (
        checkTitleLength && links.length > 6 ? (
          <div className="subcategory-item-wrapper">
            <ul className="subcategory-item-list">
              {links?.slice(0, Math.ceil(links?.length / 2)).sort(sortItems).map((item, index) => (
                <li key={index}>
                  <InternalLink href={item.attributes.url} label={item.attributes.name || item.attributes.title} />
                </li>
              ))}
            </ul>
            <ul className="subcategory-item-list">
              {links?.slice(Math.ceil(links.length / 2)).sort(sortItems).map((item, index) => (
                <li key={index}>
                  <InternalLink href={item.attributes.url} label={item.attributes.name || item.attributes.title} />
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <ul className="subcategory-item-list">
            {links.sort(sortItems).map((item, index) => (
              <li key={index}>
                <InternalLink href={item.attributes.url} label={item.attributes.name || item.attributes.title} />
              </li>
            ))}
          </ul>
        )
      )}
    </StyledSubCategoryItem>
  );
};

export default SubCategoryItem;