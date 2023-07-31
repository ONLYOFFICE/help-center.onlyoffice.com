import React, { useState, useEffect } from 'react';
import { isInternalLink } from 'is-internal-link';
import StyledGuidesLinks from "./styled-guides-links";
import Box from "@components/common/box";
import InternalLink from "@components/common/internal-link";

const GuidesLinks = ({ mainArticles, linksLength, category, t }) => {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   const sortedData = sortDataByTopLevel(mainArticles);
  //   setData(sortedData);
  // }, []);

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
    <StyledGuidesLinks linksLength={linksLength}>
      {/* {category === "mobile" && <div className="cell_link cell_heading iOS not_bold">iOS</div>}
      {!(category === "connectors") && data.map((group, idx) => (
        <div className={`cell_link`} key={idx}>
          <InternalLink label={t(group.name)} href={group.url} />
          {group.items.map((item, index) => (
            <div className={`cell_link not_bold`} key={index}>
              <InternalLink label={t(item.attributes.title)} href={item.attributes.url} />
            </div>
          ))}
        </div>
      ))}
      {category === "connectors" && <Box className="con-box"> {mainArticles.slice(0, linksLength).map((item, idx) => (
        <div className={`cell_link not_bold`} key={idx}>
          <InternalLink label={t(item.attributes.title)} href={item.attributes.url} />
        </div>))}
      </Box>
      }
      {category === "connectors" && <Box className="con-box"> {mainArticles.slice(linksLength, mainArticles.length).map((item, idx) => (
        <div className={`cell_link not_bold`} key={idx}>
          <InternalLink label={t(item.attributes.title)} href={item.attributes.url} />
        </div>))}
      </Box>
      } */}
    </StyledGuidesLinks>
  );
};

export default GuidesLinks;
