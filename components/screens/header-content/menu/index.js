import React, { useState, useEffect } from "react";
import LanguageSelector from "@components/common/language-selector";
import InternalLink from "@components/common/internal-link";
import { StyledMenu, Overlay } from "./styled-menu";
import Nav from "./nav/nav";
import Button from "@components/common/button";
import Link from "next/link";

const Menu = ({ t, currentLanguage, template, articles, ...rest }) => {
  const curLang = currentLanguage === "en" ? "/" : `/${currentLanguage}/`;
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

  return (
    <StyledMenu
      template={template}
      className="navbar"
      onMouseLeave={onCloseMenu}
    >
      <Overlay isOpen={stateMobile} onClick={toggleMobile} />
      <InternalLink className="nav-item-logo" href={curLang}>
        <div className="site-logo"></div>
      </InternalLink>
      <img
        src="https://static-helpcenter.onlyoffice.com/images/icons/mob_menu.react.svg"
        className="nav-items-mobile"
        onClick={toggleMobile}
      />
      <Nav
        currentLanguage={currentLanguage}
        className="nav-item-links"
        stateMobilePND={stateMobile}
        //categories={categories}
        articles={articles}
        t={t}
      />
      {/* <div className="nav-right"> */}
      <Link className="link" href="https://www.onlyoffice.com/docs-registration.aspx?from=helpcenter"><Button label={t("Try in the cloud")} className="nav-btn" /></Link>

      <LanguageSelector t={t} currentLanguage={currentLanguage} />
      {/* <div className="nav-item-lng">
          
        </div> */}
      {/* </div> */}
    </StyledMenu>
  );
};

export default Menu;
