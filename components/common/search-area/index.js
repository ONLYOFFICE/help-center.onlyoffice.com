import TextInput from "@components/common/text-input/";
import Heading from "@components/common/heading";
import StyledSearchArea from "./styled-search-area";

const SearchArea = ({ clearValueSearch, valueSearch, callback, t, label, placeholder, isCategoryPage, pic }) => {
  /*eslint-disable*/
  const imgSearch = !valueSearch ? (
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
      onClick={clearValueSearch}
      alt="close"
      width="16px"
      height="16px"
    />
  );
  /*eslint-enable*/
  return (
    <StyledSearchArea className={`${isCategoryPage ? "cat_search" : ""}`}>
      <div className="presearch_bx">
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
      </div>
      <div className="search_container">
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
      </div>
    </StyledSearchArea>
  );
};

export default SearchArea;
