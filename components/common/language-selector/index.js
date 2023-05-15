import React, { useEffect, useState } from "react";
import StyledLanguageSelector from "./styled-language-selector";
import ArrowDown from "@public/images/icons/arrow-drop-down.react.svg";
import ArrowUp from "@public/images/icons/arrow-drop-up.react.svg";
import ItemsList from "./items-list";

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
  }, []);

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
    setIsOpen(!isOpen);
    props.onClick && props.onClick(e);
  };

  const onCloseSelector = () => {
    setIsOpen(false);
  };

  const { currentLanguage, t } = props;

  const srcArrow = isOpen
  ? ArrowUp.src
  : ArrowDown.src;
  const srcAlt = isOpen ? "arrow-up" : "arrow-down";

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
       {/*eslint-disable*/}
      <div className="arrow-image">
        <img src={srcArrow} alt={srcAlt} />
      </div>
       {/*eslint-enable*/}
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
