import React, { useState } from "react";
import PropTypes from "prop-types";
import { CloseButton, StyledAlsoPopup } from "./styled-also-popup";
import Caption from "./caption";
import { SeeAlsoInfo } from "@public/data/see-also";

const AlsoPopup = ({ t, language, active, setActive, tag, id, ...rest }) => {
const content = SeeAlsoInfo.find((item) => item.pageID === id).data;

  return (
    <StyledAlsoPopup active={active} id={id} {...rest}>
        <div className="PopupPanelCaptionItems">
      <div class="read_also" id="ReadAlsoBlock">You Might Also Like This:</div>
            <CloseButton onClick={() => setActive(false)} />
          </div>
          <div className="seeAlsoBlock">
          {content.map((it, index) => {
            return (
              <Caption id={id} content={it.links} type={it.type} t={t} />
            )
          })}
          </div> 
    </StyledAlsoPopup>
  );
};

AlsoPopup.propTypes = {
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

AlsoPopup.defaultProps = {};

export default AlsoPopup;