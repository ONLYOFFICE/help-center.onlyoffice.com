import { useState, useEffect } from "react";
import LanguageSelector from "@components/common/language-selector";
import InternalLink from "@components/common/internal-link";
import StyledMenu from "./styled-menu";
import Nav from "./nav/nav";
import useWindowWidth from "@utils/helpers/System/useWindowProvider";
import MenuSelector from "@components/common/menu-selector";

const Menu = ({ t, locale, template, categories, isMain, pageCategory, ...rest }) => {
  const curLang = locale === "en" ? "/" : `/${locale}/`;
  const windowWidth = useWindowWidth();
  const [isClient, setIsClient] = useState(false);
  const [stateMobile, setStateMobile] = useState(false);
  const toggleMobile = () => {
    setStateMobile(!stateMobile);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

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
      className={`navbar ${stateMobile ? "is-open" : ""}`}
      isMain={isMain}
    >
      <InternalLink className="nav-item-logo" href={curLang}>
        <div className="site-logo"></div>
      </InternalLink>
      {isClient && (
        (windowWidth <= 1000 && windowWidth > 592) || (windowWidth <= 592 && !isMain) ? (
          <img
            src="https://static-helpcenter.onlyoffice.com/images/icons/mob_menu_white.react.svg"
            className="nav-items-mobile"
            onClick={toggleMobile}
          />
        ) : null
      )}
      <div className="overlay"></div>
      <Nav
        locale={locale}
        className="nav-item-links"
        stateMobilePND={stateMobile}
        categories={categories}
        t={t}
        onClickPND={toggleMobile}
        windowWidth={windowWidth}
      />
      {isClient && windowWidth <= 592 && (
        <MenuSelector t={t} categories={categories} pageCategory={pageCategory} />
      )}
      <LanguageSelector t={t} locale={locale} />
    </StyledMenu>
  );
};

export default Menu;