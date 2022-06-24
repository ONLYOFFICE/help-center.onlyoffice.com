import React, { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";

import LanguageSelector from "../../../../components/language-selector";
import Link from "../../../../components/link";
import InternalLink from "../../../../components/internal-link";
import IconButton from "../../../../components/icon-button";

import MobileMenu from "../../../../static/images/icons/mob_menu.svg";

import { StyledMenu } from "./styled-menu";
import Nav from "./nav/nav";

const Menu = ({ t, currentLanguage, template, ...rest }) => {
  const [windowCheck, setWindowCheck] = useState("undefined");
  useEffect(() => {
    if (typeof window !== windowCheck) {
      setWindowCheck(window.innerWidth <= 1050);
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

  const curLang = currentLanguage === "en" ? "/" : `/${currentLanguage}/`;

  return (
    <StyledMenu
      template={template}
      className="navbar"
      onMouseLeave={onCloseMenu}
    >
      <InternalLink className="nav-item-logo" href={curLang}>
      <IconButton
            isClickable={false}
            className="site-logo"
          />
      </InternalLink>
      <ReactSVG
        src={MobileMenu}
        className="nav-items-mobile"
        onClick={toggleMobile}
      />
      <Nav
        currentLanguage={currentLanguage}
        className="nav-item-links"
        stateMobilePND={stateMobile}
        t={t}
      />
      <div className="nav-item-lng">
        <LanguageSelector t={t} currentLanguage={currentLanguage} />
      </div>
    </StyledMenu>
  );
};

export default Menu;
