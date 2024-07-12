import React, { useState, useEffect, useRef } from "react";

import LanguageSelector from "@components/common/language-selector";
import InternalLink from "@components/common/internal-link";
import StyledMenu from "./styled-menu";
import Nav from "./nav/nav";
import Text from "@components/common/text";
import StyledMenuSelector from "./styled-menu-selector";

const Menu = ({ t, currentLanguage, template, categories, isMain, pageCategory, ...rest }) => {
  const curLang = currentLanguage === "en" ? "/" : `/${currentLanguage}/`;
  const [stateMobile, setStateMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [cat, setCat] = useState("menu");
  const selectorRef = useRef(null);
  const toggleMobile = () => {
    setStateMobile(!stateMobile);
    if (typeof window !== 'undefined' && window.innerWidth < 592) {
      const event = new CustomEvent('toggleIsOpen');
      document.dispatchEvent(event);
    }
  };

  const handleClickOutside = (e) => {
    const regex = /styled-left-menu__StyledLeftMenu/;
    const parentWithClass = e.target.closest('[class*="styled-left-menu__StyledLeftMenu"]') || e.target.closest('.lm-wrap') || e.target.closest('.search_wrapper') || e.target.closest('[class*="styled-text__StyledText"]');
    if (typeof window !== 'undefined' && stateMobile) {
      if ((window.innerWidth > 592 && !e.target.closest(".nav-item-links")) || (!parentWithClass || regex.test(e.target.className))) {
        toggleMobile();
      }
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

  const onClickHandler = (e) => {
    e.stopPropagation();
    if (e.target.closest(".menu-selector") || e.target.closest(".arrow-image") || e.target.closest(".menu-item-link")) {
      setIsOpen(!isOpen);
      if (e.target.closest(".menu-item-link")) {
        setCat(e.target.closest(".menu-item-link").textContent);
      }
      rest.onClick && rest.onClick(e);
    }
  };
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && selectorRef.current && !selectorRef.current.contains(e.target)) {
        onCloseSelector();
      }
    };

    typeof window !== "undefined" && window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    if (pageCategory) {
      if (pageCategory === "integration") {
        setCat("connectors")
      } else {
        setCat(pageCategory);
      }
    } else {
      setCat("menu");
    }
  }, [pageCategory]);

  const onCloseSelector = () => {
    setIsOpen(false);
  };

  return (
    <StyledMenu
      template={template}
      className={`navbar ${stateMobile ? "is-open" : ""}`}
      isMain={isMain}
    >
      <InternalLink className="nav-item-logo" href={curLang}>
        <div className="site-logo"></div>
      </InternalLink>
      <img
        src="https://static-helpcenter.onlyoffice.com/images/icons/mob_menu_white.react.svg"
        className="nav-items-mobile"
        onClick={toggleMobile}
      />
      <div className="overlay"></div>

      <StyledMenuSelector
        onClick={onClickHandler}
        ref={selectorRef}
        className="menu-selector"
      >
        <Text className={`${cat !== "menu" ? "orange" : ""}`}>{cat}</Text>
        <img className={`arrow-image ${isOpen ? "open" : ""}`} src="https://static-helpcenter.onlyoffice.com/images/icons/arrow-drop-down.react.svg" alt="arrow" />
      </StyledMenuSelector>
      <Nav
        currentLanguage={currentLanguage}
        className="nav-item-links"
        stateMobilePND={stateMobile}
        categories={categories}
        t={t}
        onClickPND={toggleMobile}
        setCat={setCat}
        isOpen={isOpen}
        cat={cat}
      />
      <LanguageSelector t={t} currentLanguage={currentLanguage} />
    </StyledMenu>
  );
};

export default Menu;