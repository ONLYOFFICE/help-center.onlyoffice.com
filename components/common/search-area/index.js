import React from "react";

import Text from "@components/common/text";
import Box from "@components/common/box";
import TextInput from "@components/common/text-input/";
import Heading from "@components/common/heading";
import StyledSearchArea from "./styled-search-area";

const SearchArea = ({ clearValueSearch, valueSearch, callback, t, label, placeholder }) => {
  /*eslint-disable*/
  const imgSearch = !valueSearch ? (
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
      onClick={clearValueSearch}
      alt="close"
      width="24px"
      height="24px"
    />
  );
  /*eslint-enable*/
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
        <div className="search_icon">{imgSearch}</div>
      </Box>
    </StyledSearchArea>
  );
};

export default SearchArea;
