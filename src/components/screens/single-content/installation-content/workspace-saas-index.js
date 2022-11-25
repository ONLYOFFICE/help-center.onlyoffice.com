import React from "react";
import { Link } from "gatsby";
import LeftMenu from "../sup-components/left-menu";
import SingleLayout from "../single-layout";
import Video from "../sup-components/video"
import Heading from "@components/common/heading";
import Text from "@components/common/text";
import { WorkspaceSaasIndexItems } from "./data/video-items.js"
import LeftMenuItems from "./data/left-menu-items";

const WorkspaceSassIndexContent = ({ t, ...rest }) => {
  return (
    <SingleLayout>
      <LeftMenu t={t} items={LeftMenuItems} />
      <div className="wrapper-content">
        <Heading truncate={true} level={1}>{t("Installation Guides")}</Heading>
        <Heading truncate={true} level={2}>{t("ONLYOFFICE Workspace Cloud Service (SaaS version)")}</Heading>
        <Text truncate={true} as="p">
          {t("Learn how to create and configure ONLYOFFICE Workspace in the cloud.")}
        </Text>
        <ul>
          <li>
            <Heading truncate={true} level={6}>{t("Portal creation")}</Heading>
            <ul>
              <li>
                <Link to="/installation/workspace-saas-registration-form.aspx">{t("How to create your own portal?")}</Link>
              </li>
              <li>
                <Link to="/administration.aspx">{t("Configuring portal settings")}</Link>
              </li>
            </ul>
          </li>
          <li>
            <Heading truncate={true} level={6}>{t("Payment")}</Heading>
            <ul>
              <li>
                <Link to="/installation/workspace-saas-pay-for-portal.aspx">{t("How to pay for your portal?")}</Link>
              </li>
              <li>
                <Link to="/installation/workspace-saas-change-payment-plan.aspx">{t("How to change a pricing plan?")}</Link>
              </li>
            </ul>
          </li>
        </ul>
        <Heading truncate={true} level={2}>
          <Link to="/faq/faq.aspx">FAQ</Link>
        </Heading>
      </div>
      <Video t={t} items={WorkspaceSaasIndexItems} />
    </SingleLayout>
  );
};

export default WorkspaceSassIndexContent;