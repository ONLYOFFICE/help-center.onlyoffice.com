import React, { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { CloseButton, StyledArticlePopup } from "./styled-article-popup";
import Text from "@components/common/text";
import InternalLink from "@components/common/internal-link";
import Mark from "@components/common/mark";
import Button from "@components/common/button";
import useWindowWidth from '@utils/helpers/System/useWindowProvider';
import getMarks from "@lib/strapi/getMarks";

const ArticlePopup = ({ t, language, active, setActive, tag, allTags, ...rest }) => {
  const windowWidth = useWindowWidth();
  const maxShown = windowWidth > 592 ? 10 : 8;
  const [next, setNext] = useState(maxShown);
  const tagsData = allTags.find((it) => it.attributes.title === tag);
  const tagsLength = tagsData?.attributes.articles.data.length;
  const handleMoreImage = () => {
    if (next < tagsLength) {
      setNext(tagsLength);
    }
  };
  const [marks, setMarks] = useState([]);
  const baseUrl = process.browser && window.location.origin;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMarks(language);
        setMarks(data);
      } catch (error) {
        console.error('Error fetching marks:', error);
      }
    };

    fetchData(); 
  }, [tagsData]);

  const markData = useMemo(() => {
    if (!tagsData) return [];
  
    return tagsData.attributes.articles.data.map((it) =>
      marks.data.filter((mark) =>
        mark.attributes.articles.data.find((item) => item.id === it.id)
      )
    );
  }, [tagsData, marks.data]);

  const handlePopupClose = (e, url) => {
    e.preventDefault(); 
    setActive(false);
    window.location.replace(url);
  };
  
  return (
    <StyledArticlePopup
      tag={tag}
      active={active}
      onClick={() => setActive(false)}
      {...rest}
    >
      <div onClick={(e) => e.stopPropagation()} className="popup-content">
          <CloseButton onClick={() => setActive(false)} />
          <div className="PopupPanelCaption">
            <div className="popupPanelText">
            {t('ArticleWithThe')}
            <b>{tag}</b>
            {t('Tag')}
            </div>
            <InternalLink className="tagsLink" href="https://helpcenter.onlyoffice.com/tags.aspx">
              {t("BrowseAllTags")}
            </InternalLink>
          </div>
          <div className="textContent">
              {tagsData?.attributes.articles.data.slice(0, next)?.map((it, index) => {
               const matchingItem2 = markData[index];
               const finalUrl = baseUrl + (language != "en" ? '/' : '') + it.attributes.url;
                return (
                  <InternalLink key={index} className="markLink" href={finalUrl} onClick={(e) => handlePopupClose(e, finalUrl)}>
                    {matchingItem2 !== undefined && (<Mark t={t} style={{ backgroundColor: matchingItem2[0]?.attributes.color }} label={matchingItem2[0]?.attributes.name} />)}
                    <span className="title">{it.attributes.title}</span>
                    {it.attributes.subtitle?.length !== undefined && <Text className="postlinkText">&nbsp;{"("}{it.attributes.subtitle}{")"}</Text>}
                  </InternalLink>
                );
              })}
               {next < tagsLength && (
                 <Button
                   onClick={handleMoreImage}
                   label={t("MoreArticles")}
                   typeButton="transparent"
                   className="loadButton"
                 />
               )}
          </div>
        </div>
    </StyledArticlePopup>
  );
};

ArticlePopup.propTypes = {
  /** */
  active: PropTypes.bool,
  /** */
  setActive: PropTypes.func,
  /** What the will trigger when clicked */
  onClick: PropTypes.func,
  /** Accepts CSS style */
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /** Tab index */
  tabIndex: PropTypes.number,
  /** Accepts id */
  id: PropTypes.string,
  /** Accepts class */
  className: PropTypes.string,
};

ArticlePopup.defaultProps = {};

export default ArticlePopup;
