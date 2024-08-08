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

  const categorySlugOne = categorySlug === "docs" ? "doc" : categorySlug;
  const { 
    seo_title, 
    seo_description, 
    name,
    icon,
    video,
    [`level_2_${categorySlugOne}`]: level2Data,
    [`level_4_${categorySlug === "docs" ? "docs" : `${categorySlug}s`}`]: level4Data
  } = categoryData.data?.[0]?.attributes;

  return (
    <Layout>
      <Layout.PageHead>
        <HeadSEO
          title={seo_title}
          description={seo_description}
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
          categorySlug={categorySlug}
          categoryName={level2Data?.data?.attributes[`category_${categorySlugOne}`].data.attributes.general_category.data.attributes.name}
          categoryUrl={level2Data?.data?.attributes[`category_${categorySlugOne}`].data.attributes.general_category.data.attributes.url}
          level2CategoryName={level2Data?.data?.attributes[`category_${categorySlugOne}`].data.attributes.name}
          level2CategoryUrl={level2Data?.data?.attributes[`category_${categorySlugOne}`].data.attributes.url}
          level3CategoryName={level2Data?.data?.attributes.name}
          level3CategoryUrl={level2Data?.data?.attributes.url}
          pageName={name}
          pageIcon={icon}
          pageItems={level4Data?.data}
          leftMenuMobile={leftMenuMobile}
          setLeftMenuMobile={setLeftMenuMobile}
          backBtnName={level2Data?.data?.attributes.name}
          backBtnUrl={level2Data?.data?.attributes.url}
          video={video}
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