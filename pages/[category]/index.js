import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import getCategoriesMenu from "@lib/strapi/getCategoriesMenu";
import getCategoryLevel1 from "@lib/strapi/getCategoryLevel1";
import Layout from "@components/layout";
import HeadingContent from "@components/screens/header";
import Footer from "@components/screens/footer";
import HeadSEO from "@components/screens/head";
import MainContent from "@components/screens/main-content";

const CategoryPage = ({ locale, categoriesMenu, category }) => {
  const { t } = useTranslation();
  const { name, slug_id, articles } = category.data[0]?.attributes;
  const pageTitle = `${name} - ONLYOFFICE`;
  const categorySlug = slug_id === "docs" ? "docs" : `${slug_id}s`;
  const data = slug_id === "integration" ? articles : category.data[0]?.attributes[`category_${categorySlug}`];
  const isIntegrationCategory = slug_id === "integration";

  return (
    <Layout>
      <Layout.PageHead>
        <HeadSEO
          title={pageTitle}
          description={""}
        />
      </Layout.PageHead>
      <Layout.PageHeader>
        <HeadingContent
          t={t}
          template={false}
          locale={locale}
          categories={categoriesMenu.data}
          pageCategory={category.data[0]?.attributes}
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
        />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} locale={locale} />
      </Layout.PageFooter>
    </Layout>
  );
};

export const getServerSideProps = async ({ locale, params }) => {
  const categoriesMenu = await getCategoriesMenu(locale);
  const category = await getCategoryLevel1(locale, params.category);

  if (category.data.length === 0) {
    return {
      notFound: true
    };
  }

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