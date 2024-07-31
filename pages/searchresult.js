import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import StyledSearchResult from "../components/screens/main-content/sub-components/search/styled-search-result";

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

        setSearchData(allData)
        setIsLoading(false);
      }
  });
  },[]);


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
    {isLoading ? <StyledSearchResult><div>loading...</div></StyledSearchResult> : 
    searchData?.length === 0 ? (
      <StyledSearchResult><div>
        <h1>{t("NoResult")}</h1></div></StyledSearchResult>
      ) : 
      <StyledSearchResult>
        <p className="found">{searchData?.length} results found</p>
          {searchData?.map((item) => {
            return(
              <div>
                  <Link href={item?.attributes?.url}>
                    {item?.attributes?.title}
                  </Link>
                  <p>{item?.attributes?.description?.replace(/<[^>]*>/g, '') || item?.attributes?.seo_description.replace(/<[^>]*>/g, '')}</p>
              </div>
            )
          })}
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
