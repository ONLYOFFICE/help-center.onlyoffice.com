import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { CloseButton, StyledArticlePopup } from "./styled-article-popup";
import Text from "@components/common/text";
import InternalLink from "@components/common/internal-link";
import Mark from "@components/common/mark";
import Button from "@components/common/button";
import useWindowWidth from '@utils/helpers/System/useWindowProvider';
import getTags from "@lib/strapi/getTags";

const ArticlePopup = ({ t, language, active, setActive, tag, ...rest }) => {
  const baseUrl = process.browser && window.location.origin;
  const [allArticleForTag, setArticles] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const tagsData = await getTags(language, tag, true);
        setArticles(tagsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [language, tag]);

  const windowWidth = useWindowWidth();
  const maxShown = windowWidth > 592 ? 10 : 8;
  const [next, setNext] = useState(maxShown);
  const allArticles = allArticleForTag !== undefined 
  ? [
      ...allArticleForTag.data[0]?.attributes.articles.data,
      ...allArticleForTag.data[0]?.attributes.article_desktops.data,
      ...allArticleForTag.data[0]?.attributes.article_docs.data,
      ...allArticleForTag.data[0]?.attributes.article_docspaces.data,
      ...allArticleForTag.data[0]?.attributes.article_mobiles.data,
      ...allArticleForTag.data[0]?.attributes.article_workspaces.data
    ]
  : [];

  const handleMore = () => {
    if (next < allArticles?.length) {
      setNext(allArticles?.length);
    }
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
          <InternalLink className="tagsLink" href="/tags.aspx">
            {t("BrowseAllTags")}
          </InternalLink>
        </div>
        <div className="textContent">
          {allArticles && allArticles.slice(0, next)?.map((it, index) => {
            const finalUrl = baseUrl + (language != "en" ? '/' : '') + it.attributes.url;
            return (
              <InternalLink key={index} className="markLink" href={finalUrl}>
                {it.attributes.mark.data !== null && (<Mark t={t} style={{ backgroundColor: it.attributes.mark.data.attributes.color }} label={it.attributes.mark.data.attributes.name} />)}
                <span className="title">{it.attributes.title}</span>
                {it.attributes.subtitle?.length !== undefined && <Text className="postlinkText">&nbsp;{"("}{it.attributes.subtitle}{")"}</Text>}
              </InternalLink>
            );
          })}
          {next < allArticles?.length && (
            <Button
              onClick={handleMore}
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