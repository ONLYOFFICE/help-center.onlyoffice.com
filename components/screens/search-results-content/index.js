import StyledSearchResultsContent from "./styled-search-results-content";
import Highlighter from "react-highlight-words";
import SearchArea from "@components/screens/common/search-area";
import CategoriesLeftMenu from "@components/screens/common/categories-left-menu";
import InternalLink from "@components/common/internal-link";
import Heading from "@components/common/heading";
import Pagination from "@components/common/pagination";
import { useState, useEffect } from "react";

const paginationSize = 7;

const SearchResultsContent = ({ t, searchData, leftMenuMobile, setLeftMenuMobile, leftMenuCategories, page, searchResults, locale, sort, query }) => {
  const countPage = searchData.meta?.pagination.pageCount;
  const [pageLimit, setPageLimit] = useState(countPage > 7 ? 7 : countPage);

  const arrayStart = [...Array(countPage).keys()].map(i => i + 1)
    .filter(item => item % pageLimit === 0)
    .map((item, index) => item - index);

  const checkInterval = (page, min, max) => {
    if ((page >= min) && (page < max)) return min;
    if (page <= min && page < max) return 0;
    if (page >= min && !max) return min;
  };

  const getPaginationGroup = () => {
    let start = 0;
    for (let i = 0; i < arrayStart.length; i++) {
      if (checkInterval(page, arrayStart[i], arrayStart[i + 1])) {
        start = checkInterval(page, arrayStart[i], arrayStart[i + 1])
        break;
      }
    }
    return countPage > pageLimit ? 
      new Array(countPage - start < pageLimit ? countPage - start + 1 : pageLimit).fill().map((_, idx) => start === 0 ? start + idx + 1 : start + idx) : 
      new Array(countPage).fill().map((_, idx) => idx + 1);
  };

  const resizeHandler = () => {
    window.innerWidth < 425 ? setPageLimit(countPage > 5 ? 5 : countPage) : setPageLimit(countPage > 7 ? 7 : countPage);
  };

  useEffect(() => {
    resizeHandler();
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  });

  return (
    <>
      <CategoriesLeftMenu
        leftMenuMobile={leftMenuMobile}
        categories={leftMenuCategories}
        setLeftMenuMobile={setLeftMenuMobile}
      />
      <StyledSearchResultsContent>
        <div className="search-results-header">
          <SearchArea placeholder={t("HowCanWeHelp?")} query={query} />
        </div>

        {searchResults?.length > 0 ? (
          <div className="search-results-wrapper">
            <div className="search-results-found">{searchResults?.length} {t("ResultsFound")}</div>
            <div className="search-results-items">
              {searchResults?.map((item, index) => (
                <div className="search-results-item" key={index}>
                  <InternalLink className="search-results-link" href={item?.attributes?.url}>
                    <Highlighter className="search-results-query" searchWords={[query]} textToHighlight={item?.attributes?.title} />
                  </InternalLink>
                  <p className="search-results-description">
                  <Highlighter className="search-results-query" searchWords={[query]} textToHighlight={item?.attributes?.description?.replace(/<[^>]*>/g, "") || item?.attributes?.content.replace(/<[^>]*>/g, '')} />
                  </p>
                </div>
              ))}
            </div>
            {countPage !== 0 && countPage !== 1 &&
            <Pagination          
              countPage={countPage}
              getPaginationGroup={getPaginationGroup()}
              locale={locale}
              sort={sort}
              page={Number(page)}
            />
            }
          </div>
        ) : (
          <div className="search-results-wrapper not-found">
            <Heading className="search-results-not-found-title" level={3} label={t("NoResult")} />
            <div className="search-results-not-found-img"></div>
            <InternalLink className="search-results-link main" href="/">{t("GoToMainPage")}</InternalLink>
          </div>
        )}
      </StyledSearchResultsContent>
    </>
  );
};

export default SearchResultsContent;