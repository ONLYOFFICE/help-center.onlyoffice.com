import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState, useEffect } from "react";
import getGlossary from "@lib/strapi/getGlossary";
import getLeftMenu from "@lib/strapi/getLeftMenu";
import Layout from "@components/layout";
import Header from "@components/screens/header";
import Footer from "@components/screens/footer";
import HeadSEO from "@components/screens/head";
import GlossaryContent from "@components/screens/glossary-content";

const GlossaryPage = ({ locale, menuData, glossaryData }) => {
  const { t } = useTranslation();
  const [leftMenuIsOpen, setLeftMenuIsOpen] = useState(false);
  const [leftMenuData, setLeftMenuData] = useState(menuData);

  useEffect(() => {
    const loadData = async () => {
      const data = await getLeftMenu(locale);
      setLeftMenuData(data);
    };

    loadData();
  }, []);

  return (
    <Layout>
      <Layout.PageHead>
        <HeadSEO
          title={`${t('Glossary')} - ONLYOFFICE`}
          description={""}
        />
      </Layout.PageHead>
      <Layout.PageHeader>
        <Header
          t={t}
          locale={locale}
          data={menuData}
          leftMenuIsOpen={leftMenuIsOpen}
          setLeftMenuIsOpen={setLeftMenuIsOpen}
        />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <GlossaryContent
          t={t}
          locale={locale}
          leftMenuData={leftMenuData}
          glossaryData={glossaryData}
          leftMenuIsOpen={leftMenuIsOpen}
        />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} locale={locale} />
      </Layout.PageFooter>
    </Layout>
  );
};

export const getServerSideProps = async ({ locale }) => {
  const menuData = await getLeftMenu(locale, true);
  const glossaryData = await getGlossary(locale);

  if (glossaryData.data === null || glossaryData.data.length === 0) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      menuData,
      glossaryData
    },
  };
};

export default GlossaryPage;