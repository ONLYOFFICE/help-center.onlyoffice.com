import React, { useState } from "react";
import PropTypes from "prop-types";
import { CloseButton, StyledArticlePopup } from "./styled-article-popup";
import Text from "../../../../components/text";
import Button from "../../../../components/button";
import InternalLink from "../../../../components/internal-link";

const MailPopup = ({ t, language, active, setActive, submitForm, ...rest }) => {
  const [formComplete, setFormComplete] = useState(false);

  return (
    <StyledArticlePopup active={active} onClick={() => setActive(false)} {...rest}>
      <div onClick={(e) => e.stopPropagation()} className="popup-content">
        <div className="PopupPanelCaptionItems">
          <div className="PopupPanelCaption">
            <Text className="popupPanelText" label={t("Article with a tag:")} />
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

MailPopup.propTypes = {
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

MailPopup.defaultProps = {};

export default MailPopup;