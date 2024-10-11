import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import getCategoriesMenu from "@lib/strapi/getCategoriesMenu";
import getLevel1Data from "@lib/strapi/getLevel1Data";
import Layout from "@components/layout";
import HeadSEO from "@components/screens/head";
import Header from "@components/screens/header";
import CategoryContent from "@components/screens/main-content/category-content";
import Footer from "@components/screens/footer";

const Level1Page = ({ locale, categoriesMenuData, data }) => {
  const { t } = useTranslation();
  const [leftMenuIsOpen, setLeftMenuIsOpen] = useState(false);

  const { slug_id, articles, seo_title, seo_description, name, card_field_img } = data.data[0].attributes;
  const categorySlugMany = slug_id === "docs" ? "docs" : `${slug_id}s`;

  return (
    <Layout>
      <Layout.PageHead>
        <HeadSEO
          title={seo_title ? seo_title : `Help Center - ONLYOFFICE`}
          description={seo_description || t("metaDescriptionOgIndexPage")}
        />
      </Layout.PageHead>
      <Layout.PageHeader>
        <Header
          t={t}
          locale={locale}
          data={categoriesMenuData}
          leftMenuIsOpen={leftMenuIsOpen}
          setLeftMenuIsOpen={setLeftMenuIsOpen}
        />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <CategoryContent
          t={t}
          locale={locale}
          categoriesMenuData={categoriesMenuData}
          categoryName={name}
          categoryImg={card_field_img?.data?.attributes.url}
          data={slug_id === "integration" ? articles : data.data[0].attributes[`category_${categorySlugMany}`]}
          categorySlug={categorySlugMany}
          leftMenuCategories={categoriesMenuData}
          leftMenuIsOpen={leftMenuIsOpen}
        />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} locale={locale} />
      </Layout.PageFooter>
    </Layout>
  );
};

export const getServerSideProps = async ({ locale, params }) => {
  const categoriesMenuData = await getCategoriesMenu(locale);
  const data = await getLevel1Data(locale, params.page);

  if (data.data.length === 0) {
    return {
      notFound: true
    };
  }

  if (data.data[0].attributes.slug_id === "integration") {
    const updatedArticles = [];
    const indxToRemove = new Set();

    data.data[0].attributes.articles.data.forEach((article, index, arr) => {
      const { url } = article.attributes;
      const docspaceUrl = url.replace('.aspx', '-docspace.aspx');
      const docspaceArticleIndex = arr.findIndex(a => a.attributes.url === docspaceUrl);

      if (docspaceArticleIndex !== -1) {
        article.attributes.url_docspace = docspaceUrl;
        indxToRemove.add(docspaceArticleIndex);
      }
      updatedArticles.push(article);
    });

    data.data[0].attributes.articles.data = updatedArticles.filter((_, index) => !indxToRemove.has(index));
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      categoriesMenuData,
      data
    },
  };
};

export default Level1Page;