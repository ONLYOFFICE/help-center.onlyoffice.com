import React from "react";
import { Link } from "gatsby";
import LeftMenu from "../sup-components/left-menu";
import SingleLayout from "../single-layout";
import Video from "../sup-components/video"
import Heading from "@components/common/heading";
import Text from "@components/common/text";
import { WorkspaceCommunityIndexItems } from "./data/video-items.js"
import LeftMenuItems from "./data/left-menu-items";

const WorkspaceCommunityIndexContent = ({ t, ...rest }) => {
  return (
    <SingleLayout>
      <LeftMenu t={t} items={LeftMenuItems} />
      <div className="wrapper-content">
        <Heading truncate={true} level={1}>{t("Installation Guides")}</Heading>
        <Heading truncate={true} level={2}>{t("ONLYOFFICE Workspace")}</Heading>
        <Text truncate={true} as="p">
          {t("Learn how to install, update, and configure ONLYOFFICE Workspace with corresponding control panel on Docker, Linux, and Windows.")}
        </Text>
        <ul>
          <li>
            <Heading truncate={true} level={6}>
              <Link to="/installation/workspace-changelog.aspx">{t("Changelog")}</Link>
            </Heading>
          </li>
          <li>
            <Heading truncate={true} level={6}>{t("System requirements")}</Heading>
            <ul>
              <li>
                <Link to="/installation/workspace-sys-reqs-docker.aspx">{t("Docker version")}</Link>
              </li>
            </ul>
          </li>
          <li>
            <Heading truncate={true} level={6}>{t("Installing")}</Heading>
            <ul>
              <li>
                Docker version
                <ul>
                  <li>
                    <Link to="/installation/workspace-install-docker.aspx">{t("Installing ONLYOFFICE Workspace using the provided script")}</Link>
                  </li>
                  <li>
                    <Link to="/installation/workspace-install-docker-parameters.aspx">{t("Installing ONLYOFFICE Workspace with additional script parameters")}</Link>
                  </li>
                  <li>
                    <Link to="/installation/workspace-install-docker-compose.aspx">{t("Installing ONLYOFFICE Workspace using Docker Compose")}</Link>
                  </li>
                  <li>
                    <Link to="/installation/workspace-install-docker-integrated.aspx">{t("Installing all ONLYOFFICE Workspace components integrated")}</Link>
                  </li>
                </ul>
              </li>
              <li>
                {t("Linux version")}
                <ul>
                  <li>
                    <Link to="/installation/workspace-install-linux.aspx">{t("Installing ONLYOFFICE Workspace from RPM/DEB packages using the provided script")}</Link>
                  </li>
                </ul>
              </li>
              <li>
                {t("Windows version")}
                <ul>
                  <li>
                    <Link to="/installation/workspace-install-windows.aspx">{t("Installing ONLYOFFICE Workspace for Windows on a local server")}</Link>
                  </li>
                </ul>
              </li>
              <li>
                {t("1-Click Apps")}
                <ul>
                  <li>
                    <Link to="/installation/workspace-install-digitalocean.aspx">{t("Deploying ONLYOFFICE Workspace in DigitalOcean")}</Link>
                  </li>
                  <li>
                    <Link to="/installation/workspace-install-vultr.aspx">{t("Deploying ONLYOFFICE Workspace in Vultr")}</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Heading truncate={true} level={6}>{t("Configuring")}</Heading>
                <ul>
                  <li>
                    <Link to="/installation/workspace-configure-webdav.aspx">{t("Configuring ONLYOFFICE WebDAV server")}</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Heading truncate={true} level={6}>{t("Migrating to ONLYOFFICE Workspace Enterprise Edition")}</Heading>
                <ul>
                  <li>
                    <Link to="/installation/workspace-migrate-to-enterprise-docker.aspx">{t("Migrating on Docker version")}</Link>
                  </li>
                  <li>
                    <Link to="/installation/workspace-migrate-to-enterprise-linux.aspx">{t("Migrating on Linux version")}</Link>
                  </li>
                  <li>
                    <Link to="/installation/workspace-migrate-to-enterprise-windows.aspx">{t("Migrating on Windows version")}</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <Heading truncate={true} level={2}>
          <Link to="/faq/faq.aspx">{t("FAQ")}</Link>
        </Heading>
      </div>
      <Video t={t} items={WorkspaceCommunityIndexItems} />
    </SingleLayout>
  );
};

export default WorkspaceCommunityIndexContent;