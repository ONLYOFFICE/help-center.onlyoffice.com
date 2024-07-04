import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import getCategoriesMenu from "@lib/strapi/getCategoriesMenu";
import getCategoryLevel2 from "@lib/strapi/getCategoryLevel2";
import Layout from "@components/layout";
import HeadingContent from "@components/screens/header-content";
import Footer from "@components/screens/footer-content";
import HeadSEO from "@components/screens/head-content";
import InfoContent from "@components/screens/main-content/info-content";
import GuidesCards from "@components/screens/main-content/guides-cards";

const CategoryPage = ({ locale, categoriesMenu, category }) => {
  const { t } = useTranslation();
  const pageTitle = `${t(category.data[0]?.attributes.name)} - ONLYOFFICE`;
  const categorySlug = category.data[0]?.attributes.slug_id === "docs" ? "docs" : `${category.data[0]?.attributes.slug_id}s`;
  const data = category.data[0]?.attributes.slug_id === "integration" ? category.data[0].attributes.articles : category.data[0]?.attributes[`category_${categorySlug}`];
  const isIntegrationCategory = category.data[0]?.attributes.slug_id === "integration";

  return (
    <Layout>
      <Layout.PageHead>
        <HeadSEO
          title={pageTitle}
          metaSiteNameOg={t("metaSiteNameOg")}
          metaDescription={t("titleIndexPage")}
          metaDescriptionOg={t("metaDescriptionOgIndexPage")}
          metaKeywords={pageTitle}
        />
      </Layout.PageHead>
      <Layout.PageHeader>
        <HeadingContent t={t} template={false} currentLanguage={locale} categories={categoriesMenu.data} pageCategory={category.data[0]?.attributes} />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <InfoContent t={t} isCategory={true} category={category.data[0]?.attributes} />
        <GuidesCards t={t} data={data} isCategoryPage={true} categorySlug={categorySlug} isIntegrationCategory={isIntegrationCategory} />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} language={locale} />
      </Layout.PageFooter>
    </Layout>
  );
};

export const getServerSideProps = async ({ locale, params }) => {
  const categoriesMenu = await getCategoriesMenu(locale);
  const category = await getCategoryLevel2(locale, params.category);

  return {
    props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      categoriesMenu,
      category
    },
  };
};

export default CategoryPage;