import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import getCategories from "@lib/strapi/getCategories";
import Layout from "@components/layout";
import HeadSEO from "@components/screens/head";
import HeadingContent from "@components/screens/header";
import MainContent from "@components/screens/main-content";
import Accordion from "@components/screens/common/accordion";
import Footer from "@components/screens/footer";

const MainPage = ({ locale, categories }) => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Layout.PageHead>
        <HeadSEO
          title={t("Main - ONLYOFFICE")}
          description={""}
        />
      </Layout.PageHead>
      <Layout.PageHeader>
        <HeadingContent
          t={t}
          template={true}
          locale={locale}
          categories={categories.data}
          isMain={true}
        />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <MainContent
          t={t}
          categories={categories}
          isCategory={false}
        />
        <Accordion t={t} locale={locale} />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} locale={locale} />
      </Layout.PageFooter>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => {
  const categories = await getCategories(locale);

  return {
    props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      categories
    },
  };
};

export default MainPage;