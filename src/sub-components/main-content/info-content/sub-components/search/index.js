import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";

import Search from "../../../../../../components/search-area";

import SearchResult from "./search-result";

const SearchContent = ({ t, article }) => {
  const data = useStaticQuery(graphql`
    {
      allDirectory {
        nodes {
          id
        }
        totalCount
      }
    }
  `);

  const searchDataItems = data.allDirectory.nodes;

  const [focusOnSearch, setFocusOnSearch] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const [resultSearch, setResultSearch] = useState([]);

  const searchFilter = () => {
    const tmpResultSearch = searchDataItems.filter(({ id }) => {
      if (id.toLowerCase().includes(searchItem.toLowerCase())) {
        return { ...id };
      }
    });
    if (searchItem !== "") {
      setResultSearch(tmpResultSearch);
      setFocusOnSearch(true);
    } else {
      setResultSearch(null);
    }
  };

  useEffect(() => {
    searchFilter();
  }, [searchItem]);

  const onSearch = (e) => {
    setSearchItem(e.target.value);
  };

  const clearValueSearch = () => {
    setSearchItem("");
  };

  const onCloseSearchResult = () => {
    setFocusOnSearch(false);
  };

  console.log(article[0].Title);

  return (
    <>
      <Search
        t={t}
        callback={onSearch}
        valueSearch={searchItem}
        clearValueSearch={clearValueSearch}
        label={article[0].Title}
      />
      <SearchResult
        searchItem={searchItem}
        resultItems={resultSearch}
        onMouseLeaveSearchResult={onCloseSearchResult}
        resultMouseLeave={focusOnSearch}
      />
    </>
  );
};

export const query = graphql`
  fragment TextCard on STRAPI_TEXT {
    id
    Title
  }
`

export default SearchContent;
