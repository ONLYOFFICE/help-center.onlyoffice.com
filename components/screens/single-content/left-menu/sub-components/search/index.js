import React, {useState} from "react";
import TextInput from "@components/common/text-input";
import StyledSearch from "./styled-search";
import SearchIcon from "@public/images/icons/search-icon.react.svg";
import { ReactSVG } from "react-svg";

const MiniSearch = ({ valueSearch, callback, t, label }) => {

  const [searchItem, setSearchItem] = useState("");

  const onSearch = (e) => {
    setSearchItem(e.target.value);
  };
  
  return (
    <StyledSearch className="search_wrapper">
        <TextInput
          onChange={onSearch}
          value={searchItem}
          type="text"
          className="search_input"
          color="#cccccc"
          fontSize="16px"
          colorHover="#CCCCCC"
          labelColor={!valueSearch ? "#808080" : "#CCCCCC"}
          placeholder={"Search in Help Center"}
        />
        <div className="search_icon">
            <ReactSVG src={SearchIcon.src} style={{ cursor: "default" }} />
        </div>
    </StyledSearch>
  );
};

export default MiniSearch;