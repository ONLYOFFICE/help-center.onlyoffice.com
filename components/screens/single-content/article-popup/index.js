import React, { useState } from "react";
import PropTypes from "prop-types";
import { CloseButton, StyledArticlePopup } from "./styled-article-popup";
import Text from "@components/common/text";
import InternalLink from "@components/common/internal-link";
import Tag from "@components/common/tag";
import Mark from "@components/common/mark";
import Box from "@components/common/box";
import Button from "@components/common/button";

const ArticlePopup = ({ t, language, active, setActive, tag, allTags, ...rest }) => {
  const maxShown = 8;
  const [next, setNext] = useState(maxShown);
  const tagsData = allTags.find((it) => it.attributes.title === tag);
  const tagsLength = tagsData?.attributes.articles.data.length;
  const handleMoreImage = () => {
    setNext(next + maxShown);
  };
  return (
    <StyledArticlePopup
      tag={tag}
      active={active}
      onClick={() => setActive(false)}
      {...rest}
    >
      <div onClick={(e) => e.stopPropagation()} className="popup-content">
        <div className="PopupPanelCaptionItems">
          <div className="PopupPanelCaption">
            <div className="popupPanelText">
              {t("ArticleWithTheTag")}
              <Tag t={t} type={"popup"} label={tag} />
            </div>
              <CloseButton onClick={() => setActive(false)} />
          </div>
          <InternalLink className="tagsLink" href="#">
            {t("BrowseAllTags")}
          </InternalLink>
          <div className="textContent">
              {tagsData?.attributes.articles.data.slice(0, next)?.map((it, index) => {
                return (
                  <Box key={index}>
                  <InternalLink className="markLink" href={it.attributes.url}>
                    {/* <Mark id={index} type={it.mark.toLowerCase().replace(/\s/g, '')} t={t} label={it.mark} /> */}
                    {it.attributes.title}
                    {it.module?.length !== undefined && <span>&nbsp;{"("}{it.module}{")"}</span>}
                  </InternalLink>
                   {it.editor?.length !== undefined && <Text className="postlinkText">&nbsp;{"("}{it.editor}{")"}</Text>}
                   </Box>
                );
              })}
              {next < tagsLength && (
                <Button
                  onClick={handleMoreImage}
                  label={t("MoreArticles")}
                  typeButton="secondary"
                  className="loadButton"
                />
              )}
          </div>
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
