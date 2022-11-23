import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import { CloseButton, StyledArticlePopup } from "./styled-article-popup";
import Text from "@components/common/text";
import InternalLink from "@components/common/internal-link";
import Tag from "@components/common/tag";
import Mark from "@components/common/mark";
import { TagsInfo } from "@static/data/alpha-tags";
import Box from "@components/common/box";
import Button from "@components/common/button";

const ArticlePopup = ({ t, language, active, setActive, tag, ...rest }) => {
  const maxShown = 8;
  const [next, setNext] = useState(maxShown);
  const tagsData = TagsInfo.find((it) => it.title === tag);
  const tagsLength = tagsData?.articles.length;
  
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
            <span className="popupPanelText">
              {t("Article with the ")}
              <Tag t={t} type={"popup"} label={tag} />
              {t(" tag:")}
            </span>
            <CloseButton onClick={() => setActive(false)} />
          </div>
          <InternalLink className="tagsLink" href="/tags">
            {t("Browse all tags")}
          </InternalLink>
          <div className="textContent">
              {tagsData?.articles.slice(0, next)?.map((it, index) => {
                return (
                  <Box>
                  <InternalLink className="markLink" href={it.link}>
                    <Mark id={index} type={it.mark.toLowerCase().replace(/\s/g, '')} t={t} label={it.mark} />
                    {it.text}
                    {it.module?.length !== undefined && <span>&nbsp;{"("}{it.module}{")"}</span>}
                  </InternalLink>
                   {it.editor?.length !== undefined && <Text className="postlinkText">&nbsp;{"("}{it.editor}{")"}</Text>}
                   </Box>
                );
              })}
              {next < tagsLength && (
                <Button
                  onClick={handleMoreImage}
                  label={"More articles"}
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
