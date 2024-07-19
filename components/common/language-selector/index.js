import { useEffect, useState, useRef } from "react";
import StyledLanguageSelector from "./styled-language-selector";
import ItemsList from "./items-list";

const LanguageSelector = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectorRef = useRef(null);

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

  const onClickHandler = (e) => {
    e.stopPropagation();
    if (e.target.closest(".flag-image") || e.target.closest(".arrow-image") || e.target.closest(".language-item-link")) {
      setIsOpen(!isOpen);
      props.onClick && props.onClick(e);
    }
  };

  const onCloseSelector = () => {
    setIsOpen(false);
  };

  const { locale, t } = props;

  return (
    <StyledLanguageSelector
      {...props}
      onClick={onClickHandler}
      className="nav-item-lng"
      ref={selectorRef}
    >
      <div className="selector">
        <img
          className="flag-image"
          alt="flag"
          src={`https://static-helpcenter.onlyoffice.com/images/flags/${locale}.react.svg`}
          width={"24px"}
          height={"24px"}
        />
        <img className={`arrow-image`} src="https://static-helpcenter.onlyoffice.com/images/icons/arrow-right.react.svg" alt="arrow" />

      </div>
      <ItemsList
        className={`languages-list lng-selector ${isOpen ? "language-selector-open" : "language-selector-closed"}`}
        t={t}
        isOpen={isOpen}
        locale={locale}
        onCloseSelector={onCloseSelector}
      />
    </StyledLanguageSelector>
  );
};

export default LanguageSelector;
