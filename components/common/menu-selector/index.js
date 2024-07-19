import { useEffect, useState, useRef } from "react";
import StyledMenuSelector from "./styled-menu-selector";
import ItemsList from "./items-list";
import Text from "../text";

const MenuSelector = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectorRef = useRef(null);
  const [cat, setCat] = useState("menu");

  useEffect(() => {
    if (pageCategory) {
      setCat(pageCategory);
    }
  }, []);

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
    if (e.target.closest(".menu-selector") || e.target.closest(".arrow-image") || e.target.closest(".menu-item-link")) {
      setIsOpen(!isOpen);
      if (e.target.closest(".menu-item-link")) {
      setCat(e.target.closest(".menu-item-link").textContent); 
      }
      props.onClick && props.onClick(e);
    }
  };

  const onCloseSelector = () => {
    setIsOpen(false);
  };

  const { t, categories, pageCategory } = props;

  return (
    <StyledMenuSelector
      {...props}
      onClick={onClickHandler}
      ref={selectorRef}
    >
      <div className="menu-selector">
        <Text className={`${cat !== "menu" && "orange"}`} >{cat}</Text>
        <img className={`arrow-image ${isOpen && "open"}`} src="https://static-helpcenter.onlyoffice.com/images/icons/arrow-drop-down.react.svg" alt="arrow" />
      </div>
      <ItemsList
        className={`${isOpen ? "menu-selector-open" : "menu-selector-closed"}`}
        t={t}
        isOpen={isOpen}
        onCloseSelector={onCloseSelector}
        categories={categories}
        pageCategory={pageCategory}
      />
    </StyledMenuSelector>
  );
};

export default MenuSelector;
