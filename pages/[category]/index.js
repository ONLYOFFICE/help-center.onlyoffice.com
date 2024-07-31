import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import getCategoryLevel1 from "@lib/strapi/getCategoryLevel1";
import Layout from "@components/layout";
import HeadSEO from "@components/screens/head";
import Header from "@components/screens/header";
import MainContent from "@components/screens/main-content";
import Footer from "@components/screens/footer";

const CategoryPage = ({ locale, categories, category }) => {
  const { t } = useTranslation();
  const [leftMenuMobile, setLeftMenuMobile] = useState(false);

  const { name, description, slug_id, articles, seo_title, seo_description } = category.attributes;
  const seoTitle = seo_title ? seo_title : `${name} - ONLYOFFICE`;
  const seoDescription = seo_description ? seo_description : ReactHtmlParser(description)[0]?.props.children[0];

  const categorySlug = slug_id === "docs" ? "docs" : `${slug_id}s`;
  const data = slug_id === "integration" ? articles : category.attributes[`category_${categorySlug}`];
  const isIntegrationCategory = slug_id === "integration";

  return (
    <Layout>
      <Layout.PageHead>
        <HeadSEO
          title={seoTitle}
          description={seoDescription}
        />
      </Layout.PageHead>
      <Layout.PageHeader>
        <Header
          t={t}
          locale={locale}
          categories={categories}
          leftMenuMobile={leftMenuMobile}
          setLeftMenuMobile={setLeftMenuMobile}
        />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <MainContent
          t={t}
          isCategoryPage={true}
          category={category}
          categories={data}
          categorySlug={categorySlug}
          isIntegrationCategory={isIntegrationCategory}
          leftMenuCategories={categories}
          leftMenuMobile={leftMenuMobile}
          setLeftMenuMobile={setLeftMenuMobile}
        />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} locale={locale} />
      </Layout.PageFooter>
    </Layout>
  );
};

export const getServerSideProps = async ({ locale, params }) => {
  const categories = await getCategoryLevel1(locale, params.category);
  const category = categories.data.find(item => item.attributes.slug_id === params.category);

  if (category === undefined) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      categories,
      category
    },
  };
};

export default CategoryPage;