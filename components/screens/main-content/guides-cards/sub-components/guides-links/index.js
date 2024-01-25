import React, { useState, useEffect } from 'react';
import { isInternalLink } from 'is-internal-link';
import StyledGuidesLinks from "./styled-guides-links";
import Box from "@components/common/box";
import InternalLink from "@components/common/internal-link";
import filterDocsArticles from "@utils/helpers/filterForDocsCategory";
import Text from '@components/common/text';

const GuidesLinks = ({ mainArticles, category, mainCategory, t }) => {
  const [data, setData] = useState([]);    
  const [loading, setLoading] = useState(true);
  const dataCards = mainCategory && mainCategory.toLowerCase() === 'docs' && filterDocsArticles(mainArticles, category);

  useEffect(() => {
    if (mainCategory && dataCards !== null && dataCards !== undefined) {
      setLoading(false);
    }
    if (!loading) {
      switch (mainCategory?.toLowerCase()) {
        case 'connectors':
          setData(mainArticles);
          break;
        case 'docs':
          setData(dataCards);
          break;
        default: 
          setData(mainArticles);
          break;
      }
    }
  }, [mainCategory]);
  //console.log(mainCategory);
  console.log(data);

  // function sortDataByTopLevel(data) {
  //   const sortedData = {};
  //   data.forEach(item => {
  //     const url = item.attributes.url;
  //     const pathParts = url.split('/').filter(part => part !== '');
  //     if (pathParts.length >= 2) {
  //       const topLevel = pathParts.slice(0, 2).join('/');
  //       const topLevelData = data.find(item => {
  //         const url = item.attributes.url;
  //         const pathParts = url.split('/').filter(part => part !== '');
  //         return pathParts.length === 2 && url.includes(topLevel);
  //       });
  //       if (topLevelData && !sortedData[topLevel]) {
  //         sortedData[topLevel] = {
  //           name: topLevelData.attributes.title,
  //           url: topLevelData.url || `/${topLevel}`,
  //           items: [],
  //         };
  //       }
  //       sortedData[topLevel].items?.push(item);
  //       if (topLevelData && item.attributes.url === topLevelData.attributes.url) {
  //         sortedData[topLevel].items.pop();
  //       }
  //     }
  //   });
  //   return Object.values(sortedData);
  // }
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
