import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import getTags from "@lib/strapi/getTags";
import getCategoriesMenu from "@lib/strapi/getCategoriesMenu";
import Layout from "@components/layout";
import Header from "@components/screens/header";
import Footer from "@components/screens/footer";
import HeadSEO from "@components/screens/head";
import TagsContent from "@components/screens/tags-content";

const TagsPage = ({ locale, categoriesMenu, tagsData }) => {
  const { t } = useTranslation();
  const [leftMenuMobile, setLeftMenuMobile] = useState(false);

  return (
    <Layout>
      <Layout.PageHead>
        <HeadSEO
          title={t("Tags - ONLYOFFICE")}
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
        <TagsContent
          t={t}
          locale={locale}
          tagsData={tagsData}
          leftMenuMobile={leftMenuMobile}
        />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} locale={locale} />
      </Layout.PageFooter>
    </Layout>
  );
};

export const getServerSideProps = async ({ locale }) => {
  const categoriesMenu = await getCategoriesMenu(locale);
  const tagsData = await getTags(locale);

  if (tagsData.data.length === 0) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      categoriesMenu,
      tagsData
    },
  };
};

export default TagsPage;