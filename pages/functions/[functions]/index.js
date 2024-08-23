import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import getCategoriesMenu from "@lib/strapi/getCategoriesMenu";
import getFunctions from "@lib/strapi/getFunctions";
import Layout from "@components/layout";
import Header from "@components/screens/header";
import Footer from "@components/screens/footer";
import HeadSEO from "@components/screens/head";
import ArticleContent from "@components/screens/article-content";

const FunctionsPage = ({ locale, categoriesMenu, functions }) => {
  const { t } = useTranslation();
  const [leftMenuMobile, setLeftMenuMobile] = useState(false);
  const { title, content, tags } = functions.data[0].attributes;

  return (
    <Layout>
      <Layout.PageHead>
        <HeadSEO
          title={`${title} - ONLYOFFICE`}
          description={""}
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
        <ArticleContent
          t={t}
          locale={locale}
          backBtnName={t("Home")}
          backBtnUrl="/"
          pageDescription={content}
          tags={tags}
          leftMenuMobile={leftMenuMobile}
          pageName={title}
        />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} locale={locale} />
      </Layout.PageFooter>
    </Layout>
  );
};

export async function getServerSideProps({ locale, params }) {
  const categoriesMenu = await getCategoriesMenu(locale);
  const functions = await getFunctions(locale, `functions/${params.functions}`);

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
