import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import getCategoriesMenu from "@lib/strapi/getCategoriesMenu";
import getCategoryLevel4 from "@lib/strapi/getCategoryLevel4";
import Layout from "@components/layout";
import HeadSEO from "@components/screens/head";
import Header from "@components/screens/header";
import SubCategoryContent from "@components/screens/subcategory-content";
import Footer from "@components/screens/footer";

const Level4CategoryPage = ({ locale, categoriesMenu, categoryData, categorySlug }) => {
  const { t } = useTranslation();
  const [leftMenuMobile, setLeftMenuMobile] = useState(false);

  const data = categoryData.data?.[0].attributes;
  const categorySlugType = categorySlug === "docs" ? "doc" : categorySlug;
  const categoryName = data[`category_${categorySlugType}`].data?.attributes.general_category?.data.attributes.name;
  const level1CategoryName = data[`category_${categorySlugType}`].data?.attributes.name;
  const level2CategoryName = data[`level_2_${categorySlugType}`].data?.attributes.name;
  const seoTitle = data.seo_title ? data.seo_title : `${categoryName} - ${level1CategoryName} - ${level2CategoryName} ONLYOFFICE`;
  const seoDescription = data.seo_description ? data.seo_description : t("metaDescriptionOgIndexPage");

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
          categories={categoriesMenu}
          leftMenuMobile={leftMenuMobile}
          setLeftMenuMobile={setLeftMenuMobile}
        />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <SubCategoryContent 
          t={t}
          categoryName={data[`category_${categorySlugType}`].data?.attributes.general_category?.data.attributes.name}
          categoryUrl={data[`category_${categorySlugType}`].data?.attributes.general_category?.data.attributes.url}
          level2CategoryName={data[`category_${categorySlugType}`].data?.attributes.name}
          level2CategoryUrl={data[`category_${categorySlugType}`].data?.attributes.url}
          level3CategoryName={data[`level_2_${categorySlugType}`].data?.attributes.name}
          level3CategoryUrl={data[`level_2_${categorySlugType}`].data?.attributes.url}
          pageName={data.name}
          pageIcon={data.icon}
          pageItems={data[`level_4_${categorySlug === "docs" ? "docs" : `${categorySlug}s`}`].data}
          leftMenuMobile={leftMenuMobile}
          backBtnName={data[`level_2_${categorySlugType}`].data?.attributes.name}
          backBtnUrl={data[`level_2_${categorySlugType}`].data?.attributes.url}
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
  const categoryData = await getCategoryLevel4(locale, params.category, `/${params.category}/${params.level2}/${params.level3}`, `/${params.category}/${params.level2}/${params.level3}/${params.level4}`);

  if (categoryData.data.length === 0) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      categoriesMenu,
      categoryData,
      categorySlug: params.category
    },
  };
};

export default Level4CategoryPage;