import React from "react";
import { Link } from "gatsby";
import LeftMenu from "../sup-components/left-menu";
import SingleLayout from "../single-layout";
import Video from "../sup-components/video"
import Heading from "@components/common/heading";
import Text from "@components/common/text";
import { WorkspaceEnterpriseIndexItems } from "./data/video-items.js"
import LeftMenuItems from "./data/left-menu-items";

const WorkspaceEnterpriseIndexContent = ({ t, ...rest }) => {
  return (
    <SingleLayout>
      <LeftMenu t={t} items={LeftMenuItems} />
      <div className="wrapper-content">
        <Heading truncate={true} level={1}>{t("Installation Guides")}</Heading>
        <Heading truncate={true} level={2}>{t("ONLYOFFICE Workspace Enterprise Edition")}</Heading>
        <Text truncate={true} as="p">
          {t("Learn how to install, update, and configure ONLYOFFICE Workspace Enterprise Edition with corresponding control panel on Docker, Linux, and Windows.")}
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
              <li>
                <Link to="/installation/workspace-enterprise-sys-reqs-linux.aspx">{t("Linux version")}</Link>
              </li>
              <li>
                <Link to="/installation/workspace-enterprise-sys-reqs-windows.aspx">{t("Windows version")}</Link>
              </li>
            </ul>
          </li>
          <li>
            <Heading truncate={true} level={6}>{t("Installing")}</Heading>
            <ul>
              <li>
                {t("Docker version")}
                <ul>
                  <li>
                    <Link to="/installation/workspace-enterprise-install-docker.aspx">{t("Installing ONLYOFFICE Workspace Enterprise Edition using the provided script")}</Link>
                  </li>
                  <li>
                    <Link to="/installation/workspace-enterprise-install-separately-docker.aspx">{t("Installing ONLYOFFICE Workspace Enterprise Edition components on separate servers")}</Link>
                  </li>
                  <li>
                    <Link to="/installation/workspace-enterprise-install-docker-parameters.aspx">{t("Installing ONLYOFFICE Workspace Enterprise Edition with additional script parameters")}</Link>
                  </li>
                </ul>
              </li>
              <li>
                {t("Linux version")}
                <ul>
                  <li>
                    <Link to="/installation/workspace-enterprise-install-linux.aspx">{t("Installing ONLYOFFICE Workspace Enterprise Edition from RPM/DEB packages using the provided script")}</Link>
                  </li>
                </ul>
              </li>
              <li>
                {t("Windows version")}
                <ul>
                  <li>
                    <Link to="/installation/workspace-enterprise-install-windows.aspx">{t("Installing ONLYOFFICE Workspace Enterprise Edition for Windows on a local server")}</Link>
                  </li>
                </ul>
              </li>
              <li>
                {t("Amazon")}
                <ul>
                  <li>
                    <Link to="/installation/workspace-enterprise-install-ami.aspx">{t("Deploying ONLYOFFICE Workspace Enterprise Edition using AMI")}</Link>
                  </li>
                </ul>
              </li>
              <li>
                {t("Alibaba Cloud")}
                <ul>
                  <li>
                    <Link to="/installation/workspace-enterprise-install-alibaba.aspx">{t("Deploying ONLYOFFICE Workspace Enterprise Edition on Alibaba Cloud")}</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Heading truncate={true} level={6}>{t("Configuring")}</Heading>
                <ul>
                  <li>
                    <Link to="/installation/workspace-configure-webdav.aspx">{t("Configuring ONLYOFFICE WebDAV server")}</Link>
                  </li>
                  <li>
                    {t("Docker version")}
                    <ul>
                      <li>
                        <Link to="/installation/workspace-enterprise-migrate-from-exchange.aspx">{t("Migrating MS Exchange data to ONLYOFFICE")}</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    {t("Linux version")}
                    <ul>
                      <li>
                        <Link to="/installation/workspace-enterprise-https-linux.aspx">{t("Switching to HTTPS when installing from RPM/DEB packages")}</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    {t("Windows version")}
                    <ul>
                      <li>
                        <Link to="/installation/workspace-enterprise-https-windows.aspx">{t("Switching to HTTPS for the Windows version")}</Link>
                      </li>
                      <li>
                        <Link to="/installation/workspace-enterprise-update-windows.aspx">{t("Updating ONLYOFFICE Workspace Enterprise Edition to the latest version")}</Link>
                      </li>
                    </ul>
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
      <Video t={t} items={WorkspaceEnterpriseIndexItems} />
    </SingleLayout>
  );
};

export default WorkspaceEnterpriseIndexContent;