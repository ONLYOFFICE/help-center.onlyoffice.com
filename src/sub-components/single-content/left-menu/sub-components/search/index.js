import React, {useState} from "react";
import TextInput from "../../../../../../components/text-input";
import StyledSearch from "./styled-search";
import SearchIcon from "../../../../../../static/images/icons/search-icon.react.svg";

const MiniSearch = ({ valueSearch, callback, t, label }) => {

  const [searchItem, setSearchItem] = useState("");

  const onSearch = (e) => {
    setSearchItem(e.target.value);
  };
  
  return (
    <StyledSearch>
        <TextInput
          onChange={onSearch}
          value={searchItem}
          type="text"
          className="search_input"
          backgroundColor="#fffff"
          color="#333333"
          placeholder={t("SearchIputPlaceholder")}
          fontSize="16px"
          colorHover="#CCCCCC"
          labelColor={!valueSearch ? "#808080" : "#CCCCCC"}
        />
        <div className="search_icon">
            <SearchIcon style={{ cursor: "default" }} />
        </div>
    </StyledSearch>
  );
};

export default MiniSearch;