import React, { useState } from "react";
import PropTypes from "prop-types";
import { CloseButton, StyledArticlePopup } from "./styled-article-popup";
import Text from "../../../../components/text";
import InternalLink from "../../../../components/internal-link";
import Tag from "../../../../components/tag";

const ArticlePopup = ({ t, language, active, setActive, tag, ...rest }) => {
  const tagEl = (<Tag t={t} type={"popup"}>{tag}</Tag>);
  return (
    <StyledArticlePopup active={active} onClick={() => setActive(false)} {...rest}>
      <div onClick={(e) => e.stopPropagation()} className="popup-content">
        <div className="PopupPanelCaptionItems">
          <div className="PopupPanelCaption">
            <span className="popupPanelText">{t("Article with the {{tagEl}} tag:", tagEl )}</span>
            <CloseButton onClick={() => setActive(false)} />
          </div>
            <InternalLink className="tagsLink" href="/tags">{t("Browse all tags")}</InternalLink>
          <div className="textContent">
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