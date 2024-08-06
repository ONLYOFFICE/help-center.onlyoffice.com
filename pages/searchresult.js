import { useState, useEffect, use } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import StyledSearchResult from "../components/screens/main-content/sub-components/search/styled-search-result";
import Highlighter from "react-highlight-words";
import { StyledPagination } from '@components/common/pagination/styled-pagination'

import Layout from "@components/layout";
import HeadSEO from "@components/screens/head";
import Header from "@components/screens/header";
import SearchArea from "@components/common/search-area";
import Footer from "@components/screens/footer";
import Link from 'next/link'
import getCategories from "@lib/strapi/getCategories";
import { getArticles } from '@lib/searchApi/getArticles';
import { getDocsArticles } from '@lib/searchApi/getDocsArticles';
import { getDocspaceArticles } from '@lib/searchApi/getDocspaceArticles';
import { getWorkspaceArticles } from '@lib/searchApi/getWorkspaceArticles';
import { getDesktopArticles } from '@lib/searchApi/getDesktopArticles';
import { getMobileArticles } from '@lib/searchApi/getMobileArticles';

const itemsOnPage = 10;

const defaultPaginationData = {
  currentPage: 1,
  pageNumber: 1,
}

const SearchResult = ({
  locale,
  categories
}) => {
  const { t } = useTranslation("common");
  const router = useRouter();

  const [searchValue, setSearchValue] = useState('');
  const [searchData, setSearchData] = useState([]);
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const [leftMenuMobile, setLeftMenuMobile] = useState(false);
  const [pageData, setPageData] = useState(defaultPaginationData);
  const [pageToView, setPageToView] = useState([]);

  const onKeyDownHandle = async (e) => {
    if (e.key === "Enter") {
      setIsLoading(true);
      
       router.push({
         pathname: "/searchresult",
         query: { ...router.query, query: inputValue }
       });

       Promise.all([
        getArticles(inputValue),
        getDocsArticles(inputValue),
        getDocspaceArticles(inputValue),
        getWorkspaceArticles(inputValue),
        getDesktopArticles(inputValue),
        getMobileArticles(inputValue),
      ]).catch((err) => {
        setIsLoading(false);
      })
      .then((res) => {
        
        if (res && res.length > 0) {
  
          const allData = [];
  
          for(const element of res) {
            allData.push(...element?.data)
          };

          const dataLength = allData?.length
          if (dataLength) {
            const pageNumber = Math.ceil(dataLength/itemsOnPage);
            setPageData({...pageData, pageNumber: pageNumber})
          }
  
          setSearchData(allData)
          setIsLoading(false);
        }
    })
    }
  };

  useEffect(() => {
    setIsLoading(true);
    let params = (new URL(document.location)).searchParams; 
    const searchValueQuery = params.get("query");
    setSearchValue(searchValueQuery)

    if (searchValueQuery) {
      setInputValue(searchValueQuery);
    }

    Promise.all([
      getArticles(searchValue || params.get("query")),
      getDocsArticles(searchValue || params.get("query")),
      getDocspaceArticles(searchValue || params.get("query")),
      getWorkspaceArticles(searchValue || params.get("query")),
      getDesktopArticles(searchValue || params.get("query")),
      getMobileArticles(searchValue || params.get("query")),
    ]).catch((err) => {
      setIsLoading(false);
    })
    .then((res) => {
      
      if (res && res.length > 0) {

        const allData = [];

        for(const element of res) {
          allData.push(...element?.data)
        };

        const dataLength = allData?.length
        if (dataLength) {
          const pageNumber = Math.ceil(dataLength/itemsOnPage);
          setPageData({...pageData, pageNumber: pageNumber})
        }

        setSearchData(allData)
        setIsLoading(false);
      }
  });
  },[]);

  const getMaxItemIndex = (value, maxValue) => {
    if (value < maxValue || value === maxValue) {
      return value
    } else {
      return value = value - (value - maxValue + 1)
    }
  }

  useEffect(() => {
    const minIndexOfPage = (pageData.currentPage * itemsOnPage) - itemsOnPage
    let maxIndexOfPage = (pageData.currentPage * itemsOnPage) - 1

    if(pageData.currentPage === pageData.pageNumber && maxIndexOfPage > searchData?.length) {
      maxIndexOfPage = getMaxItemIndex(maxIndexOfPage, searchData?.length)
    }

    const pageToView = searchData.filter((item, index) => {
      if (index >= minIndexOfPage && index <= maxIndexOfPage) {
        return true
      }
      return false;
    })

    setPageToView(pageToView)
  }, [pageData.currentPage, searchData.length])

  const onArrowLeftClick = () => {
    if (pageData?.currentPage > 1) {
      setPageData({...pageData, currentPage: pageData?.currentPage - 1})
    }
  }

  const onArrowRightClick = () => {
    if (pageData?.currentPage < pageData.pageNumber) {
      setPageData({...pageData, currentPage: pageData?.currentPage + 1})
    }
  }

return (
  <Layout>
    <Layout.PageHead>
      <HeadSEO
        title={`${t("Search")} - ONLYOFFICE`}
        metaSiteNameOg={t("metaSiteNameOg")}
        metaDescription={t("titleIndexPage")}
        metaDescriptionOg={t("metaDescriptionOgIndexPage")}
        metaKeywords={t("metaKeywordsIndexPage")}
        currentLanguage={locale}
      />
    </Layout.PageHead>
    <Layout.PageHeader>
      <Header t={t}
          locale={locale}
          categories={categories}
          isMain={true}
          leftMenuMobile={leftMenuMobile}
          setLeftMenuMobile={setLeftMenuMobile} />
    </Layout.PageHeader>
    <Layout.SectionMain>
    <SearchArea 
      t={t} 
      onKeyDown={(e) => onKeyDownHandle(e)} 
      setInputValue={setInputValue}
      inputValue={inputValue}
    />
    {isLoading ? <StyledSearchResult><div>{t("loading")}</div></StyledSearchResult> : 
    pageToView?.length === 0 ? (
      <StyledSearchResult><div>
        <h1>{t("NoResult")}</h1></div></StyledSearchResult>
      ) : 
      <StyledSearchResult>
        <p className="found">{searchData?.length} {t("resultsFound")}</p>
          {pageToView?.map((item) => {
            return(
              <div>
                  <Link href={item?.attributes?.url}>
                    <Highlighter
                      highlightClassName="query"
                      searchWords={[inputValue]}
                      autoEscape={true}
                      textToHighlight={item?.attributes?.title}
                    />
                  </Link>
                  <p><Highlighter
                      highlightClassName="query"
                      searchWords={[inputValue]}
                      autoEscape={true}
                      textToHighlight={item?.attributes?.description?.replace(/<[^>]*>/g, '')}
                    /></p>
              </div>
            )
          })}
          {pageData && pageData?.pageNumber && 
          <StyledPagination className="pagination">
            <div style={{height: "24px", width: "24px"}} className="pagination-item-prev" onClick={onArrowLeftClick}></div>
            {Array.from(Array(pageData?.pageNumber)).map((item, index) => {
              const onClick = () => {
                setPageData({...pageData, currentPage: index+1})
              }
              
              return (
                index+1 === pageData.currentPage ? <div onClick={onClick} className="pagination-item active">{index+1}</div> : <div onClick={onClick} className="pagination-item">{index+1}</div>
              )
            })}
            <div style={{height: "24px", width: "24px"}} className="pagination-item-next" onClick={onArrowRightClick}></div>
        </StyledPagination>
        }
        </StyledSearchResult>
    }
    
      </Layout.SectionMain>
    <Layout.PageFooter>
      <Footer t={t} language={locale} />
    </Layout.PageFooter>
  </Layout>
);
};

export const getServerSideProps = async ({ locale }) => {
  const categories = await getCategories(locale, true);

  return {
    props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      categories
    },
  };
};

export default SearchResult;
