import React, { useState, useRef } from "react";
import Box from "@components/common/box";
import StyledNav from "./styled-nav";
import MenuItem from "../menu-item";
import Link from "next/link";

// const Nav = ({ onClick, t, stateMobilePND, categories, ...rest }) => {
//   const menu = categories.slice(0, 6);
//   return (
//     <StyledNav stateMobile={stateMobilePND} categories={categories} {...rest}>
//       {menu.map((item, index) => {
//          return <MenuItem t={t} key={index} heading={item.attributes.name} link={item.attributes.url} ></MenuItem>
//       })}
//     </StyledNav>
//   );
// };

const Nav = ({ onClick, t, stateMobilePND, currentLanguage, articles, ...rest }) => {
  const hrefLang = `https://helpcenter.onlyoffice.com${currentLanguage === "en" ? "" : `/${currentLanguage}`
    }`;
    const connectorsArticles = articles.filter(article => article.attributes.category.data.attributes.slug_id === 'connectors');
    const midIndex = Math.ceil(connectorsArticles.length / 2);
    connectorsArticles.sort((a, b) => a.attributes.title.localeCompare(b.attributes.title));
  return (
    <StyledNav stateMobile={stateMobilePND} {...rest}>
      <Box className="menu-box">
        <Box className="menu-items-box">
          <MenuItem heading={t("Installation")} id="navitem_server">
            <Box className="menu_wrapper">
              <Box className="outer-box with-border">
                <Box className="link-wrapper">
                  <Link
                    id="navitem_server"
                    href={`${hrefLang}/installation/workspace-index.aspx`}
                    className="dropdown-item"
                  >
                    {t("ONLYOFFICE Workspace")}
                  </Link>
                </Box>
                <Box className="link-wrapper">
                  <Link
                    id="navitem_opensource"
                    href={`${hrefLang}/installation/workspace-community-index.aspx`}
                    className="dropdown-item not_bold"
                  >
                    {t("Workspace")}
                  </Link>
                </Box>
                <Box className="link-wrapper">
                  <Link
                    id="navitem_enterprise"
                    href={`${hrefLang}/installation/workspace-enterprise-index.aspx`}
                    className="dropdown-item not_bold"
                  >
                    {t("Workspace Enterprise Edition")}
                  </Link>
                </Box>
                <Box className="link-wrapper">
                <Link
                  id="navitem_cloud"
                  href={`${hrefLang}/installation/workspace-saas-index.aspx`}
                  className="dropdown-item not_bold"
                >
                  {t("Workspace Cloud Service")}
                </Link>
                </Box>
                <Box className="link-wrapper">
                <Link
                  id="navitem_community"
                  href={`${hrefLang}/installation/groups-index.aspx`}
                  className="dropdown-item"
                >
                  {t("ONLYOFFICE Groups")}
                </Link>
                </Box>
                <Box className="link-wrapper">
                <Link
                  id="navitem_mail"
                  href={`${hrefLang}/installation/mail-index.aspx`}
                  className="dropdown-item"
                >
                  {t("ONLYOFFICE Mail")}
                </Link>
                </Box>
                <Box className="link-wrapper">
                <Link
                  id="navitem_talk"
                  href={`${hrefLang}/installation/talk-index.aspx`}
                  className="dropdown-item"
                >
                  {t("ONLYOFFICE Talk")}
                </Link>
                </Box>
              </Box>
              <Box className="outer-box with-border">
                <Box className="link-wrapper">
                  <Link
                    id="navitem_document"
                    href={`${hrefLang}/installation/docs-index.aspx`}
                    className="dropdown-item"
                  >
                    {t("ONLYOFFICE Docs")}
                  </Link>
                </Box>
                <Box className="link-wrapper">
                  <Link
                    id="navitem_document_ce"
                    href={`${hrefLang}/installation/docs-community-index.aspx`}
                    className="dropdown-item not_bold"
                  >
                    {t("Community Edition")}
                  </Link>
                </Box>
                <Box className="link-wrapper">
                  <Link
                    id="navitem_document_ee"
                    href={`${hrefLang}/installation/docs-enterprise-index.aspx`}
                    className="dropdown-item not_bold"
                  >
                    {t("Enterprise Edition")}
                  </Link>
                </Box>
                <Box className="link-wrapper">
                <Link
                  id="navitem_document_de"
                  href={`${hrefLang}/installation/docs-developer-index.aspx`}
                  className="dropdown-item not_bold"
                >
                  {t("Developer Edition")}
                </Link>
                </Box>
                <Box className="link-wrapper">
                <Link
                  id="navitem_document_cloud"
                  href={`${hrefLang}/installation/docs-cloud-index.aspx`}
                  className="dropdown-item not_bold"
                >
                  {t("Docs Cloud Service")}
                </Link>
                </Box>
                <Box className="link-wrapper">
                <Link
                  id="navitem_desktop_install"
                  href={`${hrefLang}/installation/desktop-index.aspx`}
                  className="dropdown-item"
                >
                  {t("ONLYOFFICE Desktop Editors")}
                </Link>
                </Box>
                <Box className="link-wrapper">
                <Link
                  id="navitem_mobile_install"
                  href={`${hrefLang}/installation/mobile-index.aspx`}
                  className="dropdown-item"
                >
                  {t("ONLYOFFICE Mobile Apps")}
                </Link>
                </Box>
              </Box>
              <Box className="outer-box">
                <Box className="link-wrapper">
                  <Link
                    id="navitem_docspace_server_menu"
                    href={`${hrefLang}/installation/docspace-index.aspx`}
                    className="dropdown-item"
                  >
                    {t("ONLYOFFICE Docspace")}
                  </Link>
                </Box>
                <Box className="link-wrapper">
                  <Link
                    id="navitem_docspace_ce"
                    href={`${hrefLang}/installation/docspace-community-index.aspx`}
                    className="dropdown-item not_bold"
                  >
                    {t("DocSpace Community")}
                  </Link>
                </Box>
                <Box className="link-wrapper">
                  <Link
                    id="navitem_docspace_ee"
                    href={`${hrefLang}/installation/docspace-enterprise-index.aspx`}
                    className="dropdown-item not_bold"
                  >
                    {t("DocSpace Enterprise")}
                  </Link>
                </Box>
                <Box className="link-wrapper">
                <Link
                  id="navitem_docspace_cloud"
                  href={`${hrefLang}/installation/docspace-cloud-index.aspx`}
                  className="dropdown-item not_bold"
                >
                  {t("DocSpace Cloud Service")}
                </Link>
                </Box>
              </Box>
            </Box>
          </MenuItem>
          <MenuItem heading={t("Administration")} id="navitem_administration">
            <Box className="menu_wrapper">
              <Box className="outer-box">
                <Box className="link-wrapper">
                  <Link
                    id="navitem_manageportals"
                    href={`${hrefLang}/administration/portal-management.aspx`}
                    className="dropdown-item"
                  >
                    {t("Managing portals")}
                  </Link>
                </Box>
                <Box className="link-wrapper">
                  <Link
                    id="navitem_security"
                    href={`${hrefLang}/administration/reinforcing-security.aspx`}
                    className="dropdown-item"
                  >
                    {t("Reinforcing security")}
                  </Link>
                </Box>
                <Box className="link-wrapper">
                  <Link
                    id="navitem_configuring"
                    href={`${hrefLang}/administration/configuring-modules.aspx`}
                    className="dropdown-item"
                  >
                    {t("Configuring modules and tools")}
                  </Link>
                </Box>
                <Box className="link-wrapper">
                  <Link
                    id="navitem_customizing"
                    href={`${hrefLang}/administration/customizing-modules.aspx`}
                    className="dropdown-item"
                  >
                    {t("Customizing modules and tools")}
                  </Link>
                </Box>
                <Box className="link-wrapper">
                  <Link
                    id="navitem_manageusers"
                    href={`${hrefLang}/administration/managing-users.aspx`}
                    className="dropdown-item"
                  >
                    {t("Managing users")}
                  </Link>
                </Box>
                <Box className="link-wrapper">
                  <Link
                    id="navitem_externalservices"
                    href={`${hrefLang}/administration/external-services.aspx`}
                    className="dropdown-item"
                  >
                    {t("Connecting external services")}
                  </Link>
                </Box>
                <Box className="link-wrapper">
                  <Link
                    id="navitem_controlpanel"
                    href={`${hrefLang}/administration/control-panel.aspx`}
                    className="dropdown-item"
                  >
                    {t("ONLYOFFICE Control Panel")}
                  </Link>
                </Box>
                <Box className="link-wrapper">
                  <Link
                    id="navitem_docspace"
                    href={`${hrefLang}/administration/docspace.aspx`}
                    className="dropdown-item"
                  >
                    {t("ONLYOFFICE DocSpace")}
                  </Link>
                </Box>
              </Box>
            </Box>
          </MenuItem>
          <MenuItem heading={t("Integration")} className="active" id="navitem_integration">
            <Box className="menu_wrapper">
              <Box className="outer-box with-border">
                {connectorsArticles.slice(0, midIndex).map((item, idx) => (
                  <Link
                  key={idx}
                  id={`navitem_${item.attributes.title}`}
                  href={item.attributes.url}
                  className="dropdown-item"
                >
                  {item.attributes.title}
                </Link>
                ))}
              </Box>
              <Box className="outer-box">
                {connectorsArticles.slice(midIndex).map((item, idx) => (
                  <Link
                  key={idx}
                  id={`navitem_${item.attributes.title}`}
                  href={item.attributes.url}
                  className="dropdown-item"
                >
                  {item.attributes.title}
                </Link>
                ))}
              </Box>
            </Box>
          </MenuItem>
          <MenuItem heading={t("User guides")} id="navitem_features">
            <Box className="menu_wrapper">
              <Box className="outer-box with-border">
                <Box className="link-wrapper">
                  <Link
                    id="navitem_userguide_docs"
                    href={`${hrefLang}/userguides/docs-index.aspx`}
                    className="dropdown-item"
                  >
                    {t("ONLYOFFICE Docs")}
                  </Link>
                </Box>
                <Box className="link-wrapper">
                  <Link
                    id="navitem_userguide_de"
                    href={`${hrefLang}/userguides/docs-de.aspx`}
                    className="dropdown-item not_bold"
                  >
                    {t("Document Editor")}
                  </Link>
                </Box>
                <Box className="link-wrapper">
                  <Link
                    id="navitem_userguide_se"
                    href={`${hrefLang}/userguides/docs-se.aspx`}
                    className="dropdown-item not_bold"
                  >
                    {t("Spreadsheet Editor")}
                  </Link>
                </Box>
                <Box className="link-wrapper">
                <Link
                  id="navitem_userguide_pe"
                  href={`${hrefLang}/userguides/docs-pe.aspx`}
                  className="dropdown-item not_bold"
                >
                  {t("Presentation Editor")}
                </Link>
                </Box>
                <Box className="link-wrapper">
                  <Link
                    id="navitem_userguides_workspace"
                    href={`${hrefLang}/userguides/workspace-index.aspx`}
                    className="dropdown-item"
                  >
                    {t("ONLYOFFICE Workspace")}
                  </Link>
                </Box>
                <Box className="link-wrapper">
                  <Link
                    id="navitem_userguides_workspace_groups"
                    href={`${hrefLang}/userguides/workspace-groups.aspx`}
                    className="dropdown-item not_bold"
                  >
                    {t("Groups")}
                  </Link>
                </Box>
                <Box className="link-wrapper">
                  <Link
                    id="navitem_userguides_workspace_docs"
                    href={`${hrefLang}/userguides/workspace-docs.aspx`}
                    className="dropdown-item not_bold"
                  >
                    {t("Docs")}
                  </Link>
                </Box>
                <Box className="link-wrapper">
                <Link
                  id="navitem_userguides_workspace_mail"
                  href={`${hrefLang}/userguides/workspace-mail.aspx`}
                  className="dropdown-item not_bold"
                >
                  {t("Mail")}
                </Link>
                </Box>
                <Box className="link-wrapper">
                <Link
                  id="navitem_userguides_talk"
                  href={`${hrefLang}/userguides/talk.aspx`}
                  className="dropdown-item not_bold"
                >
                  {t("Talk")}
                </Link>
                </Box>
                <Box className="link-wrapper">
                <Link
                  id="navitem_userguides_personal"
                  href={`${hrefLang}/userguides/workspace-personal.aspx`}
                  className="dropdown-item not_bold"
                >
                  {t("Personal")}
                </Link>
                </Box>
              </Box>
              <Box className="outer-box with-border">
                <Box className="link-wrapper">
                <Link
                  id="navitem_modules"
                  href={`${hrefLang}/userguides/groups-index.aspx`}
                  className="dropdown-item"
                >
                  {t("ONLYOFFICE Groups")}
                </Link>
                </Box>
                <Box className="link-wrapper">
                  <Link
                    id="navitem_userguides_documents"
                    href={`${hrefLang}/userguides/documents.aspx`}
                    className="dropdown-item not_bold"
                  >
                    {t("Documents")}
                  </Link>
                </Box>
                <Box className="link-wrapper">
                  <Link
                    id="navitem_userguides_people"
                    href={`${hrefLang}/userguides/people.aspx`}
                    className="dropdown-item not_bold"
                  >
                    {t("People")}
                  </Link>
                </Box>
                <Box className="link-wrapper">
                <Link
                  id="navitem_userguides_community"
                  href={`${hrefLang}/userguides/community.aspx`}
                  className="dropdown-item not_bold"
                >
                  {t("Community")}
                </Link>
                </Box>
                <Box className="link-wrapper">
                <Link
                  id="navitem_userguides_crm"
                  href={`${hrefLang}/userguides/crm.aspx`}
                  className="dropdown-item not_bold"
                >
                  {t("CRM")}
                </Link>
                </Box>
                <Box className="link-wrapper">
                <Link
                  id="navitem_userguides_projects"
                  href={`${hrefLang}/userguides/projects.aspx`}
                  className="dropdown-item not_bold"
                >
                  {t("Projects")}
                </Link>
                </Box>
                <Box className="link-wrapper">
                <Link
                  id="navitem_userguides_mail"
                  href={`${hrefLang}/userguides/mail.aspx`}
                  className="dropdown-item not_bold"
                >
                  {t("Mail")}
                </Link>
                </Box>
                <Box className="link-wrapper">
                <Link
                  id="navitem_userguides_calendar"
                  href={`${hrefLang}/userguides/calendar.aspx`}
                  className="dropdown-item not_bold"
                >
                  {t("Calendar")}
                </Link>
                </Box>
                <Box className="link-wrapper">
                <Link
                  id="navitem_userguides_feed"
                  href={`${hrefLang}/userguides/feed.aspx`}
                  className="dropdown-item not_bold"
                >
                  {t("Feed")}
                </Link>
                </Box>
              </Box>
              <Box className="outer-box">
                <Box className="link-wrapper">
                  <Link
                    id="navitem_mobile_app"
                    href={`${hrefLang}/userguides/mobile-index.aspx`}
                    className="dropdown-item"
                  >
                    {t("ONLYOFFICE mobile apps")}
                  </Link>
                </Box>
                <Box className="link-wrapper">
                  <Link
                    id="navitem_mobile_docs_ios"
                    href={`${hrefLang}/mobile-applications/documents/index.aspx`}
                    className="dropdown-item not_bold"
                  >
                    {t("Documents app for iOS")}
                  </Link>
                </Box>
                <Box className="link-wrapper">
                  <Link
                    id="navitem_mobile_docs_android"
                    href={`${hrefLang}/mobile-applications/documents/android/index.aspx`}
                    className="dropdown-item not_bold"
                  >
                    {t("Documents app for Android")}
                  </Link>
                </Box>
                <Box className="link-wrapper">
                <Link
                  id="navitem_mobile_web_docs_ios"
                  href={`${hrefLang}/mobile-applications/documents/mobile-web-editors/ios/index.aspx`}
                  className="dropdown-item not_bold"
                >
                  {t("Mobile web editors for iOS")}
                </Link>
                </Box>
                <Box className="link-wrapper">
                <Link
                  id="navitem_mobile_web_docs_android"
                  href={`${hrefLang}/mobile-applications/documents/mobile-web-editors/android/index.aspx`}
                  className="dropdown-item not_bold"
                >
                  {t("Mobile web editors for Android")}
                </Link>
                </Box>
                <Box className="link-wrapper">
                <Link
                  id="navitem_mob_proj"
                  href={`${hrefLang}/mobile-applications/documents/projects/index.aspx`}
                  className="dropdown-item not_bold"
                >
                  {t("Projects for iOS")}
                </Link>
                </Box>
                <Box className="link-wrapper">
                <Link
                  id="navitem_mob_proj_andr"
                  href={`${hrefLang}/mobile-applications/androidprojects/index.aspx`}
                  className="dropdown-item not_bold"
                >
                  {t("Projects for Android")}
                </Link>
                </Box>
                <Box className="link-wrapper">
                  <Link
                    id="navitem_userguides_docspace"
                    href={`${hrefLang}/userguides/docspace-index.aspx`}
                    className="dropdown-item"
                  >
                    {t("ONLYOFFICE Docspace")}
                  </Link>
                </Box>
              </Box>
            </Box>
          </MenuItem>
          <MenuItem heading={t("Contribution")} id="navitem_saas">
            <Box className="menu_wrapper">
              <Box className="outer-box">
              <Box className="link-wrapper">
                  <Link
                    id="navitem_translate"
                    href={`${hrefLang}/guides/become-translator.aspx`}
                    className="dropdown-item"
                  >
                    {t("Translating")}
                  </Link>
                </Box>
                <Box className="link-wrapper">
                  <Link
                    id="navitem_test"
                    href={`${hrefLang}/guides/testing.aspx`}
                    className="dropdown-item"
                  >
                    {t("Testing")}
                  </Link>
                </Box>
                <Box className="link-wrapper">
                  <Link
                    id="navitem_write"
                    href={`${hrefLang}/guides/writing-documentation.aspx`}
                    className="dropdown-item"
                  >
                    {t("Writing documentation")}
                  </Link>
                </Box>
                <Box className="link-wrapper">
                  <Link
                    id="navitem_report"
                    href={`${hrefLang}/guides/report-issues.aspx`}
                    className="dropdown-item"
                  >
                    {t("Reporting issues")}
                  </Link>
                </Box>
              </Box>
            </Box>
          </MenuItem>
          <MenuItem
            heading={t("Development")}
            id="navitem_development"
            href={`https://api.onlyoffice.com/`}
          />
        </Box> </Box>
    </StyledNav>
  );
};

export default Nav;
