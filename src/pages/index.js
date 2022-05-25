import React, { useState, useEffect } from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Layout from "../../components/layout";
import HeadingContent from "../sub-components/header-content";

const IndexPage = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  return (
    <Layout>
      <Layout.PageHead></Layout.PageHead>
      <Layout.PageHeader>
        <HeadingContent t={t} template={true}/>
      </Layout.PageHeader>
      <Layout.SectionMain></Layout.SectionMain>
      <Layout.PageFooter></Layout.PageFooter>
    </Layout>
  );
};

export default IndexPage;
