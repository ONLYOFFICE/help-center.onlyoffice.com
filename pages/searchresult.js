import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import SearchResultsContent from "@components/screens/search-results-content";
import getCategoriesMenu from "@lib/strapi/getCategoriesMenu";
import getSearchResults from "@lib/strapi/getSearchResults";
import Layout from "@components/layout";
import HeadSEO from "@components/screens/head";
import Header from "@components/screens/header";
import Footer from "@components/screens/footer";

const SearchResult = ({ locale, categories, searchResults, query }) => {
  const { t } = useTranslation("common");
  const [leftMenuMobile, setLeftMenuMobile] = useState(false);

  return (
    <Layout>
      <Layout.PageHead>
        <HeadSEO
          title={`${query} - ONLYOFFICE`}
          description={""}
        />
      </Layout.PageHead>
      <Layout.PageHeader>
        <Header 
          t={t}
          locale={locale}
          categories={categories}
          isMain={true}
          leftMenuMobile={leftMenuMobile}
          setLeftMenuMobile={setLeftMenuMobile}
        />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <SearchResultsContent
          t={t}
          locale={locale}
          leftMenuMobile={leftMenuMobile}
          setLeftMenuMobile={setLeftMenuMobile}
          leftMenuCategories={categories}
          searchResults={searchResults}
          query={query}
        />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} locale={locale} />
      </Layout.PageFooter>
    </Layout>
  );
};

export const getServerSideProps = async ({ locale, query }) => {
  const categories = await getCategoriesMenu(locale);
  const searchResults = await getSearchResults(locale, query.query)

  return {
    props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      categories,
      searchResults,
      query: query.query
    },
  };
};

export default SearchResult;
