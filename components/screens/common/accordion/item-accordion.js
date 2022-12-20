import React from "react";
import { Trans } from "next-i18next";
import Link from "@components/common/link";
import Text from "@components/common/text";

const TransAccorionItem = ({ t, currentLanguage }) => {
  const AccordionDescriptionOtherQuestionsHCLink = t("AccordionDescriptionOtherQuestionsHCLink");
  const AccordionDescriptionOtherQuestionsOODocsLink = t("AccordionDescriptionOtherQuestionsOODocsLink");
  const AccordionDescriptionOtherQuestionsOOGroupsLink = t("AccordionDescriptionOtherQuestionsOOGroupsLink");
  const AccordionDescriptionOtherQuestionsOOMailLink = t("AccordionDescriptionOtherQuestionsOOMailLink");
  const AccordionDescriptionOtherQuestionsOOTalkLink = t("AccordionDescriptionOtherQuestionsOOTalkLink");
  const AccordionDescriptionOtherQuestionsOOWorkspaceLink = t("AccordionDescriptionOtherQuestionsOOWorkspaceLink");
  const AccordionDescriptionOtherQuestionsOODesktopLink = t("AccordionDescriptionOtherQuestionsOODesktopLink");
  const AccordionDescriptionOtherQuestionsOOPricingLink = t("AccordionDescriptionOtherQuestionsOOPricingLink");
  const lng = currentLanguage === "en" ? "" : `/${currentLanguage}`
  return (
    <Text as={"p"} className="text-trans-accordion">
      <Trans
        i18nKey="AccordionDescriptionOtherQuestions"
        AccordionDescriptionOtherQuestionsHCLink={t("AccordionDescriptionOtherQuestionsHCLink")}
        AccordionDescriptionOtherQuestionsOODocsLink={t("AccordionDescriptionOtherQuestionsOODocsLink")}
        AccordionDescriptionOtherQuestionsOOGroupsLink={t("AccordionDescriptionOtherQuestionsOOGroupsLink")}
        AccordionDescriptionOtherQuestionsOOMailLink={t("AccordionDescriptionOtherQuestionsOOMailLink")}
        AccordionDescriptionOtherQuestionsOOTalkLink={t("AccordionDescriptionOtherQuestionsOOTalkLink")}
        AccordionDescriptionOtherQuestionsOOWorkspaceLink={t("AccordionDescriptionOtherQuestionsOOWorkspaceLink")}
        AccordionDescriptionOtherQuestionsOODesktopLink={t("AccordionDescriptionOtherQuestionsOODesktopLink")}
        AccordionDescriptionOtherQuestionsOOPricingLink={t("AccordionDescriptionOtherQuestionsOOPricingLink")}
      >
        You can use
        <Link
          className="link-trans-acc"
          href={`/${lng}`}
        >
          {{ AccordionDescriptionOtherQuestionsHCLink }}
        </Link>
        <Link
          className="link-trans-acc"
          href={`/${lng}/installation/docs-index.aspx`}
        >
          {{ AccordionDescriptionOtherQuestionsOODocsLink }}
        </Link>
        <Link
          className="link-trans-acc"
          href={`/${lng}/faq/server-opensource.aspx`}
        >
          {{ AccordionDescriptionOtherQuestionsOOGroupsLink }}
        </Link>
        <Link
          className="link-trans-acc"
          href={`/${lng}/installation/mail-index.aspx`}
        >
          {{ AccordionDescriptionOtherQuestionsOOMailLink }}
        </Link>
        <Link
          className="link-trans-acc"
          href={`/${lng}/installation/talk-index.aspx`}
        >
          {{ AccordionDescriptionOtherQuestionsOOTalkLink }}
        </Link>
        <Link
          className="link-trans-acc"
          href={`/${lng}/faq/server-enterprise.aspx`}
        >
          {{ AccordionDescriptionOtherQuestionsOOWorkspaceLink }}
        </Link>
        <Link
          className="link-trans-acc"
          href={`/${lng}/installation/desktop-index.aspx`}
        >
          {{ AccordionDescriptionOtherQuestionsOODesktopLink }}
        </Link>
        <Link
          className="link-trans-acc"
          href={`/${lng}/faq/pricing.aspx`}
        >
          {{ AccordionDescriptionOtherQuestionsOOPricingLink }}
        </Link>
      </Trans>
    </Text>
  );
};

export default TransAccorionItem;
