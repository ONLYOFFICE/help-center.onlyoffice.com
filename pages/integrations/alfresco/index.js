import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import getAllArticles from "@lib/strapi/getArticles";

import Layout from "@components/layout";
import HeadingContent from "@components/screens/header-content";
import Footer from "@components/screens/footer-content";
import SingleContent from "@components/screens/single-content";
import InternalLink from "@components/common/internal-link";
import ExternalLink from "@components/common/link";

const AlfrescoPage = ({ locale, articles }) => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Layout.PageHead></Layout.PageHead>
      <Layout.PageHeader>
        <HeadingContent t={t} template={false} currentLanguage={locale} />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <SingleContent t={t} currentLanguage={locale} articles={articles.data}>
          <div className="wrapper">
            <h3>Integration Guides</h3>
            <div className="border-content">
              <h4>Alfresco</h4>
              <div>
                <p>ONLYOFFICE offers an official connector to integrate ONLYOFFICE Docs with Alfresco to create, edit, and convert office documents within the document library. You can download the ONLYOFFICE connector from the official <a href="https://hub.alfresco.com/t5/alfresco-content-services-add/onlyoffice-connector-for-alfresco/m-p/291397" target="_blank"><b>Alfresco Add-ons directory</b></a> or the ONLYOFFICE <a href="https://github.com/ONLYOFFICE/onlyoffice-alfresco" target="_blank"><b>GitHub page</b></a>.</p>
              </div>
            </div>
            <ul className="ul-category">
              <li>
                <h5>About the ONLYOFFICE and Alfresco integration</h5>
                <ul className="ul-category">
                  <li><InternalLink href="/integrations/gettingstarted-alfresco#MainFeatures_block">Main features</InternalLink></li>
                  <li><InternalLink href="/integrations/gettingstarted-alfrescox#SupportedFormats_block">Supported formats</InternalLink></li>
                  <li><InternalLink href="/integrations/gettingstarted-alfresco#Whatsnew_block">What's new</InternalLink></li>
                </ul>
              </li>
              <li>
                <h5>Connecting ONLYOFFICE Docs to Alfresco Share</h5>
                <ul className="ul-category">
                  <li><InternalLink href="/integrations/gettingstarted-alfresco#Requirements_block">Requirements</InternalLink></li>
                  <li><InternalLink href="/integrations/gettingstarted-alfresco#Install_block">Installing the ONLYOFFICE and Alfresco module package</InternalLink></li>
                  <li><InternalLink href="/integrations/gettingstarted-alfresco#Configure_block">Configuring the ONLYOFFICE and Alfresco module package</InternalLink></li>
                  <li><InternalLink href="/integrations/gettingstarted-alfresco#JWT_block">Enabling JWT for the ONLYOFFICE and Alfresco integration</InternalLink></li>
                  <li><InternalLink href="/integrations/gettingstarted-alfresco#Demo_block">Connecting to the demo ONLYOFFICE Docs</InternalLink></li>
                </ul>
              </li>
              <li>
                <h5>Getting Started</h5>
                <ul className="ul-category">
                  <li><InternalLink href="/integrations/gettingstarted-alfresco#StartUsing_block">Start using ONLYOFFICE Docs within Alfresco</InternalLink></li>                            
                </ul>
              </li>
            </ul>
          </div>
          <div className="page_download_button">
            <ExternalLink target="_blank" className="button gray" href="https://www.onlyoffice.com/download-docs?from=helpcenter">Download</ExternalLink>
            <span className="download_button_description">
              <span className="download_button_header">Best editors on your website</span>
              Let your site users view, edit and collaborate <br /> on all types of text, spreadsheet and presentation files
            </span>
          </div>
        </SingleContent>
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} language={locale} />
      </Layout.PageFooter>
    </Layout>
  );
};

export async function getServerSideProps({ locale }) {
  const articles = await getAllArticles(locale);

  return {
    props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      articles
    },
  }
}

export default AlfrescoPage;