import { Trans } from "next-i18next";
import { AccordionItem } from "@components/common/accordion";
import StyledAccordionContent from "./styled-accordion-content";
import Heading from "@components/common/heading";
import Link from "@components/common/external-link";
import Text from "@components/common/text";
import TransAccorionItem from "./item-accordion";

const AccordionContent = ({ t, locale }) => {
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
      <div>
        <Heading className="title-accordion" level={3}>
          {t("Frequently Asked Questions")}
        </Heading>
        <AccordionItem heading={t("AccordionHeadingOOLicense")}>
          {AccordionDescriptionOOLicense}
        </AccordionItem>
        <AccordionItem heading={t("AccordionHeadingRequestAssistance")}>
          {AccordionDescriptionRequestAssistance}
        </AccordionItem>
        <AccordionItem heading={t("AccordionHeadingOtherQuestions")}>
          <TransAccorionItem locale={locale} t={t} />
        </AccordionItem>
        <AccordionItem heading={t("AccordionHeadingIntegrateOO")}>
          {/* {AccordionDescriptionIntegrateOO} */}
        </AccordionItem>
        <AccordionItem heading={t("AccordionHeadingContributeOO")}>
          {/* {AccordionDescriptionContributeOO} */}
        </AccordionItem>
      </div>
    </StyledAccordionContent>
  );
};

export default AccordionContent;
