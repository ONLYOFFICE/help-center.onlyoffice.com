import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import getCategoriesMenu from "@lib/strapi/getCategoriesMenu";
import getFaq from "@lib/strapi/getFaq";
import Layout from "@components/layout";
import HeadSEO from "@components/screens/head";
import HeadingContent from "@components/screens/header";
import Footer from "@components/screens/footer";
import FaqContent from "@components/screens/faq-content";

const FaqPage = ({ locale, categoriesMenu, faqData }) => {
  const { t } = useTranslation();
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
        <HeadingContent
          t={t}
          template={false}
          locale={locale}
          categories={categoriesMenu.data}
        />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <FaqContent
          t={t}
          faqData={faqData}
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
  const faqData = await getFaq(locale, `/faq/${params.faq}`);

  if (faqData.data.length === 0) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      categoriesMenu,
      faqData
    },
  };
}

export default FaqPage;
