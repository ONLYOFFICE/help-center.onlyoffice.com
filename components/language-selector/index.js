import React, { useEffect, useState, useMemo } from "react";
import StyledLanguageSelector from "./styled-language-selector";
import ArrowDown from "../../static/images/icons/arrow-drop-down.react.svg";
import ArrowUp from "../../static/images/icons/arrow-drop-up.react.svg";
import ItemsList from "./items-list";
import Text from "../text";
import languages from "../../languages";

const LanguageSelector = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    typeof window !== "undefined" &&
      isOpen &&
      window.addEventListener("click", handleClickOutside);
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("click", handleClickOutside);
      window.removeEventListener("resize", resizeHandler);
    };
  });

  const handleClickOutside = (e) => {
    if (
      isOpen &&
      (!e.target.closest(".lng-selector") ||
        e.target.closest(".close-button-img"))
    ) {
      onCloseSelector();
    }
  };

  const resizeHandler = (e) => {
    if (window.innerWidth < 769) {
      setIsOpen(false);
    }
  };

  const onClickHandler = (e) => {
    e.stopPropagation();
    if (e.target.closest(".flag-image") || e.target.closest(".arrow-image")) {
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
  }), []);

  return (
    <StyledLanguageSelector
      {...props}
      onClick={onClickHandler}
      className="language-selector"
    >
      <img
        className="flag-image"
        alt="flag"
        src={`/images/flags/${currentLanguage}.svg`}
        width={"18px"}
      />
      <Text className="lang-name">{langName}</Text>
      <div className="arrow-image">
        {isOpen ? <ArrowUp alt="arrow-up" /> : <ArrowDown alt="arrow-down" />}
      </div>
      <ItemsList
        className={`languages-list lng-selector ${
          isOpen ? "language-selector-open" : "language-selector-closed"
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
