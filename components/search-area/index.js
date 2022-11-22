import React from "react";

import Text from "../text";
import Box from "../box";
import TextInput from "../text-input/";
import Heading from "../heading";

import StyledSearchArea from "./styled-search-area";

import SearchIcon from "../../static/images/icons/search-icon.react.svg";
import CloseIcon from "../../static/images/icons/close-icon.react.svg";

const SearchArea = ({ clearValueSearch, valueSearch, callback, t, label, placeholder }) => {
  return (
    <StyledSearchArea>
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
      <Box className="search_container" alignItems="center">
        <TextInput
          onChange={callback}
          value={valueSearch}
          placeholder={placeholder}
          type="text"
          className="search_input"
          backgroundColor="#fffff"
          color="#333333"
          fontSize="16px"
          colorHover="#CCCCCC"
          labelColor={!valueSearch ? "#808080" : "#CCCCCC"}
        />
        <div className="search_icon">
          {!valueSearch ? (
            <SearchIcon style={{ cursor: "default" }} />
          ) : (
            <CloseIcon onClick={clearValueSearch} />
          )}
        </div>
      </Box>
    </StyledSearchArea>
  );
};

export default SearchArea;
