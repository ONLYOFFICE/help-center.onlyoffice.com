import StyledSearchArea from "./styled-search-area";
import TextInput from "@components/common/text-input/";
import Heading from "@components/common/heading";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

const SearchArea = ({ t, isCategoryPage, label, pic, inputValue, setInputValue, onKeyDown }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [showCrossBtn, setShowCrossBtn] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth >= 592) {
        setIsOpen(true);
        setShowCrossBtn(true);
      } else {
        setIsOpen(false);
        setShowCrossBtn(false);
      }
    };

    if (router.pathname === "/searchresult") {
      resizeHandler();

      if (router.query.query) {
        setInputValue(router.query.query);
      }

      window.addEventListener("resize", resizeHandler);
    }

    return () => {
      if (router.pathname === "/searchresult") {
        window.removeEventListener("resize", resizeHandler);
      }
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (router.pathname === "/searchresult") {
        if (window.innerWidth < 592) {
          if (isOpen && !event.target.closest(".search")) {
            setShowCrossBtn(false);
            setIsOpen(false);
          }
        }
      } else {
        if (isOpen && !event.target.closest(".search")) {
          setShowCrossBtn(false);
          setIsOpen(false);
        }
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const handleSearchInput = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);

    if (e.target.value.length > 0 ) {
      setShowCrossBtn(true);
    } else {
      setShowCrossBtn(false);
    }
  };

  const handleClearValue = () => {
    setInputValue("");
    setShowCrossBtn(false);

    if (router.pathname === "/searchresult") {
      router.push({
        query: Object.fromEntries(Object.entries(router.query).filter(([key, value]) => key !== "query"))
      });

      if (window.innerWidth < 592) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    } else {
      setIsOpen(false);
    }
  };

  const handleCheckInputValue = () => {
    if (inputValue.length > 0) {
      setShowCrossBtn(true);
    } else {
      setShowCrossBtn(false);
    }
  };

  const imgSearch = !inputValue ? (
    <img className="search_img"
      src="https://static-helpcenter.onlyoffice.com/images/icons/search-icon.react.svg"
      style={{ cursor: "default" }}
      alt="search"
      width="16px"
      height="16px"
    />
  ) : (
    <img
      src="https://static-helpcenter.onlyoffice.com/images/icons/close-icon.react.svg"
      onClick={handleClearValue}
      alt="close"
      width="16px"
      height="16px"
    />
  );

  return (
    <StyledSearchArea className={`search ${isOpen ? "open" : ""}`}>
      
      {isCategoryPage &&
      <img
        src={pic}
        height={80}
        width={80}
      />
      }
      {label &&
        <Heading
          className="presearch_title"
          color="#333"
          level={1}
          label={label}
          textAlign="center"
          fontWeight={700}
        />
      }
      <div>
        <TextInput
          ref={inputRef}
          onChange={handleSearchInput}
          onClick={handleCheckInputValue}
          onKeyDown={onKeyDown}
          value={inputValue}
          className={`search_input ${router.pathname === "/searchresult" ? "searchresult" : ""}`}
          placeholder={t("HowCanWeHelp?")}
          type="text"
          backgroundColor="#fffff"
          color="#333333"
          fontSize="16px"
          colorHover="#CCCCCC"
          labelColor={!inputValue ? "#808080" : "#CCCCCC"}
        />
        <div className="search_icon">{imgSearch}</div>
      </div>
    </StyledSearchArea>
  );
};

export default SearchArea;
