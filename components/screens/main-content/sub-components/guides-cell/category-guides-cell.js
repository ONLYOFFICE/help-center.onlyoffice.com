import React, { useState, useEffect } from "react";
import StyledGuidesCell from "./styled-guides-cell";
import InternalLink from "@components/common/internal-link";
import ReactHtmlParser from "react-html-parser";
import Heading from "@components/common/heading";
import ExternalLink from "@components/common/external-link";
import { isExternalLink } from "@utils/helpers/System/isExternal";

const CategoryGuidesCell = ({ data, categorySlug, t }) => {
  const [isClient, setIsClient] = useState(false);
  const connectorsSlug = data.attributes.connector_img;
  const items = [...data.attributes[`level_2_${categorySlug}`]?.data ?? [], ...data.attributes[`article_${categorySlug}`]?.data ?? []];

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <StyledGuidesCell isCategoryPage={true}>
      <div className="guides-cell-header">
        <div className={`guides-cell-top ${connectorsSlug ? "integration" : ""}`}>
          {!connectorsSlug &&
            <img className="guides-cell-icon" src={data.attributes.card_field_img?.data?.attributes.url} alt={data.attributes.name} />
          }

          {(data.attributes.url === null || data.attributes.url_docspace) ? (
            <Heading className="guides-cell-title" label={data.attributes.name || data.attributes.title} />
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
        {data.attributes.url_docspace &&
          <div className="guides-cell-int-links">
            <InternalLink className="guides-cell-int-link docs" label={t("Docs")} href={data.attributes.url} />
            <InternalLink className="guides-cell-int-link docspace" label={t("DocSpace")} href={data.attributes.url_docspace} />
          </div>
        }
      </div>
      {!connectorsSlug &&
        <div className="guides-cell-columns">
          <div className="guides-cell-column">
            {items?.slice(0, Math.ceil(items?.length / 2)).map((item, index) => (
              <React.Fragment key={index}>
                {isClient && isExternalLink(item.attributes?.url) ? (
                  <ExternalLink
                    className="guides-cell-link guides-cell-header-link"
                    label={item.attributes?.name || item.attributes?.title}
                    href={item.attributes?.url}
                  />
                ) : (
                  <InternalLink
                    className="guides-cell-link guides-cell-header-link"
                    label={item.attributes?.name || item.attributes?.title}
                    href={item.attributes?.url}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="guides-cell-column">
            {items?.slice(Math.ceil(items.length / 2), items?.length).map((item, index) => (
              <React.Fragment key={index}>
                {isClient && isExternalLink(item.attributes?.url) ? (
                  <ExternalLink
                    className="guides-cell-link guides-cell-header-link"
                    label={item.attributes?.name || item.attributes?.title}
                    href={item.attributes?.url}
                  />
                ) : (
                  <InternalLink
                    className="guides-cell-link guides-cell-header-link"
                    label={item.attributes?.name || item.attributes?.title}
                    href={item.attributes?.url}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      }
    </StyledGuidesCell>
  );
};

export default CategoryGuidesCell;