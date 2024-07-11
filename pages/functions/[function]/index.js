import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import getCategoriesMenu from "@lib/strapi/getCategoriesMenu";
import getFunctions from "@lib/strapi/getFunctions";

import Layout from "@components/layout";
import HeadingContent from "@components/screens/header-content";
import Footer from "@components/screens/footer-content";
import SingleContent from "@components/screens/single-page-content";
import HeadSEO from "@components/screens/head-content";

const FunctionsPage = ({ locale, categoriesMenu, functions }) => {
  const { t } = useTranslation();
  const seoTitle = `${functions.data[0].attributes.title} - ONLYOFFICE`;

  return (
    <Layout>
      <Layout.PageHead>
        <HeadSEO
          title={seoTitle}
          metaKeywords={seoTitle}
          currentLanguage={locale}
        />
      </Layout.PageHead>
      <Layout.PageHeader>
        <HeadingContent
          t={t}
          template={false}
          currentLanguage={locale}
          categories={categoriesMenu.data}
        />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <SingleContent
          t={t}
          currentLanguage={locale}
          pageName={functions.data[0].attributes.title}
          pageDescription={functions.data[0].attributes.content}
          tags={functions.data[0].attributes.tags}
        />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} language={locale} />
      </Layout.PageFooter>
    </Layout>
  );
};

export async function getServerSideProps({ locale, params }) {
  const categoriesMenu = await getCategoriesMenu(locale);
  const functions = await getFunctions(locale, `/functions/${params.function}`);

  if (functions.data.length === 0) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      categoriesMenu,
      functions
    },
  };
}

export default FunctionsPage;
