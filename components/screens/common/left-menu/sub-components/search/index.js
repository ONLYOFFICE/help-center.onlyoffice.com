import { useState, useEffect, useRef } from "react";
import TextInput from "@components/common/text-input";
import StyledSearch from "./styled-search";
import { useRouter } from "next/router";

const MiniSearch = ({ valueSearch, callback, t, label }) => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");
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

  const onKeyDownHandle = async (e) => {
    if (e.key === "Enter") {
       router.push({
         pathname: "/searchresult",
         query: { ...router.query, query: inputValue }
       });
    }
  };

  const handleClearValue = () => {
    setInputValue("");
    setShowCrossBtn(false);

    if (router.pathname === "/searchresult") {
      router.push({
        pathname: "/",
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
      width="24px"
      height="24px"
    />
  ) : (
    <img
      src="https://static-helpcenter.onlyoffice.com/images/icons/close-icon.react.svg"
      onClick={handleClearValue}
      alt="close"
      width="16px"
      height="16px"
      style={{marginTop:"3px"}}
    />
  );

  return (
    <StyledSearch className="search_wrapper">
      <TextInput
        ref={inputRef}
        onChange={handleSearchInput}
        onClick={handleCheckInputValue}
        onKeyDown={(e) => onKeyDownHandle(e)}
        type="text"
        value={inputValue}
        className="search_input"
        color="#333333"
        fontSize="16px"
        colorHover="#CCCCCC"
        labelColor={!inputValue ? "#808080" : "#CCCCCC"}
        placeholder={"Search in Help Center"}
      />
      <div className="search_icon">{imgSearch}</div>
    </StyledSearch>
  );
};

export default MiniSearch;