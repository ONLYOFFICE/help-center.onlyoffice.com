import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import StyledSingleContent from "./styled-single-content";
import LeftMenu from "./left-menu";
import CenterContent from "./content";
import TagsContent from "./content/tags-content";
import GlossaryContent from "./content/glossary-content";
import UpArrow from "@components/common/up-arrow";
import AlsoPopup from "./also-popup";

const SingleContent = ({ t, articles, ...rest }) => {
  // const [isUp, setIsUp] = useState(false);

  // const scrollTopShow = () => {
  //   if (
  //     document.body.scrollTop > 100 ||
  //     document.documentElement.scrollTop > 100
  //   ) {
  //     setIsUp(true);
  //   } else {
  //     setIsUp(false);
  //   }
  // }

  // window.onscroll = function () {
  //   scrollTopShow();
  // };

  return (
    <StyledSingleContent>
      <LeftMenu t={t} />
      <CenterContent t={t} articles={articles} />
      {/* <TagsContent t={t} content={allStrapiTag.nodes} /> */}
      {/* <GlossaryContent t={t} content={allStrapiGlossary.nodes} /> */}
      {/* <AlsoPopup t={t} id={"administrationworkspacepage"} />
      <CSSTransition in={isUp} timeout={300} classNames="alert" unmountOnExit>
        <UpArrow />
      </CSSTransition> */}
    </StyledSingleContent>
  );
};

export default SingleContent;
