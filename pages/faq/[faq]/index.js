import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import getLeftMenu from "@lib/strapi/getLeftMenu";
import getFaq from "@lib/strapi/getFaq";
import Layout from "@components/layout";
import HeadSEO from "@components/screens/head";
import Header from "@components/screens/header";
import Footer from "@components/screens/footer";
import FaqContent from "@components/screens/faq-content";

const FaqPage = ({ locale, data, faqData }) => {
  const { t } = useTranslation();
  const [leftMenuIsOpen, setLeftMenuIsOpen] = useState(false);

  const { seo_title, seo_description, name } = faqData.data[0].attributes;
  const seoTitle = seo_title ? seo_title : `${name} - ONLYOFFICE`;
  const seoDescription = seo_description ? seo_description : t("metaDescriptionOgIndexPage");

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
          data={data}
          leftMenuIsOpen={leftMenuIsOpen}
          setLeftMenuIsOpen={setLeftMenuIsOpen}
        />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <FaqContent
          t={t}
          faqData={faqData}
          leftMenuData={data}
          leftMenuIsOpen={leftMenuIsOpen}
          locale={locale}
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
  const faqData = await getFaq(locale, `/faq/${params.faq}`);

  if (faqData.data === null || faqData.data.length === 0) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      data,
      faqData
    },
  };
}

export default FaqPage;
