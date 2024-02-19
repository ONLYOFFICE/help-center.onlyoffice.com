import React, { useState, useEffect } from "react";

import LanguageSelector from "@components/common/language-selector";
import InternalLink from "@components/common/internal-link";
import { StyledMenu } from "./styled-menu";
import Nav from "./nav/nav";
import useWindowWidth from '@utils/helpers/System/useWindowProvider';

const Menu = ({ t, currentLanguage, template, categories, ...rest }) => {
  const curLang = currentLanguage === "en" ? "/" : `/${currentLanguage}/`;
  const windowWidth = useWindowWidth();
  const [stateMobile, setStateMobile] = useState(false);
  const toggleMobile = () => {
    setStateMobile(!stateMobile);
  };

  const handleClickOutside = (e) => {
    if (stateMobile && !e.target.closest(".nav-item-links")) {
      toggleMobile();
    }
  };

  useEffect(() => {
    window.addEventListener("touchstart", handleClickOutside);
    window.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("mouseup", handleClickOutside);
    return () => {
      window.removeEventListener("touchstart", handleClickOutside);
      window.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("mouseup", handleClickOutside);
    };
  }, [stateMobile]);

 
  return (
    <StyledMenu
      template={template}
      className="navbar"
    >
      <InternalLink className="nav-item-logo" href={curLang}>
        <div className="site-logo"></div>
      </InternalLink>
      {/* {typeof window !== 'undefined' && windowWidth <= 1000 && (<img
        src="https://static-helpcenter.onlyoffice.com/images/icons/mob_menu.react.svg"
        className="nav-items-mobile"
        onClick={toggleMobile}
      />)} */}
      <Nav
        currentLanguage={currentLanguage}
        className="nav-item-links"
        stateMobilePND={stateMobile}
        categories={categories}
        t={t}
        onClickPND={toggleMobile}
        windowWidth={windowWidth}
      />
      <div className="nav-item-lng">
        <LanguageSelector t={t} currentLanguage={currentLanguage} />
      </div>
    </StyledMenu>
  );
};

export default Menu;