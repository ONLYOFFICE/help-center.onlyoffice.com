import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import getLeftMenu from "@lib/strapi/getLeftMenu";
import getFunctions from "@lib/strapi/getFunctions";
import Layout from "@components/layout";
import Header from "@components/screens/header";
import Footer from "@components/screens/footer";
import HeadSEO from "@components/screens/head";
import ArticleContent from "@components/screens/article-content";

const FunctionsPage = ({ locale, data, functions }) => {
  const { t } = useTranslation();
  const [leftMenuIsOpen, setLeftMenuIsOpen] = useState(false);
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
          data={data}
          leftMenuIsOpen={leftMenuIsOpen}
          setLeftMenuIsOpen={setLeftMenuIsOpen}
        />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <ArticleContent
          t={t}
          locale={locale}
          pageDescription={content}
          tags={tags}
          leftMenuIsOpen={leftMenuIsOpen}
          pageName={title}
          leftMenuData={data}
        />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} locale={locale} />
      </Layout.PageFooter>
    </Layout>
  );
};

export async function getServerSideProps({ locale, params }) {
  const data = await getLeftMenu(locale);
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
      data,
      functions
    },
  };
}

export default FunctionsPage;
