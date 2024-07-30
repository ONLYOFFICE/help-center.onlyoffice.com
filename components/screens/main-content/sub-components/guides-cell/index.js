import StyledGuidesCell from "./styled-guides-cell";
import React from "react";
import InternalLink from "@components/common/internal-link";
import ReactHtmlParser from "react-html-parser";
import Heading from "@components/common/heading";

const GuidesCell = ({ data, isCategoryPage, categorySlug, isIntegrationCategory }) => {
  const slugId = data.attributes.slug_id === "docs" ? "docs" : `${data.attributes.slug_id}s`;
  const connectorsSlug = data.attributes.slug_id === "integration";
  const connectorsArticles = data.attributes.articles?.data;
  const mainArticles = data.attributes[`category_${slugId}`]?.data;
  const filteredData = mainArticles?.filter(item => !["changelog", "roadmap", "troubleshooting"].includes(item.attributes.slug_id)) || [];
  const items = isCategoryPage ? data.attributes[`level_2_${categorySlug}`]?.data : filteredData;

  return (
    <StyledGuidesCell isCategoryPage={isCategoryPage}>
      <div className="guides-cell-header">
        <div className={`guides-cell-top ${isIntegrationCategory ? "integration" : ""}`}>
          {!isIntegrationCategory &&
            <img className="guides-cell-icon" src={data.attributes.card_field_img?.data?.url} alt={data.attributes.name} />
          }

          {data.attributes.url === null ? (
            <Heading className="guides-cell-title" label={isIntegrationCategory ? data.attributes.title : data.attributes.name} />
          ) : (
            <InternalLink className="guides-cell-title" label={isIntegrationCategory ? data.attributes.title : data.attributes.name} href={data.attributes.url} />
          )}
          {isIntegrationCategory &&
            <img className="guides-cell-icon" src={data.attributes.connector_img.data?.attributes.url} alt={data.attributes.title} />
          }
        </div>
        {data.attributes.description &&
          <div className="guides-cell-description">{ReactHtmlParser(data.attributes.description)}</div>
        }
      </div>
      {!isIntegrationCategory &&
        <div className="guides-cell-columns">
          <div className="guides-cell-column">
            {connectorsSlug ? (
              connectorsArticles?.slice(0, Math.ceil(connectorsArticles.length / 2)).map((item, index) => (
                <InternalLink className="guides-cell-link" label={item.attributes.title} href={item.attributes?.url} key={index} />
              ))
            ) : (
              items?.slice(0, Math.ceil(items?.length / 2)).map((item, index) => (
                isCategoryPage ? (
                  <InternalLink className="guides-cell-link guides-cell-header-link" label={item.attributes.name} href={item.attributes?.url} key={index} />
                ) : (
                  <React.Fragment key={index}>
                    <InternalLink className="guides-cell-link guides-cell-header-link" label={item.attributes.name} href={item.attributes?.url} />
                    {item.attributes[`level_2_${slugId}`].data.sort((a, b) => a.attributes.name.localeCompare(b.attributes.name)).map((itemLevel2, index) => (
                      <InternalLink
                        className="guides-cell-link"
                        label={itemLevel2.attributes.name}
                        href={itemLevel2?.attributes.url}
                        key={index}
                      />
                    ))}
                  </React.Fragment>
                )
              ))
            )}
          </div>
          <div className="guides-cell-column">
            {connectorsSlug ? (
              connectorsArticles?.slice(Math.ceil(connectorsArticles.length / 2), connectorsArticles.length).map((item, index) => (
                <InternalLink className="guides-cell-link" label={item.attributes.title} href={item.attributes?.url} key={index} />
              ))
            ) : (
              items?.slice(Math.ceil(items.length / 2), mainArticles?.length).map((item, index) => (
                isCategoryPage ? (
                  <InternalLink className="guides-cell-link guides-cell-header-link" label={item.attributes.name} href={item.attributes?.url} key={index} />
                ) : (
                  <React.Fragment key={index}>
                    <InternalLink className="guides-cell-link guides-cell-header-link" label={item.attributes.name} href={item.attributes?.url} />
                    {item.attributes[`level_2_${slugId}`].data.sort((a, b) => a.attributes.name.localeCompare(b.attributes.name)).map((itemLevel2, index) => (
                      <InternalLink
                        className="guides-cell-link"
                        label={itemLevel2.attributes.name}
                        href={itemLevel2?.attributes.url}
                        key={index}
                      />
                    ))}
                  </React.Fragment>
                )
              ))
            )}
          </div>
        </div>
      }
    </StyledGuidesCell>
  );
};

export default GuidesCell;
