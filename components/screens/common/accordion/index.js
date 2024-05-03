import React from "react";
import { Trans } from "next-i18next";

import { AccordionItem } from "@components/common/accordion";

import StyledAccordionContent from "./styled-accordion-content";
import Section from "../section";
import Heading from "@components/common/heading";
import Link from "@components/common/link";
import Text from "@components/common/text";
import TransAccorionItem from "./item-accordion";

const AccordionContent = ({ t, currentLanguage }) => {
  const AccordionDescriptionOOLicenseLink = t(
    "AccordionDescriptionOOLicenseLink"
  );
  const AccordionDescriptionOOLicense = (
    <Text as={"p"} className="text-trans-accordion">
      <Trans
        i18nKey="AccordionDescriptionOOLicense"
        AccordionDescriptionOOLicenseLink={t(
          "AccordionDescriptionOOLicenseLink"
        )}
      >
        ONLYOFFICE offers free and open source 
        <Link
          display="contents"
          className="link-trans-acc"
          href="https://www.onlyoffice.com/legalterms.aspx"
        >
          {{ AccordionDescriptionOOLicenseLink }}
        </Link>
      </Trans>
    </Text>
  );

  const AccordionDescriptionCommunityEnterpriseDifferenceLink = t(
    "AccordionDescriptionCommunityEnterpriseDifferenceLink"
  );
  const AccordionDescriptionCommunityEnterpriseDifference = (
    <Text as={"p"} className="text-trans-accordion">
      <Trans
        i18nKey="AccordionDescriptionCommunityEnterpriseDifference"
        AccordionDescriptionCommunityEnterpriseDifferenceLink={t(
          "AccordionDescriptionCommunityEnterpriseDifferenceLink"
        )}
      >
        Enterprise Edition has the same features
        <Link
          display="contents"
          className="link-trans-acc"
          href="https://www.onlyoffice.com/compare-server-editions.aspx"
        >
          {{ AccordionDescriptionCommunityEnterpriseDifferenceLink }}
        </Link>
      </Trans>
    </Text>
  );

  const AccordionDescriptionUpgradeCommunityToEnterpriseDocsLink = t(
    "AccordionDescriptionUpgradeCommunityToEnterpriseDocsLink"
  );
  const AccordionDescriptionUpgradeCommunityToEnterpriseWorkspaceLink = t(
    "AccordionDescriptionUpgradeCommunityToEnterpriseWorkspaceLink"
  );
  const AccordionDescriptionUpgradeCommunityToEnterprise = (
    <Text as={"p"} className="text-trans-accordion">
      <Trans
        i18nKey="AccordionDescriptionUpgradeCommunityToEnterprise"
        AccordionDescriptionUpgradeCommunityToEnterpriseDocsLink={t(
          "AccordionDescriptionUpgradeCommunityToEnterpriseDocsLink"
        )}
        AccordionDescriptionUpgradeCommunityToEnterpriseWorkspaceLink={t(
          "AccordionDescriptionUpgradeCommunityToEnterpriseWorkspaceLink"
        )}
      >
        Find more information here: for 
        <Link
          display="contents"
          className="link-trans-acc"
          href="https://helpcenter.onlyoffice.com/installation/docs-enterprise-index.aspx"
        >
          {{ AccordionDescriptionUpgradeCommunityToEnterpriseDocsLink }}
        </Link>
        <Link
          display="contents"
          className="link-trans-acc"
          href="https://helpcenter.onlyoffice.com/installation/workspace-enterprise-index.aspx"
        >
          {{ AccordionDescriptionUpgradeCommunityToEnterpriseWorkspaceLink }}
        </Link>
      </Trans>
    </Text>
  );

  const AccordionDescriptionRequestAssistanceForumLink = t(
    "AccordionDescriptionRequestAssistanceForumLink"
  );
  const AccordionDescriptionRequestAssistanceSupportLink = t(
    "AccordionDescriptionRequestAssistanceSupportLink"
  );
  const AccordionDescriptionRequestAssistance = (
    <Text as={"p"} className="text-trans-accordion">
      <Trans
        i18nKey="AccordionDescriptionRequestAssistance"
        AccordionDescriptionRequestAssistanceForumLink={t(
          "AccordionDescriptionRequestAssistanceForumLink"
        )}
        AccordionDescriptionRequestAssistanceSupportLink={t(
          "AccordionDescriptionRequestAssistanceSupportLink"
        )}
      >
       Home users can ask for help
        <Link
          display="contents"
          className="link-trans-acc"
          href="https://forum.onlyoffice.com/"
        >
          {{ AccordionDescriptionRequestAssistanceForumLink }}
        </Link>
        <Link
          display="contents"
          className="link-trans-acc"
          href="https://www.onlyoffice.com/support.aspx"
        >
          {{ AccordionDescriptionRequestAssistanceSupportLink }}
        </Link>
      </Trans>
    </Text>
  );

  return (
    <StyledAccordionContent>
      <Section
        background="#FFFFFF"
        padding="0px 0 112px"
        tabletPadding="0px 0 88px"
        mobileLPadding="0px 0 48px"
      >
        <Heading className="titleAccordion" level={3}>
          {t("Frequently Asked Questions")}
        </Heading>
        <AccordionItem heading={t("AccordionHeadingOOLicense")}>
          {AccordionDescriptionOOLicense}
        </AccordionItem>
        <AccordionItem heading={t("AccordionHeadingCommunityEnterpriseDifference")}>
          {AccordionDescriptionCommunityEnterpriseDifference}
        </AccordionItem>
        <AccordionItem heading={t("AccordionHeadingUpgradeCommunityToEnterprise")}>
          {AccordionDescriptionUpgradeCommunityToEnterprise}
        </AccordionItem>
        <AccordionItem heading={t("AccordionHeadingRequestAssistance")}>
          {AccordionDescriptionRequestAssistance}
        </AccordionItem>
        <AccordionItem heading={t("AccordionHeadingOtherQuestions")}>
          <TransAccorionItem currentLanguage={currentLanguage} t={t} />
        </AccordionItem>
      </Section>
    </StyledAccordionContent>
  );
};

export default AccordionContent;
