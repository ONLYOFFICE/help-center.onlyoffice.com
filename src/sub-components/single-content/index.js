import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import StyledSingleContent from "./styled-single-content";
import LeftMenu from "./left-menu";
import CenterContent from "./content";
import TagsContent from "./content/tags-content";
import GlossaryContent from "./content/glossary-content";
import UpArrow from "../../../components/up-arrow";
import AlsoPopup from "./also-popup";

const SingleContent = ({ t, ...rest }) => {
  const [isUp, setIsUp] = useState(false);

  function scrollTopShow() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      setIsUp(true);
    } else {
      setIsUp(false);
    }
  }

  window.onscroll = function () {
    scrollTopShow();
  };

  return (
    <StyledSingleContent>
      <LeftMenu t={t} />
      {/* <CenterContent t={t} /> */}
      <TagsContent t={t} />
      <GlossaryContent t={t} />
      <AlsoPopup t={t} id={"become_translator"} />
      <CSSTransition in={isUp} timeout={300} classNames="alert" unmountOnExit>
        <UpArrow />
      </CSSTransition>
    </StyledSingleContent>
  );
};

export default SingleContent;
