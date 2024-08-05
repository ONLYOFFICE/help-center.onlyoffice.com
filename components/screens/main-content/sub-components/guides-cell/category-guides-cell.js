import StyledGuidesCell from "./styled-guides-cell";
import InternalLink from "@components/common/internal-link";
import ReactHtmlParser from "react-html-parser";
import Heading from "@components/common/heading";

const CategoryGuidesCell = ({ data, categorySlug }) => {
  const connectorsSlug = data.attributes.connector_img;
  const items = [...data.attributes[`level_2_${categorySlug}`]?.data ?? [], ...data.attributes[`article_${categorySlug}`]?.data ?? []];

  return (
    <StyledGuidesCell isCategoryPage={true}>
      <div className="guides-cell-header">
        <div className={`guides-cell-top ${connectorsSlug ? "integration" : ""}`}>
          {!connectorsSlug &&
            <img className="guides-cell-icon" src={data.attributes.card_field_img?.data?.url} alt={data.attributes.name} />
          }

          {data.attributes.url === null ? (
            <Heading className="guides-cell-title" label={data.attributes.name} />
          ) : (
            <InternalLink className="guides-cell-title" label={data.attributes.name || data.attributes.title} href={data.attributes.url} />
          )}
          {connectorsSlug &&
            <img className="guides-cell-icon" src={data.attributes.connector_img.data?.attributes.url} alt={data.attributes.title} />
          }
        </div>
        {data.attributes.description &&
          <div className="guides-cell-description">{ReactHtmlParser(data.attributes.description)}</div>
        }
      </div>
      {!connectorsSlug &&
        <div className="guides-cell-columns">
          <div className="guides-cell-column">
            {items?.slice(0, Math.ceil(items?.length / 2)).map((item, index) => (
              <InternalLink
                className="guides-cell-link guides-cell-header-link"
                label={item.attributes?.name || item.attributes?.title}
                href={item.attributes?.url}
                key={index}
              />
            ))}
          </div>
          <div className="guides-cell-column">
            {items?.slice(Math.ceil(items.length / 2), items?.length).map((item, index) => (
              <InternalLink
                className="guides-cell-link guides-cell-header-link"
                label={item.attributes?.name || item.attributes?.title}
                href={item.attributes?.url}
                key={index}
              />
            ))}
          </div>
        </div>
      }
    </StyledGuidesCell>
  );
};

export default CategoryGuidesCell;