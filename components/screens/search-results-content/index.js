import StyledSearchResultsContent from "./styled-search-results-content";
import Highlighter from "react-highlight-words";
import SearchArea from "@components/screens/common/search-area";
import CategoriesLeftMenu from "@components/screens/common/categories-left-menu";
import InternalLink from "@components/common/internal-link";
import Heading from "@components/common/heading";

const SearchResultsContent = ({ t, leftMenuMobile, setLeftMenuMobile, leftMenuCategories, searchResults, query }) => {
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
            <div className="search-results-found">{searchResults?.length} {t("results found")}</div>
            <div className="search-results-items">
              {searchResults?.map((item, index) => (
                <div className="search-results-item" key={index}>
                  <InternalLink className="search-results-link" href={item?.attributes?.url}>
                    <Highlighter searchWords={[query]} textToHighlight={item?.attributes?.title} />
                  </InternalLink>
                  <p className="search-results-description">{item?.attributes?.description?.replace(/<[^>]*>/g, "") || item?.attributes?.seo_description.replace(/<[^>]*>/g, "")}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="search-results-wrapper">
            <Heading className="search-results-not-found-title" level={3} label={t("NoResult")} />
            <div className="search-results-not-found-img"></div>
          </div>
        )}
      </StyledSearchResultsContent>
    </>
  );
};

export default SearchResultsContent;