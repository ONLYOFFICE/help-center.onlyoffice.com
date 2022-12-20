import React, { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";

import LanguageSelector from "@components/common/language-selector";
import InternalLink from "@components/common/internal-link";
import Link from "@components/common/link";

import MobileMenu from "@public/images/icons/mob_menu.svg";

import { StyledMenu } from "./styled-menu";
import Nav from "./nav/nav";

const Menu = ({ t, currentLanguage, template, ...rest }) => {
  const [windowCheck, setWindowCheck] = useState("undefined");
  useEffect(() => {
    if (typeof window !== windowCheck) {
      setWindowCheck(window.innerWidth <= 1190);
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
  const [navbar, setNavbar] = useState(false)
  const changeBackground = () => {
    if (window.scrollY >= 76) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  })

  const curLang = currentLanguage === "en" ? "/" : `/${currentLanguage}/`;

  return (
    <StyledMenu
      template={template}
      className={navbar ? "navbar active" : "navbar"}
      onMouseLeave={onCloseMenu}
    >
      <InternalLink className="nav-item-logo" href={curLang}>
        <div className="site-logo"></div>
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
      <Link
        display="contents"
        className="nav-item-btn"
        href="https://www.onlyoffice.com/registration.aspx?from=helpcenter"
      >
        {t("Try in the cloud")}
      </Link>
      <div className="nav-item-lng">
        <LanguageSelector t={t} currentLanguage={currentLanguage} />
      </div>
    </StyledMenu>
  );
};

export default Menu;
