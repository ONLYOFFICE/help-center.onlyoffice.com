import React from "react";

import StyledNav from "./styled-nav";
import MenuItem from "../menu-item";
import Box from "./sub-components/box";
import Link from "../../../../../components/link";

const Nav = ({ onClick, t, stateMobilePND, ...rest }) => {
  return (
    <StyledNav stateMobile={stateMobilePND} {...rest}>
      <MenuItem heading="Installation" id="navitem_installation">
        <Box className="menu_wrapper">
          <Box className="outer-box with_border">
            <Link
              id="navitem_features_editors"
              href="https://onlyoffice.com/office-suite.aspx"
              className="dropdown-item"
            >
              ONLYOFFICE Workspace
            </Link>
            <Box className="inner-box">
              <Link
                href="https://onlyoffice.com/document-editor.aspx"
                className="nav_2nd_menu_link"
              >
               Workspace
              </Link>
              <Link
                href="https://onlyoffice.com/spreadsheet-editor.aspx"
                className="nav_2nd_menu_link"
              >
                Workspace Enterprise Edition
              </Link>
              <Link
                href="https://onlyoffice.com/presentation-editor.aspx"
                className="nav_2nd_menu_link"
              >
                Workspace Cloud Service
              </Link>
            </Box>
            <Link
              id="navitem_features_docs_editions"
              className="dropdown-item"
            >
              ONLYOFFICE Groups
            </Link>
            <Link
              id="navitem_features_docs_editions"
              className="dropdown-item"
            >
              ONLYOFFICE Mail
            </Link>
            <Link
              id="navitem_features_docs_editions"
              className="dropdown-item"
            >
              ONLYOFFICE Talk
            </Link>
          </Box>
          <Box className="outer-box">
            <Link
              id="navitem_features_workspace"
              href="https://onlyoffice.com/workspace.aspx"
              className="dropdown-item"
            >
              ONLYOFFICE Docs
            </Link>
            <Box className="inner-box">
              <Link
                href="https://onlyoffice.com/document-management.aspx"
                className="nav_2nd_menu_link"
              >
                Community Edition
              </Link>
              <Link
                href="https://onlyoffice.com/mail.aspx"
                className="nav_2nd_menu_link"
              >
                Enterprise Edition
              </Link>
              <Link
                href="https://onlyoffice.com/crm.aspx"
                className="nav_2nd_menu_link"
              >
                Developer Edition
              </Link>
            </Box>
            <Link
              id="navitem_features_workspace_editions"
              className="dropdown-item"
            >
              ONLYOFFICE Desktop Editors
            </Link>
            <Link
              id="navitem_features_security"
              href="https://onlyoffice.com/security.aspx"
              className="dropdown-item"
            >
              ONLYOFFICE mobile apps
            </Link>
          </Box>
        </Box>
      </MenuItem>

      <MenuItem heading="Administration" id="navitem_administration">
        <Box className="menu_wrapper">
          <Box className="outer-box">
            <Link
              id="navitem_integrations_nextcloud"
              href="https://onlyoffice.com/office-for-nextcloud.aspx"
              className="dropdown-item"
            >
              Managing portals
            </Link>
            <Link
              id="navitem_integrations_owncloud"
              href="https://onlyoffice.com/office-for-owncloud.aspx"
              className="dropdown-item"
            >
              Reinforcing security
            </Link>
            <Link
              id="navitem_integrations_confluence"
              href="https://onlyoffice.com/office-for-confluence.aspx"
              className="dropdown-item"
            >
              Configuring modules and tools
            </Link>
            <Link
              id="navitem_integrations_alfresco"
              href="https://onlyoffice.com/office-for-alfresco.aspx"
              className="dropdown-item"
            >
              Customizing modules and tools
            </Link>
            <Link
              id="navitem_integrations_sharepoint"
              href="https://onlyoffice.com/office-for-sharepoint.aspx"
              className="dropdown-item"
            >
              Managing users
            </Link>
            <Link
              id="navitem_integrations_liferay"
              href="https://onlyoffice.com/office-for-liferay.aspx"
              className="dropdown-item"
            >
              Connecting external services
            </Link>
            <Link
              id="navitem_integrations_humhub"
              href="https://onlyoffice.com/office-for-humhub.aspx"
              className="dropdown-item"
            >
              ONLYOFFICE Control Panel
            </Link>
          </Box>
        </Box>
      </MenuItem>

      <MenuItem heading="Integrations" id="navitem_integrations">
        <Box className="menu_wrapper">
          <Box className="outer-box integrations">
            <Link
              id="navitem_integrations_nextcloud"
              href="https://onlyoffice.com/office-for-nextcloud.aspx"
              className="dropdown-item"
            >
              Nextcloud
            </Link>
            <Link
              id="navitem_integrations_owncloud"
              href="https://onlyoffice.com/office-for-owncloud.aspx"
              className="dropdown-item"
            >
              ownCloud
            </Link>
            <Link
              id="navitem_integrations_confluence"
              href="https://onlyoffice.com/office-for-confluence.aspx"
              className="dropdown-item"
            >
              Confluence
            </Link>
            <Link
              id="navitem_integrations_alfresco"
              href="https://onlyoffice.com/office-for-alfresco.aspx"
              className="dropdown-item"
            >
              Alfresco
            </Link>
            <Link
              id="navitem_integrations_sharepoint"
              href="https://onlyoffice.com/office-for-sharepoint.aspx"
              className="dropdown-item"
            >
              SharePoint
            </Link>
            <Link
              id="navitem_integrations_liferay"
              href="https://onlyoffice.com/office-for-liferay.aspx"
              className="dropdown-item"
            >
              Liferay
            </Link>
            <Link
              id="navitem_integrations_humhub"
              href="https://onlyoffice.com/office-for-humhub.aspx"
              className="dropdown-item"
            >
              HumHub
            </Link>
            <Link
              id="navitem_integrations_plone"
              href="https://onlyoffice.com/office-for-plone.aspx"
              className="dropdown-item"
            >
              Plone
            </Link>
            <Link
              id="navitem_integrations_nuxeo"
              href="https://onlyoffice.com/office-for-nuxeo.aspx"
              className="dropdown-item"
            >
              Nuxeo
            </Link>
            <Link
              id="navitem_integrations_chamilo"
              href="https://onlyoffice.com/office-for-chamilo.aspx"
              className="dropdown-item"
            >
              Chamilo
            </Link>
            <Link
              id="navitem_integrations_redmine"
              href="https://onlyoffice.com/office-for-redmine.aspx"
              className="dropdown-item"
            >
              Redmine
            </Link>
            <Link
              id="navitem_integrations_jira"
              href="https://onlyoffice.com/office-for-jira.aspx"
              className="dropdown-item"
            >
              Jira
            </Link>
            <Link
              id="navitem_integrations_connectors"
              href="https://onlyoffice.com/all-connectors.aspx"
              className="dropdown-item"
            >
              Others
            </Link>
          </Box>
        </Box>
      </MenuItem>

      <MenuItem heading="User Guides" id="navitem_user">
        <Box className="menu_wrapper">
          <Box className="outer-box with_border">
            <Box className="pricing-box">
              <Link
                id="navitem_prices_docs"
                className="dropdown-item mobile_no_link"
              >
               ONLYOFFICE Docs
              </Link>
              <Box className="inner-box">
                <Link
                  href="https://onlyoffice.com/docs-enterprise-prices.aspx"
                  className="nav_2nd_menu_link"
                >
                 Document Editor
                </Link>
                <Link
                  href="https://onlyoffice.com/developer-edition-prices.aspx"
                  className="nav_2nd_menu_link"
                >
                  Spreadsheet Editor
                </Link>
                <Link
                  href="https://onlyoffice.com/developer-edition-prices.aspx"
                  className="nav_2nd_menu_link"
                >
                  Presentation Editor
                </Link>
              </Box>
              <Link
                id="navitem_prices_workspace"
                className="dropdown-item mobile_no_link"
              >
                ONLYOFFICE Workspace
              </Link>
              <Box className="inner-box">
                <Link
                  href="https://onlyoffice.com/saas.aspx"
                  className="nav_2nd_menu_link"
                >
                  Groups
                </Link>
                <Link
                  href="https://onlyoffice.com/workspace-enterprise-prices.aspx"
                  className="nav_2nd_menu_link"
                >
                  Docs
                </Link>
                <Link
                  href="https://onlyoffice.com/saas.aspx"
                  className="nav_2nd_menu_link"
                >
                  Mail
                </Link>
                <Link
                  href="https://onlyoffice.com/workspace-enterprise-prices.aspx"
                  className="nav_2nd_menu_link"
                >
                  Talk
                </Link>
                <Link
                  href="https://onlyoffice.com/workspace-enterprise-prices.aspx"
                  className="nav_2nd_menu_link"
                >
                  Personal
                </Link>
              </Box>
            </Box>
          </Box>
          <Box className="outer-box with_border">
            <Box className="pricing-box">
              <Link
                id="navitem_prices_docs"
                className="dropdown-item"
              >
                ONLYOFFICE Groups
              </Link>
              <Box className="inner-box">
                <Link
                  href="https://onlyoffice.com/docs-enterprise-prices.aspx"
                  className="nav_2nd_menu_link"
                >
                 Documents
                </Link>
                <Link
                  href="https://onlyoffice.com/developer-edition-prices.aspx"
                  className="nav_2nd_menu_link"
                >
                 People
                </Link>
                <Link
                  href="https://onlyoffice.com/saas.aspx"
                  className="nav_2nd_menu_link"
                >
                 Community
                </Link>
                <Link
                  href="https://onlyoffice.com/workspace-enterprise-prices.aspx"
                  className="nav_2nd_menu_link"
                >
                  CRM
                </Link>
                <Link
                  href="https://onlyoffice.com/docs-enterprise-prices.aspx"
                  className="nav_2nd_menu_link"
                >
                 Projects
                </Link>
                <Link
                  href="https://onlyoffice.com/developer-edition-prices.aspx"
                  className="nav_2nd_menu_link"
                >
                 Mail
                </Link>
                <Link
                  href="https://onlyoffice.com/saas.aspx"
                  className="nav_2nd_menu_link"
                >
                 Calendar
                </Link>
                <Link
                  href="https://onlyoffice.com/workspace-enterprise-prices.aspx"
                  className="nav_2nd_menu_link"
                >
                  Feed
                </Link>
              </Box>
            </Box>
          </Box>
          <Box className="outer-box">
            <Box className="pricing-box">
              <Link
                id="navitem_prices_docs"
                className="dropdown-item mobile_no_link"
              >
                ONLYOFFICE mobile apps
              </Link>
              <Box className="inner-box">
                <Link
                  href="https://onlyoffice.com/docs-enterprise-prices.aspx"
                  className="nav_2nd_menu_link"
                >
                  Documents for iOS
                </Link>
                <Link
                  href="https://onlyoffice.com/developer-edition-prices.aspx"
                  className="nav_2nd_menu_link"
                >
                  Documents for Android
                </Link>
                <Link
                  href="https://onlyoffice.com/saas.aspx"
                  className="nav_2nd_menu_link"
                >
                  Mobile web editors for iOS
                </Link>
                <Link
                  href="https://onlyoffice.com/saas.aspx"
                  className="nav_2nd_menu_link"
                >
                  Mobile web editors for Android
                </Link>
                <Link
                  href="https://onlyoffice.com/workspace-enterprise-prices.aspx"
                  className="nav_2nd_menu_link"
                >
                  Projects for iOS
                </Link>
                <Link
                  href="https://onlyoffice.com/workspace-enterprise-prices.aspx"
                  className="nav_2nd_menu_link"
                >
                  Projects for Android
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </MenuItem>

      <Link className="nav-item-logo" href="https://helpcenter.onlyoffice.com/guides/become-translator.aspx">
      <MenuItem heading="Contribution" id="navitem_contribution">
      </MenuItem>
      </Link>

      <Link className="nav-item-logo" href="https://api.onlyoffice.com/">
      <MenuItem heading="Development" id="navitem_development">
      </MenuItem>
      </Link>
    </StyledNav>
  );
};

export default Nav;
