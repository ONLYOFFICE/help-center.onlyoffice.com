import StyledSearchArea from "./styled-search-area";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const SearchArea = ({ query, className, placeholder, isLeftMenu }) => {
  const [inputValue, setInputValue] = useState(query || "");
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    setError(inputValue.length > 0 && inputValue.length < 3 ? "Search term must be at least 3 characters long." : "");
  }, [inputValue]);

  const onKeyDownHandle = async (e) => {
    if (e.key === "Enter" && !error) {
      router.push({
        pathname: "/searchresult",
        query: { query: inputValue },
      });
    }
  };

  return (
    <StyledSearchArea isLeftMenu={isLeftMenu} className={`search-area ${className || ""}`}>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={onKeyDownHandle}
        className="search-input"
        placeholder={placeholder}
        value={inputValue}
        type="text"
      />
      {inputValue ? (
        <button onClick={() => setInputValue("")} className="search-icon cross"></button>
      ) : (
        <div className="search-icon search"></div>
      )}
      {error && <div className="error">{error}</div>}
    </StyledSearchArea>
  );
};

export default SearchArea;
