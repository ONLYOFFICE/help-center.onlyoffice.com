import React, { useEffect, useState, useMemo, useRef } from "react";
import StyledLanguageSelector from "./styled-language-selector";
import ItemsList from "./items-list";
import languages from "@config/languages";
import Text from "../text";

const LanguageSelector = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectorRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && selectorRef.current && !selectorRef.current.contains(e.target)) {
        onCloseSelector();
      }
    };

    const resizeHandler = () => {
      if (window.innerWidth < 769) {
        setIsOpen(false);
      }
    };

    typeof window !== "undefined" && window.addEventListener("click", handleClickOutside);
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("click", handleClickOutside);
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isOpen]);

  const onClickHandler = (e) => {
    e.stopPropagation();
    if (e.target.closest(".flag-image") || e.target.closest(".arrow-image") || e.target.closest(".language-item-link") || e.target.closest(".lang-name")) {
      setIsOpen(!isOpen);
      props.onClick && props.onClick(e);
    }
  };

  const onCloseSelector = () => {
    setIsOpen(false);
  };

  const { currentLanguage, t } = props;

  const langName = useMemo(() => languages.map((language) => {
    const { shortKey, name } = language;
    if (shortKey === currentLanguage) {
      return name;
    }
  }), [currentLanguage]);

  const srcAlt = isOpen ? "arrow-up" : "arrow-down";

  return (
    <StyledLanguageSelector
      {...props}
      onClick={onClickHandler}
      className="language-selector"
      ref={selectorRef}
    >
      <img
        className="flag-image"
        alt="flag"
        src={`https://static-helpcenter.onlyoffice.com/images/flags/${currentLanguage}.react.svg`}
        width={"24px"}
        height={"24px"}
      />
      <Text className="lang-name">{langName}</Text>
      {/*eslint-disable*/}
      <div className={`arrow-image`}>
        <img src="https://static-helpcenter.onlyoffice.com/images/icons/arrow-right.react.svg" alt={srcAlt} />
      </div>
      {/*eslint-enable*/}
      <ItemsList
        className={`languages-list lng-selector ${isOpen ? "language-selector-open" : "language-selector-closed"
          }`}
        t={t}
        isOpen={isOpen}
        currentLanguage={currentLanguage}
        onCloseSelector={onCloseSelector}
      />
    </StyledLanguageSelector>
  );
};

export default LanguageSelector;
