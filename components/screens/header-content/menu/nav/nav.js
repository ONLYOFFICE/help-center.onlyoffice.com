import React, { useState, useRef } from "react";

import StyledNav from "./styled-nav";
import MenuItem from "../menu-item";
import Box from "./sub-components/box";
import ExternalLink from "@components/common/link";
import Link from "@components/common/internal-link";
import Text from "@components/common/text";
import { AccordionItem } from "@components/common/accordion";

const Nav = ({ onClick, t, stateMobilePND, ...rest }) => {

  return (
    <StyledNav stateMobile={stateMobilePND} {...rest}>
      <MenuItem heading="Installation" id="navitem_installation">
        <Box className="menu_wrapper">
        <Box className="outer-box with_border">
          <AccordionItem heading={t("ONLYOFFICE Workspace")} className="menu-acc" isMenu={true} isMobMenu={stateMobilePND ? true : false}>
          <Link
              href="/installation/workspace-index.aspx"
              className="dropdown-item"
            >
              ONLYOFFICE Workspace
            </Link>
            <Box className="inner-box">
              <Link
                href="/installation/workspace-community-index.aspx"
                className="nav_2nd_menu_link"
              >
                Workspace
              </Link>
              <Link
                href="/installation/workspace-enterprise-index.aspx"
                className="nav_2nd_menu_link"
              >
                Workspace Enterprise Edition
              </Link>
              <Link
                href="/installation/workspace-saas-index.aspx"
                className="nav_2nd_menu_link"
              >
                Workspace Cloud Service
              </Link>
            </Box>
            <Link
              href="/installation/groups-index.aspx"
              className="dropdown-item"
            >
              ONLYOFFICE Groups
            </Link>
            <Link
              href="/installation/mail-index.aspx"
              className="dropdown-item"
            >
              ONLYOFFICE Mail
            </Link>
            <Link
              href="/installation/talk-index.aspx"
              className="dropdown-item"
            >
              ONLYOFFICE Talk
            </Link>
        </AccordionItem>
          </Box>
          <Box className="outer-box">
          <AccordionItem heading={t("ONLYOFFICE Docs")} className="menu-acc" isMenu={true} isMobMenu={stateMobilePND ? true : false}>
            <Link
              href="/installation/docs-index.aspx"
              className="dropdown-item"
            >
              ONLYOFFICE Docs
            </Link>
            <Box className="inner-box">
              <Link
                href="/installation/docs-community-index.aspx"
                className="nav_2nd_menu_link"
              >
                Community Edition
              </Link>
              <Link
                href="/installation/docs-enterprise-index.aspx"
                className="nav_2nd_menu_link"
              >
                Enterprise Edition
              </Link>
              <Link
                href="/installation/docs-developer-index.aspx"
                className="nav_2nd_menu_link"
              >
                Developer Edition
              </Link>
            </Box>
            <Link
              href="/installation/desktop-index.aspx"
              className="dropdown-item"
            >
              ONLYOFFICE Desktop Editors
            </Link>
            <Link
              href="/installation/mobile-index.aspx"
              className="dropdown-item"
            >
              ONLYOFFICE mobile apps
            </Link>
            </AccordionItem>
          </Box>
        </Box>
      </MenuItem>

      <MenuItem heading="Administration" id="navitem_administration">
        <Box className="menu_wrapper">
          <Box className="outer-box">
          <AccordionItem heading={t("Workspace")} className="menu-acc" isMenu={true} isMobMenu={stateMobilePND ? true : false}>
            <Link
              href="/administration/portal-management.aspx"
              className="dropdown-item"
            >
              Managing portals
            </Link>
            <Link
              href="/administration/reinforcing-security.aspx"
              className="dropdown-item"
            >
              Reinforcing security
            </Link>
            <Link
              href="/administration/configuring-modules.aspx"
              className="dropdown-item"
            >
              Configuring modules and tools
            </Link>
            <Link
              href="/administration/customizing-modules.aspx"
              className="dropdown-item"
            >
              Customizing modules and tools
            </Link>
            <Link
              href="/administration/managing-users.aspx"
              className="dropdown-item"
            >
              Managing users
            </Link>
            <Link
              href="/administration/external-services.aspx"
              className="dropdown-item"
            >
              Connecting external services
            </Link>
            <Link
              href="/administration/control-panel.aspx"
              className="dropdown-item"
            >
              ONLYOFFICE Control Panel
            </Link>
            </AccordionItem>
          </Box>
        </Box>
      </MenuItem>

      <MenuItem heading="Integration" id="navitem_integrations">
        <Box className="menu_wrapper">
          <Box className="outer-box">
          <AccordionItem heading={t("Packages")} className="menu-acc" isMenu={true} isMobMenu={stateMobilePND ? true : false}>
            <Link href="/integration/alfresco.aspx" className="dropdown-item">
              Alfresco
            </Link>
            <Link href="/integration/chamilo.aspx" className="dropdown-item">
              Chamilo
            </Link>
            <Link href="/integration/confluence.aspx" className="dropdown-item">
              Confluence
            </Link>
            <Link href="/integration/humhub.aspx" className="dropdown-item">
              HumHub
            </Link>
            <Link href="/integration/jira.aspx" className="dropdown-item">
              Jira
            </Link>
            <Link href="/integration/liferay.aspx" className="dropdown-item">
              Liferay
            </Link>
            <Link href="/integration/moodle.aspx" className="dropdown-item">
              Moodle
            </Link>
            <Link href="/integration/nextcloud.aspx" className="dropdown-item">
              Nextcloud
            </Link>
            <Link href="/integration/nuxeo.aspx" className="dropdown-item">
              Nuxeo
            </Link>
            <Link href="/integration/owncloud.aspx" className="dropdown-item">
              ownCloud
            </Link>
            <Link href="/integration/plone.aspx" className="dropdown-item">
              Plone
            </Link>
            <Link href="/integration/redmine.aspx" className="dropdown-item">
              Redmine
            </Link>
            <Link href="/integration/sharepoint.aspx" className="dropdown-item">
              SharePoint
            </Link>
            <Link href="/integration/strapi.aspx" className="dropdown-item">
              Strapi
            </Link>
            <Link href="/integration/wordpress.aspx" className="dropdown-item">
              Wordpress
            </Link>
            </AccordionItem>
          </Box>
        </Box>
      </MenuItem>

      <MenuItem heading="User Guides" id="navitem_user">
        <Box className="menu_wrapper">
          <Box className="outer-box with_border">
          <AccordionItem heading={t("Desktop Editors")} className="menu-acc" isMenu={true} isMobMenu={stateMobilePND ? true : false}>
            <Link href="/userguides/docs-index.aspx" className="dropdown-item">
              ONLYOFFICE Docs
            </Link>
            <Box className="inner-box">
              <Link
                href="/userguides/docs-de.aspx"
                className="nav_2nd_menu_link"
              >
                Document Editor
              </Link>
              <Link
                href="/userguides/docs-se.aspx"
                className="nav_2nd_menu_link"
              >
                Spreadsheet Editor
              </Link>
              <Link
                href="/userguides/docs-pe.aspx"
                className="nav_2nd_menu_link"
              >
                Presentation Editor
              </Link>
            </Box>
            <Link
              href="/userguides/workspace-index.aspx"
              className="dropdown-item"
            >
              ONLYOFFICE Workspace
            </Link>
            <Box className="inner-box">
              <Link
                href="/userguides/workspace-groups.aspx"
                className="nav_2nd_menu_link"
              >
                Groups
              </Link>
              <Link
                href="/userguides/workspace-docs.aspx"
                className="nav_2nd_menu_link"
              >
                Docs
              </Link>
              <Link
                href="/userguides/workspace-mail.aspx"
                className="nav_2nd_menu_link"
              >
                Mail
              </Link>
              <Link href="/userguides/talk.aspx" className="nav_2nd_menu_link">
                Talk
              </Link>
              <Link
                href="/userguides/workspace-personal.aspx"
                className="nav_2nd_menu_link"
              >
                Personal
              </Link>
            </Box>
            </AccordionItem>
          </Box>
          <Box className="outer-box with_border">
          <AccordionItem heading={t("ONLYOFFICE Groups")} className="menu-acc" isMenu={true} isMobMenu={stateMobilePND ? true : false}>
            <Link
              href="/userguides/groups-index.aspx"
              className="dropdown-item"
            >
              ONLYOFFICE Groups
            </Link>
            <Box className="inner-box">
              <Link
                href="/userguides/documents.aspx"
                className="nav_2nd_menu_link"
              >
                Documents
              </Link>
              <Link
                href="/userguides/people.aspx"
                className="nav_2nd_menu_link"
              >
                People
              </Link>
              <Link
                href="/userguides/community.aspx"
                className="nav_2nd_menu_link"
              >
                Community
              </Link>
              <Link href="/userguides/crm.aspx" className="nav_2nd_menu_link">
                CRM
              </Link>
              <Link
                href="/userguides/projects.aspx"
                className="nav_2nd_menu_link"
              >
                Projects
              </Link>
              <Link href="/userguides/mail.aspx" className="nav_2nd_menu_link">
                Mail
              </Link>
              <Link
                href="/userguides/calendar.aspx"
                className="nav_2nd_menu_link"
              >
                Calendar
              </Link>
              <Link href="/userguides/feed.aspx" className="nav_2nd_menu_link">
                Feed
              </Link>
            </Box>
            </AccordionItem>
          </Box>
          <Box className="outer-box">
          <AccordionItem heading={t("ONLYOFFICE mobile apps")} className="menu-acc" isMenu={true} isMobMenu={stateMobilePND ? true : false}>
            <Link
              href="/userguides/mobile-index.aspx"
              className="dropdown-item"
            >
              ONLYOFFICE mobile apps
            </Link>
            </AccordionItem>
            <Box className="inner-box">
              <Link
                href="/mobile-applications/documents/index.aspx"
                className="nav_2nd_menu_link"
              >
                Documents for iOS
              </Link>
              <Link
                href="/mobile-applications/documents/android/index.aspx"
                className="nav_2nd_menu_link"
              >
                Documents for Android
              </Link>
              <Link
                href="/mobile-applications/documents/mobile-web-editors/ios/index.aspx"
                className="nav_2nd_menu_link"
              >
                Mobile web editors for iOS
              </Link>
              <Link
                href="/mobile-applications/documents/mobile-web-editors/android/index.aspx"
                className="nav_2nd_menu_link"
              >
                Mobile web editors for Android
              </Link>
              <Link
                href="/mobile-applications/documents/projects/index.aspx"
                className="nav_2nd_menu_link"
              >
                Projects for iOS
              </Link>
              <Link
                href="/mobile-applications/androidprojects/index.aspx"
                className="nav_2nd_menu_link"
              >
                Projects for Android
              </Link>
            </Box>
          </Box>
        </Box>
      </MenuItem>

      <MenuItem heading="Contribution" id="navitem_contribution">
        <Box className="menu_wrapper">
          <Box className="outer-box">
          <AccordionItem heading={t("Guides")} className="menu-acc" isMenu={true} isMobMenu={stateMobilePND ? true : false}>
            <Link href="/guides/become-translator.aspx" className="dropdown-item">
              Translating
            </Link>
            <Link href="/guides/report-issues.aspx" className="dropdown-item">
              Reporting issues
            </Link>
            </AccordionItem>
          </Box>
        </Box>
      </MenuItem>

      <ExternalLink className="no-box-inside" href="https://api.onlyoffice.com/">
        <MenuItem heading="Development" id="navitem_development"></MenuItem>
      </ExternalLink>
    </StyledNav>
  );
};

export default Nav;
