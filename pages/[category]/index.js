import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import getCategoryLevel1 from "@lib/strapi/getCategoryLevel1";
import Layout from "@components/layout";
import HeadSEO from "@components/screens/head";
import Header from "@components/screens/header";
import CategoryContent from "@components/screens/main-content/category-content";
import Footer from "@components/screens/footer";

const CategoryPage = ({ locale, categories, category }) => {
  const { t } = useTranslation();
  const [leftMenuMobile, setLeftMenuMobile] = useState(false);

  const { slug_id, articles, seo_title, seo_description } = category.attributes;
  const categorySlugMany = slug_id === "docs" ? "docs" : `${slug_id}s`;
  const data = slug_id === "integration" ? articles : category.attributes[`category_${categorySlugMany}`];

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
          categories={categories}
          leftMenuMobile={leftMenuMobile}
          setLeftMenuMobile={setLeftMenuMobile}
        />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <CategoryContent
          t={t}
          categories={data}
          categorySlug={categorySlugMany}
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