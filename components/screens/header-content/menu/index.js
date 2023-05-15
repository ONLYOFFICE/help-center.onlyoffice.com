import React, { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";

import LanguageSelector from "@components/common/language-selector";
import InternalLink from "@components/common/internal-link";
import MobileMenu from "@public/images/icons/mob_menu.svg";
import { StyledMenu } from "./styled-menu";
import Nav from "./nav/nav";

const Menu = ({ t, currentLanguage, template, categories, ...rest }) => {
  const curLang = currentLanguage === "en" ? "/" : `/${currentLanguage}/`;
  const [windowCheck, setWindowCheck] = useState("undefined");
  useEffect(() => {
    if (typeof window !== windowCheck) {
      setWindowCheck(window.innerWidth <= 769);
    }
  }, [windowCheck]);

  const [stateMobile, setStateMobile] = useState(false);
  const toggleMobile = () => {
    setStateMobile(true);
  };
  const onCloseMenu = () => {
    setStateMobile(false);
  };

  useEffect(() => {
    window.addEventListener("touchstart", handleClickOutside);
    return () => {
      window.removeEventListener("touchstart", handleClickOutside);
    };
  }, [stateMobile]);

  const handleClickOutside = (e) => {
    if (windowCheck && stateMobile && !e.target.closest(".navbar")) {
      onCloseMenu();
    }
  };
 
  return (
    <StyledMenu
      template={template}
      className="navbar"
      onMouseLeave={onCloseMenu}
    >
      <InternalLink className="nav-item-logo" href={curLang}>
        <div className="site-logo"></div>
      </InternalLink>
      <ReactSVG
        src={MobileMenu.src}
        className="nav-items-mobile"
        onClick={toggleMobile}
      />
      <Nav
        currentLanguage={currentLanguage}
        className="nav-item-links"
        stateMobilePND={stateMobile}
        categories={categories}
        t={t}
      />
      <div className="nav-item-lng">
        <LanguageSelector t={t} currentLanguage={currentLanguage} />
      </div>
    </StyledMenu>
  );
};

export default Menu;
