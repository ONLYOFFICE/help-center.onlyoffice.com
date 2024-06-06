import React, { useState, useEffect } from "react";
import StyledGuidesCell from "./styled-guides-cell";
import Box from "@components/common/box";
import InternalLink from "@components/common/internal-link";
import Text from "@components/common/text";
import GuidesLinks from "../guides-links";
import ReactHtmlParser from "react-html-parser";
import Heading from "@components/common/heading";
import filterArticles from "@utils/helpers/Common/filterForAllCategories";
import filterMainArticles from '@utils/helpers/Common/filterForMainPage';

const GuidesCell = ({ headData, category, linkData, mainCategory, t }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const dataCards = mainCategory.toLowerCase() === 'main' ? filterMainArticles(linkData, category) : filterArticles(linkData, category, mainCategory);
  //console.log(dataCards);
  useEffect(() => {
    if (linkData !== null && linkData !== undefined) {
      setLoading(false);
    }
    if (!loading) {
      switch (mainCategory?.toLowerCase()) {
        case 'integration':
          setData(linkData);
          break;
        default:
          setData(dataCards);
          break;
      }
    }
  }, [mainCategory, loading]);

  return (
    <StyledGuidesCell>
      <Box className="cell_header">
        <Box className={`cell_icon ${(category == 'integration' && mainCategory !== 'main') ? 'integration' : ''}`}>
          {category !== 'integration' && headData.card_field_img?.data?.attributes.url && (
            <img src={headData.card_field_img.data?.attributes.url} />
          )}
          {category == 'integration' && linkData && headData.card_field_img?.data?.attributes.url && (
            <img src={headData.card_field_img.data?.attributes.url} />
          )}
          {headData.url != null ? (
            <InternalLink
              className="presearch_title_link"
              label={t(headData.name) || t(headData.title)}
              href={headData.url}
            />
          ) : (
            <Heading className="presearch_title_link heading" label={t(headData.name)} />
          )}
          {category === 'integration' && !linkData && headData.connector_img?.data?.attributes.url && (
            <img src={headData.connector_img.data?.attributes.url} />
          )}
        </Box>
       {headData.description && <Box className="cell_header_links">
          <Text>{ReactHtmlParser(headData.description)}</Text>
        </Box>}
      </Box>
      {data && !loading && <GuidesLinks t={t} mainArticles={data} category={category} />}
    </StyledGuidesCell>
  );
};

export default GuidesCell;
