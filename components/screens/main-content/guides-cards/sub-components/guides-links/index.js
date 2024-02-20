import React, { useState, useEffect } from 'react';
import { isInternalLink } from 'is-internal-link';
import StyledGuidesLinks from "./styled-guides-links";
import Box from "@components/common/box";
import InternalLink from "@components/common/internal-link";
import filterDocsArticles from "@utils/helpers/DocsCategory/filterForDocsCategory";
import filterDesktopArticles from '@utils/helpers/DesktopCategory/filterForDesktopCategory';
import Text from '@components/common/text';

const GuidesLinks = ({ mainArticles, category, mainCategory, t }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const dataCardsDocs = mainCategory.toLowerCase() === 'docs' && filterDocsArticles(mainArticles, category);
  const dataCardsDesktop = mainCategory.toLowerCase() === 'desktop' && filterDesktopArticles(mainArticles, category);

  useEffect(() => {
    if (mainArticles !== null && mainArticles !== undefined) {
      setLoading(false);
    }
    if (!loading) {
      switch (mainCategory?.toLowerCase()) {
        case 'connectors':
          setData(mainArticles);
          break;
        case 'docs':
          setData(dataCardsDocs);
          break;
        case 'desktop':
          setData(dataCardsDesktop);
          break;
        case 'main':
          setData(mainArticles);
          break;
        default:
          break;
      }
    }
  }, [mainCategory, loading]);
  //console.log(mainArticles);
 // console.log(dataCardsDesktop);

  return (
    <StyledGuidesLinks>
      <Box className="con-box">
        {!loading && data.slice(0, Math.ceil(data.length / 2)).map((item, idx) => (
          <div className={`cell_link ${category === "connectors" ? 'not_bold' : ''}`} key={idx}>
            {(item.attributes?.url || item?.url) && isInternalLink(item.attributes?.url || item?.url) && <InternalLink label={t(item.attributes?.title) || t(item?.name)} href={item.attributes?.url || item?.url} />}
          </div>
        ))}
      </Box>
      <Box className="con-box">
        {!loading && data.slice(Math.ceil(data.length / 2), mainArticles.length).map((item, idx) => (
          <div className={`cell_link ${category === "connectors" ? 'not_bold' : ''}`} key={idx}>
            {(item.attributes?.url || item?.url) && isInternalLink(item.attributes?.url || item?.url) && <InternalLink label={t(item.attributes?.title) || t(item?.name)} href={item.attributes?.url || item?.url} />}
          </div>
        ))}
      </Box>
    </StyledGuidesLinks>
  );
};

export default GuidesLinks;
