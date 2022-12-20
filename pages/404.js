import React from "react";
import { useTranslation } from "next-i18next";

import Layout from "@components/layout";
import Error404 from "@components/screens/404-page";

const Error404Page = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Layout.PageHead></Layout.PageHead>
      <Layout.SectionMain>
        <Error404 t={t} />
      </Layout.SectionMain>
    </Layout>
  );
};

export default Error404Page;