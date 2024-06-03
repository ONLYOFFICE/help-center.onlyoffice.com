import React, { useState, useEffect } from 'react';
import { isInternalLink } from 'is-internal-link';
import StyledGuidesLinks from "./styled-guides-links";
import Box from "@components/common/box";
import InternalLink from "@components/common/internal-link";
import Link from "@components/common/link";
import filterArticles from "@utils/helpers/Common/filterForAllCategories";
import filterMainArticles from '@utils/helpers/Common/filterForMainPage';

const GuidesLinks = ({ mainArticles, category, mainCategory, t }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const dataCards = mainCategory.toLowerCase() === 'main' ? filterMainArticles(mainArticles, category) : filterArticles(mainArticles, category, mainCategory);

  useEffect(() => {
    if (mainArticles !== null && mainArticles !== undefined) {
      setLoading(false);
    }
    if (!loading) {
      switch (mainCategory?.toLowerCase()) {
        case 'integration':
          setData(mainArticles);
          break;
        default:
          setData(dataCards);
          break;
      }
    }
  }, [mainCategory, loading]);
//console.log(data);
  return (
    <StyledGuidesLinks>
      <Box className="con-box">
        {!loading && data.slice(0, Math.ceil(data.length / 2)).map((item, idx) => (
          <React.Fragment key={idx}>
            {(item.attributes?.url || item?.url) && isInternalLink(item.attributes?.url || item?.url) ? 
            (<InternalLink className={`cell_link ${category === "integration" ? 'not_bold' : ''}`} label={t(item.attributes?.title) || t(item?.name)} href={item.attributes?.url || item?.url} />) : 
            (<Link classname="cell_link" label={t(item?.name)} href={item?.url} />)}
            {item.level_2_values && <>
              {item.level_2_values.map((item_lvl2, indx) => (
                <InternalLink className="cell_link not_bold" label={t(item_lvl2.name)} href={item_lvl2.url} key={indx} />
              ))}
            </>}
          </React.Fragment>
        ))}
      </Box>
      <Box className="con-box">
        {!loading && data.slice(Math.ceil(data.length / 2), mainArticles.length).map((item, idx) => (
          <React.Fragment key={idx}>
            {(item.attributes?.url || item?.url) && isInternalLink(item.attributes?.url || item?.url) && <InternalLink key={idx} className={`cell_link ${category === "integration" ? 'not_bold' : ''}`} label={t(item.attributes?.title) || t(item?.name)} href={item.attributes?.url || item?.url} />}
            {item.level_2_values && <>
              {item.level_2_values.map((item_lvl2, indx) => (
                <InternalLink className="cell_link not_bold" label={t(item_lvl2.name)} href={item_lvl2.url} key={indx} />
              ))}
            </>}
          </React.Fragment>
        ))}
      </Box>
    </StyledGuidesLinks>
  );
};

export default GuidesLinks;
