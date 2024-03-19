import React, { useState, useEffect } from 'react';
import { isInternalLink } from 'is-internal-link';
import StyledGuidesLinks from "./styled-guides-links";
import Box from "@components/common/box";
import InternalLink from "@components/common/internal-link";
import filterDocsArticles from "@utils/helpers/DocsCategory/filterForDocsCategory";
import filterDesktopArticles from '@utils/helpers/DesktopCategory/filterForDesktopCategory';
import filterDocSpaceArticles from "@utils/helpers/DocSpaceCategory/filterForDocSpaceCategory";
import filterWorkspaceArticles from '@utils/helpers/WorkspaceCategory/filterForWorkspaceCategory';
import filterMobileArticles from '@utils/helpers/MobileCategory/filterForMobileCategory';
import filterMainArticles from '@utils/helpers/Common/filterForMainPage';

const GuidesLinks = ({ mainArticles, category, mainCategory, t }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const dataCardsDocs = mainCategory.toLowerCase() === 'docs' && filterDocsArticles(mainArticles, category);
  const dataCardsDesktop = mainCategory.toLowerCase() === 'desktop' && filterDesktopArticles(mainArticles, category);
  //const dataCardsDocSpace = mainCategory.toLowerCase() === 'docspace' && filterDocSpaceArticles(mainArticles, category);
  //const dataCardsWorkspace = mainCategory.toLowerCase() === 'workspace' && filterWorkspaceArticles(mainArticles, category);
  //const dataCardsMobile = mainCategory.toLowerCase() === 'mobile' && filterMobileArticles(mainArticles, category);

  const dataCardsCommon = mainCategory.toLowerCase() === 'main' && filterMainArticles(mainArticles, category);

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
        // case 'workspace':
        //   setData(dataCardsWorkspace);
        //   break;
        // case 'docspace':
        //   setData(dataCardsDocSpace);
        //   break;
        // case 'mobile':
        //   setData(dataCardsMobile);
        //   break;
        case 'main':
          setData(dataCardsCommon);
          break;
        default:
          break;
      }
    }
  }, [mainCategory, loading]);
  // console.log(mainArticles);
  // console.log(category);
  // console.log(mainCategory);

  return (
    <StyledGuidesLinks>
      <Box className="con-box">
        {!loading && data.slice(0, Math.ceil(data.length / 2)).map((item, idx) => (
          <>
            {(item.attributes?.url || item?.url) && isInternalLink(item.attributes?.url || item?.url) && <InternalLink key={idx} className={`cell_link ${category === "connectors" ? 'not_bold' : ''}`} label={t(item.attributes?.title) || t(item?.name)} href={item.attributes?.url || item?.url} />}
            {item.level_2_values && <>
              {item.level_2_values.map((item_lvl2, indx) => (
                <InternalLink className="cell_link not_bold" label={t(item_lvl2.name)} href={item_lvl2.url} key={indx} />
              ))}
            </>}
          </>
        ))}
      </Box>
      <Box className="con-box">
        {!loading && data.slice(Math.ceil(data.length / 2), mainArticles.length).map((item, idx) => (
          <>
            {(item.attributes?.url || item?.url) && isInternalLink(item.attributes?.url || item?.url) && <InternalLink key={idx} className={`cell_link ${category === "connectors" ? 'not_bold' : ''}`} label={t(item.attributes?.title) || t(item?.name)} href={item.attributes?.url || item?.url} />}
            {item.level_2_values && <>
              {item.level_2_values.map((item_lvl2, indx) => (
                <InternalLink className="cell_link not_bold" label={t(item_lvl2.name)} href={item_lvl2.url} key={indx} />
              ))}
            </>}
          </>
        ))}
      </Box>
    </StyledGuidesLinks>
  );
};

export default GuidesLinks;
