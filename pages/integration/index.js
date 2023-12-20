import React, { useMemo } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import getAllArticles from "@lib/strapi/getArticles";
import getAllCategories from "@lib/strapi/getCategories";

import Layout from "@components/layout";
import HeadingContent from "@components/screens/header-content";
import Footer from "@components/screens/footer-content";
import HeadSEO from "@components/screens/head-content";
import CenterCategoryConnectorContent from "@components/screens/category-connector-content";

const ConnectorsPage = ({ locale, articles, categories }) => {
  const { t } = useTranslation();
  const pageCategory = "connectors";
  const curArticles = useMemo(
    () => articles.data.filter((it) => it.attributes.category.data?.attributes.slug_id === pageCategory),
    [articles]
  );
  console.log(curArticles);

  return (
    <Layout>
      <Layout.PageHead>
        <HeadSEO
          title={t("Integration Guides - ONLYOFFICE")}
          metaSiteNameOg={t("ONLYOFFICE Help Center")}
          metaDescription={t("ONLYOFFICEMeta")}
          metaDescriptionOg={t("ONLYOFFICEMeta")}
          metaKeywords={t("Integration Guides - ONLYOFFICE")}
          currentLanguage={locale}
        />
      </Layout.PageHead>
      <Layout.PageHeader>
        <HeadingContent t={t} template={false} currentLanguage={locale} categories={categories.data} />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <CenterCategoryConnectorContent 
        t={t} 
        currentLanguage={locale} 
        articles={curArticles} 
        category={pageCategory} 
        isCategory={true} />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} language={locale} />
      </Layout.PageFooter>
    </Layout>
  );
};

export async function getServerSideProps({ locale }) {
  const articles = await getAllArticles(locale);
  const categories = await getAllCategories(locale);

  return {
    props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      articles,
      categories
    },
  }
}

export default ConnectorsPage;