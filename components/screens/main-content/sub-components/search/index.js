import { useState, useEffect } from "react";

import Search from "@components/common/search-area";

import SearchResult from "./search-result";

const SearchContent = ({ t, article, isCategoryPage, category }) => {
  // const data = useStaticQuery(graphql`
  //   {
  //     allDirectory {
  //       nodes {
  //         id
  //       }
  //       totalCount
  //     }
  //   }
  // `);

  //const searchDataItems = data.allDirectory.nodes;

  // const [focusOnSearch, setFocusOnSearch] = useState(false);
  // const [searchItem, setSearchItem] = useState("");
  // const [resultSearch, setResultSearch] = useState([]);

  // const searchFilter = () => {
  //   const tmpResultSearch = searchDataItems.filter(({ id }) => {
  //     if (id.toLowerCase().includes(searchItem.toLowerCase())) {
  //       return { ...id };
  //     }
  //   });
  //   if (searchItem !== "") {
  //     setResultSearch(tmpResultSearch);
  //     setFocusOnSearch(true);
  //   } else {
  //     setResultSearch(null);
  //   }
  // };

  // useEffect(() => {
  //   searchFilter();
  // }, [searchItem]);

  // const onSearch = (e) => {
  //   setSearchItem(e.target.value);
  // };

  // const clearValueSearch = () => {
  //   setSearchItem("");
  // };

  // const onCloseSearchResult = () => {
  //   setFocusOnSearch(false);
  // };

  // const labelValue = !isCategoryPage ? t("WelcomeToHelpCenter") : category.data[0]?.attributes.name;
  // const labelImg = isCategoryPage && category.data[0]?.attributes?.card_field_img?.data?.attributes.url;
  
  return (
    <>
      <Search
        t={t}
        //callback={onSearch}
       // valueSearch={searchItem}
       // clearValueSearch={clearValueSearch}
        // label={labelValue}
        isCategoryPage={isCategoryPage}
        // pic={labelImg}
        placeholder={t("HowCanWeHelp?")}
      />
      {/* <SearchResult
        searchItem={searchItem}
        resultItems={resultSearch}
        onMouseLeaveSearchResult={onCloseSearchResult}
        resultMouseLeave={focusOnSearch}
      /> */}
    </>
  );
};

export default SearchContent;
