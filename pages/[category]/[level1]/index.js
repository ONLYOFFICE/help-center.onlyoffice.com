import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import getCategoriesMenu from "@lib/strapi/getCategoriesMenu";
import getCategoryLevel2Leve3 from "@lib/strapi/getCategoryLevel2Leve3";
import Layout from "@components/layout";
import HeadingContent from "@components/screens/header-content";
import Footer from "@components/screens/footer-content";
import HeadSEO from "@components/screens/head-content";
import CenterCategoryContent from "@components/screens/single-page-content/content/category-content";

const SubCategoryPage = ({ locale, categoriesMenu, category, categorySlug }) => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Layout.PageHead>
        <HeadSEO
          title={t("titleIndexPage")}
          metaDescription={t("metaDescriptionOgIndexPage")}
          metaDescriptionOg={t("metaDescriptionOgIndexPage")}
          metaKeywords={t("titleIndexPage")}
        />
      </Layout.PageHead>
      <Layout.PageHeader>
        <HeadingContent t={t} template={false} currentLanguage={locale} categories={categoriesMenu.data} pageCategory={category} />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <CenterCategoryContent t={t} category={category} categorySlug={categorySlug} isCategory={true} />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} language={locale} />
      </Layout.PageFooter>
    </Layout>
  );
};

export async function getServerSideProps({ locale, params }) {
  const categoriesMenu = await getCategoriesMenu(locale);
  const category = await getCategoryLevel2Leve3(locale, params.category, params.level1);

  return {
    props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      categoriesMenu,
      category,
      categorySlug: params.category
    },
  };
}

export default SubCategoryPage;