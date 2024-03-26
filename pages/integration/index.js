import React, { useMemo } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import getAllArticles from "@lib/strapi/getArticles";
import getAllCategories from "@lib/strapi/getCategories";

import Layout from "@components/layout";
import HeadingContent from "@components/screens/header-content";
import Footer from "@components/screens/footer-content";
import HeadSEO from "@components/screens/head-content";
import InfoContent from "@components/screens/main-content/info-content";
import GuidesCards from "@components/screens/main-content/guides-cards";

const ConnectorsPage = ({ locale, articles, categories }) => {
  const { t } = useTranslation();
  const pageCategory = "integration";

  const curArticles = useMemo(
    () => articles.data.filter((it) => it.attributes.category.data?.attributes.slug_id === pageCategory),
    [articles]
  );
  
  const curCatInfo = useMemo(
    () => categories.data.find((it) => it.attributes.slug_id === pageCategory),
    [categories]
  );
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
        <HeadingContent t={t} template={false} currentLanguage={locale} categories={categories.data} pageCategory={pageCategory} />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <InfoContent t={t} categories={categories.data} currentLanguage={locale} isCategory={true} category={curCatInfo.attributes} />
        <GuidesCards t={t} categories={curArticles} articles={null} isCategory={true} mainCategory={pageCategory} />
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